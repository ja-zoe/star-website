import { ArrowUpRight, CalendarClock, Mail, Radio } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";

const JoinUsSection = () => (
  <section
    id="JoinUsSection"
    className="relative w-full scroll-mt-24 overflow-hidden border-b border-white/10 px-5 py-20 md:px-10 md:py-28"
  >
    <div
      className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-900/20 blur-3xl"
      aria-hidden="true"
    />
    <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <SectionHeading
        eyebrow="Open channel"
        title="Your first mission starts here."
        description="Join the conversation, choose a team, and take on a first task. No application or prior experience required."
      />

      <div className="border-y border-white/20">
        <div className="flex items-center gap-5 border-b border-white/15 px-5 py-6 sm:px-7">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-300/40 text-red-300 shadow-[0_0_35px_rgba(157,38,38,0.35)]">
            <Radio className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-bold">Membership channel is open</p>
            <p className="mt-1 text-sm text-white/50">Every Rutgers student is welcome.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2">
          <a
            href="https://discord.gg/vHa52wx9VK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-16 items-center justify-between bg-white px-6 font-bold text-black transition-colors hover:bg-red-200"
          >
            Join Discord
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="mailto:rutgersstar@gmail.com?subject=STAR%20Fall%202026%20meeting%20details"
            className="flex min-h-16 items-center justify-between border-x border-b border-white/15 px-6 font-bold text-white sm:border-l-0 sm:border-r-0 sm:border-t-0"
          >
            Email STAR
            <Mail className="h-5 w-5 text-white/50" aria-hidden="true" />
          </a>
        </div>
        <p className="flex items-start gap-3 px-5 py-5 text-sm leading-6 text-white/55 sm:px-7">
          <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
          <span><strong className="text-white">Fall 2026 schedule pending.</strong> Usual location: The Cage. Confirm details by email or Discord.</span>
        </p>
      </div>
    </div>
  </section>
);

export default JoinUsSection;
