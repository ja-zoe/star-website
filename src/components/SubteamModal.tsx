import { useContext } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CalendarClock, CheckCircle2, GraduationCap } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import StarStat from "./StarStat";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { AccentContext } from "./project/accentContext";
import { currentInfo } from "../content/currentInfo";

export interface SubteamResponsibility {
  title: string;
  body: string;
}

export interface Subteam {
  name: string;
  discipline: string;
  lead: string;
  leadLabel: "Lead" | "Leads";
  icon: LucideIcon;
  summary: string;
  responsibilities: SubteamResponsibility[];
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SubteamModal = ({ subteam }: { subteam: Subteam }) => {
  const {
    name,
    discipline,
    lead,
    leadLabel,
    icon: Icon,
    summary,
    responsibilities,
  } = subteam;
  const { accent, projectName } = useContext(AccentContext);
  const location = useLocation();
  const navigate = useNavigate();
  const slug = toSlug(name);
  const hashTarget = decodeURIComponent(location.hash.slice(1));
  const open = hashTarget === slug;
  const emailHref = `${currentInfo.contact.emailHref.split("?")[0]}?subject=${encodeURIComponent(`Interested in STAR ${projectName} — ${name}`)}`;

  const setOpen = (nextOpen: boolean) => {
    if (nextOpen) {
      navigate({ pathname: location.pathname, hash: slug });
      return;
    }
    if (open) navigate({ pathname: location.pathname }, { replace: true });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        id={slug}
        aria-label={`View ${name} subteam details`}
        className="h-full w-full scroll-mt-28 cursor-pointer sm:w-auto"
      >
        <StarStat
          stat={name}
          Icon={Icon}
          eyebrow={discipline}
          headline={`${leadLabel}: ${lead}`}
          actionLabel="View responsibilities"
          className="accent-wash"
          projectCard
        />
      </DialogTrigger>
      <DialogContent
        style={{ "--accent": accent } as CSSProperties}
        className="space-mono max-h-[85vh] overflow-y-auto border-white/15 bg-black text-white sm:max-w-2xl"
      >
        <DialogHeader>
          <div className="flex items-center gap-4 pr-9 text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--accent)]/60 text-[var(--accent)]">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                {projectName} · {discipline}
              </p>
              <DialogTitle className="mt-1 text-2xl leading-tight">
                {name}
              </DialogTitle>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
                {leadLabel} · {lead}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="h-px bg-[var(--accent)]/30" />

        <DialogDescription className="text-left text-base leading-relaxed text-white/85">
          {summary}
        </DialogDescription>

        <section aria-labelledby={`${slug}-entry-heading`} className="border-y border-white/10 py-4 text-left">
          <h3 id={`${slug}-entry-heading`} className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            Joining this subteam
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/50">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Interest
              </dt>
              <dd className="mt-1 text-sm">{currentInfo.recruitment.status} · confirm capacity</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/50">
                <GraduationCap className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Experience
              </dt>
              <dd className="mt-1 text-sm">Beginner-friendly</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-[0.6rem] uppercase tracking-wider text-white/50">
                <CalendarClock className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" /> Commitment
              </dt>
              <dd className="mt-1 text-sm">Confirm with the lead</dd>
            </div>
          </dl>
          <div className="mt-4">
            <p className="text-[0.6rem] uppercase tracking-wider text-white/50">Useful starting interests</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {responsibilities.slice(0, 3).map((responsibility) => (
                <li key={responsibility.title} className="border border-white/15 px-2.5 py-1 text-xs text-white/75">
                  {responsibility.title}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby={`${slug}-work-heading`} className="text-left">
          <h3 id={`${slug}-work-heading`} className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
            What the work includes
          </h3>
          <ol className="mt-2 divide-y divide-white/10">
            {responsibilities.map((responsibility, index) => (
              <li key={responsibility.title} className="flex gap-4 py-3.5">
                <span className="mt-0.5 font-mono text-sm tabular-nums text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-semibold">{responsibility.title}</h4>
                  <p className="mt-1 leading-relaxed text-white/70">{responsibility.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
          <a
            href={currentInfo.contact.discordHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-5 text-sm font-bold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black"
          >
            Ask about {name}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={emailHref} className="inline-flex min-h-11 items-center justify-center px-4 text-sm font-bold text-white/65 underline decoration-white/25 underline-offset-4 hover:text-white">
            Email the project team
          </a>
        </div>
        <p className="text-left text-xs leading-5 text-white/50">
          Meeting time and weekly commitment vary. Confirm both with {leadLabel === "Lead" ? "the lead" : "a lead"} before planning your schedule.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default SubteamModal;
