import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const STORAGE_KEY = "star-reduce-motion";
const CHANGE_EVENT = "star-motion-preference-change";

const getSystemReduced = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(QUERY).matches;

const getUserReduced = () =>
  typeof window !== "undefined" &&
  window.localStorage.getItem(STORAGE_KEY) === "true";

const useMotionState = () => {
  const [systemReduced, setSystemReduced] = useState(getSystemReduced);
  const [userReduced, setUserReduced] = useState(getUserReduced);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia(QUERY);
    const onSystemChange = () => setSystemReduced(mediaQuery.matches);
    const onUserChange = () => setUserReduced(getUserReduced());
    onSystemChange();
    onUserChange();
    mediaQuery.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onUserChange);
    window.addEventListener(CHANGE_EVENT, onUserChange);
    return () => {
      mediaQuery.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onUserChange);
      window.removeEventListener(CHANGE_EVENT, onUserChange);
    };
  }, []);

  return {
    systemReduced,
    userReduced,
    reduced: systemReduced || userReduced,
  };
};

export function usePrefersReducedMotion(): boolean {
  return useMotionState().reduced;
}

export function useMotionPreferenceControl() {
  const state = useMotionState();
  const setUserReduced = (reduced: boolean) => {
    window.localStorage.setItem(STORAGE_KEY, String(reduced));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return {
    ...state,
    motionEnabled: !state.reduced,
    toggleMotion: () => setUserReduced(!state.userReduced),
  };
}

export default usePrefersReducedMotion;
