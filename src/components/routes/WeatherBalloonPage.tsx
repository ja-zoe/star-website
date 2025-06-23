import { ShootingStars } from "../ui/shooting-stars"
import { WavyBackground } from "../ui/wavy-background"
import HoverBlurCards from "../HoverBlurCards"
import { ItemType } from "../HoverBlurCards"
import { Binary, Boxes } from "lucide-react"
import StarStat from "../StarStat"
import { User } from "lucide-react"

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
  }
]

const WeatherBalloonPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      <div className="text-center relative">
        <WavyBackground colors={["#0091ff", "#9D2626"]} className="grid place-items-center px-10">
          <p className="text-6xl font-bold">Weather Balloon</p>
          <p className="text-lg font-semibold max-w-4xl">High-altitude payloads. Near-space data. Engineered and launched every semester.</p>
          <a className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer" href="#about">About the Project</a>
        </WavyBackground>
      </div>

      <div className="flex flex-col gap-16 text-center">
        <div className="flex flex-col gap-5 px-10">
          <p className="text-2xl scroll-mt-28" id="about">About the Weather Balloon Project</p>
          <div className="flex flex-col gap-4 px-10">
            <p>
              The Weather Balloon Team designs, builds, and launches high-altitude payloads every semester, reaching altitudes of over 80,000 feet into the stratosphere. Each mission is equipped with custom instrumentation to collect atmospheric data—such as pressure, temperature, and radiation—as well as onboard cameras to document the flight from launch to recovery.
            </p>
            <p>The team is divided into two primary subgroups: Structures and Software. The Structures team focuses on engineering lightweight, durable payload enclosures that can withstand extreme temperatures and mechanical stress during ascent and descent. The Software team is responsible for integrating sensors, managing onboard data logging, and enabling real-time tracking and telemetry.</p>
            <p>These launches serve as hands-on platforms for learning aerospace fundamentals, environmental sensing, and flight system design. Students gain experience with rapid prototyping, mission planning, FAA compliance, and post-flight data analysis, contributing to a continually evolving record of near-space experimentation.</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-10">
          <p className="text-2xl">Subteams</p>
          <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center">
            {/* <HoverBlurCards items={subteams} imgType="icon"/> */}
            <StarStat stat={"Software"} headline="Lead: Name" Icon={Binary} className="bg-radial from-red-400/20 to-transparent"/>
            <StarStat stat={"Structures"} headline="Lead: Name" Icon={Boxes} className="bg-radial from-red-400/20 to-transparent"/>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-10">
          <p className="text-2xl">Meeting times and locations</p>
          <p>Since the weather balloon project only consists of two subteams, software and structures, meetings are held jointly in the cage at [enter time here]</p>
        </div>

        <div className="flex flex-col gap-5 px-10">
          <p className="text-2xl">Leads and Members</p>
          <HoverBlurCards items={members} imgType="icon" circled/>
        </div>
      </div>
      <ShootingStars />
    </div>
  )
}
export default WeatherBalloonPage