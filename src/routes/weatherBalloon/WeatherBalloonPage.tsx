import { ShootingStars } from "../../components/ui/shooting-stars";
import { WavyBackground } from "../../components/ui/wavy-background";
import HoverBlurCards from "../../components/HoverBlurCards";
import { ItemType } from "../../components/HoverBlurCards";
import { User } from "lucide-react";
import Software from "./Software";
import Structures from "./Structures";

const members: ItemType[] = [
  {
    itemName: "Jane Doe",
    alt: "Jane Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "John Doe",
    alt: "John Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "Jane Doe",
    alt: "Jane Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "John Doe",
    alt: "John Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "Jane Doe",
    alt: "Jane Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "John Doe",
    alt: "John Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "Jane Doe",
    alt: "Jane Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
  {
    itemName: "John Doe",
    alt: "John Doe",
    logo: User,
    tooltipContent: "Member Name | Fun fact",
  },
];

const WeatherBalloonPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      <div className="text-center relative">
        <WavyBackground
          colors={["#0091ff", "#9D2626"]}
          className="grid place-items-center px-10"
        >
          <p className="text-6xl font-bold">Weather Balloon</p>
          <p className="text-lg font-semibold max-w-4xl">
            High-altitude payloads. Near-space data. Engineered and launched
            every semester.
          </p>
          <p className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer">
            About the Project
          </p>
        </WavyBackground>
      </div>

      <div className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-2 px-10">
          <p>
            The Weather Balloon Team designs, fabricates, and launches
            high-altitude experimental payloads each academic semester. These
            systems routinely reach altitudes exceeding 80,000 feet via
            high-altitude balloon platforms, enabling near-space data collection
            and flight system validation in low-pressure, low-temperature
            environments.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-10">
          <p className="text-5xl font-bold">Subteams</p>
          <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center">
            <Software />
            <Structures />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-10">
          <p className="text-5xl font-bold">Meeting times and locations</p>
          <p>
            Since the weather balloon project only consists of two subteams,
            software and structures, meetings are held jointly in the cage.
            Meeting time tbd during the school year.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-10">
          <p className="text-5xl font-bold">Leads and Members</p>
          <HoverBlurCards items={members} imgType="icon" circled />
        </div>
      </div>
      <ShootingStars />
    </div>
  );
};
export default WeatherBalloonPage;
