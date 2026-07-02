# Revision Set 14 — E-board roster + CubeSat lead refresh

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 14. Per-feature specs live in the
sibling `R14.*` files; load only the feature(s) you are working on.

User request: update the home-page e-board section to the new 2026–27 roster (three new
members have no photos yet — show a person icon placeholder; never display Discord
usernames), and update two CubeSat subteam leads (FSW, Payload). Small content changes.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [~] R14.1 — E-board roster — new positions/members, person-icon placeholder for photo-less members
- [ ] R14.2 — CubeSat leads — FSW lead → Seth Caskey, Payload lead → Christian Metchenko

## Open questions / decisions before implementing
None — roster and leads were given explicitly by the user; decisions (display order,
placeholder icon, unused-asset removal) are recorded in the feature specs with rationale.

## DB changes in this set
None.

## Log
- 2026-07-02 — Set 14 scaffolded off main (`feat/set14-roster-update`).
