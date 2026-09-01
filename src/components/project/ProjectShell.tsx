import type { CSSProperties, ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Radio,
  RotateCw,
  Star,
} from "lucide-react";
import { Link } from "react-router";
import { WavyBackground } from "../ui/wavy-background";
import SectionLabel from "./SectionLabel";
import { projectConfigs, type ProjectConfig } from "./projectConfig";
import { AccentContext } from "./accentContext";
import { currentInfo } from "../../content/currentInfo";

const BRAND = "#9D2626";

const ProjectShell = ({
  config,
  children,
}: {
  config: ProjectConfig;
  children: ReactNode;
}) => {
  const {
    id,
    eyebrow,
    name,
    tagline,
    accent,
    motifIcon: Motif,
    stats,
    mission,
    artifact,
    ctaHref,
    ctaLabel,
  } = config;
  const projectCurrent = currentInfo.projects[id];
  const relatedProjects = projectConfigs.filter((project) => project.id !== id);
  const projectEmailHref = `${currentInfo.contact.emailHref.split("?")[0]}?subject=${encodeURIComponent(`Interested in STAR ${name}`)}`;

  const ctaClass =
    "inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--accent)] px-6 py-2.5 text-sm font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black";

  return (
    <AccentContext.Provider value={{ accent, projectId: id, projectName: name }}>
      <div
        className="flex min-h-screen flex-col bg-black pb-10"
        style={{ "--accent": accent } as CSSProperties}
      >
        <header className="relative text-center">
          <WavyBackground
            colors={[accent, BRAND, "#0a0a0a"]}
            waveOpacity={0.4}
            containerClassName="h-[72svh] min-h-[580px] md:h-[76svh] md:min-h-[680px]"
            className="grid place-items-center px-6"
          >
            <Motif
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[58vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 text-[var(--accent)] opacity-[0.07]"
            />
            <div className="relative flex max-w-3xl flex-col items-center gap-4">
              <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-sm">
                <Star
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 fill-[#9D2626] text-[#9D2626]"
                />
                {eyebrow}
              </p>
              <h1 className="text-5xl font-bold md:text-7xl">{name}</h1>
              <p className="max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{tagline}</p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <a href="#current-mission" className={ctaClass}>
                  See current mission
                  <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#join"
                  className="inline-flex min-h-11 items-center justify-center px-5 text-sm font-bold text-white/75 underline decoration-white/25 underline-offset-4 hover:text-white"
                >
                  Join {name}
                </a>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-white/10 px-4 py-3 text-[0.62rem] uppercase tracking-[0.14em] text-white/55">
                <span className="flex items-center gap-2">
                  <Radio className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
                  Phase · {projectCurrent.phase}
                </span>
                <span className="flex items-center gap-2">
                  <RotateCw className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
                  Updated <time dateTime={projectCurrent.lastUpdatedISO}>{projectCurrent.lastUpdatedLabel}</time>
                </span>
              </div>
            </div>
          </WavyBackground>
        </header>

        <section aria-label="At a glance" className="border-y border-white/10">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-7 px-6 py-7 md:grid-cols-4 md:divide-x md:divide-white/10 md:py-9">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:px-4">
                <dt className="text-xl font-bold text-[var(--accent)] sm:text-2xl md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.6rem] uppercase tracking-wider text-white/50 sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="current-mission"
          className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-12 md:py-24"
        >
          <SectionLabel index="01">Current mission</SectionLabel>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Current phase</p>
              <h3 className="mt-2 max-w-3xl text-2xl font-bold sm:text-3xl">{projectCurrent.phase}</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/60 md:text-right">{projectCurrent.status}</p>
          </div>
          <p className="mt-6 text-[0.6rem] uppercase tracking-wider text-white/40 md:hidden">Swipe or use arrow keys to review the mission state</p>
          <dl aria-label="Current mission state" tabIndex={0} className="mt-3 flex snap-x snap-mandatory overflow-x-auto border-y border-white/15 pb-2 focus-visible:outline-offset-4 md:mt-8 md:grid md:grid-cols-3 md:divide-x md:divide-white/15 md:overflow-visible md:pb-0">
            <div className="min-w-[82%] snap-start px-4 py-5 md:min-w-0">
              <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-white/45">Latest published state</dt>
              <dd className="mt-3 font-bold">{projectCurrent.latestPublished}</dd>
              <dd className="mt-2 text-xs leading-5 text-white/50">{projectCurrent.latestNote}</dd>
            </div>
            <div className="min-w-[82%] snap-start border-l border-white/15 px-4 py-5 md:min-w-0 md:border-l-0">
              <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-white/45">Working now</dt>
              <dd className="mt-3 font-bold">{projectCurrent.status.replace("Team focus: ", "")}</dd>
              <dd className="mt-2 text-xs leading-5 text-white/50">Current public focus; detailed internal tasks change by subteam.</dd>
            </div>
            <div className="min-w-[82%] snap-start border-l border-white/15 px-4 py-5 md:min-w-0 md:border-l-0">
              <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-white/45">Next checkpoint</dt>
              <dd className="mt-3 font-bold">{projectCurrent.nextCheckpoint}</dd>
              <dd className="mt-2 text-xs leading-5 text-white/50">{projectCurrent.nextNote}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-white/45">
            Maintained by {projectCurrent.contentOwner}. Public milestones are shown only after team confirmation.
          </p>
        </section>

        <section id="mission" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-12 md:py-24">
          <SectionLabel index="02">The mission</SectionLabel>
          <div className="mt-8 grid gap-7 md:mt-10 md:grid-cols-3 md:gap-8">
            {mission.map((section, index) => (
              <article key={section.title} className="border-l border-[var(--accent)]/40 pl-5">
                <p aria-hidden="true" className="text-xs tabular-nums text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-bold">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full px-6 py-12 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionLabel index="03">Mission artifact</SectionLabel>
            <div className="mt-10 border border-white/15 bg-[color-mix(in_srgb,var(--accent)_6%,black)] p-5 sm:p-8">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">{artifact.kicker}</p>
              <h3 className="mt-3 max-w-3xl text-2xl font-bold sm:text-3xl">{artifact.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{artifact.description}</p>
              <p className="mt-6 text-[0.6rem] uppercase tracking-wider text-white/40 lg:hidden">Swipe or use arrow keys to trace the sequence</p>
              <ol aria-label={`${name} mission sequence`} tabIndex={0} className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 focus-visible:outline-offset-4 lg:mt-8 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
                {artifact.steps.map((step, index) => (
                  <li key={step.label} className="relative min-w-[15rem] snap-start border border-white/10 bg-black/45 p-4 lg:min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs tabular-nums text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                      {index < artifact.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-white/25 lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:-translate-y-1/2" aria-hidden="true" />
                      )}
                    </div>
                    <h4 className="mt-5 font-bold">{step.label}</h4>
                    <p className="mt-2 text-xs leading-5 text-white/55">{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-l border-[var(--accent)]/50 pl-4 text-xs leading-5 text-white/55">{artifact.note}</p>
            </div>
          </div>
        </section>

        <section id="subteams" className="w-full scroll-mt-24 px-6 py-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel index="04">Subteams</SectionLabel>
                <h3 className="mt-5 text-2xl font-bold">Choose an entry point into the work.</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/55">
                {currentInfo.recruitment.eligibility}. {currentInfo.recruitment.prerequisites}. Open a subteam to see responsibilities and useful starting interests.
              </p>
            </div>
            <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-8">
              {children}
            </div>
          </div>
        </section>

        <section id="join" className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-12 text-center md:py-24">
          <div className="flex justify-center">
            <SectionLabel index="05">Recruitment &amp; first step</SectionLabel>
          </div>
          <h3 className="mx-auto mt-8 max-w-xl text-2xl font-bold">Interested in building with {name}?</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
            Join the STAR Discord, introduce yourself in the project channel, and ask which subteam has the best first task for you. You can also email the team before attending.
          </p>
          <dl className="mx-auto mt-8 grid max-w-2xl border-y border-white/15 text-left sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            <div className="px-4 py-4">
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/45">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Recruitment
              </dt>
              <dd className="mt-2 text-sm">{currentInfo.recruitment.status}</dd>
              <dd className="mt-1 text-xs text-white/45">Capacity varies by subteam</dd>
            </div>
            <div className="border-t border-white/15 px-4 py-4 sm:border-t-0">
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/45">
                <Clock3 className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Team schedule
              </dt>
              <dd className="mt-2 text-sm">{projectCurrent.schedule}</dd>
            </div>
            <div className="border-t border-white/15 px-4 py-4 sm:border-t-0">
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/45">
                <CalendarClock className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Term
              </dt>
              <dd className="mt-2 text-sm">{currentInfo.term}</dd>
            </div>
          </dl>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60">
            {currentInfo.meetings.usualLocation} is the usual workspace. {currentInfo.meetings.locationNote}. Commitment {currentInfo.recruitment.commitment.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClass}>
              {ctaLabel}
            </a>
            <a
              href={projectEmailHref}
              className="inline-flex min-h-11 items-center justify-center px-4 text-sm font-bold text-white/65 underline decoration-white/25 underline-offset-4 hover:text-white"
            >
              Email about {name}
            </a>
          </div>
          <p className="mt-4 text-[0.65rem] uppercase tracking-wider text-white/45">
            Updated <time dateTime={projectCurrent.lastUpdatedISO}>{projectCurrent.lastUpdatedLabel}</time> · {projectCurrent.contentOwner}
          </p>
        </section>

        <nav aria-label="Explore another STAR project" className="mx-auto w-full max-w-5xl px-6 py-9 md:py-12">
          <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/45">Explore another project</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/${project.id}`}
                style={{ "--related-accent": project.accent } as CSSProperties}
                className="group flex min-h-20 items-center justify-between border border-white/15 px-5 py-4 transition-colors hover:border-[var(--related-accent)]/70 hover:bg-white/[0.025]"
              >
                <span>
                  <span className="block text-[0.58rem] uppercase tracking-[0.18em] text-[var(--related-accent)]">STAR project</span>
                  <span className="mt-1 block font-bold">{project.name}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-white/45 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </nav>

        <div className="mx-auto mt-4 w-full max-w-5xl px-6">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 border-t border-white/10 pt-8 text-sm text-white/45 transition-colors hover:text-white/70"
          >
            <Star aria-hidden="true" className="h-3.5 w-3.5 shrink-0 fill-[#9D2626] text-[#9D2626]" />
            A STAR Project · Space Technology Association of Rutgers
          </Link>
        </div>
      </div>
    </AccentContext.Provider>
  );
};

export default ProjectShell;
