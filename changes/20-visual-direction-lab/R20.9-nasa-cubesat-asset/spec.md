# R20.9 — User-authored CubeSat model integration

**Status:** planned
**Files:** To be finalized when the user supplies the animated model.

## Spec

**Problem:** The hand-built Three.js CubeSat did not meet the required professional visual quality.
NASA's generic 2U GLB was also unsuitable as an animation source because it was exported as one
flattened mesh node with 18 material primitives, 36,896 unwelded triangles, no named assemblies,
and no animation. The user will author the satellite model and animation separately.

**Approach:** Defer implementation until the user provides the finished `.glb` and its intended
interaction. At that point, inspect its node names, animation clips, materials, triangle count, and
texture budget; write a replacement integration spec; load the authored clip through the existing
Three.js stack; preserve the site motion preference; and replace rather than layer on top of the
temporary hero visual. Do not continue separating or modifying the NASA model.

## Tests

See `tests.md`.
