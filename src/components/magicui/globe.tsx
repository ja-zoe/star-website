"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;
const PAUSED_PHI = 0;
const ORBIT_FRAME_MS = 1000 / 30;
const STATIC_ORBIT_PROGRESS = 0.25;

interface OrbitPlane {
  radius: number;
  inclination: number;
  rotation: number;
}

const LEO_ORBIT: OrbitPlane = { radius: 44, inclination: 58, rotation: -18 };

const projectOrbitPoint = (orbit: OrbitPlane, progress: number) => {
  const angle = progress * Math.PI * 2;
  const inclination = (orbit.inclination * Math.PI) / 180;
  const rotation = (orbit.rotation * Math.PI) / 180;
  const planeX = orbit.radius * Math.cos(angle);
  const planeY = orbit.radius * Math.sin(angle) * Math.cos(inclination);
  const depth = Math.sin(angle) * Math.sin(inclination);
  const perspective = 1 + depth * 0.08;

  return {
    x: 50 + (planeX * Math.cos(rotation) - planeY * Math.sin(rotation)) * perspective,
    y: 50 + (planeX * Math.sin(rotation) + planeY * Math.cos(rotation)) * perspective,
    depth,
  };
};

const LEO_VISIBLE_SEGMENTS = Array.from({ length: 64 }, (_, index) => {
  const start = projectOrbitPoint(LEO_ORBIT, index / 128);
  const end = projectOrbitPoint(LEO_ORBIT, (index + 1) / 128);
  const normalizedDepth = Math.max(0, (start.depth + end.depth) / 2);

  return {
    d: `M${start.x.toFixed(2)} ${start.y.toFixed(2)} L${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
    opacity: Math.pow(normalizedDepth, 1.7) * 0.46,
  };
});

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
  markerColor: [56 / 255, 189 / 255, 248 / 255],
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
  const [orbitProgress, setOrbitProgress] = useState(STATIC_ORBIT_PROGRESS);
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

  useEffect(() => {
    if (!inView || !pageVisible || prefersReducedMotion) {
      setOrbitProgress(STATIC_ORBIT_PROGRESS);
      return;
    }

    let animationFrame = 0;
    let lastFrame = performance.now();
    let progress = STATIC_ORBIT_PROGRESS;

    const animateOrbit = (now: number) => {
      animationFrame = requestAnimationFrame(animateOrbit);
      if (now - lastFrame < ORBIT_FRAME_MS) return;

      progress = (progress + (now - lastFrame) / 18000) % 1;
      lastFrame = now;
      setOrbitProgress(progress);
    };

    animationFrame = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, pageVisible, prefersReducedMotion]);

  const running = inView && pageVisible && !prefersReducedMotion;
  const tracer = projectOrbitPoint(LEO_ORBIT, orbitProgress);
  const tracerVisibility = Math.max(0, Math.min(1, tracer.depth / 0.16));
  const tracerScale = 0.72 + Math.max(0, tracer.depth) * 0.32;

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
          className="pointer-events-none absolute left-[61%] top-[31%] z-30 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-100 bg-sky-400 shadow-[0_0_0_5px_rgba(56,189,248,0.24),0_0_18px_rgba(125,211,252,0.8)]"
          aria-hidden="true"
        />
      )}
      <canvas
        className="relative z-10 size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
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
      <svg
        className="pointer-events-none absolute inset-[2%] z-20 size-[96%] overflow-visible"
        viewBox="0 0 100 100"
        role="img"
        aria-label="The camera-facing half of a low Earth orbit around the globe"
      >
        <defs>
          <radialGradient id="globe-orbit-dot-glow">
            <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="0.14" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="0.3" stopColor="#BAE6FD" stopOpacity="0.92" />
            <stop offset="0.58" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="none" strokeLinecap="round">
          {LEO_VISIBLE_SEGMENTS.map((segment) => (
            <g key={segment.d}>
              <path d={segment.d} stroke="#38BDF8" strokeWidth="1.5" opacity={segment.opacity * 0.14} />
              <path d={segment.d} stroke="#7DD3FC" strokeWidth="0.46" opacity={segment.opacity} />
            </g>
          ))}
        </g>
        <g
          data-orbit-tracer
          transform={`translate(${tracer.x} ${tracer.y}) scale(${tracerScale})`}
          opacity={tracerVisibility}
        >
          <circle r="4.1" fill="url(#globe-orbit-dot-glow)" />
          <circle r="0.48" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
