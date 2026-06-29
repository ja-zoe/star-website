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
