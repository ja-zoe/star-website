import { ArrowDown, ArrowUpRight, Satellite, Wind, Wrench } from "lucide-react";
import { Link } from "react-router";

const programs = [
  { label: "CubeSat", Icon: Satellite, accent: "text-amber-300" },
  { label: "Robotics", Icon: Wrench, accent: "text-emerald-300" },
  { label: "Weather Balloon", Icon: Wind, accent: "text-sky-300" },
];

const HeroSection = () => (
  <section
    id="HeroPage"
    className="relative flex min-h-[88svh] w-full items-center overflow-hidden border-b border-white/10 px-5 pb-16 pt-32 md:px-10 md:pt-36"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(157,38,38,0.24),transparent_28%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,56px_56px,56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      aria-hidden="true"
    />
    <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
          Space Technology Association of Rutgers
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Build space systems at Rutgers.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
          STAR brings students together to engineer a CubeSat, an autonomous
          rover, and high-altitude balloon missions. All majors are welcome.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#JoinUsSection"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 font-bold text-black transition-colors hover:bg-red-200"
          >
            Join STAR
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#ProjectsSection"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 px-6 font-bold text-white transition-colors hover:border-white/60 hover:bg-white/5"
          >
            Explore projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg" aria-label="STAR project programs">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-300/25 shadow-[0_0_100px_rgba(157,38,38,0.28)] sm:h-96 sm:w-96" />
        <div className="relative grid gap-3 py-8 sm:py-14">
          {programs.map(({ label, Icon, accent }, index) => (
            <Link
              key={label}
              to={index === 0 ? "/cubesat" : index === 1 ? "/robotics" : "/weather-balloon"}
              className={`group flex min-h-20 items-center justify-between border border-white/15 bg-black/80 px-5 backdrop-blur-sm transition-transform hover:translate-x-2 hover:border-white/40 ${index === 1 ? "sm:ml-16" : index === 2 ? "sm:ml-7" : "sm:mr-9"}`}
            >
              <span className="flex items-center gap-4">
                <Icon className={`h-6 w-6 ${accent}`} aria-hidden="true" />
                <span className="font-bold">{label}</span>
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-white/40">
                Project 0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
