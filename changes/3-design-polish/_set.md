# Revision Set 3 — Design system & polish

Bootstrap: read `changes/CONTEXT.md` first. Set 3 is stacked on set 2 (branch
`feat/set3-design-polish` cut from `feat/set2-performance`).

Goal: formalize the existing dark-space visual identity into a versioned `design/` system
(design-brand skill, auto-detect baseline), then make two evidence-backed polish fixes that
resolve against it. Refine the established look — do not reinvent it.

Evidence: design-brand skill at `.claude/skills/design-brand/`. Audit logged a real
correctness/visual defect: TextHoverEffect emits 10 console errors per home load
(`<radialGradient> cx/cy "undefined"`). Keyboard focus states are mostly browser-default /
missing on custom controls.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R3.1 — Establish design/ system — config + tokens/brand/components/accessibility (auto-detected baseline)
- [ ] R3.2 — Fix TextHoverEffect radialGradient console errors — 10 errors/load → 0
- [ ] R3.3 — Visible focus states — keyboard focus rings on nav/links/buttons, resolved vs accessibility.md

## Open questions / decisions before implementing
None. design-brand run in auto mode (config → autodetect → default); the detected dark/black +
white + red (#9D2626) / blue (#0091ff) / green (#03d011) accents, Space Mono type, lucide icons,
shadcn new-york + Aceternity components are treated as the baseline and formalized, not changed.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 3 scaffolded. Stacked on set 2.
