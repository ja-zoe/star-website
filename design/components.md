# Components & Patterns

## Library
Library: **shadcn (new-york style)** over Radix primitives. Owns: `components`, radius, shadow,
and the neutral oklch chrome ramp (see tokens.md). Bespoke on top: **Aceternity / magicui**
visual effects (StarsBackground, ShootingStars, WavyBackground, FlipWords,
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
  `border-white/10` hairline, via `transition-colors duration-300` — when page content slides
  under the bar, so the nav stays legible.
The underlay is applied to the **nav controls only**, NOT the whole header (set 13 R13.2): the
desktop link cluster (`NavigationMenuList`, a `rounded-full` pill) and the mobile menu button
(a `rounded-lg` chip). The header stays a transparent full-width container, and the **logo stays
transparent**. Border is `border border-transparent` at the top → coloured on scroll, so there's
no layout shift. State lives in `Navbar` (`scrolled` boolean) from a passive, rAF-throttled scroll
listener. Reduced-motion: the global media query (set 1 R1.4) zeroes the transition (snaps).
Rejected: true per-pixel clash detection (sampling rendered pixels — incl. the WebGL/canvas layers
— every scroll frame) as fragile + expensive; the scroll-state underlay solves it robustly.

## Cards / Surfaces
ProjectCard: icon-led editorial panel with permanent title, short purpose, two facts, and CTA;
project accent appears as a restrained top rule + atmospheric glow. Cards keep deliberate
desktop height/negative space instead of compressing into dashboard summaries, while mobile is
capped at 280px. Accent atmosphere is CSS-only; do not add WebGL or canvas effects to card hover.
E-board: circular red-ringed photo + name + role. Sponsor logos: inverted PNGs with hover-blur
siblings.

Home Join flow: one open, full-width atmospheric composition, not a stack of nested cards. Use
an editorial two-column composition, one short invitation, primary Discord + secondary email
actions, and a single meeting-status line. A restrained radio mark replaces the oversized Discord
illustration. STAR red, hairline borders, mono labels, and generous negative space connect it to
the project-page mission-dossier language.

## Home hierarchy (set 19)
The recruiting sequence is Hero → current status → Projects → proof/About → Join → current
missions → FAQ → leadership → partners. Projects must appear before extended organizational
context. The hero owns the only `<h1>` and states the concrete value proposition; every major
section owns one visible `<h2>`. Use `SectionHeading` for the shared eyebrow/rule/title treatment.
Decorative SVG text is `aria-hidden` and must not substitute for semantic headings. Keep the
globe inside an aspect-ratio frame; never create vertical rhythm with fixed spacer margins.

Current-information surfaces read from `src/content/currentInfo.ts`. Every logistics claim carries
the active term and a last-updated date. If an exact meeting date/time/room is unpublished, state
that the schedule is being finalized, name only the usual location, and provide email + Discord
confirmation paths. Never replace an unknown with an estimate.

The home organization section is titled “Partners, programs & supporters,” not “Sponsors.” Each
logo has a visible relationship label (institution, chapter network, program, competition
organizer, governance, or software) and one tooltip-trigger anchor. Keep the sponsor inquiry CTA
separate from the organization links.

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
Animate: opacity + transform (framer), plus restrained canvas/SVG decorative loops. Never animate
layout-affecting properties on scroll. Reduced-motion paints a static frame and stops shooting
stars, globe spin, flip-words, and shimmer. Canvas/WebGL work must also stop when its section is
offscreen or the page is hidden. Use responsive rendering budgets: 1x DPR and lower density on
mobile, a maximum 1.5x DPR on larger screens, and a 30fps cap for ambient waves. Keep one global
shooting-star layer. New decorative motion must use `usePrefersReducedMotion` and an explicit
visibility lifecycle.
