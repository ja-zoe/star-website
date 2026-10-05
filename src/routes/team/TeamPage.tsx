import { Star } from "lucide-react";
import { useSearchParams } from "react-router";
import Seo from "../../components/Seo";
import PersonTile from "../../components/people/PersonTile";
import { roleLabel } from "../../components/people/roleLabel";
import { projectConfigs } from "../../components/project/projectConfig";
import { currentInfo } from "../../content/currentInfo";
import { PROJECT_ORDER, teamMembers, type TeamGroup } from "../../content/people";
import { cn } from "../../lib/utils";

const GROUPS: { id: TeamGroup; label: string }[] = [
  { id: "all", label: "All" },
  { id: "eboard", label: "E-board" },
  ...PROJECT_ORDER.map((id) => ({
    id,
    label: projectConfigs.find((config) => config.id === id)?.name ?? id,
  })),
];

const TeamPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("group");
  // Unknown or missing values fall back to everyone.
  const group = GROUPS.find((candidate) => candidate.id === requested)?.id ?? "all";
  const members = teamMembers(group);
  const inProject = group !== "all" && group !== "eboard";

  const selectGroup = (next: TeamGroup) => {
    setSearchParams(next === "all" ? {} : { group: next }, { replace: true, preventScrollReset: true });
  };

  return (
    <div className="relative z-10 w-full px-5 pb-24 pt-32 md:px-10 md:pt-40">
      <Seo
        title="Team — STAR"
        description="Meet the students who run STAR: the e-board, project managers and chief engineers, and the leads of every CubeSat, Robotics, and Weather Balloon subteam."
        path="/team"
        image="/og/team.png"
      />
      <div className="mx-auto w-full max-w-7xl">
        <header className="flex flex-col items-center gap-4 text-center">
          <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-red-300 sm:text-sm">
            <Star aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#9D2626] text-[#9D2626]" />
            STAR · {currentInfo.term}
          </p>
          <h1 className="text-5xl font-bold md:text-7xl">The team</h1>
          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            The e-board, project leadership, and subteam leads. Open anyone to see everything they do.
          </p>
        </header>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div role="group" aria-label="Filter the team" className="flex flex-wrap justify-center gap-2">
            {GROUPS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={group === id}
                onClick={() => selectGroup(id)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors",
                  group === id
                    ? "border-red-300 bg-red-300 text-black"
                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="text-xs uppercase tracking-[0.16em] text-white/45">
            {members.length} {members.length === 1 ? "person" : "people"}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {members.map(({ person, role }) => (
            <li key={person.id}>
              <PersonTile
                person={person}
                role={roleLabel(role, { withProject: !inProject })}
                detail={person.major}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamPage;
