# Revision Set 8 — Security/hardening response headers

Bootstrap: read `changes/CONTEXT.md` first. Set 8 is stacked on set 7 (branch
`feat/set8-security-headers` cut from `feat/set7-asset-opt`).

Fresh audit (2026-06-29, after sets 1–7): `public/.htaccess` now handles SPA fallback +
caching/compression (set 5) but sends **no security/hardening headers**. A public site should
set the standard low-risk defensive headers. (CSP is intentionally deferred — the app uses
Vite/framer inline styles + Google Fonts, so a strict CSP risks breaking rendering and needs
careful per-source tuning.)

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [t] R8.1 — Security headers — nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy (IfModule-guarded)

## Open questions / decisions before implementing
None. CSP deferred (documented in the .htaccess + feature notes) to avoid breaking inline
styles/fonts; only universally-safe headers added.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 8 scaffolded. Stacked on set 7.
