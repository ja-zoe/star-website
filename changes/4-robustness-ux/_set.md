# Revision Set 4 — Robustness & UX gaps

Bootstrap: read `changes/CONTEXT.md` first. Set 4 is stacked on set 3 (branch
`feat/set4-robustness-ux` cut from `feat/set3-design-polish`).

Fresh audit (2026-06-29, after sets 1–3) found:
- **No catch-all route.** `/does-not-exist` renders an empty `<main>` (blank page inside the
  navbar/footer chrome); the Apache SPA fallback sends every unknown path to index.html, so any
  typo'd/old URL = blank. Measured: `main` innerText empty, title stays home default.
- **No skip-to-content link.** Keyboard/AT users tab through the whole nav on every page.
- **Dead "About the Project" CTAs.** On all 3 project pages the pill is a `<p>` with
  `cursor-pointer` — looks like a button, does nothing. Plus a "TThe" typo on RoboticsPage.
- (No horizontal overflow at 390px on any route — mobile layout is sound; no action.)

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R4.1 — 404 NotFound route — catch-all route + on-brand NotFound page (Seo + link home)
- [x] R4.2 — Skip-to-content link — visible-on-focus skip link to <main>
- [x] R4.3 — Functional project CTAs — make "About the Project" scroll to the description; fix "TThe"

## Open questions / decisions before implementing
None. Decisions recorded per feature.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 4 scaffolded. Stacked on set 3.
- 2026-06-29 — R4.1–R4.3 implemented, tested, merged into feat/set4-robustness-ux. Set 4
  COMPLETE (green). Outcomes: unknown URLs now show an on-brand 404 (was blank); skip-to-content
  link (WCAG 2.4.1); the 3 dead "About the Project" pills are now working anchors + "TThe" typo
  fixed. Final build clean; all routes + 404 boot with correct titles. NOT merged to main.
