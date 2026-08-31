import { Pause, Play } from "lucide-react";
import KineticStarConstellation from "../../components/hero/KineticStarConstellation";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import FlightPathInstrument from "./heroVisuals/FlightPathInstrument";
import HeroVisualPrototype from "./heroVisuals/HeroVisualPrototype";
import ReactiveMissionBoard from "./heroVisuals/ReactiveMissionBoard";

const concepts = [
  {
    option: "A" as const,
    id: "option-a",
    title: "Reactive Mission Circuit Board",
    discipline: "hardware language",
    description:
      "A project-routed PCB with functional traces, inspection light, real Rutgers coordinates, and no fabricated dashboard data.",
    visual: ReactiveMissionBoard,
  },
  {
    option: "B" as const,
    id: "option-b",
    title: "Flight Path Instrument",
    discipline: "mission language",
    description:
      "One restrained instrument that becomes a rover traverse, atmospheric ascent, or CubeSat orbit when the project signal changes.",
    visual: FlightPathInstrument,
  },
  {
    option: "C" as const,
    id: "option-c",
    title: "Kinetic STAR Constellation",
    discipline: "brand language",
    description:
      "A custom 2D particle system that forms STAR, reacts to the pointer, and transmits a project-colored signal without WebGL.",
    visual: KineticStarConstellation,
  },
];

const HeroVisualComparisonLab = () => {
  const reducedMotion = usePrefersReducedMotion();
  const motionEnabled = !reducedMotion;

  return (
    <div
      id="comparison-top"
      data-hero-comparison-lab
      data-motion-enabled={motionEnabled ? "true" : "false"}
      className="relative min-h-screen bg-black px-5 pb-24 pt-32 text-white md:px-10"
    >
      <title>STAR Hero Visual Comparison</title>
      <meta
        name="description"
        content="Private comparison lab for three code-native STAR homepage hero visual directions."
      />
      <meta name="robots" content="noindex, nofollow" />

      <header className="mx-auto max-w-7xl border-b border-white/15 pb-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-red-300">
              STAR hero visual lab / not production
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Three different reasons to stop scrolling.
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
              These use the same copy, footprint, and project controls. Judge the visual idea,
              not a favorable mockup around it. Hover, focus, or tap each project row before deciding.
            </p>
          </div>
          <div className="flex min-h-11 items-center gap-3 border border-white/15 px-4 text-[0.58rem] uppercase tracking-[0.18em] text-white/45">
            {motionEnabled ? <Play className="h-3.5 w-3.5 text-red-300" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5 text-red-300" aria-hidden="true" />}
            {motionEnabled ? "Motion active" : "Static by preference"}
          </div>
        </div>
      </header>

      <nav
        aria-label="Hero visual options"
        className="sticky top-20 z-20 mx-auto mt-5 flex max-w-7xl flex-wrap gap-x-8 gap-y-2 border-y border-white/10 bg-black/90 px-1 py-3 text-[0.58rem] font-bold uppercase tracking-[0.2em] backdrop-blur-md"
      >
        {concepts.map((concept) => (
          <a key={concept.id} href={`#${concept.id}`} className="min-h-9 content-center text-white/45 transition-colors hover:text-red-200 focus-visible:outline-none focus-visible:text-red-200">
            {concept.option} / {concept.title}
          </a>
        ))}
      </nav>

      <main className="mx-auto max-w-7xl">
        {concepts.map((concept) => (
          <HeroVisualPrototype
            key={concept.id}
            {...concept}
            motionEnabled={motionEnabled}
          />
        ))}
      </main>

      <section id="comparison-notes" className="mx-auto max-w-7xl scroll-mt-32 border-y border-white/15 py-10">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-red-300">Comparison notes</p>
        <div className="mt-6 grid gap-8 text-sm leading-6 text-white/50 md:grid-cols-3">
          <p><strong className="block text-white">A / Hardware</strong>Most literal connection to building physical systems. Dense by design, but contains almost no reading.</p>
          <p><strong className="block text-white">B / Missions</strong>Explains the breadth of STAR fastest because each project produces genuinely different motion.</p>
          <p><strong className="block text-white">C / Identity</strong>Most immediate and memorable from a distance. It communicates STAR before it communicates specific work.</p>
        </div>
      </section>
    </div>
  );
};

export default HeroVisualComparisonLab;
