import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import {
  getHeroProject,
  type HeroProjectId,
  type HeroVisualProps,
} from "../../../components/hero/heroVisualProjects";
import { useVisualActivity } from "../../../hooks/useVisualActivity";

interface FlightProfile {
  eyebrow: string;
  fact: string;
  path: string;
  waveform: string;
  marker: [number, number];
}

const profiles: Record<HeroProjectId, FlightProfile> = {
  robotics: {
    eyebrow: "LUNAR SURFACE / TRAVERSE",
    fact: "NASA LUNABOTICS",
    path: "M76 294 C126 266 154 312 204 281 S286 248 326 274 S398 310 448 268 S542 230 640 256",
    waveform: "M70 365 L102 365 L118 349 L134 382 L150 355 L168 365 H232 L248 341 L264 385 L280 352 L298 365 H650",
    marker: [640, 256],
  },
  "weather-balloon": {
    eyebrow: "ATMOSPHERE / ASCENT",
    fact: "80,000+ FT",
    path: "M348 330 C308 296 380 276 342 244 C304 214 388 184 350 150 C320 124 362 92 354 54",
    waveform: "M70 365 H128 L142 358 L156 372 L170 352 L184 378 L200 365 H278 L292 354 L306 374 L320 347 L336 381 L352 365 H650",
    marker: [354, 54],
  },
  cubesat: {
    eyebrow: "LOW EARTH ORBIT / LINK",
    fact: "UNP / SPICESAT",
    path: "M115 220 C115 118 222 62 358 62 C498 62 614 126 614 220 C614 318 500 352 358 352 C216 352 115 316 115 220",
    waveform: "M70 365 H148 L162 361 L176 369 L190 346 L204 384 L218 354 L234 375 L250 365 H312 L326 356 L340 374 L354 342 L370 386 L386 365 H650",
    marker: [614, 220],
  },
};

const gridX = [100, 180, 260, 340, 420, 500, 580, 660];
const gridY = [74, 126, 178, 230, 282, 334];

const ProjectGlyph = ({ project }: { project: HeroProjectId }) => {
  if (project === "robotics") {
    return (
      <g transform="translate(618 233)">
        <rect x="-15" y="-7" width="30" height="14" rx="3" fill="#080a0b" stroke="currentColor" />
        <circle cx="-10" cy="10" r="5" fill="#080a0b" stroke="currentColor" />
        <circle cx="10" cy="10" r="5" fill="#080a0b" stroke="currentColor" />
        <path d="M-4-7V-15H6" fill="none" stroke="currentColor" />
      </g>
    );
  }

  if (project === "weather-balloon") {
    return (
      <g transform="translate(354 54)">
        <circle cy="-8" r="13" fill="#080a0b" stroke="currentColor" />
        <path d="M-5 3L0 11L5 3M0 11V20M-5 20H5" fill="none" stroke="currentColor" />
      </g>
    );
  }

  return (
    <g transform="translate(614 220)">
      <rect x="-9" y="-9" width="18" height="18" fill="#080a0b" stroke="currentColor" />
      <path d="M-9-5H-27V5H-9M9-5H27V5H9M0-9V-16" fill="none" stroke="currentColor" />
    </g>
  );
};

const ProfileGeometry = ({
  activeProject,
  running,
}: {
  activeProject: HeroProjectId;
  running: boolean;
}) => {
  const project = getHeroProject(activeProject);
  const profile = profiles[activeProject];

  return (
    <motion.g
      key={activeProject}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: running ? 0.35 : 0 }}
      style={{ color: project.accent }}
    >
      {activeProject === "robotics" && (
        <>
          <path d="M54 308 C142 286 174 328 258 296 S392 322 482 282 S596 278 674 270" fill="none" stroke="rgba(255,255,255,0.12)" />
          {[128, 238, 372, 510, 620].map((x, index) => (
            <line key={x} x1={x} y1={300 - index * 4} x2={x - 12} y2={322 - index * 2} stroke="rgba(255,255,255,0.12)" />
          ))}
        </>
      )}
      {activeProject === "weather-balloon" && (
        <>
          {[104, 156, 208, 260, 312].map((y, index) => (
            <g key={y}>
              <line x1="88" y1={y} x2="632" y2={y} stroke="rgba(56,189,248,0.08)" strokeDasharray="3 10" />
              <text x="640" y={y + 3} fill="rgba(255,255,255,0.24)" fontSize="7" fontFamily="Space Mono, monospace">
                {20 - index * 4} KM
              </text>
            </g>
          ))}
          <path d="M286 78 C312 66 332 82 354 72 C378 60 400 80 428 68" fill="none" stroke="rgba(255,255,255,0.1)" />
        </>
      )}
      {activeProject === "cubesat" && (
        <>
          <circle cx="358" cy="220" r="70" fill="rgba(56,189,248,0.025)" stroke="rgba(255,255,255,0.13)" />
          <path d="M292 236 C322 208 346 222 374 190 C394 168 422 174 436 194" fill="none" stroke="rgba(56,189,248,0.18)" />
          <path d="M297 248 C332 262 382 268 418 244" fill="none" stroke="rgba(255,255,255,0.08)" />
        </>
      )}

      <motion.path
        d={profile.path}
        fill="none"
        stroke={project.accent}
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#instrument-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: running ? 0.9 : 0, ease: [0.16, 1, 0.3, 1] }}
      />
      <path d={profile.path} fill="none" stroke={project.accent} strokeWidth="8" opacity="0.05" />

      {running ? (
        <circle r="4.5" fill={project.accent} filter="url(#instrument-glow)">
          <animateMotion dur={activeProject === "cubesat" ? "7s" : "5.5s"} repeatCount="indefinite" path={profile.path} />
        </circle>
      ) : (
        <circle cx={profile.marker[0]} cy={profile.marker[1]} r="4.5" fill={project.accent} filter="url(#instrument-glow)" />
      )}

      <ProjectGlyph project={activeProject} />

      <motion.path
        d={profile.waveform}
        fill="none"
        stroke={project.accent}
        strokeWidth="1.5"
        strokeDasharray="5 5"
        animate={running ? { strokeDashoffset: [0, -30] } : { strokeDashoffset: 0 }}
        transition={running ? { duration: 2.4, repeat: Infinity, ease: "linear" } : { duration: 0 }}
      />
    </motion.g>
  );
};

