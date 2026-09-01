"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { Satellite } from "lucide-react";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;
const PAUSED_PHI = 0;
const ORBIT_FRAME_INTERVAL = 1000 / 30;
const ORBIT_SPEED = 0.0007;
const ORBIT_RADIUS = 41;
const ORBIT_TILT = Math.PI * 0.35;
const ORBIT_ROLL = -Math.PI * 0.1;
const ORBIT_CAMERA_DISTANCE = 180;
const PAUSED_ORBIT_ANGLE = Math.PI * 0.36;

interface OrbitPoint {
  x: number;
  y: number;
  depth: number;
  perspective: number;
}

const projectOrbitPoint = (angle: number): OrbitPoint => {
  const planeX = Math.cos(angle) * ORBIT_RADIUS;
  const planeY = Math.sin(angle) * ORBIT_RADIUS;
  const tiltedY = planeY * Math.cos(ORBIT_TILT);
  const depth = planeY * Math.sin(ORBIT_TILT);
  const rolledX = planeX * Math.cos(ORBIT_ROLL) - tiltedY * Math.sin(ORBIT_ROLL);
  const rolledY = planeX * Math.sin(ORBIT_ROLL) + tiltedY * Math.cos(ORBIT_ROLL);
  const perspective = ORBIT_CAMERA_DISTANCE / (ORBIT_CAMERA_DISTANCE - depth);

  return {
    x: 50 + rolledX * perspective,
    y: 50 + rolledY * perspective,
    depth,
    perspective,
  };
};

const createOrbitPath = (start: number, end: number) =>
  Array.from({ length: 49 }, (_, index) => {
    const point = projectOrbitPoint(start + ((end - start) * index) / 48);
    return `${index === 0 ? "M" : "L"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
  }).join(" ");

const FRONT_ORBIT_PATH = createOrbitPath(0, Math.PI);
const REAR_ORBIT_PATH = createOrbitPath(Math.PI, Math.PI * 2);

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
  const satelliteRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const orbitAngleRef = useRef(PAUSED_ORBIT_ANGLE);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const reducedMotionRef = useRef(prefersReducedMotion);
  reducedMotionRef.current = prefersReducedMotion;
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );
  const running = inView && pageVisible && !prefersReducedMotion;

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
    const satellite = satelliteRef.current;
    if (!satellite) return;

    let animationFrame = 0;
    let lastFrame = 0;
    let previousFrame = 0;

    const paintSatellite = (angle: number) => {
      const point = projectOrbitPoint(angle);
      const nextPoint = projectOrbitPoint(angle + 0.015);
      const heading = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
      const depthRatio = (point.depth / (ORBIT_RADIUS * Math.sin(ORBIT_TILT)) + 1) / 2;
      const scale = 0.72 + depthRatio * 0.52;
      const front = point.depth >= 0;

      satellite.style.left = `${point.x}%`;
      satellite.style.top = `${point.y}%`;
      satellite.style.opacity = front ? `${0.68 + depthRatio * 0.32}` : `${0.12 + depthRatio * 0.3}`;
      satellite.style.zIndex = front ? "30" : "5";
      satellite.style.filter = front
        ? "drop-shadow(0 0 10px rgba(56, 189, 248, 0.72))"
        : "blur(0.35px)";
      satellite.style.transform = `translate(-50%, -50%) rotate(${heading.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      satellite.dataset.orbitAngle = angle.toFixed(3);
      satellite.dataset.orbitDepth = front ? "front" : "rear";
      satellite.dataset.orbitScale = scale.toFixed(3);
    };

    if (!running) {
      orbitAngleRef.current = PAUSED_ORBIT_ANGLE;
      paintSatellite(PAUSED_ORBIT_ANGLE);
      return;
    }

    paintSatellite(orbitAngleRef.current);
    const tick = (time: number) => {
      animationFrame = requestAnimationFrame(tick);
      if (time - lastFrame < ORBIT_FRAME_INTERVAL) return;

      const elapsed = previousFrame === 0 ? ORBIT_FRAME_INTERVAL : Math.min(time - previousFrame, 100);
      previousFrame = time;
      lastFrame = time - ((time - lastFrame) % ORBIT_FRAME_INTERVAL);
      orbitAngleRef.current = (orbitAngleRef.current + elapsed * ORBIT_SPEED) % (Math.PI * 2);
      paintSatellite(orbitAngleRef.current);
    };
    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [running]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        className,
      )}
      data-globe-running={running ? "true" : "false"}
      data-orbit-running={running ? "true" : "false"}
      data-marker-color="#38BDF8"
    >
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 z-0 size-full overflow-visible"
        aria-hidden="true"
        data-orbit-track="rear"
      >
        <path
          d={REAR_ORBIT_PATH}
          fill="none"
          stroke="rgba(56, 189, 248, 0.16)"
          strokeDasharray="1.2 2.2"
          strokeLinecap="round"
          strokeWidth="0.32"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {prefersReducedMotion && (
        <span
          data-globe-paused-marker
          className="pointer-events-none absolute left-[61%] top-[31%] z-30 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-100 bg-sky-400 shadow-[0_0_0_5px_rgba(56,189,248,0.2),0_0_18px_rgba(56,189,248,0.8)]"
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
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 z-20 size-full overflow-visible"
        aria-hidden="true"
        data-orbit-track="front"
      >
        <path
          d={FRONT_ORBIT_PATH}
          fill="none"
          stroke="rgba(125, 211, 252, 0.48)"
          strokeLinecap="round"
          strokeWidth="0.42"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div
        ref={satelliteRef}
        data-orbiting-cubesat
        data-orbit-fps-cap="30"
        className="pointer-events-none absolute z-30 flex size-8 items-center justify-center rounded-sm border border-sky-300/60 bg-black/90 text-sky-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] will-change-transform"
        aria-hidden="true"
      >
        <Satellite className="size-5 stroke-[1.5]" />
      </div>
    </div>
  );
}
