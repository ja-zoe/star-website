# CONTEXT — STAR Website (project invariants)

Public marketing/recruiting site for **STAR — Space Technology Association of Rutgers**.
Loaded once per session. Holds invariants NOT obvious from the code.

## Hard invariants (do not violate)
- **Fully static, client-side SPA.** No server runtime, SSR, Node-at-runtime, backend, DB,
  or auth. It deploys as static `dist/` files to a dumb Apache static host. Any feature must
  survive `pnpm build` → serve `dist/` over plain Apache. SPA deep-link fallback is
  `public/.htaccess`.
- **Package manager is pnpm.** `pnpm dev`, `pnpm build` (= `tsc -b && vite build`),
  `pnpm lint`. Never switch package managers.
- **Icons: lucide-react only.** Do not introduce another icon set. (`@tabler/icons-react` is
  a transitive/legacy dep — do not add new Tabler usage; prefer lucide.)
- **Keep the visual identity — refine, don't gut it.** Dark space/stars aesthetic IS the
  brand: black background, white text, red-400 accent, Space Mono font, animated
  stars/shooting-stars background, three.js/cobe globe, tsparticles sparkles, framer-motion.

## Stack
- React 19 + Vite 6 + TypeScript + Tailwind v4 (`@tailwindcss/vite`) + shadcn (new-york).
- Routing: `react-router` v7 (`BrowserRouter`, client-side). Routes: `/`, `/cubesat`,
  `/robotics`, `/weather-balloon`. Home is section-anchored (`#AboutStarSection`, etc.).
- Path alias `@/` → `src/` (vite-tsconfig-paths).
- React 19 hoists `<title>`/`<meta>`/`<link>` rendered anywhere in the tree into `<head>` —
  use this for per-route SEO instead of adding react-helmet (keeps it dependency-free + static).

## Layout notes
- `src/routes/<area>/` per route; home sections in `src/routes/home/*Section.tsx`.
- Reusable Aceternity/shadcn primitives in `src/components/ui/`.
- Global chrome (`Navbar`, `Footer`, `StarsBackground`, two `ShootingStars`) lives in
  `src/App.tsx`, outside `<Routes>`.
- Static assets in `public/` are referenced by absolute path (`/foo.png`) or imported.

## Branching convention
- `main` is the integration branch and is live on origin (sets 1–10 are merged). Branch each set
  off `main` (`feat/setN-<slug>`); features off their set branch (`feat/setN/RN.M-slug`), merged
  back `--no-ff`. Merge the set branch into `main` + push only when the user approves.
- (Historical: during the 2026-06-29 overnight autonomous run main was frozen and sets 1–9 were
  stacked; the user has since reviewed and merged everything to main, so the normal off-main flow
  is back in effect.)

## Design system
- `design/` is established (tokens.md, components.md, brand.md, accessibility.md, _index.md).
  Resolve color/type/spacing/motion against it, not ad-hoc Tailwind values. Per-project signature
  accents (CubeSat amber `#F5A524`, Robotics emerald `#34D399`, Weather Balloon sky `#38BDF8`)
  live in tokens.md; the shared "Project page kit" + `src/components/project/` are the
  source of truth for project-page structure. STAR red `#9D2626` is the global brand thread.

## Known constraints / gotchas
- `public/` images are large & unoptimized (~62 MB; eboard JPGs 5–6.6 MB). Optimization must
  stay build-time/static (resize+WebP committed or via a Vite-time plugin) — nothing Apache
  can't serve.
- Animation-heavy: always gate new motion behind `prefers-reduced-motion`.
