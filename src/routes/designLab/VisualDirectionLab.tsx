import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Mail,
  Radio,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { MovingBorderButton } from "../../components/ui/moving-border";
import { Spotlight } from "../../components/ui/spotlight-new";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { WobbleCard } from "../../components/ui/wobble-card";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";
import kanika from "/eboard/kanika.webp";
import praneeth from "/eboard/praneeth.webp";
import nila from "/eboard/nila.webp";
import RutgersLogo from "/rutgers-logo.png";
import NasaLogo from "/nasa-logo.png";
import SedsLogo from "/seds-logo.png";
import UNPLogo from "/unp-logo.png";

const projects = [
  {
    name: "Robotics",
    detail: "An autonomous rover built for NASA Lunabotics.",
    href: "/robotics",
    accent: "#34D399",
    icon: roverIcon,
    number: "01",
  },
  {
    name: "Weather Balloon",
    detail: "Experiments launched beyond 80,000 feet.",
    href: "/weather-balloon",
    accent: "#38BDF8",
    icon: weatherBalloonIcon,
    number: "02",
  },
  {
    name: "CubeSat",
    detail: "Rutgers students building a satellite from scratch.",
    href: "/cubesat",
    accent: "#F5A524",
    icon: satelliteIcon,
    number: "03",
  },
];

const ConceptLabel = ({
  option,
  title,
  components,
}: {
  option: string;
  title: string;
  components: string;
}) => (
  <div className="mb-5 flex flex-col gap-2 border-l-2 border-red-400 pl-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-red-300">
        Option {option}
      </p>
      <h3 className="mt-1 text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-xs text-white/40">Aceternity: {components}</p>
  </div>
);

const LabSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-24 border-t border-white/10 px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto w-full max-w-7xl">
      <h2 className="sr-only">{title}</h2>
      <div className="h-24 sm:h-32" aria-hidden="true">
        <TextHoverEffect text={title} />
      </div>
      {children}
    </div>
  </section>
);

const HeroCopy = () => (
  <div className="relative z-10 max-w-2xl">
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
      Space Technology Association of Rutgers
    </p>
    <h2 className="mt-5 text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
      We build things that leave the ground.
    </h2>
    <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
      A Rutgers student team figuring out satellites, rovers, and near-space
      missions together. You do not need to arrive knowing how.
    </p>
  </div>
);

const ProjectRail = ({ treatment }: { treatment: "plain" | "glow" | "solid" }) => (
  <div className="relative z-10 space-y-3">
    {projects.map((project) => {
      const row = (
        <Link
          to={project.href}
          className="group flex min-h-20 items-center justify-between px-5"
        >
          <span className="flex items-center gap-4">
            <img src={project.icon} alt="" className="h-8 w-8 invert" />
            <span className="font-bold">{project.name}</span>
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      );

      if (treatment === "glow") {
        return (
          <BackgroundGradient key={project.name} containerClassName="rounded-none p-px" className="bg-black">
            {row}
          </BackgroundGradient>
        );
      }

      return (
        <div
          key={project.name}
          className={
            treatment === "solid"
              ? "bg-white text-black"
              : "border-b border-white/20 transition-colors hover:bg-white/5"
          }
        >
          {row}
        </div>
      );
    })}
  </div>
);

const HeroDirections = ({ motionEnabled }: { motionEnabled: boolean }) => (
  <LabSection id="heroes" title="HERO DIRECTIONS">
    <div className="space-y-20">
      <article>
        <ConceptLabel option="A" title="Signal" components="Spotlight + Hover Border Gradient" />
        <div className="relative overflow-hidden border-y border-white/15 bg-black px-6 py-16 sm:px-10 lg:py-24">
          <Spotlight
            animate={motionEnabled}
            gradientFirst="radial-gradient(68% 68% at 55% 31%, rgba(248,113,113,.16), rgba(157,38,38,.03) 55%, transparent 80%)"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <HeroCopy />
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                <HoverBorderGradient as="a" href="#join-options" animate={motionEnabled} className="bg-black">
                  Join STAR
                </HoverBorderGradient>
                <a href="#project-options" className="inline-flex min-h-11 items-center px-5 text-sm font-bold underline decoration-white/30 underline-offset-4">
                  See the work
                </a>
              </div>
            </div>
            <ProjectRail treatment="plain" />
          </div>
        </div>
      </article>

      <article>
        <ConceptLabel option="B" title="Spectrum" components="Background Gradient + Moving Border" />
        <div className="relative overflow-hidden rounded-[2rem] bg-[#070707] px-6 py-16 sm:px-10 lg:py-24">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" aria-hidden="true" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <HeroCopy />
              <div className="mt-8">
                <MovingBorderButton as="a" href="#join-options" animate={motionEnabled} borderRadius="999px">
                  Join the next build
                </MovingBorderButton>
              </div>
            </div>
            <ProjectRail treatment="glow" />
          </div>
        </div>
      </article>

      <article>
        <ConceptLabel option="C" title="Field Notes" components="Wobble Card + Text Hover Effect" />
        <div className="relative px-1 py-10 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <HeroCopy />
              <p className="mt-8 max-w-lg border-l border-red-300/60 pl-5 text-sm italic leading-7 text-white/55">
                “Most of us joined before we knew how any of this worked. That is
                kind of the point.”
              </p>
            </div>
            <WobbleCard animate={motionEnabled} containerClassName="bg-[#9D2626]" className="p-5 sm:p-8">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-white/55">On the workbench</p>
              <ProjectRail treatment="solid" />
            </WobbleCard>
          </div>
        </div>
      </article>
    </div>
  </LabSection>
);

