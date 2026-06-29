import { createContext } from "react";

/**
 * Carries the active project's --accent to descendants that render into a
 * portal (e.g. the Radix Dialog in SubteamModal, which mounts at document.body
 * and therefore escapes the CSS variable set on the ProjectShell root). React
 * context is not DOM-scoped, so it reaches the portal where a CSS cascade can't.
 * Defaults to white (no project context → neutral).
 */
export const AccentContext = createContext<string>("#ffffff");
