import type { CSSProperties, ReactNode } from "react";
import { WavyBackground } from "../ui/wavy-background";
import SectionLabel from "./SectionLabel";
import type { ProjectConfig } from "./projectConfig";
import { AccentContext } from "./accentContext";

/**
 * Shared editorial "mission dossier" layout for the three project pages
 * (design/components.md › Project page kit). Every page renders through this,
 * differentiated only by `config` + the `--accent` it sets on the root — that
 * single variable re-themes every accent usage (labels, stat numerals, hero
 * glow, dividers, CTAs) so the pages are a cohesive series yet curated to each
 * project. `children` are the page's interactive subteam cards.
 *
 * Typographic/graphic only — no photographs (per the club's design direction).
 */
const ProjectShell = ({
  config,
  children,
}: {
  config: ProjectConfig;
  children: ReactNode;
}) => {
  const {
    eyebrow,
    name,
    tagline,
    accent,
    motifIcon: Motif,
    stats,
    mission,
    statusBody,
    meetingNote,
    ctaHref,
    ctaLabel,
  } = config;

  const ctaClass =
    "inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-6 py-2.5 font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black";

  return (
    <AccentContext.Provider value={accent}>
    <div
      className="min-h-screen bg-black flex flex-col pb-10"
      style={{ "--accent": accent } as CSSProperties}
    >
      {/* HERO */}
      <header className="relative text-center">
        <WavyBackground
          colors={[accent, "#0a0a0a"]}
          waveOpacity={0.4}
          className="grid place-items-center px-6"
        >
          <Motif
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-[58vw] max-w-[420px] text-[var(--accent)] opacity-[0.07]"
          />
          <div className="relative flex flex-col items-center gap-5">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--accent)]">
              {eyebrow}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">{name}</h1>
            <p className="max-w-2xl text-lg text-white/80">{tagline}</p>
            <a href="#mission" className={`mt-2 ${ctaClass}`}>
              Explore the mission
            </a>
          </div>
        </WavyBackground>
      </header>

      {/* STAT BAND */}
      <section aria-label="At a glance" className="border-y border-white/10">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-4 md:divide-x md:divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:px-4">
              <dt className="text-2xl font-bold text-[var(--accent)] md:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* MISSION */}
      <section
        id="mission"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-16 text-left md:py-24"
      >
        <SectionLabel index="01">The Mission</SectionLabel>
        <div className="mt-8 space-y-5 border-l-2 border-[var(--accent)]/40 pl-6 leading-relaxed text-white/80">
          {mission.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* SUBTEAMS */}
      <section className="w-full px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-left">
          <SectionLabel index="02">Subteams</SectionLabel>
        </div>
        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-8">
          {children}
        </div>
      </section>

      {/* STATUS / JOIN */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16 text-center md:py-24">
        <div className="flex justify-center">
          <SectionLabel index="03">Status &amp; Join</SectionLabel>
        </div>
        <p className="mt-8 text-xl text-white/90">{statusBody}</p>
        <p className="mx-auto mt-4 max-w-xl text-white/60">{meetingNote}</p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 ${ctaClass}`}
        >
          {ctaLabel}
        </a>
      </section>
    </div>
    </AccentContext.Provider>
  );
};

export default ProjectShell;
