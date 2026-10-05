/**
 * One-shot, dev-only image optimizer. NOT wired into `pnpm build`; run manually
 * with `pnpm optimize:images` and commit the generated files. The deployed app
 * stays a pure static SPA (sharp is a devDependency, never imported at runtime).
 *
 * Portraits: full-res sources live in scripts/source-images/<person-id>.jpg (OUTSIDE
 * public/, so they are not deployed). Each is cropped to the same 4:5 head-and-shoulders
 * frame from a hand-measured face box, then written to public/people/<person-id>.webp,
 * so every card and avatar can use one CSS rule. Retired sources sit in
 * scripts/source-images/retired/ and are not regenerated.
 *
 * Adding a portrait: put the JPEG at scripts/source-images/<person-id>.jpg, add an entry
 * to PORTRAITS with its face box (fractions of the source: face center x, top of head,
 * chin), run this script, check the contact sheet it prints the path of, and set `photo`
 * on the person in src/content/people.ts.
 *
 * iPhone HEIC sources: sharp cannot decode HEVC HEIC, and libheif before ~1.18 rejects
 * iOS 18+ files (the `tmap` gain-map brand). Convert outside the repo with pillow-heif
 * (pip, bundles a current libheif) to a quality-95 JPEG that keeps the ICC profile
 * (iPhones shoot Display P3; sharp converts it to sRGB here) and drops EXIF (rotation is
 * already applied to the pixels, and EXIF can carry GPS).
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir, readdir, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "source-images");
const publicDir = join(__dirname, "..", "public");
const outDir = join(publicDir, "people");
const iconsDir = join(publicDir, "icons");
const LOGO = join(publicDir, "star-logo-transparent.png");

// Face boxes as fractions of the source: x = face center, top = top of head (hair or
// cap), chin = bottom of chin.
const PORTRAITS = [
  { id: "kanika-syal", face: { x: 0.47, top: 0.296, chin: 0.487 } },
  { id: "praneeth-damarla", face: { x: 0.56, top: 0.09, chin: 0.41 } },
  { id: "sasho-petrov", face: { x: 0.47, top: 0.15, chin: 0.41 } },
  { id: "nila-anbumani", face: { x: 0.495, top: 0.209, chin: 0.464 } },
  { id: "aayushi-mallik", face: { x: 0.5, top: 0.211, chin: 0.451 } },
  { id: "julian-vilfort", face: { x: 0.56, top: 0.08, chin: 0.37 } },
  { id: "natalia-rabinovich", face: { x: 0.48, top: 0.181, chin: 0.408 } },
  { id: "jordan-gopez", face: { x: 0.48, top: 0.16, chin: 0.43 } },
  { id: "thomas-kamyszek", face: { x: 0.49, top: 0.2, chin: 0.45 } },
];

// Output frame: 4:5, sharp at 2x DPR for the largest card (~300 CSS px wide).
const WIDTH = 720;
const HEIGHT = 900;
const QUALITY = 78;
// Where the face lands in the output, as fractions of its height.
const HEAD_TOP = 0.14;
const HEAD_HEIGHT = 0.36;

function fmt(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

// Generate small, optimized favicon/PWA icons from the (oversized) source logo.
async function generateIcons() {
  await mkdir(iconsDir, { recursive: true });
  const sizes = [
    ["favicon-32.png", 32],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ];
  console.log("\nIcons:");
  for (const [name, size] of sizes) {
    const dest = join(iconsDir, name);
    await sharp(LOGO)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toFile(dest);
    console.log(`  ${name.padEnd(16)} -> ${fmt((await stat(dest)).size)}`);
  }
}

// Generate a 1200×630 social-share card: the logo centered on a black canvas.
async function generateOgImage() {
  const dest = join(publicDir, "og-image.png");
  const W = 1200;
  const H = 630;
  const logo = await sharp(LOGO)
    .resize(520, 520, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();
  await sharp({
    create: { width: W, height: H, channels: 4, background: "#000000" },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(dest);
  console.log(`\nog-image.png (${W}x${H}) -> ${fmt((await stat(dest)).size)}`);
}

// All portraits side by side with guide lines at the target head top and chin, for
// checking that faces line up.
async function contactSheet(files) {
  const w = 180;
  const h = 225;
  const guides = Buffer.from(
    `<svg width="${w}" height="${h}">` +
      [HEAD_TOP, HEAD_TOP + HEAD_HEIGHT]
        .map((f) => `<line x1="0" x2="${w}" y1="${f * h}" y2="${f * h}" stroke="red"/>`)
        .join("") +
      `<line x1="${w / 2}" x2="${w / 2}" y1="0" y2="${h}" stroke="red" stroke-opacity="0.4"/></svg>`,
  );
  const tiles = await Promise.all(
    files.map(async (file, i) => ({
      input: await sharp(file).resize(w, h).composite([{ input: guides }]).toBuffer(),
      left: i * (w + 6),
      top: 0,
    })),
  );
  const dest = join(tmpdir(), "star-portraits-contact.png");
  await sharp({
    create: { width: files.length * (w + 6) - 6, height: h, channels: 3, background: "#ffffff" },
  })
    .composite(tiles)
    .png()
    .toFile(dest);
  return dest;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  let totalIn = 0;
  let totalOut = 0;

  const sheet = [];
  for (const { id, face } of PORTRAITS) {
    const src = join(srcDir, `${id}.jpg`);
    const dest = join(outDir, `${id}.webp`);
    const inSize = (await stat(src)).size;
    const { width: srcW, height: srcH } = await sharp(src).metadata();

    // Size the crop so the head fills HEAD_HEIGHT of it, then clamp inside the source
    // (shrinking only if the frame would be larger than the photo).
    const headPx = (face.chin - face.top) * srcH;
    let cropH = Math.min(headPx / HEAD_HEIGHT, srcH, srcW / (WIDTH / HEIGHT));
    let cropW = cropH * (WIDTH / HEIGHT);
    const clamp = (v, max) => Math.round(Math.min(Math.max(v, 0), max));
    const left = clamp(face.x * srcW - cropW / 2, srcW - cropW);
    const top = clamp(face.top * srcH - HEAD_TOP * cropH, srcH - cropH);
    cropW = Math.round(cropW);
    cropH = Math.round(cropH);

    await sharp(src)
      .extract({ left, top, width: cropW, height: cropH })
      .resize(WIDTH, HEIGHT)
      .webp({ quality: QUALITY })
      .toFile(dest);

    const outSize = (await stat(dest)).size;
    totalIn += inSize;
    totalOut += outSize;
    sheet.push(dest);
    console.log(`${id.padEnd(20)} ${fmt(inSize).padStart(9)} -> ${fmt(outSize).padStart(8)}`);
  }

  console.log("-".repeat(40));
  console.log(`${"TOTAL".padEnd(20)} ${fmt(totalIn).padStart(9)} -> ${fmt(totalOut).padStart(8)}`);
  const written = (await readdir(outDir)).filter((f) => f.endsWith(".webp"));
  if (written.length !== PORTRAITS.length) {
    console.warn(`Expected ${PORTRAITS.length} webp files in ${outDir}, found ${written.length}`);
  }
  console.log(`Contact sheet: ${await contactSheet(sheet)}`);

  await generateIcons();
  await generateOgImage();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
