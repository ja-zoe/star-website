import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { Spotlight } from "../../components/ui/spotlight-new";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";

const programs = [
  { label: "Robotics", href: "/robotics", icon: roverIcon },
  { label: "Weather Balloon", href: "/weather-balloon", icon: weatherBalloonIcon },
  { label: "CubeSat", href: "/cubesat", icon: satelliteIcon },
];

const HeroSection = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="HeroPage"
      className="relative flex min-h-[90svh] w-full items-center overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 md:px-10 md:pt-36"
    >
      <Spotlight
        animate={!reducedMotion}
        gradientFirst="radial-gradient(68% 68% at 55% 31%, rgba(248,113,113,.17), rgba(157,38,38,.035) 55%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(56,189,248,.07), transparent 82%)"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
            Space Technology Association of Rutgers
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            We build things that leave the ground.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
            A Rutgers student team figuring out satellites, rovers, and
            near-space missions together. You do not need to arrive knowing how.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <HoverBorderGradient
              as="a"
              href="#JoinUsSection"
              animate={!reducedMotion}
              containerClassName="rounded-full"
              className="bg-black px-5 py-2.5 font-bold"
            >
              Join STAR
            </HoverBorderGradient>
            <a
              href="#ProjectsSection"
              className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold underline decoration-white/30 underline-offset-4 transition-colors hover:text-red-200"
            >
              See what we build
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="relative z-10 space-y-2" aria-label="STAR project programs">
          <p className="mb-5 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-white/35">
            Current programs
          </p>
          {programs.map((program, index) => (
            <Link
              key={program.href}
              to={program.href}
              className="group flex min-h-20 items-center justify-between border-b border-white/20 px-2 transition-colors hover:bg-white/[0.035] sm:px-5"
            >
              <span className="flex items-center gap-4">
                <img
                  src={program.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-9 w-9 invert opacity-85"
                />
                <span className="font-bold">{program.label}</span>
              </span>
              <span className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
                0{index + 1}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
