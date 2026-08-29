import { BookCopy, UsersRound, Wrench } from "lucide-react";
import { Globe } from "../../components/magicui/globe";
import SectionHeading from "../../components/SectionHeading";
import StarStat from "../../components/StarStat";

const AboutStarSection = () => (
  <section
    id="AboutStarSection"
    className="relative w-full scroll-mt-24 overflow-hidden border-b border-white/10 px-5 py-20 md:px-10 md:py-28"
  >
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div>
        <SectionHeading
          eyebrow="Why STAR"
          title="Learn by building beyond the classroom."
          description="You can just show up. Seriously. Most members learned the tools after joining. STAR is Rutgers' student-led SEDS chapter, and every major has a way into the work."
        />
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          <StarStat
            stat="3"
            headline="Projects"
            Icon={Wrench}
            compact
            className="bg-radial from-red-400/20 to-transparent"
          />
          <StarStat
            stat="90+"
            headline="Members"
            Icon={UsersRound}
            compact
            className="bg-radial from-blue-400/20 to-transparent"
          />
          <StarStat
            stat="10+"
            headline="Majors"
            Icon={BookCopy}
            compact
            className="bg-radial from-red-400/20 to-transparent"
          />
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[31rem]" aria-label="Earth with a marker at Rutgers University">
        <div className="absolute inset-[8%] rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-red-300/20" aria-hidden="true" />
        <Globe className="max-w-[31rem]" />
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-bold uppercase tracking-[0.24em] text-white/40">
          New Brunswick, New Jersey
        </p>
      </div>
    </div>
  </section>
);

export default AboutStarSection;
