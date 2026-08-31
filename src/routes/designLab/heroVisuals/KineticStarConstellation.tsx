import { useEffect, useRef } from "react";
import { getHeroProject, type HeroProjectId, type HeroVisualProps } from "./shared";
import { useVisualActivity } from "./useVisualActivity";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  phase: number;
}

interface BackgroundPoint {
  x: number;
  y: number;
  size: number;
  alpha: number;
}

const signalAnchors: Record<HeroProjectId, [number, number]> = {
  robotics: [0.2, 0.75],
  "weather-balloon": [0.53, 0.16],
  cubesat: [0.82, 0.48],
};

const hexToRgb = (hex: string) => {
  const value = Number.parseInt(hex.slice(1), 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const createRandom = (seed: number) => {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
};

const createStarParticles = (width: number, height: number) => {
  const random = createRandom(20260831);
  const centerX = width * 0.51;
  const centerY = height * 0.53;
  const outerRadius = Math.min(width, height) * 0.34;
  const innerRadius = outerRadius * 0.42;
  const vertices = Array.from({ length: 10 }, (_, index) => {
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const angle = -Math.PI / 2 + (index * Math.PI) / 5;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  const particles: Particle[] = [];
  const samplesPerEdge = width < 430 ? 7 : 10;
  for (let edge = 0; edge < vertices.length; edge += 1) {
    const start = vertices[edge];
    const end = vertices[(edge + 1) % vertices.length];
    for (let sample = 0; sample < samplesPerEdge; sample += 1) {
      const progress = sample / samplesPerEdge;
      const targetX = start.x + (end.x - start.x) * progress;
      const targetY = start.y + (end.y - start.y) * progress;
      particles.push({
        x: targetX + (random() - 0.5) * outerRadius * 0.9,
        y: targetY + (random() - 0.5) * outerRadius * 0.9,
        vx: 0,
        vy: 0,
        targetX,
        targetY,
        size: 0.65 + random() * 1.5,
        phase: random() * Math.PI * 2,
      });
    }
  }

  const background = Array.from({ length: width < 430 ? 22 : 34 }, (): BackgroundPoint => ({
    x: random() * width,
    y: random() * height,
    size: 0.3 + random() * 1.1,
    alpha: 0.08 + random() * 0.22,
  }));

  return { particles, background, centerX, centerY };
};

const KineticStarConstellation = ({ activeProject, motionEnabled }: HeroVisualProps) => {
  const { containerRef, running } = useVisualActivity(motionEnabled);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const project = getHeroProject(activeProject);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let background: BackgroundPoint[] = [];
    let centerX = 0;
    let centerY = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    const frameInterval = 1000 / 30;
    const accent = hexToRgb(project.accent);

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const field = createStarParticles(width, height);
      particles = field.particles;
      background = field.background;
      centerX = field.centerX;
      centerY = field.centerY;
      container.dataset.canvasDpr = dpr.toFixed(2);
    };

    const update = () => {
      for (const particle of particles) {
        particle.vx += (particle.targetX - particle.x) * 0.022;
        particle.vy += (particle.targetY - particle.y) * 0.022;

        if (pointerRef.current.active) {
          const dx = particle.x - pointerRef.current.x;
          const dy = particle.y - pointerRef.current.y;
          const distanceSquared = dx * dx + dy * dy;
          const radius = Math.min(width, height) * 0.24;
          if (distanceSquared > 0.1 && distanceSquared < radius * radius) {
            const distance = Math.sqrt(distanceSquared);
            const force = (1 - distance / radius) * 1.8;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.vx *= 0.86;
        particle.vy *= 0.86;
        particle.x += particle.vx;
        particle.y += particle.vy;
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const wash = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.55);
      wash.addColorStop(0, `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.09)`);
      wash.addColorStop(0.42, "rgba(157, 38, 38, 0.035)");
      wash.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = wash;
      context.fillRect(0, 0, width, height);

      for (const point of background) {
        context.beginPath();
        context.fillStyle = `rgba(255,255,255,${point.alpha})`;
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();
      }

      context.save();
      context.globalCompositeOperation = "lighter";
      context.beginPath();
      particles.forEach((particle, index) => {
        if (index === 0) context.moveTo(particle.x, particle.y);
        else context.lineTo(particle.x, particle.y);
      });
      if (particles[0]) context.lineTo(particles[0].x, particles[0].y);
      context.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.38)`;
      context.lineWidth = 1;
      context.stroke();

      const pointsPerEdge = particles.length / 10;
      context.beginPath();
      for (let point = 0; point < 5; point += 1) {
        const first = particles[Math.round(point * 2 * pointsPerEdge) % particles.length];
        const second = particles[Math.round(((point * 2 + 4) % 10) * pointsPerEdge) % particles.length];
        if (!first || !second) continue;
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
      }
      context.strokeStyle = "rgba(255,255,255,0.055)";
      context.stroke();

      particles.forEach((particle, index) => {
        const shimmer = running ? Math.sin(time * 0.0018 + particle.phase) * 0.18 : 0;
        context.beginPath();
        context.fillStyle = index % 9 === 0
          ? `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${0.8 + shimmer})`
          : `rgba(255,255,255,${0.38 + shimmer})`;
        context.arc(particle.x, particle.y, Math.max(0.4, particle.size + shimmer), 0, Math.PI * 2);
        context.fill();
      });

      const [anchorXRatio, anchorYRatio] = signalAnchors[activeProject];
      const anchorX = width * anchorXRatio;
      const anchorY = height * anchorYRatio;
      context.setLineDash([3, 7]);
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(anchorX, anchorY);
      context.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.42)`;
      context.lineWidth = 1;
      context.stroke();
      context.setLineDash([]);

      const pulseProgress = running ? (time % 2400) / 2400 : 0.72;
      const pulseX = centerX + (anchorX - centerX) * pulseProgress;
      const pulseY = centerY + (anchorY - centerY) * pulseProgress;
      const pulseGlow = context.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 18);
      pulseGlow.addColorStop(0, `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.95)`);
      pulseGlow.addColorStop(1, `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0)`);
      context.fillStyle = pulseGlow;
      context.beginPath();
      context.arc(pulseX, pulseY, 18, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.strokeStyle = project.accent;
      context.lineWidth = 1.25;
      context.arc(anchorX, anchorY, 7, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.fillStyle = project.accent;
      context.arc(anchorX, anchorY, 2, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const renderStatic = () => {
      for (const particle of particles) {
        particle.x = particle.targetX;
        particle.y = particle.targetY;
        particle.vx = 0;
        particle.vy = 0;
      }
      draw(0);
    };

    const tick = (time: number) => {
      animationFrame = requestAnimationFrame(tick);
      if (time - lastFrame < frameInterval) return;
      lastFrame = time - ((time - lastFrame) % frameInterval);
      update();
      draw(time);
    };

    const observer = new ResizeObserver(() => {
      resize();
      if (!running) renderStatic();
    });
    observer.observe(container);
    resize();

    if (running) animationFrame = requestAnimationFrame(tick);
    else renderStatic();

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [activeProject, containerRef, project.accent, running]);

  const updatePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!running) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      active: true,
    };
  };

  return (
    <figure
      ref={containerRef}
      data-hero-visual="star-constellation"
      data-active-project={activeProject}
      data-project-accent={project.accent}
      data-visual-running={running ? "true" : "false"}
      data-canvas-fps-cap="30"
      onPointerMove={updatePointer}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
      className="relative h-64 overflow-hidden border border-white/15 bg-[#020203] sm:h-[19rem]"
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={`Kinetic STAR constellation transmitting the ${project.label} signal`}
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-6">
        <div>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-white/50">
            STAR constellation / responsive field
          </p>
          <p className="mt-1 text-[0.48rem] uppercase tracking-[0.18em] text-white/25">
            move through the mark / it reforms
          </p>
        </div>
        <p className="text-right text-[0.5rem] font-bold uppercase tracking-[0.18em]" style={{ color: project.accent }}>
          signal {project.number}<br />{project.label}
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-3 left-4 z-10 flex items-center gap-3 text-[0.48rem] uppercase tracking-[0.18em] text-white/28">
        <span className="h-px w-8" style={{ backgroundColor: project.accent }} />
        one organization / three build paths
      </div>
    </figure>
  );
};

export default KineticStarConstellation;
