# Revision Set 5 — SEO discoverability & Apache static-host optimization

Bootstrap: read `changes/CONTEXT.md` first. Set 5 is stacked on set 4 (branch
`feat/set5-seo-host-opt` cut from `feat/set4-robustness-ux`).

Fresh audit (2026-06-29, after sets 1–4):
- `public/.htaccess` has SPA fallback + ErrorDocuments but **no caching or compression** —
  Vite emits content-hashed assets that could be cached forever; HTML must stay no-cache.
- **No robots.txt and no web app manifest.** (Sitemap deliberately skipped — deploy domain is
  unknown and sitemap requires absolute URLs; a wrong sitemap hurts SEO.)
- **No structured data (JSON-LD).** A club/Organization entity has no machine-readable identity.

All wins here are **domain-independent and static-host-safe** (no runtime).

## Status
<!-- markers: [ ] not started · [~] in progress · [t] tests passing, awaiting merge · [x] merged -->
- [ ] R5.1 — .htaccess caching + compression — long-cache hashed assets, no-cache HTML, gzip/brotli (IfModule-guarded)
- [ ] R5.2 — JSON-LD Organization structured data — Organization/CollegeOrganization in index.html
- [ ] R5.3 — robots.txt + web app manifest — explicit crawl-allow + installable manifest with icons/theme

## Open questions / decisions before implementing
None. Deploy domain unknown → no hardcoded absolute URLs (no sitemap, no absolute canonical);
JSON-LD `url`/sameAs use the known social profiles + relative where possible.

## DB changes in this set
None.

## Log
- 2026-06-29 — Set 5 scaffolded. Stacked on set 4.