const FlightPathInstrument = ({ activeProject, motionEnabled }: HeroVisualProps) => {
  const { containerRef, running } = useVisualActivity(motionEnabled);
  const project = getHeroProject(activeProject);
  const profile = profiles[activeProject];
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 26 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 26 });
  const crosshairX = useMotionTemplate`${smoothX}%`;
  const crosshairY = useMotionTemplate`${smoothY}%`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!running) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  };

  return (
    <figure
      ref={containerRef}
      data-hero-visual="flight-path"
      data-active-project={activeProject}
      data-project-accent={project.accent}
      data-visual-running={running ? "true" : "false"}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
      }}
      className="relative h-64 overflow-hidden border border-white/15 bg-[#020304] sm:h-[19rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: `radial-gradient(circle at 62% 42%, ${project.dimAccent}, transparent 43%)` }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-20 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 sm:block"
        style={{ left: crosshairX, top: crosshairY }}
      >
        <span className="absolute left-1/2 top-[-12px] h-10 w-px bg-white/20" />
        <span className="absolute left-[-12px] top-1/2 h-px w-10 bg-white/20" />
        <span className="absolute inset-[5px] rounded-full border border-white/35" />
      </motion.div>

      <div className="pointer-events-none absolute left-4 top-4 z-20">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.22em]" style={{ color: project.accent }}>
          {profile.eyebrow}
        </p>
        <p className="mt-1 text-[0.48rem] uppercase tracking-[0.18em] text-white/28">
          STAR FLIGHT SYSTEMS / NEW BRUNSWICK
        </p>
      </div>
      <div className="pointer-events-none absolute right-4 top-4 z-20 hidden text-right sm:block">
        <p className="text-[0.48rem] uppercase tracking-[0.18em] text-white/28">verified program context</p>
        <p className="mt-1 text-[0.6rem] font-bold tracking-[0.12em] text-white/70">{profile.fact}</p>
      </div>

      <svg
        viewBox="0 0 720 420"
        role="img"
        aria-label={`${project.label} flight-path instrument`}
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="instrument-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="instrument-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.01)" />
          </linearGradient>
        </defs>

        <rect x="34" y="44" width="652" height="336" fill="none" stroke="rgba(255,255,255,0.12)" />
        {gridX.map((x) => <line key={x} x1={x} y1="52" x2={x} y2="344" stroke="rgba(255,255,255,0.045)" />)}
        {gridY.map((y) => <line key={y} x1="42" y1={y} x2="678" y2={y} stroke="rgba(255,255,255,0.045)" />)}
        {gridX.map((x, index) => (
          <text key={`tick-${x}`} x={x} y="397" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="7" fontFamily="Space Mono, monospace">
            {String(index * 12).padStart(2, "0")}
          </text>
        ))}

        <AnimatePresence mode="wait">
          <ProfileGeometry activeProject={activeProject} running={running} />
        </AnimatePresence>

        {running && (
          <g opacity="0.22">
            <line x1="70" x2="70" y1="58" y2="340" stroke={project.accent} strokeWidth="1" />
            <animateTransform attributeName="transform" type="translate" values="0 0;580 0" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.28;0" dur="4.8s" repeatCount="indefinite" />
          </g>
        )}

        <path d="M48 66V52H62M658 52H672V66M48 330V344H62M658 344H672V330" fill="none" stroke="rgba(248,113,113,0.32)" strokeWidth="2" />
        <text x="54" y="362" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="Space Mono, monospace" letterSpacing="1.4">
          SIGNAL RETURN
        </text>
        <text x="666" y="362" textAnchor="end" fill={project.accent} fontSize="7" fontFamily="Space Mono, monospace" letterSpacing="1.4">
          {project.number} / {project.signal}
        </text>
      </svg>
    </figure>
  );
};

export default FlightPathInstrument;
