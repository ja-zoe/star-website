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

## Cards / Surfaces
ProjectCard: bordered black panel (`border-white/30`), corner ticks, line icon → title on hover,
with a lazy three.js CanvasRevealEffect (loads on hover; set 2 R2.2). E-board: circular
red-ringed photo + name + role. Sponsor logos: inverted PNGs with hover-blur siblings.

## Motion (see tokens › Motion)
Animate: opacity + transform (framer), plus the canvas/SVG decorative loops. Never animate
layout-affecting properties on scroll. Reduced-motion: stars paint statically, shooting stars /
globe spin / flip-words / shimmer / moveJawn all stop (set 1 R1.4) — the look is preserved, the
continuous motion is removed.
