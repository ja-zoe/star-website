# Design Tokens (source of truth)

> Derive CSS variables / Tailwind theme FROM this file. Do not hand-edit generated theme code
> independently. Values below were auto-detected from the existing code (index.html, src/App.css,
> component classes) and are the formalized baseline — refine, don't reinvent.

## Color

The app is **dark-only**. Surface is true black; text is white; accents are per-project.

Core:
- `--surface` (page bg)        = `#000000`  (html.bg-black)
- `--text`                     = `#ffffff`
- `--text-muted`               = `rgba(255,255,255,0.70)`  (e.g. eboard position label `text-white/70`)
- `--border-subtle`            = `rgba(255,255,255,0.20–0.30)`  (footer/nav dividers)

Brand accents:
- `--color-starred`            = `#9D2626`  (STAR red — WavyBackground, headings accent)
- `red-400`                    = `#f87171`  (brighter UI red — eboard portrait ring; coexists with #9D2626, kept intentionally)
- `--color-wb` / `--color-starblue` = `#0091ff`  (weather-balloon blue)
- robotics green               = `#03d011`  (RoboticsPage WavyBackground / ProjectCard reveal)

### Project signature accents (curated 2026-06-29 — supersede the old per-project colors)

Each project page sets a single `--accent` CSS variable on its root; every accent usage on the
page (section labels, stat numbers, hero glow, dividers, subteam-card hover ring, CTA) reads
from `--accent`. The shared dark starfield shell + STAR red brand thread keep the three pages
cohesive; the accent is what makes each curated to its project. All three clear ≥7:1 on black.

| Project         | `--accent` | `--accent-soft` (glow/wash) | rationale            |
|-----------------|-----------|------------------------------|----------------------|
| CubeSat         | `#F5A524` | `rgba(245,165,36,…)`         | orbital / solar gold |
| Robotics        | `#34D399` | `rgba(52,211,153,…)`         | refined Lunabotics green |
| Weather Balloon | `#38BDF8` | `rgba(56,189,248,…)`         | atmosphere / near-space sky |

These replace the previous ad-hoc per-project hero colors (`#9D2626`+gray, `#03d011`, `#0091ff`).

**STAR red `#9D2626` is the brand thread (`--brand`)** — woven through the *shared* chrome on
every project page so the three read as one family, while `--accent` carries each project's
identity. Two-layer rule for project pages (set 12):
- **`--brand` (#9D2626 / STAR red)** — the cross-page constants: the STAR mark in the hero
  eyebrow, a red strand blended into every hero `WavyBackground`, and the "A STAR project" brand
  tie at the foot of each page. Identical on all three → the unifying thread.
- **`--accent` (amber/emerald/sky)** — project-specific: section labels, stat numerals, mission
  rule, subteam-card wash + modal, CTAs. What makes each page its own.
Red still owns the global shell/footer/eboard/logo as before.

TextHoverEffect rainbow (one-off heading hover only): yellow `#f59e0b`, red `#ef4444`,
blue `#3b82f6`, cyan `#06b6d4`, violet `#8b5cf6` (the `--*-500` vars in App.css `@theme`).

Component chrome: shadcn neutral ramp in **oklch** (see App.css `:root`/`.dark`) — owned by
shadcn-new-york; do not redefine here. Dark mode is the active set (`.dark` token block).

Text-on-accent: white on `#9D2626` ≈ 6.7:1 (passes AA). White on black = 21:1.

## Type
Families: display = body = mono = **"Space Mono"** (Google Fonts, loaded in index.html;
`.space-mono` applied on the app root). Legacy: Inter is `@import`ed in App.css (`.inter`) but
effectively unused — do not build on it.
Scale (observed, px): 14 (`text-sm`) · 16 (base) · 18 (`text-lg`) · 20–24 (`text-xl/2xl`) ·
30 (`text-3xl`) · large display via `text-4xl`+ and the SVG TextHoverEffect headings.
Weights: 400 / 700 (Space Mono ships 400 & 700). Line-height: body ~1.5, headings tight.

## Spacing / Layout
Base unit: 4px (Tailwind v4 default scale: 0,1,2,3,4,6,8,10,...). 
Layout: full-bleed sections (`w-screen`), centered flex columns, generous vertical padding
(`py-10`/`py-20`). No fixed max-width grid; content is centered with per-section `px-*`.
Breakpoints: Tailwind defaults sm 640 / md 768 / lg 1024 / xl 1280, plus custom
`--breakpoint-base: 56rem` (App.css `@theme`).

## Icon
Library: **lucide-react** (CONTEXT invariant — no other icon set). Style: line, ~1.5–2px
stroke, 24px grid. Social/brand glyphs that lucide lacks ship as inverted PNGs in `public/`.

## Modes
**Dark only.** The site forces the dark space theme (black bg on `<html>`, white text on the
app root). shadcn light-mode tokens exist in `:root` but are not exercised. No light mode.

## Motion
Library: framer-motion (`motion`). Custom CSS keyframes: `shimmer` (CTA), `moveJawn` (Join Us
discord), plus stars/shooting-stars/globe canvas loops and flip-words.
Standing rule (set 1, R1.4): **all continuous motion is gated by `prefers-reduced-motion`** via
`usePrefersReducedMotion` + the `@media (prefers-reduced-motion: reduce)` block in App.css.
Animate transform/opacity; keep the stars aesthetic visible even when reduced.
Durations: framer springs + a few fixed (shimmer 2s, accordion 0.2s).