const ProjectOptions = ({ motionEnabled }: { motionEnabled: boolean }) => (
  <LabSection id="project-options" title="PROJECT CARD OPTIONS">
    <div className="space-y-20">
      <div>
        <ConceptLabel option="A" title="Mission slabs" components="Wobble Card" />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <WobbleCard key={project.name} animate={motionEnabled} containerClassName="min-h-80 bg-neutral-950 border border-white/15" className="flex min-h-80 flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="text-xs text-white/40">PROJECT {project.number}</span>
                <img src={project.icon} alt="" className="h-16 w-16 invert" />
              </div>
              <h3 className="mt-auto text-3xl font-bold">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{project.detail}</p>
              <span className="mt-6 text-sm font-bold" style={{ color: project.accent }}>Open mission brief →</span>
            </WobbleCard>
          ))}
        </div>
      </div>

      <div>
        <ConceptLabel option="B" title="Live instruments" components="Background Gradient" />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <BackgroundGradient key={project.name} animate={motionEnabled} containerClassName="rounded-3xl" className="flex min-h-72 flex-col rounded-[1.35rem] bg-black p-6">
              <p className="text-xs text-white/40">{project.number} / ACTIVE PROGRAM</p>
              <img src={project.icon} alt="" className="mt-8 h-14 w-14 invert" />
              <h3 className="mt-auto text-2xl font-bold">{project.name}</h3>
              <p className="mt-2 text-sm text-white/55">{project.detail}</p>
            </BackgroundGradient>
          ))}
        </div>
      </div>

      <div>
        <ConceptLabel option="C" title="Studio board" components="Bento Grid + Glowing Effect" />
        <BentoGrid className="md:auto-rows-[16rem]">
          {projects.map((project, index) => (
            <BentoGridItem
              key={project.name}
              className={`relative overflow-hidden rounded-none border-white/15 bg-black ${index === 0 ? "md:col-span-2" : ""}`}
              header={
                <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-white/[0.025]">
                  <GlowingEffect glow disabled={!motionEnabled} proximity={90} spread={35} />
                  <img src={project.icon} alt="" className="h-20 w-20 invert opacity-80" />
                </div>
              }
              icon={<span className="text-xs" style={{ color: project.accent }}>PROJECT {project.number}</span>}
              title={<span className="font-mono text-xl">{project.name}</span>}
              description={<span className="font-mono text-white/50">{project.detail}</span>}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  </LabSection>
);

const JoinOptions = ({ motionEnabled }: { motionEnabled: boolean }) => (
  <LabSection id="join-options" title="JOIN SECTION OPTIONS">
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="flex min-h-[26rem] flex-col border border-white/15 p-6">
        <ConceptLabel option="A" title="Open frequency" components="Moving Border" />
        <Radio className="mt-8 h-12 w-12 text-red-300" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-bold">Come by. Ask too many questions.</h3>
        <p className="mt-4 text-sm leading-6 text-white/55">Discord is where plans happen. The Cage is where things get built.</p>
        <div className="mt-auto pt-8">
          <MovingBorderButton as="a" href="https://discord.gg/vHa52wx9VK" animate={motionEnabled} borderRadius="0px" containerClassName="w-full">
            Join Discord
          </MovingBorderButton>
        </div>
      </div>

      <WobbleCard animate={motionEnabled} containerClassName="min-h-[26rem] bg-[#9D2626]" className="flex min-h-[26rem] flex-col p-7">
        <ConceptLabel option="B" title="Open workshop" components="Wobble Card" />
        <Sparkles className="mt-7 h-12 w-12" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-bold">No application. No secret handshake.</h3>
        <p className="mt-4 text-sm leading-6 text-white/70">Pick a project, meet the people, and start with something small.</p>
        <a href="mailto:rutgersstar@gmail.com" className="mt-auto inline-flex min-h-12 items-center justify-between border-t border-white/30 pt-5 font-bold">
          Email a real person <Mail className="h-5 w-5" aria-hidden="true" />
        </a>
      </WobbleCard>

      <BackgroundGradient animate={motionEnabled} containerClassName="min-h-[26rem] rounded-3xl" className="flex min-h-[26rem] flex-col rounded-[1.35rem] bg-black p-7">
        <ConceptLabel option="C" title="First contact" components="Background Gradient" />
        <p className="mt-7 text-xs uppercase tracking-[0.2em] text-white/45">Fall 2026 / channel open</p>
        <h3 className="mt-5 text-3xl font-bold">You can just show up.</h3>
        <p className="mt-4 text-sm leading-6 text-white/55">Seriously. Most members learned the tools after joining.</p>
        <HoverBorderGradient as="a" href="https://discord.gg/vHa52wx9VK" animate={motionEnabled} containerClassName="mt-auto" className="bg-black">
          Start here →
        </HoverBorderGradient>
      </BackgroundGradient>
    </div>
  </LabSection>
);

const PeopleAndPartners = ({ motionEnabled }: { motionEnabled: boolean }) => {
  const people = [
    { name: "Kanika", role: "President", photo: kanika },
    { name: "Praneeth", role: "Vice President", photo: praneeth },
    { name: "Nila", role: "Outreach", photo: nila },
  ];
  const logos = [RutgersLogo, NasaLogo, SedsLogo, UNPLogo];

  return (
    <LabSection id="people" title="PEOPLE + PARTNERS">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ConceptLabel option="A" title="People first" components="Wobble Card" />
          <div className="grid grid-cols-3 gap-3">
            {people.map((person) => (
              <WobbleCard key={person.name} animate={motionEnabled} containerClassName="bg-neutral-950 border border-white/15" className="p-3 sm:p-5">
                <img src={person.photo} alt={person.name} className="aspect-[4/5] w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
                <h3 className="mt-4 text-sm font-bold sm:text-base">{person.name}</h3>
                <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-white/45">{person.role}</p>
              </WobbleCard>
            ))}
          </div>
        </div>
        <div>
          <ConceptLabel option="B" title="Relationship rail" components="Spotlight" />
          <div className="relative min-h-80 overflow-hidden border-y border-white/15 px-6 py-12">
            <Spotlight animate={motionEnabled} width={320} smallWidth={140} translateY={-520} />
            <div className="relative z-10 grid grid-cols-2 gap-10">
              {logos.map((logo, index) => (
                <div key={logo} className="flex min-h-20 flex-col items-center justify-center gap-3">
                  <img src={logo} alt="" className={`max-h-12 max-w-32 ${index === 2 || index === 3 ? "" : "invert"}`} />
                  <span className="text-center text-[0.55rem] uppercase tracking-[0.18em] text-white/40">
                    {['Home institution', 'Competition', 'Chapter network', 'CubeSat program'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LabSection>
  );
};

const VisualDirectionLab = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [motionRequested, setMotionRequested] = useState(true);
  const motionEnabled = motionRequested && !prefersReducedMotion;

  return (
    <div className="relative min-h-screen bg-black pb-20 pt-28 text-white">
      <title>STAR Visual Direction Lab</title>
      <meta name="robots" content="noindex, nofollow" />
      <header className="px-5 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl border-b border-white/15 pb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">STAR visual direction lab / not production</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight sm:text-6xl">Pick the pieces that feel like us.</h1>
          <p className="mt-5 max-w-3xl leading-7 text-white/60">
            Same Space Mono type, same starfield, same landing structure. These
            are working Aceternity treatments, not a finished redesign. Mix hero,
            project, join, and people options independently.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setMotionRequested((value) => !value)}
              disabled={prefersReducedMotion}
              aria-pressed={motionEnabled}
              className="inline-flex min-h-11 items-center gap-3 border border-white/25 px-5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className={`h-2 w-2 rounded-full ${motionEnabled ? "bg-emerald-300" : "bg-white/30"}`} />
              Motion {motionEnabled ? "on" : "off"}
            </button>
            {prefersReducedMotion && <p className="text-xs text-white/45">System reduced-motion preference is active.</p>}
            <nav aria-label="Design lab sections" className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-white/55">
              <a href="#heroes">Heroes</a>
              <a href="#project-options">Project cards</a>
              <a href="#join-options">Join sections</a>
              <a href="#people">People + partners</a>
            </nav>
          </div>
        </div>
      </header>
      <HeroDirections motionEnabled={motionEnabled} />
      <ProjectOptions motionEnabled={motionEnabled} />
      <JoinOptions motionEnabled={motionEnabled} />
      <PeopleAndPartners motionEnabled={motionEnabled} />
    </div>
  );
};

export default VisualDirectionLab;
