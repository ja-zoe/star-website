"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface MovingBorderButtonProps {
  borderRadius?: string;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  animate?: boolean;
}

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as = "button",
  href,
  containerClassName,
  borderClassName,
  duration,
  className,
  animate = true,
}: MovingBorderButtonProps) {
  const content = (
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        aria-hidden="true"
      >
        <MovingBorder duration={duration} rx="30%" ry="30%" animate={animate}>
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#ef4444_40%,transparent_65%)] opacity-90",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>
      <span
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-white/15 bg-black/90 text-sm text-white backdrop-blur-xl",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </span>
    </>
  );
  const sharedClassName = cn(
    "relative inline-flex h-14 min-w-40 overflow-hidden bg-transparent p-px",
    containerClassName,
  );
  const sharedStyle = { borderRadius };

  if (as === "a") {
    return (
      <a href={href} className={sharedClassName} style={sharedStyle}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={sharedClassName} style={sharedStyle}>
      {content}
    </button>
  );
}

const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  animate,
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  animate: boolean;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    if (!animate) return;
    const length = pathRef.current?.getTotalLength();
    if (length) progress.set((time * (length / duration)) % length);
  });

  const x = useTransform(progress, (value) =>
    pathRef.current?.getPointAtLength(value).x ?? 0,
  );
  const y = useTransform(progress, (value) =>
    pathRef.current?.getPointAtLength(value).y ?? 0,
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div className="absolute left-0 top-0 inline-block" style={{ transform }}>
        {children}
      </motion.div>
    </>
  );
};
