# Design Registry — source of truth

This file drives the design-brand skill (`.claude/skills/design-brand/`). It is resolution
authority #1. Leave a slot blank to let the framework resolve it (auto-detect → default — this
project was resolved in `auto` mode, no questionnaire). Edit and re-run to update only changes.

## Global
- mode: auto            # config → autodetect → default (autonomous session, no questionnaire)
- decide: auto          # resolve blank slots silently
- tier: system          # Tier 1 + Tier 2
- output: ./design

## Slots

### Tier 1 — Brand
- vibe: auto            # detected: dark, technical, space/cosmic, minimal-monospace
- voice-tone: auto      # detected: confident, mission-driven, student-friendly
- color-palette: auto   # detected: black surface + white text + STAR-red/blue/green accents
- typography: auto      # detected: Space Mono everywhere
- logo-imagery: auto    # detected: STAR star logo (red/white), team photos, line icons
- iconography: lucide-react   # CONTEXT invariant — lucide only

### Tier 2 — System
- components-library: shadcn-new-york   # over Radix; subsumes `components` + radius/shadow. Aceternity/magicui effects are bespoke on top.
- spacing-layout: auto  # Tailwind v4 default 4px scale
- color-modes: dark-only   # app forces the dark space theme; shadcn light tokens exist but are unused
- components: derived    # owned by components-library (shadcn-new-york)
- motion: auto           # framer-motion + custom shimmer/moveJawn, all gated by prefers-reduced-motion (set 1 R1.4)
- accessibility: auto    # WCAG 2.2 AA target

## Registered skills
(none)
