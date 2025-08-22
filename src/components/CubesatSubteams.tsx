import {
  Wrench,
  ThermometerSun,
  Antenna,
  Zap,
  Blocks,
  Binary,
  Compass,
  FlaskConical,
} from "lucide-react";
// import { useMeetingTimes } from "../contexts/MeetingTimes"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

interface SubteamInfo {
  icon: any;
  team: string;
  name: string;
  description: string;
  color: string;
}

const subteams: SubteamInfo[] = [
  {
    icon: Wrench,
    team: "Mechanical",
    name: "Structures",
    description: `Responsible for designing and building the satellite's physical framework, ensuring it 
        withstands launch forces and operates effectively in space.`,
    color: "#9c9c9c",
  },
  {
    icon: ThermometerSun,
    name: "Thermal",
    team: "Mechanical",
    description: `Manages the satellite's temperature, using materials and designs to keep components 
        within safe operating ranges in the space environment.`,
    color: "#f26338",
  },
  {
    icon: Antenna,
    name: "Communications",
    team: "Electrical",
    description: `Handles data transmission between the satellite and ground stations, including sending 
        scientific data and receiving operational commands. `,
    color: "#85bdfe",
  },
  {
    icon: Zap,
    name: "Power",
    team: "Electrical",
    description: `Generates, stores, and distributes electrical energy, typically using solar panels and 
        batteries, to ensure all systems function properly.`,
    color: "#f2cd38",
  },
  {
    icon: Blocks,
    name: "Systems Integration",
    team: "Software",
    description: `Ensures all subsystems work together seamlessly, coordinating interfaces, testing, and 
        overall mission functionality. `,
    color: "#c138f2",
  },
  {
    icon: Binary,
    name: "Flight Software",
    team: "Software",
    description: `Develops the onboard software that controls satellite operations, processes data, and 
        manages autonomous functions during the mission.`,
    color: "#de212b",
  },
  {
    icon: Compass,
    name: "Attitude Determination and Control System",
    team: "Payload",
    description: `Determines and controls the satellite's orientation in space, using sensors and reaction 
        wheels to maintain proper positioning for mission objectives.`,
    color: "#5c5fff",
  },
  {
    icon: FlaskConical,
    name: "General Payload",
    team: "Payload",
    description: `Encompasses overarching project management tasks, including mission planning, scheduling, 
        budgeting, and compliance with regulations. `,
    color: "#21de50",
  },
];

const CubesatSubteams = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-5">
      {subteams.map((subteam) => {
        const Icon = subteam.icon;
        return (
          <Dialog key={subteam.name}>
            <DialogTrigger>
              <div className="w-72 flex flex-col items-center justify-center gap-5 rounded-2xl p-5 border-2 border-white/30">
                <div>
                  <Icon
                    className="w-20 h-20"
                    color={subteam.color}
                    strokeWidth={1}
                  />
                </div>
                <div>
                  <p className="text-wrap max-w-80">{subteam.name}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white/90">
              <DialogHeader>
                <DialogTitle style={{ color: subteam.color }}>
                  {subteam.name}
                </DialogTitle>
                <DialogDescription>{subteam.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};
export default CubesatSubteams;
