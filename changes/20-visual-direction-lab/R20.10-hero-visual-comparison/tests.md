# R20.10 test scheme

- [x] `pnpm lint` and `pnpm build` pass.
- [x] `/design-lab/hero-visuals` lazy-loads, is noindex, and does not change the production home.
- [x] All three concepts render at 1440x900 and 390x844 without clipping or horizontal overflow.
- [x] Every concept responds distinctly to all three project pointer, focus, and tap controls.
- [x] Circuit routes, flight geometry, and constellation signals use the correct project accents.
- [x] Motion-off and emulated reduced-motion states are static and remain visually complete.
- [x] Continuous work stops offscreen and while the document is hidden; the canvas stays within its
  30 fps and 1.5 DPR budgets.
- [x] Keyboard order, focus visibility, semantic labels, browser console, and CLS remain clean.
- [x] Desktop and mobile screenshots for each option are reviewed and stored with the feature.
