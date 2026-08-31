"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;
const PAUSED_PHI = 0;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 1.5,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 30000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [{ location: [40.521983, -74.462832], size: 0.1 }],
  context: { preserveDrawingBuffer: true },
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const reducedMotionRef = useRef(prefersReducedMotion);
  reducedMotionRef.current = prefersReducedMotion;
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
      { rootMargin: "200px" },
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

  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      rotation.set(rotation.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || !inView || !pageVisible) return;

    const resize = () => {
      widthRef.current = Math.max(1, canvas.offsetWidth);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const mobile = widthRef.current < 640;
    const pixelRatio = mobile ? 1 : Math.min(window.devicePixelRatio, 1.5);

    if (reducedMotionRef.current) {
      phiRef.current = PAUSED_PHI;
      rotation.set(0);
    }

    const globe = createGlobe(canvas, {
      ...config,
      devicePixelRatio: pixelRatio,
      mapSamples: mobile
        ? Math.min(config.mapSamples ?? 16000, 16000)
        : Math.min(config.mapSamples ?? 30000, 30000),
      width: widthRef.current * pixelRatio,
      height: widthRef.current * pixelRatio,
      onRender: (state) => {
        if (reducedMotionRef.current) {
          state.phi = PAUSED_PHI;
          state.markers = [];
        } else {
          if (!pointerInteracting.current) {
            phiRef.current += 0.005;
          }
          state.phi = phiRef.current + springRotation.get();
          state.markers = config.markers;
        }
        state.width = widthRef.current * pixelRatio;
        state.height = widthRef.current * pixelRatio;
      },
    });
    globeRef.current = globe;

    canvas.style.opacity = "1";
    const initialPauseTimer = reducedMotionRef.current
      ? window.setTimeout(() => globe.toggle(false), 1000)
      : undefined;

    return () => {
      if (initialPauseTimer !== undefined) window.clearTimeout(initialPauseTimer);
      if (globeRef.current === globe) globeRef.current = null;
      globe.destroy();
      resizeObserver.disconnect();
    };
  }, [config, inView, pageVisible, rotation, springRotation]);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    if (!prefersReducedMotion) {
      globe.toggle(true);
      return;
    }

    phiRef.current = PAUSED_PHI;
    rotation.set(0);
    globe.toggle(true);
    const pauseTimer = window.setTimeout(() => globe.toggle(false), 1000);
    return () => window.clearTimeout(pauseTimer);
  }, [prefersReducedMotion, rotation]);

  const running = inView && pageVisible && !prefersReducedMotion;

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        className,
      )}
      data-globe-running={running ? "true" : "false"}
    >
      {prefersReducedMotion && (
        <span
          data-globe-paused-marker
          className="pointer-events-none absolute left-[61%] top-[31%] z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-red-200 bg-red-500 shadow-[0_0_0_5px_rgba(157,38,38,0.24),0_0_18px_rgba(248,113,113,0.75)]"
          aria-hidden="true"
        />
      )}
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        aria-hidden="true"
        onPointerDown={(event) => updatePointerInteraction(event.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(event) => updateMovement(event.clientX)}
        onTouchMove={(event) =>
          event.touches[0] && updateMovement(event.touches[0].clientX)
        }
      />
    </div>
  );
}
