# R20.10 notes / log

- 2026-08-31 — Built an isolated, lazy, noindex comparison route with three complete hero
  compositions: a routed SVG mission board, mission-specific SVG flight instrument, and custom
  deterministic canvas constellation. All concepts share the production hero proportions, copy,
  and accessible project controls while keeping their interaction and visual language distinct.
- 2026-08-31 — Added viewport, document-visibility, and user/system motion lifecycle controls.
  Continuous rendering stops when inactive; the constellation caps rendering at 30 fps and 1.5 DPR.
- 2026-08-31 — Playwright verified project hover/focus/tap behavior and accent routing across all
  nine states, keyboard focus visibility, semantic labels, noindex metadata, lazy bundle isolation,
  zero horizontal overflow at 1440x900 and 390x844, zero CLS, and zero lab console errors or
  warnings. Reviewed captures are stored in `screenshots/`.
- 2026-08-31 — `pnpm lint`, `pnpm build`, and `git diff --check` passed. The existing production
  `HeroSection` and `ExplodedCubeSat` were not modified.
- 2026-08-31 — Merged `feat/set20/R20.10-hero-visual-comparison` into
  `feat/set20-visual-direction-lab` after the feature test scheme passed.
