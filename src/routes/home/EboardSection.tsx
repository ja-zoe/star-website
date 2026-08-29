import SectionHeading from "../../components/SectionHeading";
import { UserRound } from "lucide-react";
import julian from "/eboard/julian.webp";
import praneeth from "/eboard/praneeth.webp";
import aayushi from "/eboard/aayushi.webp";
import nila from "/eboard/nila.webp";
import kanika from "/eboard/kanika.webp";
import { cn } from "../../lib/utils";

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
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team behind the teams."
        />
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
          {eboard.map((member) => (
            <article key={member.name} className="space-y-4">
              <div className="mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full border-2 border-red-400 shadow-[0_0_35px_rgba(248,113,113,0.16)]">
                {member.picture ? (
                  <img
                    className={cn(
                      "object-cover w-full h-full scale-125",
                      member.classAdjustments,
                    )}
                    style={member.styleAdjustments}
                    src={member.picture}
                    alt={member.name + "'s Picture"}
                    width={964}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="flex items-center justify-center w-full h-full bg-white/5"
                    aria-hidden
                  >
                    <UserRound className="h-20 w-20 text-white/30" />
                  </div>
                )}
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-base font-bold sm:text-lg">{member.name}</h3>
                <p className="text-xs leading-5 text-white/60 sm:text-sm">{member.position}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EboardSection;
