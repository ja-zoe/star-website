import React from "react";
import Tilt from "react-parallax-tilt";

interface Props {
  className: string;
}

export interface StarStatProps {
  Icon: React.FunctionComponent<Props>;
  headline: string;
  className?: string;
  stat: string | number;
  compact?: boolean;
}

const StarStat = ({ headline, stat, className, Icon, compact = false }: StarStatProps) => {
  return (
    <Tilt
      tiltReverse
      glareEnable
      glareReverse
      glareMaxOpacity={0.3}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      <div
        className={`flex flex-col items-center justify-center border border-white/20 text-center ${
          compact
            ? "min-h-36 w-full gap-2 px-2 py-5"
            : "w-72 gap-3 rounded-lg py-10"
        } ${className}`}
      >
        <div className={`rounded-full border border-white/30 ${compact ? "p-2" : "p-3"}`}>
          <Icon className={compact ? "h-5 w-5 sm:h-7 sm:w-7" : "h-auto w-10"} />
        </div>
        <div className="px-3">
          <p className={compact ? "text-xl font-bold sm:text-2xl" : "text-3xl"}>{stat}</p>
          <p className={compact ? "mt-1 text-[0.6rem] uppercase tracking-wider text-white/55 sm:text-xs" : "text-white/70"}>{headline}</p>
        </div>
      </div>
    </Tilt>
  );
};
export default StarStat;
