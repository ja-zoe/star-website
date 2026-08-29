import HomeSectionTitle from "../../components/HomeSectionTitle";
import { WobbleCard } from "../../components/ui/wobble-card";
import { UserRound } from "lucide-react";
import julian from "/eboard/julian.webp";
import praneeth from "/eboard/praneeth.webp";
import aayushi from "/eboard/aayushi.webp";
import nila from "/eboard/nila.webp";
import kanika from "/eboard/kanika.webp";
import { cn } from "../../lib/utils";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface EboardMember {
  name: string;
  position: string;
  hometown: string;
  major: string;
  dreamjob: string;
  picture?: string;
  classAdjustments?: string;
  styleAdjustments?: object;
}

const EboardSection = () => {
  const reducedMotion = usePrefersReducedMotion();
  const eboard: EboardMember[] = [
    {
      name: "Kanika Syal",
      position: "President",
      hometown: "",
      major: "Mechanical Engineering",
      dreamjob: "",
      picture: kanika,
      styleAdjustments: { objectPosition: "55%" },
    },
    {
      name: "Praneeth Damarla",
      position: "Vice President",
      hometown: "",
      major: "Electrical and Computer Engineering",
      dreamjob: "",
      picture: praneeth,
      styleAdjustments: { objectPosition: "75% 20px" },
    },
    {
      name: "Sasho Petrov",
      position: "Treasurer",
      hometown: "",
      major: "",
      dreamjob: "",
    },
    {
      name: "Nila Anbumani",
      position: "Outreach Coordinator",
      hometown: "",
      major: "Math and Computer Science",
      dreamjob: "",
      picture: nila,
    },
    {
      name: "Aayushi Mallik",
      position: "Social Media Coordinator",
      hometown: "",
      major: "Aerospace Engineering",
      dreamjob: "",
      picture: aayushi,
    },
    {
      name: "Julian Vilfort",
      position: "Webmaster",
      hometown: "Jackson, NJ",
      major: "Electrical and Computer Engineering",
      dreamjob: "",
      picture: julian,
      classAdjustments: "",
      styleAdjustments: { objectPosition: "65% 25px" },
    },
    {
      name: "Vanshika Gupta",
      position: "EGC Representative",
      hometown: "",
      major: "",
      dreamjob: "",
    },
    {
      name: "Venya Tiwari",
      position: "SEDS Representative",
      hometown: "",
      major: "",
      dreamjob: "",
    },
  ];

  return (
    <section id="EboardSection" className="w-full scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <HomeSectionTitle
          title="Meet E-board"
          display="MEET E-BOARD"
          description="The students keeping projects moving, questions answered, and the Cage open."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {eboard.map((member) => (
            <WobbleCard
              key={member.name}
              animate={!reducedMotion}
              containerClassName="group h-full rounded-none border border-white/15 bg-black"
              className="flex h-full flex-col rounded-none bg-black"
            >
              <div className="aspect-[4/5] w-full overflow-hidden border-b border-white/10 bg-white/[0.025]">
                {member.picture ? (
                  <img
                    className={cn(
                      "h-full w-full scale-125 object-cover grayscale transition-[filter,transform] duration-500 group-hover:grayscale-0",
                      member.classAdjustments,
                    )}
                    style={member.styleAdjustments}
                    src={member.picture}
                    alt={member.name + ", " + member.position}
                    width={964}
                    height={640}
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
                  {member.position}
                </p>
                <h3 className="mt-2 text-base font-bold leading-tight sm:text-lg">{member.name}</h3>
                {member.major && (
                  <p className="mt-2 text-[0.65rem] leading-4 text-white/45 sm:text-xs">
                    {member.major}
                  </p>
                )}
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EboardSection;
