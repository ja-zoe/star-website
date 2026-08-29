import { lazy, Suspense, useEffect, useState } from "react";
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
  title: string;
  description: string;
  facts: ProjectStat[];
  colors?: number[][];
  href: string;
  revealBg?: string;
}

const ProjectCard = ({
  icon,
  title,
  description,
  facts,
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
      className="group/card block h-[17rem] w-full max-w-[375px] md:h-[22rem]"
      onMouseEnter={() => canHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article className="relative flex h-full min-w-[250px] flex-col overflow-hidden border border-white/30 bg-black/80 p-5 transition-colors duration-200 group-hover/card:border-white/60 group-focus-visible/card:border-white md:p-7">
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
              <div className="absolute inset-0 bg-black/55" />
            </div>
          </Suspense>
        )}

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center gap-4">
            <img
              src={icon}
              alt=""
              width={52}
              height={52}
              loading="lazy"
              decoding="async"
              className="h-11 w-11 shrink-0 invert md:h-[52px] md:w-[52px]"
            />
            <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          </div>

          <p className="mt-4 text-sm leading-5 text-white/75 md:mt-5 md:text-base md:leading-6">
            {description}
          </p>

          <ul className="mt-auto grid grid-cols-3 gap-2 border-y border-white/15 py-3">
            {facts.slice(0, 3).map((fact) => (
              <li key={fact.label} className="min-w-0 text-center">
                <span className="block truncate text-xs font-bold text-white md:text-sm">
                  {fact.value}
                </span>
                <span className="mt-1 block text-[0.55rem] uppercase leading-3 tracking-wider text-white/55 md:text-[0.6rem]">
                  {fact.label}
                </span>
              </li>
            ))}
          </ul>

          <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-white">
            Explore project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
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
