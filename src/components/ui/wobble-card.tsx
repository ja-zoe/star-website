"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  animate = true,
}: {
  children: ReactNode;
  containerClassName?: string;
  className?: string;
  animate?: boolean;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const moving = animate && isHovering;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!animate) return;
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (clientX - (rect.left + rect.width / 2)) / 20,
      y: (clientY - (rect.top + rect.height / 2)) / 20,
    });
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => animate && setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: moving
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "translate3d(0, 0, 0)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-2xl",
        containerClassName,
      )}
    >
      <motion.div
        style={{
          transform: moving
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale(1.03)`
            : "translate3d(0, 0, 0) scale(1)",
          transition: "transform 0.1s ease-out",
        }}
        className={cn(
          "relative h-full overflow-hidden rounded-2xl [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.24),transparent)]",
          className,
        )}
      >
        {children}
      </motion.div>
    </motion.article>
  );
};
