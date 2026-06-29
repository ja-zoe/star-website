import { useEffect } from "react";

/**
 * Per-route document metadata for a fully static, client-side SPA (no SSR,
 * no react-helmet — see changes/CONTEXT.md).
 *
 * The static <head> in index.html provides the no-JS baseline that crawlers and
 * social scrapers read before React runs. This component *upserts those same
 * tags in place* on each route change (updating content, or creating the tag if
 * absent) so there is never a duplicate meta tag and the first match a scraper
 * reads is always current. og:url is derived from the live origin, so it stays
 * correct on whatever host the bundle is deployed to.
 */
type SeoProps = {
  /** Full document title, brand included (e.g. "Robotics — STAR"). */
  title: string;
  /** ~150-char meta description for search + social cards. */
  description?: string;
  /** Route path, used to build the absolute og:url (e.g. "/robotics"). */
  path?: string;
};

/** Find an existing meta tag by attribute, or create + append one to <head>. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const Seo = ({ title, description, path = "/" }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    upsertMeta("property", "og:title", title);
    upsertMeta("name", "twitter:title", title);

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    if (typeof window !== "undefined") {
      upsertMeta("property", "og:url", `${window.location.origin}${path}`);
    }
  }, [title, description, path]);

  return null;
};

export default Seo;
