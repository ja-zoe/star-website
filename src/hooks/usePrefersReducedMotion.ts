import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the user's OS-level "reduce motion" preference and updates live if it
 * changes. Client-only (this is a static SPA), but guards `window` defensively.
 * Used to short-circuit the expensive/continuous animation loops (twinkling
 * stars, shooting stars, globe auto-rotation, flip-words cycling) so the visual
 * identity is preserved while continuous motion is removed (WCAG 2.3.3).
 */
export function usePrefersReducedMotion(): boolean {
  const getInitial = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(QUERY).matches;

  const [reduced, setReduced] = useState<boolean>(getInitial);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default usePrefersReducedMotion;
