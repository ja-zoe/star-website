# Revision Set 15 — Home page prose measure

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 15. Per-feature specs live in the
sibling `R15.*` files; load only the feature(s) you are working on.

User request: home-page text "goes out too far" — body copy spans nearly the full
viewport at desktop widths. Cap prose blocks at a comfortable reading measure.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R15.1 — Prose measure — max-width caps on About/FAQ/Join Us text blocks

## Open questions / decisions before implementing
None — verified the overflow in-browser at 1920px; widths resolved against
`design/components.md` (centered max-w column ≈ 3xl–5xl).

## DB changes in this set
None.

## Log
- 2026-07-02 — Set 15 scaffolded off main (`feat/set15-home-prose-measure`).
- 2026-07-02 — R15.1 implemented, measured/verified in-browser at 1920px and 390px,
  merged into the set branch. Set 15 COMPLETE — awaiting user approval to merge to main.
