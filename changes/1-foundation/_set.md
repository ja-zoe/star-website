# Revision Set 1 — Foundation (SEO, a11y, content, reduced-motion)

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 1. Per-feature specs live in the sibling
`R1.M-*` files; load only the feature(s) you are working on.

Evidence: `/tmp/.../scratchpad/audit/FINDINGS.md` + screenshots (audit 2026-06-29).
Baseline: dist 63 MB, JS 1.45 MB gzip 422 kB, `<title>Star</title>` on every route, 8 imgs
without alt on home, empty footer mail link, 3 console DOM errors.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R1.1 — SEO & document metadata — per-route title/description, OG/Twitter, favicon MIME, landmarks
- [t] R1.2 — Accessibility & DOM correctness — alt text, mailto, aria-labels, key prop, fix div-in-p & a-in-a
- [ ] R1.3 — Content & copy fixes — typos/grammar (aficionados, student-run, FAQ casing, sponsor tooltip)
- [ ] R1.4 — prefers-reduced-motion support — gate stars/shooting-stars/sparkles/globe/flip-words/shimmer

## Open questions / decisions before implementing
None. All design/product calls resolved autonomously and recorded in each feature's Notes/log.

## DB changes in this set
None (static site, no DB).

## Log
- 2026-06-29 — Set 1 scaffolded from audit findings. Branch feat/set1-foundation off main.
