import { lazy, Suspense, useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { ProjectStat } from "./project/projectConfig";

// three.js + @react-three/fiber (~600 kB) live behind this lazy boundary so they
// stay off touch-only devices and load only after the first intentional hover.
const CanvasRevealEffect = lazy(() =>
  import("./ui/canvas-reveal-effect").then((module) => ({
    default: module.CanvasRevealEffect,
  })),
);

interface ProjectCardProps {
  icon: string;
  index: string;
  title: string;
  purpose: string;
  facts: ProjectStat[];
  accent: string;
  colors?: number[][];
  href: string;
  revealBg?: string;
}

const ProjectCard = ({
  icon,
  index,
  title,
  purpose,
  facts,
  accent,
  colors,
  href,
  revealBg = "bg-[#9D2626]",
}: ProjectCardProps) => {
  const [canHover, setCanHover] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <Link
      to={href}
      className="group/card block h-[17.5rem] w-full max-w-[375px] md:h-[25rem]"
      onMouseEnter={() => canHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className="relative flex h-full min-w-[250px] flex-col overflow-hidden border border-white/25 bg-black/80 p-5 transition-colors duration-300 group-hover/card:border-white/60 group-focus-visible/card:border-white md:p-8"
        style={{ "--card-accent": accent } as CSSProperties}
      >
        <CornerMark className="absolute -left-3 -top-3 h-6 w-6" />
        <CornerMark className="absolute -bottom-3 -left-3 h-6 w-6" />
        <CornerMark className="absolute -right-3 -top-3 h-6 w-6" />
        <CornerMark className="absolute -bottom-3 -right-3 h-6 w-6" />

        {hovered && canHover && (
          <Suspense fallback={null}>
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName={revealBg}
                colors={colors}
              />
              <div className="absolute inset-0 bg-black/65" />
            </div>
          </Suspense>
        )}

        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[var(--card-accent)] opacity-20 blur-3xl transition-opacity duration-500 group-hover/card:opacity-35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-[var(--card-accent)] opacity-80"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white/50">
              Project {index}
            </span>
            <img
              src={icon}
              alt=""
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 invert opacity-90 md:h-20 md:w-20"
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-white md:mt-8 md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 max-w-xs text-sm leading-5 text-white/65 md:mt-3 md:text-base md:leading-6">
            {purpose}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/15 pt-3 md:pt-5">
            <ul className="flex gap-5 md:gap-7">
              {facts.slice(0, 2).map((fact) => (
                <li key={fact.label} className="min-w-0">
                  <span className="block text-xs font-bold text-white md:text-sm">
                  {fact.value}
                  </span>
                  <span className="mt-1 block text-[0.52rem] uppercase leading-3 tracking-wider text-white/45 md:text-[0.58rem]">
                  {fact.label}
                  </span>
                </li>
              ))}
            </ul>
            <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-white md:text-sm">
              Explore
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const CornerMark = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default ProjectCard;
