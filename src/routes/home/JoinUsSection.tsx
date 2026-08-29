import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { ArrowUpRight, CalendarClock, Mail } from "lucide-react";
import DiscordLogo from "/discord-icon.png";

const JoinUsSection = () => {
  return (
    <div id="JoinUsSection" className="flex w-full scroll-mt-24 flex-col pb-20 pt-10">
      <TextHoverEffect text="JOIN STAR" />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="relative overflow-hidden border-y border-white/20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(157,38,38,0.28),transparent_28%),linear-gradient(110deg,rgba(255,255,255,0.035),transparent_48%)]"
            aria-hidden="true"
          />

          <div className="relative grid md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-b border-white/15 md:min-h-[25rem] md:border-b-0 md:border-r">
              <div className="absolute h-52 w-52 rounded-full border border-red-300/30 md:h-72 md:w-72" />
              <div className="absolute h-36 w-36 rotate-12 rounded-full border border-dashed border-white/20 md:h-52 md:w-52" />
              <span className="absolute left-5 top-5 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/45 md:left-8 md:top-8">
                Membership channel / 01
              </span>
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-red-300/50 bg-black shadow-[0_0_70px_rgba(157,38,38,0.55)] md:h-36 md:w-36">
                <img
                  src={DiscordLogo}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16 invert md:h-20 md:w-20"
                />
              </div>
              <span className="absolute bottom-7 right-7 h-2 w-2 rounded-full bg-red-300 shadow-[0_0_18px_#fca5a5]" />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 md:px-14 md:py-14 lg:px-20">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-300">
                Open to every Rutgers student
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] md:text-6xl">
                Find your crew. Build something real.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Start in Discord, meet a project team, and take on a first task.
                No application or prior experience required.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://discord.gg/vHa52wx9VK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-3 bg-white px-6 py-3 font-bold text-black transition-colors hover:bg-red-200"
                >
                  Join Discord
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="mailto:rutgersstar@gmail.com?subject=STAR%20Fall%202026%20meeting%20details"
                  className="inline-flex min-h-11 items-center justify-center gap-3 px-5 py-3 font-bold text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email STAR
                </a>
              </div>
            </div>
          </div>

          <ol className="relative grid border-t border-white/15 sm:grid-cols-3">
            {[
              ["01", "Connect", "Join the Discord"],
              ["02", "Choose", "Find your project"],
              ["03", "Show up", "Attend a meeting"],
            ].map(([number, title, detail], index) => (
              <li
                key={number}
                className={`flex items-center gap-4 px-6 py-5 ${index < 2 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}`}
              >
                <span className="text-xs font-bold text-red-300">{number}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-xs text-white/45">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative flex flex-col gap-3 border-t border-white/15 px-6 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-3">
              <CalendarClock className="h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
              <span>
                <strong className="text-white">Fall 2026 schedule pending</strong>
                {" · "}Usual location: The Cage
              </span>
            </p>
            <a
              href="mailto:rutgersstar@gmail.com?subject=STAR%20Fall%202026%20meeting%20details"
              className="font-bold text-white underline decoration-red-300/60 underline-offset-4"
            >
              Get confirmed details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
