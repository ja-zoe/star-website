# R20.10 — Full-potential hero visual comparison

**Status:** done
**Files:** `src/App.tsx`, `src/routes/designLab/HeroVisualComparisonLab.tsx`,
`src/routes/designLab/heroVisuals/*`, this feature directory's review artifacts

## Spec

**Problem:** The production hero's right-side hardware prototype was rejected as an amateur-looking
hand-built 3D model, but removing it leaves the first viewport visually underpowered. A replacement
must be code-native, polished enough to judge honestly, substantially lighter than React Three
Fiber, and temporary until the user supplies a professional animated GLB.

**Approach:** Add a lazy, noindex comparison route at `/design-lab/hero-visuals`. Render three
complete hero compositions at the production hero's proportions, each retaining the selected left
copy and equal project rail so only the visual direction changes. Build every direction as a real
interactive component rather than a static mockup:

1. **Reactive Mission Circuit Board:** an asymmetric SVG/HTML PCB with named hardware lanes,
   traces, vias, status lights, an inspection-light response, and project-hover/focus routing.
2. **Flight Path Instrument:** a restrained aerospace plot whose geometry changes between rover
   traverse, balloon ascent, and CubeSat orbit, with sparse real STAR/Rutgers context rather than
   fabricated telemetry.
3. **Kinetic STAR Constellation:** a deterministic 2D canvas STAR mark with spring-return pointer
   displacement, project-colored signal pulses, and no Three.js/WebGL dependency.

Use the established black/white/STAR-red identity and project accent colors only where they carry
meaning. Avoid dashboard-card clutter, random metrics, generic gradients, and extra body copy.
Project buttons must work by pointer, focus, and tap. Each continuous effect observes the global
motion preference, viewport intersection, and document visibility; reduced motion paints a useful
static composition. Canvas rendering is capped at 30 fps and 1.5 DPR. Production `HeroSection` and
the rejected `ExplodedCubeSat` remain unchanged until the user selects a direction.

## Tests

See `tests.md`.
