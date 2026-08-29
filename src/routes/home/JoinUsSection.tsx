import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { ArrowUpRight, CalendarClock, Mail, MapPin } from "lucide-react";
import DiscordLogo from "/discord-icon.png";

const JoinUsSection = () => {
  return (
    <div id="JoinUsSection" className="flex w-full scroll-mt-24 flex-col pb-20 pt-10">
      <TextHoverEffect text="JOIN STAR" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 md:px-10">
        <div className="overflow-hidden border border-white/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,0,0,0.94)_45%,rgba(157,38,38,0.22))]">
          <div className="grid gap-8 border-b border-white/15 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-300">
                Open to every Rutgers student
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                Your first build starts here.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                No application and no prior experience required. Join the
                conversation, find the project that interests you, and meet the
                team in person.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://discord.gg/vHa52wx9VK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-3 bg-white px-5 py-3 font-bold text-black transition-colors hover:bg-red-200"
                >
                  <img
                    src={DiscordLogo}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  Join the STAR Discord
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="mailto:rutgersstar@gmail.com?subject=STAR%20Fall%202026%20meeting%20details"
                  className="inline-flex min-h-11 items-center justify-center gap-3 border border-white/40 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Ask about the next meeting
                </a>
              </div>
            </div>

            <aside className="border border-red-300/30 bg-black/55 p-5" aria-label="Meeting status">
              <div className="flex items-center gap-3 text-red-300">
                <CalendarClock className="h-5 w-5" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Next general meeting
                </p>
              </div>
              <p className="mt-4 text-xl font-bold">
                Fall 2026 schedule being finalized
              </p>
              <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/70">
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <p>
                  Usual location: The Cage, Rutgers University. Email us or
                  check Discord for the confirmed date, time, and room before
                  traveling.
                </p>
              </div>
            </aside>
          </div>

          <ol className="grid md:grid-cols-3">
            {[
              ["01", "Join Discord", "Get announcements and the latest meeting details in the club's main communications channel."],
              ["02", "Choose a project", "Meet CubeSat, Robotics, and Weather Balloon members, then pick a project or subteam to try."],
              ["03", "Attend a meeting", "Show up to a general or subteam meeting, introduce yourself, and ask for a starter task."],
            ].map(([number, title, body], index) => (
              <li
                key={number}
                className={`p-6 md:p-8 ${index < 2 ? "border-b border-white/15 md:border-b-0 md:border-r" : ""}`}
              >
                <span className="text-sm font-bold text-red-300">{number}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{body}</p>
              </li>
            ))}
          </ol>

          <div className="flex items-start gap-4 border-t border-white/15 bg-white/[0.03] p-6 md:px-10">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-300" aria-hidden="true" />
            <p className="text-sm leading-6 text-white/70">
              <strong className="text-white">What to expect in your first week:</strong>{" "}
              meet project leads, sit in with a subteam, and choose a manageable
              first task. Bring a laptop if you have one; curiosity is the only
              prerequisite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
