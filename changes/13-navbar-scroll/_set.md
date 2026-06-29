# Revision Set 13 — Scroll-aware navbar underlay

Bootstrap: read `changes/CONTEXT.md` + `design/components.md` (Navigation bar). Branch
`feat/set13-navbar-scroll` off main.

User request: the fixed navbar is fully transparent and clashes with page content/text it
overlaps as you scroll. Keep the transparent look but add a solid underlay when content clashes.
Decision (recorded in design spec): true per-pixel clash detection is fragile/expensive; instead
the navbar stays transparent at the very top (over the hero) and fades in a solid blurred
underlay once scrolled — which is exactly when content slides under the bar. Implemented
autonomously (no questions, per the user).

## Status
- [t] R13.1 — Scroll-aware navbar — transparent at top, solid blurred underlay fades in on scroll

## Open questions / decisions
None — implemented autonomously. Alternatives considered (per-pixel detection, always-on gradient
scrim) recorded in R13.1.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 13 scaffolded off main; design spec re-resolved (scroll-aware navbar).
