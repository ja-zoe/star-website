# Components & Patterns

## Library
Library: **shadcn (new-york style)** over Radix primitives. Owns: `components`, radius, shadow,
and the neutral oklch chrome ramp (see tokens.md). Bespoke on top: **Aceternity / magicui**
visual effects (StarsBackground, ShootingStars, WavyBackground, CanvasRevealEffect, FlipWords,
TextHoverEffect, HoverBorderGradient, Globe). Effects are decorative layers — keep them behind
`prefers-reduced-motion` and don't let them capture pointer/focus (they use `pointer-events-none`
/ are non-interactive).
Do not invent a parallel component set; extend shadcn primitives in `src/components/ui/`.

## Conventions
Radius: `--radius: 0.625rem` (10px) with shadcn's `sm/md/lg/xl` derivations. Pills (`rounded-full`)
for CTAs. Elevation: minimal — rely on the white-glow border (`navbar-shadow`,
`box-shadow` red) rather than heavy drop shadows. Border: `1px` white at 10–30% opacity on black.

## Buttons / CTAs
Observed variants: solid white-on-black pill ("Join Us"), animated `shimmer` border CTA
("Become a Member"), and `HoverBorderGradient` (rotating-gradient ring, used `as="a"` for "Learn
More" — must render a single anchor, no nested `<a>`; see set 1 R1.2). States: hover (invert/
brighten), and **focus must be keyboard-visible** (set 3 R3.3 adds a 2px white focus-visible ring
globally; shadcn controls keep their own `focus-visible:ring`).

## Inputs
No form inputs on the site (no backend). The only interactive primitives are the Radix
Accordion (FAQ), Sheet (mobile nav), NavigationMenu, and Tooltip — all shadcn, all keep their
built-in focus rings.

## Navigation bar (set 13)
The global `Navbar` (fixed, `z-30`) is **scroll-aware** to stay legible without losing the
transparent look:
- **At the top** (scrollY ≤ ~24px, over the hero): fully transparent — the established look.
- **Once scrolled**: a solid blurred underlay fades in — `bg-black/80 backdrop-blur-md` + a
  bottom hairline `border-b border-white/10`, via `transition-colors duration-300`. This is when
  page content slides under the bar, so the underlay guarantees contrast everywhere.
State lives in the `Navbar` (`scrolled` boolean) from a passive, rAF-throttled scroll listener.
Reduced-motion: the global media query (set 1 R1.4) zeroes the transition, so it snaps instead of
fading — fine. Rejected: true per-pixel clash detection (sampling rendered pixels — incl. the
WebGL/canvas layers — every scroll frame) as fragile + expensive; the scroll-state underlay solves
the same problem robustly.

## Cards / Surfaces
ProjectCard: bordered black panel (`border-white/30`), corner ticks, line icon → title on hover,
with a lazy three.js CanvasRevealEffect (loads on hover; set 2 R2.2). E-board: circular
red-ringed photo + name + role. Sponsor logos: inverted PNGs with hover-blur siblings.

## Project page kit (added 2026-06-29 — set 10)
The three project pages (CubeSat, Robotics, Weather Balloon) share ONE editorial "mission
dossier" skeleton so they read as a cohesive series; each is differentiated only by its
signature `--accent` (tokens › Project signature accents), its copy/stats, and its lucide motif
icon. Typographic/graphic only — **no photographs** (per the club's direction); identity comes
from type, the accent, iconography, and the shared dark starfield shell.

Shared section order (top → bottom), all driven by a per-project config object + `--accent` set
on the page root (`style={{ ['--accent']: '#…' }}`; accent usages read `var(--accent)` so the
whole page re-themes from one value):
1. **Hero** — mono eyebrow ("PROJECT 01 · CUBESAT"), big `<h1>`, one-line mission tagline,
   accent CTA → `#mission`. Backdrop: the existing `WavyBackground` recolored to
   `[--accent, #000]`-ish, kept subtle. A large faint accent motif icon (lucide) sits behind.
2. **Stat band** — 3–4 at-a-glance facts (number/word + label), accent numerals, hairline
   dividers. Only verifiable facts (subteam counts, "80,000+ ft", "NASA Lunabotics", "UNP-backed").
3. **Mission** (`id="mission"`) — section label ("01 / THE MISSION"), the overview prose set in
   a comfortable measure (max-w prose, left-aligned, not centered), accent rule.
4. **Subteams** — section label + the existing interactive `StarStat`→`SubteamModal` cards,
   restyled to theme their radial wash + hover ring from `--accent` (keep the modal content).
5. **Status / Join** — current-status line (from existing copy) + meeting-times note + an accent
   CTA to Discord. Replaces the bare "Meeting times" block.

Conventions for the kit: section labels are mono, uppercase, `text-white/50`, with a leading
accent tick; numerals/keywords use `text-[var(--accent)]`; dividers `border-[var(--accent)]/30`;
content left-aligned in a centered max-width column (≈ max-w-3xl/5xl) — NOT the old full-width
centered text. Reuse shared components (`SectionLabel`, `StatBand`, `ProjectHero`,
`ProjectShell`) so all three pages are the same code parameterized by config — that is what
guarantees cohesion. New shared components live in `src/components/project/`.

**STAR red brand thread (added set 12 — tokens › Project signature accents).** Alongside the
per-project `--accent`, every project page carries STAR red `#9D2626` on the *shared* chrome so
the three read as one branded family. Applied identically on all three (constant, not from
config):
- **Hero eyebrow STAR mark** — a small filled red `Star` (lucide) leads the eyebrow before
  "PROJECT 0X · NAME". The eyebrow text stays `--accent`; the star is the brand badge.
- **Hero wave** — `WavyBackground` colors include a red strand: `[accent, "#9D2626", "#0a0a0a"]`,
  so STAR red is literally woven into each project's signature wave.
- **Brand tie** — a slim footer strip at the bottom of every project page (above the global
  `<Footer>`): a red filled `Star` + "A STAR Project · Space Technology Association of Rutgers",
  linking to `/`. Muted text, red star. The consistent sign-off that ties the set to the brand.
Keep red to these shared elements only; do not red-wash the accent-owned, project-specific parts
(labels, stats, mission rule, subteam wash/modal, CTAs stay `--accent`).

## Motion (see tokens › Motion)
Animate: opacity + transform (framer), plus the canvas/SVG decorative loops. Never animate
layout-affecting properties on scroll. Reduced-motion: stars paint statically, shooting stars /
globe spin / flip-words / shimmer / moveJawn all stop (set 1 R1.4) — the look is preserved, the
continuous motion is removed. New project-page reveals (if any) must also gate on
`usePrefersReducedMotion`.
