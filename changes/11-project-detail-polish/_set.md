# Revision Set 11 — Project detail polish (home cards + subteam modals)

Bootstrap: read `changes/CONTEXT.md` + `design/tokens.md` (Project signature accents) +
`design/components.md` (Project page kit). Branch `feat/set11-project-detail-polish` off main.

Two user-requested changes after the set-10 project-page redesign:
1. The home "Our Projects" cards (ProjectCard + CanvasRevealEffect) don't reflect the new
   per-project accents — on hover all three reveal a red `#9D2626` wash, and CubeSat's reveal
   dots are `[0,0,0]` (invisible). They should match each project page's accent.
2. The subteam modal (opened from a subteam card) is a wall of templated text with no visual
   design, and the copy reads AI-generated.

This set is **planned only** (specs below) — no code until the user approves.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R11.1 — Home project-card accent theming — cards reflect per-project accent on hover
- [ ] R11.2 — Subteam modal redesign + copy rewrite — designed layout + de-AI'd, tightened copy

## Open questions / decisions before implementing
RESOLVED 2026-06-29 — User: de-AI the voice now using current factual scope (no invented
specifics; real per-subteam details can be folded in later). Implement R11.1 + R11.2 now,
show screenshots before merging to main.

## DB changes in this set
None (static site).

## Log
- 2026-06-29 — Set 11 scaffolded (plan only) off main. Awaiting approval to implement.
