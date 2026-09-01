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

  return (
    <Tilt
      tiltReverse
      tiltEnable={enhancedMotion}
      glareEnable={enhancedMotion}
      glareReverse
      glareMaxOpacity={0.3}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className={projectCard ? "h-full w-full sm:w-auto" : undefined}
    >
      <div
        className={`flex items-center justify-center border border-white/20 ${
          projectCard
            ? "h-28 w-full flex-row gap-4 rounded-lg px-5 py-4 text-left sm:h-60 sm:w-72 sm:flex-col sm:gap-3 sm:px-3 sm:py-10 sm:text-center"
            : compact
            ? "min-h-36 w-full gap-2 px-2 py-5"
            : "w-72 flex-col gap-3 rounded-lg py-10 text-center"
        } ${className}`}
      >
        <div className={`shrink-0 rounded-full border border-white/30 ${compact ? "p-2" : projectCard ? "p-2.5 sm:p-3" : "p-3"}`}>
          <Icon className={compact ? "h-5 w-5 sm:h-7 sm:w-7" : projectCard ? "h-7 w-7 sm:h-auto sm:w-10" : "h-auto w-10"} />
        </div>
        <div className={projectCard ? "min-w-0 flex-1 sm:flex-none" : "px-3"}>
          {eyebrow && (
            <p className="mb-1 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:mb-2">
              {eyebrow}
            </p>
          )}
          <p className={compact ? "text-xl font-bold sm:text-2xl" : projectCard ? "text-xl sm:text-3xl" : "text-3xl"}>{stat}</p>
          <p className={compact ? "mt-1 text-[0.6rem] uppercase tracking-wider text-white/55 sm:text-xs" : projectCard ? "mt-1 line-clamp-2 text-xs text-white/60 sm:text-sm" : "text-white/70"}>{headline}</p>
          {actionLabel && (
            <span className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/80 sm:mt-4">
              {actionLabel}
              <ChevronRight className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </Tilt>
  );
};
export default StarStat;
