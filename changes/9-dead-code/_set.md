# Revision Set 9 — Dead code & unused dependency cleanup

Bootstrap: read `changes/CONTEXT.md` first. Set 9 is stacked on set 8 (branch
`feat/set9-dead-code` cut from `feat/set8-security-headers`).

Fresh audit (2026-06-29, after sets 1–8) — verified-unused code/deps (0 src imports):
- `src/components/ui/sparkles.tsx` — imported by nothing; sole consumer of `@tsparticles/*`.
- `@tsparticles/engine`, `@tsparticles/react`, `@tsparticles/slim` — only sparkles.tsx.
- `three-globe`, `@react-three/drei`, `@tabler/icons-react` — 0 imports anywhere.
(Confirmed via grep across src; `three`/`@react-three/fiber` ARE used by canvas-reveal, `cobe`
by the globe, `simplex-noise` by wavy-background, `react-parallax-tilt`/`aceternity.tsx` used —
all KEPT.) node_modules ~532 MB before.

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [ ] R9.1 — Remove dead sparkles.tsx + unused deps — delete file, drop 6 deps, build must pass

## Open questions / decisions before implementing
None. Only removals with verified 0 imports; the `pnpm build` (tsc + vite) is the safety net.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 9 scaffolded. Stacked on set 8.
