import { useState, type ComponentType } from "react";
import { ArrowRight } from "lucide-react";
import {
  heroProjects,
  type HeroProjectId,
  type HeroVisualProps,
} from "../../../components/hero/heroVisualProjects";

interface HeroVisualPrototypeProps {
  option: "A" | "B" | "C";
  id: string;
  title: string;
  description: string;
  discipline: string;
  motionEnabled: boolean;
  visual: ComponentType<HeroVisualProps>;
}

const HeroVisualPrototype = ({
  option,
  id,
  title,
  description,
  discipline,
  motionEnabled,
  visual: Visual,
}: HeroVisualPrototypeProps) => {
  const [selectedProject, setSelectedProject] = useState<HeroProjectId>("cubesat");
  const [previewProject, setPreviewProject] = useState<HeroProjectId | null>(null);
  const activeProject = previewProject ?? selectedProject;

  return (
    <article id={id} className="scroll-mt-36 border-t border-white/10 py-16 md:py-24">
      <header className="mb-8 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] md:items-end">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-red-300">
            Option {option} / {discipline}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/50 md:justify-self-end">
          {description}
        </p>
      </header>

      <div className="relative overflow-hidden border-y border-white/15 bg-black px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_17%_35%,rgba(157,38,38,0.09),transparent_34%)]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
              Space Technology Association of Rutgers
            </p>
            <h3 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.75rem]">
              We build things that leave the ground.
            </h3>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65">
              A Rutgers student team figuring out satellites, rovers, and near-space missions
              together. You do not need to arrive knowing how.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#comparison-top"
                className="inline-flex min-h-11 items-center rounded-full border border-red-300/40 bg-black px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_22px_rgba(157,38,38,0.26)] transition-colors hover:border-red-200 hover:bg-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
              >
                Join STAR
              </a>
              <a
                href="#comparison-notes"
                className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold underline decoration-white/30 underline-offset-4 transition-colors hover:text-red-200"
              >
                Compare all three
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative z-10 space-y-7">
            <Visual activeProject={activeProject} motionEnabled={motionEnabled} />

            <nav className="space-y-1" aria-label={`${title} project preview`}>
              <p className="mb-4 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-white/35">
                Route signal by project
              </p>
              {heroProjects.map((project) => {
                const active = project.id === activeProject;
                return (
                  <button
                    key={project.id}
                    type="button"
                    data-hero-project={project.id}
                    data-active={active ? "true" : "false"}
                    aria-pressed={project.id === selectedProject}
                    onPointerEnter={() => setPreviewProject(project.id)}
                    onPointerLeave={() => setPreviewProject(null)}
                    onFocus={() => setPreviewProject(project.id)}
                    onBlur={() => setPreviewProject(null)}
                    onClick={() => setSelectedProject(project.id)}
                    className="group flex min-h-16 w-full items-center justify-between border-b px-2 text-left transition-[background-color,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset sm:px-4"
                    style={{
                      borderColor: active ? `${project.accent}66` : "rgba(255,255,255,0.16)",
                      backgroundColor: active ? project.dimAccent : "transparent",
                      boxShadow: active ? `inset 3px 0 0 ${project.accent}` : "none",
                      "--tw-ring-color": project.accent,
                    } as React.CSSProperties}
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={project.icon}
                        alt=""
                        width={36}
                        height={36}
                        className="h-8 w-8 invert opacity-85"
                      />
                      <span className="font-bold text-white">{project.label}</span>
                    </span>
                    <span
                      className="text-[0.55rem] font-bold uppercase tracking-[0.18em] transition-colors"
                      style={{ color: active ? project.accent : "rgba(255,255,255,0.34)" }}
                    >
                      {project.number} / {project.signal}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroVisualPrototype;
