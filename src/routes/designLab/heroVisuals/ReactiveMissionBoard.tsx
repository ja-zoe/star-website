import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { GlowingEffect } from "../../../components/ui/glowing-effect";
import { getHeroProject, type HeroProjectId, type HeroVisualProps } from "./shared";
import { useVisualActivity } from "./useVisualActivity";

const routes: Record<HeroProjectId, { path: string; x: number; y: number; port: string }> = {
  robotics: {
    path: "M360 222 C302 222 292 294 238 294 H112",
    x: 104,
    y: 294,
    port: "GND-01",
  },
  "weather-balloon": {
    path: "M360 198 C302 198 298 112 238 112 H112",
    x: 104,
    y: 112,
    port: "ATM-02",
  },
  cubesat: {
    path: "M424 210 C482 210 496 142 548 142 H626",
    x: 636,
    y: 142,
    port: "ORB-03",
  },
};

const passiveTraces = [
  "M116 82 H210 V156 H312",
  "M84 338 H208 V316 H278",
  "M444 92 H524 V58 H644",
  "M446 286 H538 V328 H662",
  "M178 204 H252",
  "M476 236 H594",
  "M318 156 V106 H366",
  "M398 270 V322 H462",
];

const vias = [
  [84, 82], [116, 82], [210, 82], [210, 156], [312, 156],
  [84, 338], [208, 338], [208, 316], [278, 316], [444, 92],
  [524, 92], [524, 58], [644, 58], [446, 286], [538, 286],
  [538, 328], [662, 328], [178, 204], [252, 204], [476, 236],
  [594, 236], [318, 106], [366, 106], [462, 322],
];

const components = [
  { x: 154, y: 138, w: 58, h: 34, label: "PWR" },
  { x: 154, y: 238, w: 58, h: 34, label: "IMU" },
  { x: 492, y: 178, w: 64, h: 38, label: "RF" },
  { x: 506, y: 252, w: 48, h: 30, label: "IO" },
  { x: 278, y: 70, w: 68, h: 32, label: "BUS" },
  { x: 374, y: 304, w: 70, h: 34, label: "LOG" },
];

