import React from "react";
import Tilt from "react-parallax-tilt";
import { ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface Props {
  className: string;
}

export interface StarStatProps {
  Icon: React.FunctionComponent<Props>;
  headline: string;
  className?: string;
  stat: string | number;
  compact?: boolean;
  projectCard?: boolean;
  eyebrow?: string;
  actionLabel?: string;
}

const StarStat = ({
  headline,
  stat,
  className,
  Icon,
  compact = false,
  projectCard = false,
  eyebrow,
  actionLabel,
}: StarStatProps) => {
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const enhancedMotion = !reducedMotion && !coarsePointer;

  const card = (
    <div
      className={`flex items-center justify-center border border-white/20 ${
        projectCard
          ? "group relative h-full min-h-[22rem] w-full flex-col items-start justify-between gap-5 overflow-hidden rounded-[1.35rem] border-white/15 bg-white/[0.03] px-5 py-5 text-left transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/55 hover:bg-white/[0.06] sm:min-h-[22rem] sm:px-6 sm:py-6"
          : compact
          ? "min-h-36 w-full gap-2 px-2 py-5"
          : "w-72 flex-col gap-3 rounded-lg py-10 text-center"
      } ${className}`}
    >
      {projectCard && (
        <>
          <span className="absolute inset-y-5 left-0 w-1 origin-bottom scale-y-[0.25] bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-within:scale-y-100" aria-hidden="true" />
          <span className="absolute inset-x-5 top-0 h-px bg-[var(--accent)]/60" aria-hidden="true" />
        </>
      )}
      <div className={`shrink-0 rounded-full border border-white/30 transition-colors duration-300 ${compact ? "p-2" : projectCard ? "bg-black/35 p-2.5 group-hover:border-[var(--accent)]/60 sm:p-3" : "p-3"}`}>
        <Icon className={compact ? "h-5 w-5 sm:h-7 sm:w-7" : projectCard ? "h-7 w-7 text-white/80 transition-colors duration-300 group-hover:text-[var(--accent)] sm:h-auto sm:w-10" : "h-auto w-10"} />
      </div>
      <div className={projectCard ? "min-w-0 flex-1" : "px-3"}>
        {eyebrow && (
          <p className="mb-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:mb-2">
            {eyebrow}
          </p>
        )}
        <p className={compact ? "text-xl font-bold sm:text-2xl" : projectCard ? "max-w-[14ch] text-2xl leading-tight sm:text-[2rem]" : "text-3xl"}>{stat}</p>
        <p className={compact ? "mt-1 text-[0.6rem] uppercase tracking-wider text-white/55 sm:text-xs" : projectCard ? "mt-2 max-w-[28ch] text-sm leading-6 text-white/60" : "text-white/70"}>{headline}</p>
        {actionLabel && (
          <span className="mt-4 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/80">
            {actionLabel}
            <ChevronRight className="h-3.5 w-3.5 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        )}
      </div>
    </div>
  );

  if (projectCard) return card;

  return (
    <Tilt
      tiltReverse
      tiltEnable={enhancedMotion}
      glareEnable={enhancedMotion}
      glareReverse
      glareMaxOpacity={0.3}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      {card}
    </Tilt>
  );
};
export default StarStat;
