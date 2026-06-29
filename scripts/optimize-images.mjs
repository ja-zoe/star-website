/**
 * One-shot, dev-only image optimizer. NOT wired into `pnpm build` — run manually
 * with `pnpm optimize:images` and commit the generated files. The deployed app
 * stays a pure static SPA (sharp is a devDependency, never imported at runtime).
 *
 * Resizes the e-board portraits (5–7 MB JPEGs displayed in 240px circles) down to
 * 640×640 WebP, collapsing ~47 MB of source imagery to under ~1 MB. The full-res
 * source JPEGs live in scripts/source-images/ (OUTSIDE public/, so they are NOT
 * deployed) and are retained purely as the regeneration source for this script.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir, readdir, stat } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "source-images");
const publicDir = join(__dirname, "..", "public");
const outDir = join(publicDir, "eboard");
const iconsDir = join(publicDir, "icons");
const LOGO = join(publicDir, "star-logo-transparent.png");

// Source portrait basenames (without extension) in public/.
const PORTRAITS = [
  "julian",
  "sandhya",
  "shilpi",
  "saarim",
  "praneeth",
  "aayushi",
  "nila",
  "kanika",
];

const SIZE = 640;
const QUALITY = 78;

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

async function main() {
  await mkdir(outDir, { recursive: true });
  let totalIn = 0;
  let totalOut = 0;

  for (const name of PORTRAITS) {
    const src = join(srcDir, `${name}.jpg`);
    const dest = join(outDir, `${name}.webp`);
    const inSize = (await stat(src)).size;

    // Downscale preserving the source aspect ratio (no crop). The EboardSection
    // CSS (object-cover + per-member objectPosition + scale-125 in a fixed 240px
    // circle) is what frames the photo — pre-cropping here would fight it and
    // throw off the centering. We only shrink the file.
    await sharp(src)
      .resize({ height: SIZE, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest);

    const outSize = (await stat(dest)).size;
    totalIn += inSize;
    totalOut += outSize;
    console.log(`${name.padEnd(10)} ${fmt(inSize).padStart(9)} -> ${fmt(outSize).padStart(8)}`);
  }

  console.log("—".repeat(34));
  console.log(`${"TOTAL".padEnd(10)} ${fmt(totalIn).padStart(9)} -> ${fmt(totalOut).padStart(8)}`);
  console.log(`\nWrote ${PORTRAITS.length} WebP files to ${outDir}`);
  // Surface any stray non-webp files for awareness.
  const written = (await readdir(outDir)).filter((f) => f.endsWith(".webp"));
  if (written.length !== PORTRAITS.length) {
    console.warn(`Expected ${PORTRAITS.length} webp files, found ${written.length}`);
  }

  await generateIcons();
  await generateOgImage();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
