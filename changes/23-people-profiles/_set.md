# Revision Set 23 - People profiles

Bootstrap: read `changes/CONTEXT.md` first for project invariants.
This file is the index and roll-up log for set 23. Per-feature specs live in the
sibling `R23.*` files; load only the feature(s) you are working on.

User request (2026-10-05): add new e-board and project executive photos. Because one person
can hold several roles in the org (Kanika is President and a Robotics Mechanical lead; Thomas is
Robotics Chief Engineer and a Mechanical lead), replace the per-section name lists with **one
profile per person**, tagged with any number of roles, plus description, Discord handle, and an
optional picture. Photos exist for five people today; the goal is photos for everyone, project
leads included, over time.

New photos (iPhone HEIC from the team Google Drive, converted locally, see R23.2):

| Source file | Person | Roles |
|---|---|---|
| IMG_4660 | Sasho Petrov | Treasurer |
| IMG_4662 | Thomas Kamyszek | Robotics Chief Engineer; Robotics Mechanical lead |
| IMG_4667 | Natalia Rabinovich | CubeSat Project Manager |
| IMG_4671 | Kanika Syal | President; Robotics Mechanical lead (replaces her old photo) |
| IMG_4673 | Jordan Gopez | Robotics Project Manager (Internal) |
| (none yet) | Devon De Sanctis | Robotics Project Manager (External) |

**Supersedes set 17.** `feat/set17-project-leadership` (2026-07-06) added a project-page
"Leadership" band but was never merged, and `ProjectShell` has since been restructured (sets
18-22), so it no longer applies. Its user-confirmed roster and design decisions (red-400 ring,
band placed after Subteams, "Project Manager · Internal/External" labels) carry into R23.3,
re-sourced from the people model instead of a second name list.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [ ] R23.1 - People model: `src/content/people.ts` is the single source of names and roles; e-board grid and subteam leads derive from it (no visual change)
- [ ] R23.2 - Portraits: five new photos, id-named files under `public/people/`, consistent framing across the grid
- [ ] R23.3 - Project leadership band on each project page, derived from the model
- [ ] R23.4 - Person profile dialog: every person card opens a deep-linkable profile listing all roles

## Open questions / decisions before implementing
1. **Discord handles are public?** Set 14 recorded "never render Discord usernames". Proposed:
   the model has an optional `discord` field that renders in the profile only when set, and it
   is set only for people who agreed to show it. No handles are populated in this set.
2. **Profile surface.** Proposed: a dialog opened from any person card (home e-board grid and
   project leadership band), deep-linkable by URL hash, reusing the existing Radix dialog and
   the SubteamModal hash pattern. A dedicated `/team` page is a reasonable later step once more
   photos exist; it would reuse the same model and profile component.
3. **Set 17 roster still current?** Joseph Field (CubeSat Chief Engineer) and Ihsan Balik
   (Weather Balloon Project Manager) were confirmed 2026-07-06 and are not in today's request.
4. **Descriptions.** The model gets an optional `bio`. None are written in this set; the profile
   omits the block when absent. Bios are never invented.
5. **Where project executives appear.** Proposed: on their project page (set 17 design), not
   on the home page. The home section stays "Meet E-board".

## Unrelated issues noticed (not fixed in this set)
- `src/routes/designLab/` (VisualDirectionLab, HeroVisualComparisonLab, heroVisuals/) is
  unreachable since R20.13 removed its routes, but still imports e-board photos. R23.2 repoints
  the imports so it keeps type-checking; deleting the directory needs the user's OK.
- `src/components/CubesatSubteams.tsx` is imported nowhere (superseded by the subteam modals).
  Deletion likewise needs the user's OK.
- `pnpm build` warns that `canvas-reveal-effect` is an 857 kB chunk (pre-existing on main).

## DB changes in this set
None. Static SPA; all data is local TypeScript.

## Log
- 2026-10-05 - Set 23 scaffolded off `main` (`feat/set23-people-profiles`). Baseline on main:
  `pnpm lint` exit 0 (no findings), `pnpm build` exit 0 (chunk-size warning only).
