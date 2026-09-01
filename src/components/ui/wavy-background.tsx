"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { createNoise3D } from "simplex-noise";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../lib/utils";

const DEFAULT_COLORS = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
const FRAME_INTERVAL = 1000 / 30;

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const noise = useMemo(() => createNoise3D(), []);
  const palette = useMemo(() => colors ?? DEFAULT_COLORS, [colors]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const staticOnCompactViewport = useMediaQuery("(max-width: 639px), (pointer: coarse)");
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () =>
      setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let lastFrame = 0;
    let time = 0;
    let width = 0;
    let height = 0;

    const draw = (advance: boolean) => {
      if (advance) time += speed === "fast" ? 0.002 : 0.001;

      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.restore();

      context.fillStyle = backgroundFill;
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);

      const mobile = width < 640;
      const waveCount = mobile ? 3 : 4;
      const xStep = mobile ? 12 : 8;
      for (let wave = 0; wave < waveCount; wave += 1) {
        context.beginPath();
        context.lineWidth = waveWidth;
        context.strokeStyle = palette[wave % palette.length];
        for (let x = 0; x <= width; x += xStep) {
          const y = noise(x / 800, 0.3 * wave, time) * 100;
          context.lineTo(x, y + height * 0.5);
        }
        context.stroke();
        context.closePath();
      }
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));
      const pixelRatio = width < 640 ? 1 : Math.min(window.devicePixelRatio, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.filter = `blur(${blur}px)`;
      draw(false);
    };

    const render = (timestamp: number) => {
      if (timestamp - lastFrame >= FRAME_INTERVAL) {
        draw(true);
        lastFrame = timestamp;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    if (inView && pageVisible && !prefersReducedMotion && !staticOnCompactViewport) {
      animationFrame = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [
    backgroundFill,
    blur,
    inView,
    noise,
    pageVisible,
    palette,
    prefersReducedMotion,
    speed,
    staticOnCompactViewport,
    waveOpacity,
    waveWidth,
  ]);

  const isSafari =
    typeof navigator !== "undefined" &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome");
  const running = inView && pageVisible && !prefersReducedMotion && !staticOnCompactViewport;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-screen flex-col items-center justify-center overflow-hidden",
        containerClassName,
      )}
      data-wave-running={running ? "true" : "false"}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        aria-hidden="true"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
