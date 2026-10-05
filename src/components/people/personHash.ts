/** Profiles open from the URL hash `#person/<person-id>`, so every profile has a shareable
 *  link and the browser back button closes it. */
const PREFIX = "person/";

export const personHash = (id: string) => `#${PREFIX}${id}`;

/** The person id in a location hash, or null when the hash is not a profile link. */
export const personIdFromHash = (hash: string) => {
  const target = decodeURIComponent(hash.replace(/^#/, ""));
  return target.startsWith(PREFIX) ? target.slice(PREFIX.length) : null;
};

// The profile link that was last activated, so the dialog can return focus to it on close.
// Captured on click because Radix moves focus into the dialog before any effect of ours runs.
let lastOpener: HTMLElement | null = null;

export const rememberOpener = (element: HTMLElement) => {
  lastOpener = element;
};

export const takeOpener = () => {
  const element = lastOpener;
  lastOpener = null;
  return element;
};
