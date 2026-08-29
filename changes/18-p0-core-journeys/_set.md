# Revision Set 18 — P0 core journeys

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 18. Per-feature specs live in the
sibling `R18.*` files; load only the feature(s) you are working on.

Source: `Star Website/STAR Website UI UX and Feature Audit — 2026-08-28` in the
user's Obsidian vault. Scope is the four findings under "P0 — fix before the
next public push."

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [t] R18.1 — Readable 404 — enforce the dark shell and explicit 404 contrast
- [ ] R18.2 — Always-readable project cards — expose identity, purpose, facts, and CTA without hover
- [ ] R18.3 — Reliable hash navigation — scroll after lazy route content mounts with navbar clearance
- [ ] R18.4 — Direct join flow — replace the moving Discord target with an accessible three-step panel

## Open questions / decisions before implementing
1. **Fall 2026 meeting logistics:** the audit requires a next meeting date, time,
   and exact address, but none is present in the vault or repository. Do not
   invent current logistics. Implement the audit's graceful schedule-not-finalized
   state, name The Cage as the usual location, and provide Discord plus email for
   the current details. Replace this fallback when the club publishes a schedule.

## DB changes in this set
None. (Static SPA.)

## Log
- 2026-08-28 — Set 18 scaffolded from `main` on `feat/set18-p0-core-journeys`.
