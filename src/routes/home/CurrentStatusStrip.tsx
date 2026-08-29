import { CalendarClock, CheckCircle2, MapPin, RotateCw } from "lucide-react";
import { currentInfo } from "../../content/currentInfo";

const items = [
  { label: "Term", value: currentInfo.term, Icon: CalendarClock },
  { label: "Recruitment", value: currentInfo.recruitment.status, Icon: CheckCircle2 },
  { label: "Meetings", value: currentInfo.meetings.status, Icon: MapPin },
  { label: "Updated", value: currentInfo.lastUpdatedLabel, Icon: RotateCw },
];

const CurrentStatusStrip = () => (
  <aside aria-label="Current STAR status" className="w-full border-b border-white/10 bg-white/[0.025] px-5 md:px-10">
    <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/10">
      {items.map(({ label, value, Icon }) => (
        <div key={label} className="flex min-h-20 items-center gap-3 border-b border-white/10 px-2 py-4 last:border-b-0 md:border-b-0 md:px-6">
          <Icon className="h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
          <div>
            <dt className="text-[0.55rem] uppercase tracking-[0.2em] text-white/40">{label}</dt>
            <dd className="mt-1 text-xs font-bold sm:text-sm">
              {label === "Updated" ? <time dateTime={currentInfo.lastUpdatedISO}>{value}</time> : value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  </aside>
);

export default CurrentStatusStrip;
