import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export type ActiveNavigation = "about" | "projects" | "faq" | "join" | "eboard";

const homeSections: Array<{ id: string; navigation: ActiveNavigation }> = [
  { id: "AboutStarSection", navigation: "about" },
  { id: "ProjectsSection", navigation: "projects" },
  { id: "FAQSection", navigation: "faq" },
  { id: "JoinUsSection", navigation: "join" },
  { id: "EboardSection", navigation: "eboard" },
];

const projectPaths = new Set(["/cubesat", "/robotics", "/weather-balloon"]);

export const useActiveNavigation = (): ActiveNavigation | null => {
  const { pathname } = useLocation();
  const [activeNavigation, setActiveNavigation] = useState<ActiveNavigation | null>(null);

  useEffect(() => {
    if (projectPaths.has(pathname)) {
      setActiveNavigation("projects");
      return;
    }

    if (pathname !== "/") {
      setActiveNavigation(null);
      return;
    }

    let animationFrame = 0;

    const updateActiveNavigation = () => {
      animationFrame = 0;
      const activationLine = Math.max(96, Math.min(window.innerHeight * 0.28, 240));
      let nextActive: ActiveNavigation | null = null;
      let closestSectionTop = Number.NEGATIVE_INFINITY;

      for (const section of homeSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const sectionTop = element.getBoundingClientRect().top;
        if (sectionTop <= activationLine && sectionTop > closestSectionTop) {
          closestSectionTop = sectionTop;
          nextActive = section.navigation;
        }
      }

      setActiveNavigation((current) => current === nextActive ? current : nextActive);
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(updateActiveNavigation);
    };

    const main = document.getElementById("main-content");
    let contentObserver: MutationObserver | null = null;
    if (main) {
      contentObserver = new MutationObserver(scheduleUpdate);
      contentObserver.observe(main, { childList: true, subtree: true });
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      contentObserver?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return activeNavigation;
};
