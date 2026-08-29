import { TextHoverEffect } from "../../components/ui/text-hover-effect";
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
    <div id="EboardSection" className="flex w-full scroll-mt-24 flex-col pb-20 pt-10">
      <TextHoverEffect text="MEET E-BOARD" />
      <div className="flex flex-col gap-10 items-center px-10">
        <div className="flex flex-wrap gap-24 justify-center">
          {eboard.map((member) => (
            <div key={member.name} className="space-y-5">
              <div className="rounded-full overflow-hidden w-60 h-60 border-3 border-red-400 box-shado box-shadow-red-400">
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
                    <UserRound className="w-28 h-28 text-white/40" />
                  </div>
                )}
              </div>

              <div className="text-center space-y-1">
                <p className="text-2xl font-bold">{member.name}</p>
                <p className="text-white/70">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EboardSection;
