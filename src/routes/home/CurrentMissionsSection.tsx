import { ArrowUpRight, Satellite, Wind, Wrench } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "../../components/SectionHeading";
import { currentInfo, type ProjectId } from "../../content/currentInfo";

const missions: Array<{
  id: ProjectId;
  name: string;
  href: string;
  Icon: typeof Satellite;
  accent: string;
}> = [
  { id: "cubesat", name: "CubeSat", href: "/cubesat", Icon: Satellite, accent: "text-amber-300" },
  { id: "robotics", name: "Robotics", href: "/robotics", Icon: Wrench, accent: "text-emerald-300" },
  { id: "weather-balloon", name: "Weather Balloon", href: "/weather-balloon", Icon: Wind, accent: "text-sky-300" },
];

const CurrentMissionsSection = () => (
  <section className="w-full border-b border-white/10 px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Current missions" title="What teams are focused on now." />
        <p className="text-xs uppercase tracking-wider text-white/40">
          Snapshot updated <time dateTime={currentInfo.lastUpdatedISO}>{currentInfo.lastUpdatedLabel}</time>
        </p>
      </div>
      <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
        {missions.map(({ id, name, href, Icon, accent }) => {
          const mission = currentInfo.projects[id];
          return (
            <Link key={id} to={href} className="group grid min-h-28 items-center gap-4 py-5 transition-colors hover:bg-white/[0.025] sm:grid-cols-[0.45fr_1fr_auto] sm:px-5">
              <span className="flex items-center gap-4 font-bold">
                <Icon className={`h-5 w-5 ${accent}`} aria-hidden="true" />
                {name}
              </span>
              <span>
                <span className="block text-sm text-white/70">{mission.status}</span>
                <span className="mt-1 block text-xs text-white/40">{mission.schedule}</span>
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold">
                Mission brief <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default CurrentMissionsSection;
