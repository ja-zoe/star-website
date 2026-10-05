import HomeSectionTitle from "../../components/HomeSectionTitle";
import { WobbleCard } from "../../components/ui/wobble-card";
import { UserRound } from "lucide-react";
import { eboard, eboardPosition } from "../../content/people";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const EboardSection = () => {
  const reducedMotion = usePrefersReducedMotion();
  const members = eboard();

  return (
    <section id="EboardSection" className="w-full scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <HomeSectionTitle
          title="Meet E-board"
          display="MEET E-BOARD"
          description="The students keeping projects moving, questions answered, and the Cage open."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {members.map((member) => {
            const position = eboardPosition(member);
            return (
            <WobbleCard
              key={member.id}
              animate={!reducedMotion}
              containerClassName="group h-full rounded-none border border-white/15 bg-black"
              className="flex h-full flex-col rounded-none bg-black"
            >
              <div className="aspect-[4/5] w-full overflow-hidden border-b border-white/10 bg-white/[0.025]">
                {member.photo ? (
                  <img
                    className="h-full w-full scale-125 object-cover transition-transform duration-500 group-hover:scale-[1.28]"
                    style={{ objectPosition: member.photo.position }}
                    src={member.photo.src}
                    alt={member.name + ", " + position}
                    width={member.photo.width}
                    height={member.photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-white/[0.025]"
                    aria-hidden
                  >
                    <UserRound className="h-16 w-16 text-white/20 sm:h-20 sm:w-20" />
                  </div>
                )}
              </div>

              <div className="min-h-28 p-4 sm:p-5">
                <p className="text-[0.52rem] font-bold uppercase tracking-[0.2em] text-red-300 sm:text-[0.58rem]">
                  {position}
                </p>
                <h3 className="mt-2 text-base font-bold leading-tight sm:text-lg">{member.name}</h3>
                {member.major && (
                  <p className="mt-2 text-[0.65rem] leading-4 text-white/45 sm:text-xs">
                    {member.major}
                  </p>
                )}
              </div>
            </WobbleCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EboardSection;
