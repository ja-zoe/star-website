# Revision Set 19 — P1 experience and performance

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 19. Per-feature specs live in the
sibling `R19.*` files; load only the feature(s) you are working on.

Source: the ten findings under "P1 — high-impact next sprint" in the 2026-08-28
UI/UX and feature audit. Set 19 starts from deployed P0 commit `a4d8ffe`.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R19.1 — Stable, efficient runtime — eliminate route CLS and reduce continuous canvas/JS cost
- [t] R19.2 — Home information hierarchy — rebuild the recruiting sequence, semantic headings, and vertical rhythm
- [ ] R19.3 — Interaction accessibility — repair focus semantics, touch targets, dialogs, and mobile navigation labels
- [ ] R19.4 — Current information and partner credibility — add dated logistics fallbacks and relationship labels
- [ ] R19.5 — Green quality gate — resolve all repository-wide ESLint errors and warnings

## Open questions / decisions before implementing
1. **Meeting logistics:** RESOLVED for implementation — no authoritative STAR
   Fall 2026 date/time/exact room exists in the vault, repository, Rutgers
   getINVOLVED listing, or discoverable public sources. Use a dated, explicit
   schedule-pending state with The Cage as the usual location and email/Discord
   confirmation paths. Never invent a meeting.
2. **Latest update:** no dated project update feed exists. Use the three existing
   project status statements as a "Current missions" snapshot, labeled last
   updated 2026-08-29, rather than fabricating milestones or event results.

## DB changes in this set
None. (Static SPA; current information is a typed local content module.)

## Log
- 2026-08-29 — Set 19 scaffolded from deployed `main` on `feat/set19-p1-experience-performance`.
- 2026-08-29 — R19.1 verification passed: production build, focused lint,
  CLS 0.00, single shooting-star layer, responsive canvas density, and static
  reduced-motion/offscreen behavior.
- 2026-08-29 — R19.1 merged into the Set 19 integration branch.
- 2026-08-29 — R19.2 verification passed: visible semantic hierarchy,
  project-first sequence, 27% shorter desktop page, 42% shorter mobile page,
  compact footer, no mobile overflow, and reviewed production screenshots.
