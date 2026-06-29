# Design System — Index

**Tier:** system
**Last resolved:** 2026-06-29
Source of truth: `config.md` (input) → these files (output). Tokens live in `tokens.md`; real
CSS/Tailwind/theme config is derived FROM tokens, never the reverse. Resolved in `auto` mode
(config → autodetect → default; no questionnaire — autonomous session).

## Resolution provenance & ownership
| slot               | provenance | ownership                    | file              |
|--------------------|------------|------------------------------|-------------------|
| vibe               | autodetect | owned                        | brand.md          |
| voice-tone         | autodetect | owned                        | brand.md          |
| color-palette      | autodetect | owned                        | tokens.md         |
| typography         | autodetect | owned                        | tokens.md         |
| logo-imagery       | autodetect | owned                        | brand.md          |
| iconography        | config     | owned (lucide-react)         | tokens.md         |
| components-library | config     | owned (shadcn-new-york)      | components.md     |
| spacing-layout     | autodetect | owned                        | tokens.md         |
| color-modes        | config     | owned (dark-only)            | tokens.md         |
| components         | —          | derived:components-library   | components.md     |
| motion             | autodetect | owned                        | tokens.md/components.md |
| accessibility      | autodetect | owned                        | accessibility.md  |

Notes: shadcn-new-york (components-library) subsumes `components` and the radius/shadow + neutral
oklch chrome ramp. Aceternity/magicui effects are bespoke layers on top, not a competing library.
The shadcn neutral oklch ramp is owned by the library and intentionally not re-specified in
tokens.md.

## Change log
- 2026-06-29 — Initial resolution (tier: system). Auto-detected the established dark space
  identity from index.html + src/App.css + components and formalized it as the baseline. No app
  code changed by this resolution (R3.1 is docs-only); R3.2/R3.3 in this set resolve against it.
- 2026-06-29 — Re-resolve `color-palette` + `components` for the project-page redesign (set 10),
  provenance → **config** (user-directed via design-brand questionnaire). Added a curated
  per-project signature accent triad (CubeSat amber `#F5A524`, Robotics emerald `#34D399`,
  Weather Balloon sky `#38BDF8`) to tokens.md, superseding the old per-project hero colors;
  STAR red stays the global brand thread. Added the shared "Project page kit" (editorial
  mission-dossier, typographic/graphic-only — no photos) to components.md. Other slots untouched.
- 2026-06-29 — Re-resolve `color-palette` + `components` (set 12), provenance → **config**
  (user-directed). Promoted STAR red `#9D2626` from "not a project accent" to an explicit
  **brand thread (`--brand`)** woven through the *shared* project-page chrome (hero eyebrow STAR
  mark, a red strand in every hero wave, an "A STAR Project" brand tie) — so the three pages read
  as one branded family while `--accent` keeps each one's identity. tokens.md + components.md
  updated; per-project accents unchanged.
- 2026-06-29 — Re-resolve `components` (set 13), provenance → **config** (user-directed). Added
  the scroll-aware **navigation bar** pattern to components.md: transparent at the top, a solid
  blurred underlay fades in once scrolled — keeps the transparent look while fixing legibility
  clashes. No token changes.
