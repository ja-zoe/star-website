import { ArrowUpRight, CalendarClock, Mail } from "lucide-react";
import HomeSectionTitle from "../../components/HomeSectionTitle";
import { MovingBorderButton } from "../../components/ui/moving-border";
import { currentInfo } from "../../content/currentInfo";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import DiscordLogo from "/discord-icon.png";

const JoinUsSection = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="JoinUsSection"
      className="relative w-full scroll-mt-24 overflow-hidden border-b border-white/10 px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <HomeSectionTitle title="Join STAR" display="JOIN STAR" />
        <div className="mt-8 grid border-y border-white/20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col border-b border-white/15 px-6 py-10 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
            <img
              src={DiscordLogo}
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 invert"
            />
            <h3 className="mt-7 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Come by. Ask too many questions.
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              Discord is where plans happen. The Cage is where things get built.
              Pick a project, meet the people, and start with something small.
            </p>
            <div className="mt-9">
              <MovingBorderButton
                as="a"
                href={currentInfo.contact.discordHref}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Join the STAR Discord"
                animate={!reducedMotion}
                borderRadius="0px"
                containerClassName="w-full max-w-sm"
                className="justify-between px-6 font-bold"
              >
                Join Discord
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </MovingBorderButton>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-1 items-start gap-4 border-b border-white/15 px-6 py-8 sm:px-9">
              <CalendarClock className="mt-1 h-5 w-5 shrink-0 text-red-300" aria-hidden="true" />
              <div>
                <p className="font-bold">{currentInfo.term}: {currentInfo.meetings.status}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Usual location: {currentInfo.meetings.usualLocation}. {currentInfo.meetings.locationNote}.
                </p>
              </div>
            </div>
            <div className="px-6 py-8 sm:px-9">
              <p className="text-sm leading-6 text-white/55">
                {currentInfo.recruitment.eligibility}. {currentInfo.recruitment.prerequisites}.
                Commitment {currentInfo.recruitment.commitment.toLowerCase()}.
              </p>
              <a
                href={currentInfo.contact.emailHref}
                className="mt-6 inline-flex min-h-11 items-center gap-3 font-bold underline decoration-white/25 underline-offset-4"
              >
                <Mail className="h-4 w-4 text-red-300" aria-hidden="true" />
                Email a real person
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
