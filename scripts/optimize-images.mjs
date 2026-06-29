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
const outDir = join(__dirname, "..", "public", "eboard");

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

async function main() {
  await mkdir(outDir, { recursive: true });
  let totalIn = 0;
  let totalOut = 0;

  for (const name of PORTRAITS) {
    const src = join(srcDir, `${name}.jpg`);
    const dest = join(outDir, `${name}.webp`);
    const inSize = (await stat(src)).size;

    await sharp(src)
      .resize(SIZE, SIZE, { fit: "cover", position: "attention" })
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
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
