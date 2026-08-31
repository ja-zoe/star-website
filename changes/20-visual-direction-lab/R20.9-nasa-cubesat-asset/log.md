# R20.9 notes / log

- 2026-08-30 — Located `/home/jazoe/Downloads/CubeSat - 2 RU Generic.glb` (206,108
  bytes). Static and decoded glTF inspection found one mesh node, 18 material primitives,
  36,896 triangles, Draco compression, no textures, and no animations. Every triangle owns
  unique indexed vertices; coordinate welding still leaves roughly 5,500 disconnected CAD
  surface patches, so generic loose-part separation was rejected before modifying the asset.
- 2026-08-31 — User chose to author the satellite model and animation independently. NASA asset
  preprocessing was stopped before any source or site asset was changed; integration is deferred
  until the user supplies the finished model.
