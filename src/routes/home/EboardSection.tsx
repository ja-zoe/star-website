import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import { ShootingStars } from "../../components/ui/shooting-stars";
import julian from "/julian.jpg";
import sandhya from "/sandhya.jpg";
import shilpi from "/shilpi.jpg";
import saarim from "/saarim.jpg";
import praneeth from "/praneeth.jpg";
import aayushi from "/aayushi.jpg";
import nila from "/nila.jpg";
import kanika from "/kanika.jpg";
import { cn } from "../../lib/utils";

interface EboardMember {
  name: string;
  position: string;
  hometown: string;
  major: string;
  dreamjob: string;
  picture: any;
  classAdjustments?: string;
  styleAdjustments?: object;
}

const EboardSection = () => {
  const eboard: EboardMember[] = [
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
      name: "Sandhya Ganesh",
      position: "Treasurer",
      hometown: "",
      major: "Computer Science",
      dreamjob: "",
      picture: sandhya,
    },
    {
      name: "Shilpi Shah",
      position: "President",
      hometown: "",
      major: "Computer Science and Cognitive Science",
      dreamjob: "",
      picture: shilpi,
    },
    {
      name: "Saarim Syed",
      position: "EGC Representative",
      hometown: "",
      major: "Mechanical Engineering",
      dreamjob: "",
      picture: saarim,
      styleAdjustments: { objectPosition: "50% 20px" },
    },
    {
      name: "Praneeth Damarla",
      position: "SEDS Representative",
      hometown: "",
      major: "Electrical and Computer Engineering",
      dreamjob: "",
      picture: praneeth,
      styleAdjustments: { objectPosition: "75% 20px" },
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
      name: "Kanika Syal",
      position: "Vice President",
      hometown: "",
      major: "Mechanical Engineering",
      dreamjob: "",
      picture: kanika,
      styleAdjustments: { objectPosition: "55%" },
    },
  ];

  return (
    <div id="EboardSection" className="flex flex-col w-full pt-10 pb-20">
      <TextHoverEffect text="MEET E-BOARD" />
      <div className="flex flex-col gap-10 items-center px-10">
        <div className="flex flex-wrap gap-24 justify-center">
          {eboard.map((member) => (
            <div className="space-y-5">
              <div className="rounded-full overflow-hidden w-60 h-60 border-3 border-red-400 box-shado box-shadow-red-400">
                <img
                  className={cn(
                    "object-cover w-full h-full scale-125",
                    member.classAdjustments,
                  )}
                  style={member.styleAdjustments}
                  src={member.picture}
                  alt={member.name + "'s Picture"}
                />
              </div>

              <div className="text-center space-y-1">
                <p className="text-2xl font-bold">{member.name}</p>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ShootingStars />
    </div>
  );
};

export default EboardSection;
