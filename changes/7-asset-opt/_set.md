# Revision Set 7 — Favicon & social-share asset optimization

Bootstrap: read `changes/CONTEXT.md` first. Set 7 is stacked on set 6 (branch
`feat/set7-asset-opt` cut from `feat/set6-semantics-perf`).

Fresh audit (2026-06-29, after sets 1–6):
- **Favicon is `star-logo-transparent.png` — 747×737, 192 KB** — referenced as the icon,
  apple-touch-icon, and both manifest icons, so every visitor downloads ~192 KB just for the
  tab icon. A 32–512px optimized set would be a few KB.
- **og:image / twitter:image is `star-image.png` (404×292, 51 KB)** — non-standard size for
  social cards (recommended 1200×630); shares render small/cropped.

Both fixable build-time via the existing `sharp` tooling (devDep) → committed static assets.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R7.1 — Optimized favicons — generate small favicon-32/192/512 from the logo; repoint icon links + manifest
- [x] R7.2 — Social share image — generate 1200×630 og-image.png (logo on black); repoint OG/Twitter image meta

## Open questions / decisions before implementing
None. Reuse the existing star logo as the source; generate optimized derivatives via sharp
(extend scripts/optimize-images.mjs). Keep the original PNG in public/ (still used elsewhere).

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 7 scaffolded. Stacked on set 6.
- 2026-06-29 — R7.1–R7.2 implemented, tested, merged into feat/set7-asset-opt. Set 7 COMPLETE
  (green). Outcomes: per-visit favicon 192 KB → 1.5 KB (+192/512 PWA icons); proper 1200×630
  on-brand OG/Twitter share card. Build clean. NOT merged to main.
