# Revision Set 16 — Payload subteam description rewrite

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 16. Per-feature specs live in the
sibling `R16.*` files; load only the feature(s) you are working on.

User request: the CubeSat Payload subteam description (shown in its `SubteamModal`)
frames the team too narrowly — testing/calibration, mechanical/electrical interfaces,
environmental survival. Rewrite it around what Payload actually owns: running the
fuel-slosh-in-microgravity experiment end to end, including the controls algorithms
handed to ADCS and the technical architecture/strategy behind the experiment's sensors
and satellite behavior.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R16.1 — Payload description rewrite — new summary + 5 responsibilities, experiment-ops framing

## Open questions / decisions before implementing
None — user supplied the full scope breakdown (hardware, PFSW, ground software/imaging,
ADCS/architecture strategy, team structure). Exact copy is drafted in R16.1 for review
before implementation.

## DB changes in this set
None.

## Log
- 2026-07-02 — Set 16 scaffolded off main (`feat/set16-payload-description`).
- 2026-07-02 — R16.1 implemented per approved draft copy, verified in-browser, merged
  into the set branch. Set 16 COMPLETE — awaiting user approval to merge to main.
