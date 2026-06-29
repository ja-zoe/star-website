import { useContext } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
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

export interface SubteamResponsibility {
  /** Short title, e.g. "Chassis & CAD". */
  title: string;
  /** One concise, concrete sentence. */
  body: string;
}

export interface Subteam {
  /** Display name (also the trigger-card stat), e.g. "Structures". */
  name: string;
  /** Lead name(s), e.g. "Aidan McLendon". */
  lead: string;
  /** "Lead" or "Leads" depending on count. */
  leadLabel: "Lead" | "Leads";
  icon: LucideIcon;
  /** One-line lead-in shown under the header (also the a11y description). */
  summary: string;
  responsibilities: SubteamResponsibility[];
}

/**
 * A subteam: a tilt stat-card trigger (StarStat, themed by the page --accent via
 * `.accent-wash`) that opens a designed dialog — icon in an accent ring, a
 * LEAD chip, a summary, and a numbered, accent-marked responsibility list.
 * The dialog reads the active project accent from AccentContext (it portals to
 * <body>, escaping the page's CSS variable) and re-applies it on DialogContent.
 */
const SubteamModal = ({ subteam }: { subteam: Subteam }) => {
  const { name, lead, leadLabel, icon: Icon, summary, responsibilities } =
    subteam;
  const accent = useContext(AccentContext);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer h-full">
        <StarStat
          stat={name}
          Icon={Icon}
          headline={`${leadLabel}: ${lead}`}
          className="accent-wash h-60"
        />
      </DialogTrigger>
      <DialogContent
        style={{ "--accent": accent } as CSSProperties}
        className="space-mono bg-black text-white border-white/15 sm:max-w-lg max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <div className="flex items-center gap-4 text-left">
            <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full border border-[var(--accent)]/60 text-[var(--accent)]">
              <Icon className="w-6 h-6" />
            </span>
            <div>
              <DialogTitle className="text-2xl leading-tight">
                {name}
              </DialogTitle>
              <p className="mt-1 text-[0.7rem] tracking-[0.2em] uppercase text-[var(--accent)]">
                {leadLabel} · {lead}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="h-px bg-[var(--accent)]/30" />

        <DialogDescription className="text-left text-base leading-relaxed text-white/85">
          {summary}
        </DialogDescription>

        <dl className="text-left divide-y divide-white/10">
          {responsibilities.map((r, i) => (
            <div key={r.title} className="flex gap-4 py-3.5">
              <span className="mt-0.5 font-mono text-sm tabular-nums text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-semibold">{r.title}</dt>
                <dd className="mt-1 leading-relaxed text-white/70">{r.body}</dd>
              </div>
            </div>
          ))}
        </dl>
      </DialogContent>
    </Dialog>
  );
};

export default SubteamModal;
