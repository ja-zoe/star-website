# Accessibility

Target: **WCAG 2.2 AA**.

Contrast: ≥ 4.5:1 body text, ≥ 3:1 large text & UI components (verified against tokens.md):
white on black = 21:1; white on `#9D2626` ≈ 6.7:1; `text-white/70` on black ≈ 14:1 — all pass.
Watch any future muted text below ~`white/55` on black.

Focus: **always-visible 2px ring, 2px offset** on every interactive control (set 3 R3.3 adds a
global `:where(a,button,[role=button],[tabindex]):focus-visible` white ring in index.css; shadcn
primitives keep their own `focus-visible:ring`). `:focus-visible` only — no ring on mouse click.

Landmarks: one `<header>`, one `<main>`, one `<footer>`, `<nav>` for menus (set 1 R1.1/R1.2).

Images: every `<img>` has meaningful `alt` (decorative ones empty); social-link icons are wrapped
in `aria-label`led anchors with `aria-hidden` glyphs (set 1 R1.2). Eboard portraits carry
width/height to prevent CLS (set 2 R2.3).

Hit targets: ≥ 44×44px for tap targets (mobile nav button is 40px icon in a padded button — keep
padding ≥ the 44px target on touch).

Motion: honor `prefers-reduced-motion` — drop all continuous/decorative animation, keep the
static visual identity (set 1 R1.4). This is a standing requirement for any new motion.

Color independence: never signal with color alone — project accents (red/blue/green) are paired
with labels/icons, not used as the sole differentiator.

Document validity: no invalid DOM nesting (no `<div>`-in-`<p>`, no nested `<a>`) and unique React
keys — these caused console errors, fixed in set 1 R1.2; keep the console clean (set 3 R3.2
removes the remaining radialGradient errors).
