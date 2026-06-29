# Revision Set 2 — Performance

Bootstrap: read `changes/CONTEXT.md` first. Set 2 is stacked on set 1 (branch
`feat/set2-performance` cut from `feat/set1-foundation`).

Evidence (audit 2026-06-29): dist 63 MB; JS single chunk 1,448 kB gzip 423 kB; CSS 58 kB.
Only the **8 eboard JPGs (5.2–6.7 MB each, ~47 MB)** are heavy AND referenced — all on the
home page. three.js (~600 kB) is pulled into the initial bundle by `CanvasRevealEffect`
(ProjectCard hover) though it only renders on hover. Orphaned (0-ref) assets shipping in
dist: weather-balloon-launch.jpg 7.2 MB, 0g/1gSloshing.gif 2.9 MB ×2, spicesat-logo 400 KB,
space-chassis 204 KB, starLogo 140 KB, egc-logo 48 KB, star-pointer 4 KB (~13.6 MB dead).

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R2.1 — Eboard image optimization — resize + WebP the 8 portraits (~47 MB → <1 MB)
- [t] R2.2 — Code splitting — lazy-load routes + defer three.js (CanvasRevealEffect) off initial chunk
- [ ] R2.3 — Image loading discipline — loading/decoding/dimensions on portraits + sponsor logos

## Open questions / decisions before implementing
None. Decisions recorded per feature.
Orphaned assets are intentionally NOT deleted (likely staged for "coming soon" content, e.g.
the weather-balloon launch photo and CubeSat sloshing GIFs); they don't load at runtime so
they don't hurt live performance. Logged as a finding for the maintainer instead.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 2 scaffolded. Stacked on set 1.