const ReactiveMissionBoard = ({ activeProject, motionEnabled }: HeroVisualProps) => {
  const { containerRef, running } = useVisualActivity(motionEnabled);
  const project = getHeroProject(activeProject);
  const activeRoute = routes[activeProject];
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const rotateY = useTransform(smoothX, [0, 100], [-2.4, 2.4]);
  const rotateX = useTransform(smoothY, [0, 100], [2, -2]);
  const inspectionLight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, ${project.dimAccent} 0%, rgba(157, 38, 38, 0.055) 24%, transparent 55%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!running) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  const resetPointer = () => {
    pointerX.set(50);
    pointerY.set(50);
  };

  return (
    <figure
      ref={containerRef}
      data-hero-visual="mission-board"
      data-active-project={activeProject}
      data-project-accent={project.accent}
      data-visual-running={running ? "true" : "false"}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative h-64 overflow-hidden border border-white/15 bg-[#030405] [perspective:900px] sm:h-[19rem]"
    >
      <GlowingEffect
        glow
        disabled={!motionEnabled}
        variant="white"
        proximity={70}
        spread={30}
        borderWidth={1}
      />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: inspectionLight }} />
      <div className="pointer-events-none absolute left-4 top-4 z-20">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-white/50">
          STAR mission board / rev 26
        </p>
        <p className="mt-1 text-[0.48rem] uppercase tracking-[0.18em] text-white/25">
          40.4862 N / 74.4518 W
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-4 z-20 flex items-center gap-2 text-[0.48rem] uppercase tracking-[0.18em] text-white/35">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: project.accent, boxShadow: `0 0 10px ${project.accent}` }}
        />
        route {project.signal.toLowerCase()} armed
      </div>

      <motion.div
        className="absolute inset-3 top-10 origin-center sm:inset-4 sm:top-9"
        style={running ? { rotateX, rotateY } : undefined}
      >
        <svg
          viewBox="0 0 720 420"
          role="img"
          aria-label={`Interactive STAR circuit board routing to ${project.label}`}
          className="h-full w-full drop-shadow-[0_24px_34px_rgba(0,0,0,0.7)]"
        >
          <defs>
            <pattern id="board-grid" width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            </pattern>
            <filter id="board-active-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="board-shell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#15191b" />
              <stop offset="0.48" stopColor="#090b0d" />
              <stop offset="1" stopColor="#150708" />
            </linearGradient>
          </defs>

          <path
            d="M52 18H638L702 78V338L650 404H82L18 350V76Z"
            fill="url(#board-shell)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="2"
          />
          <path
            d="M66 38H626L680 88V330L638 383H94L40 340V88Z"
            fill="url(#board-grid)"
            stroke="rgba(157,38,38,0.35)"
          />

          {[76, 644].flatMap((x) => [76, 346].map((y) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="13" fill="#030405" stroke="rgba(255,255,255,0.2)" />
              <circle cx={x} cy={y} r="5" fill="#15191c" stroke="rgba(255,255,255,0.12)" />
            </g>
          )))}

          {passiveTraces.map((path) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="rgba(248,113,113,0.16)"
              strokeWidth="2"
            />
          ))}

          {Object.entries(routes).map(([id, route]) => (
            <path
              key={id}
              d={route.path}
              fill="none"
              stroke="rgba(255,255,255,0.085)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          ))}

          <motion.path
            key={activeProject}
            d={activeRoute.path}
            fill="none"
            stroke={project.accent}
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#board-active-glow)"
            strokeDasharray="8 12"
            initial={{ pathLength: 0.15, opacity: 0 }}
            animate={running
              ? { pathLength: 1, opacity: 1, strokeDashoffset: [0, -40] }
              : { pathLength: 1, opacity: 0.9, strokeDashoffset: 0 }}
            transition={running
              ? { pathLength: { duration: 0.65 }, opacity: { duration: 0.25 }, strokeDashoffset: { duration: 1.8, repeat: Infinity, ease: "linear" } }
              : { duration: 0.01 }}
          />

          {vias.map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r="4" fill="#08090a" stroke="rgba(248,113,113,0.36)" />
              <circle cx={x} cy={y} r="1.25" fill="rgba(255,255,255,0.5)" />
            </g>
          ))}

          {components.map((component) => (
            <g key={component.label}>
              <rect
                x={component.x}
                y={component.y}
                width={component.w}
                height={component.h}
                rx="3"
                fill="#050607"
                stroke="rgba(255,255,255,0.18)"
              />
              {Array.from({ length: 5 }, (_, index) => (
                <g key={index}>
                  <line
                    x1={component.x + 8 + index * ((component.w - 16) / 4)}
                    y1={component.y - 5}
                    x2={component.x + 8 + index * ((component.w - 16) / 4)}
                    y2={component.y}
                    stroke="rgba(255,255,255,0.28)"
                  />
                  <line
                    x1={component.x + 8 + index * ((component.w - 16) / 4)}
                    y1={component.y + component.h}
                    x2={component.x + 8 + index * ((component.w - 16) / 4)}
                    y2={component.y + component.h + 5}
                    stroke="rgba(255,255,255,0.28)"
                  />
                </g>
              ))}
              <text
                x={component.x + component.w / 2}
                y={component.y + component.h / 2 + 3}
                textAnchor="middle"
                fill="rgba(255,255,255,0.32)"
                fontSize="8"
                fontFamily="Space Mono, monospace"
                letterSpacing="2"
              >
                {component.label}
              </text>
            </g>
          ))}

          <g>
            <rect x="312" y="166" width="112" height="104" rx="8" fill="#020303" stroke="rgba(248,113,113,0.48)" strokeWidth="2" />
            <rect x="325" y="179" width="86" height="78" rx="4" fill="#110708" stroke="rgba(255,255,255,0.12)" />
            <path d="M345 221l12-12 12 12 22-22" fill="none" stroke="#9D2626" strokeWidth="3" />
            <text x="368" y="244" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="10" fontFamily="Space Mono, monospace" letterSpacing="2">
              STAR CORE
            </text>
          </g>

          {Object.entries(routes).map(([id, route]) => {
            const routeProject = getHeroProject(id as HeroProjectId);
            const active = id === activeProject;
            return (
              <g key={id} opacity={active ? 1 : 0.45}>
                <circle
                  cx={route.x}
                  cy={route.y}
                  r={active ? 11 : 10}
                  fill="#030405"
                  stroke={active ? routeProject.accent : "rgba(255,255,255,0.24)"}
                  strokeWidth={active ? 2 : 1}
                />
                {active && running && (
                  <circle cx={route.x} cy={route.y} r="16" fill="none" stroke={routeProject.accent} strokeWidth="1">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle cx={route.x} cy={route.y} r="4" fill={active ? routeProject.accent : "rgba(255,255,255,0.34)"} />
                <text
                  x={route.x}
                  y={route.y + 27}
                  textAnchor="middle"
                  fill={active ? routeProject.accent : "rgba(255,255,255,0.3)"}
                  fontSize="8"
                  fontFamily="Space Mono, monospace"
                  letterSpacing="1.5"
                >
                  {route.port}
                </text>
              </g>
            );
          })}

          <text x="92" y="374" fill="rgba(255,255,255,0.19)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">
            DESIGNED / BUILT / TESTED AT RUTGERS
          </text>
          <text x="576" y="374" fill="rgba(248,113,113,0.32)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">
            RU-STAR
          </text>
        </svg>
      </motion.div>
    </figure>
  );
};

export default ReactiveMissionBoard;
