# Revision Set 6 — Heading semantics & lazy globe

Bootstrap: read `changes/CONTEXT.md` first. Set 6 is stacked on set 5 (branch
`feat/set6-semantics-perf` cut from `feat/set5-seo-host-opt`).

Fresh audit (2026-06-29, after sets 1–5):
- **No `<h1>` on any route.** Home has h2/h3 (ProjectCard titles + accordion) but no h1; the
  big section titles (WELCOME, OUR PROJECTS…) are decorative SVG (TextHoverEffect), not
  headings. **Project pages have ZERO heading elements** — "Robotics"/"Subteams"/"Meeting
  times" are styled `<p>`. SEO + a11y (document outline / 2.4.6) gap.
- The home **globe** (cobe WebGL) mounts and runs its render loop on page load even though it
  sits far below the fold — startup cost for content many users never scroll to.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [x] R6.1 — Heading semantics — h1 per page + h2 section titles (no visual change)
- [x] R6.2 — Lazy-mount globe — IntersectionObserver: init cobe only when scrolled near viewport

## Open questions / decisions before implementing
None. Home keeps its SVG visual titles; a visually-hidden `<h1>` gives SEO/AT the top heading
without altering the design. Project-page `<p>` titles become real headings with identical
classes (zero visual change).

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 6 scaffolded. Stacked on set 5.
- 2026-06-29 — R6.1–R6.2 implemented, tested, merged into feat/set6-semantics-perf. Set 6
  COMPLETE (green). Outcomes: every route now has exactly one <h1> + h2 section structure
  (project pages went from 0 headings to a full outline); the home globe defers WebGL init until
  scrolled near (IntersectionObserver). Build clean; all routes + 404 boot with correct titles
  and single h1. NOT merged to main.
