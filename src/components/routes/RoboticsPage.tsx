
import { ShootingStars } from "../ui/shooting-stars"
import { WavyBackground } from "../ui/wavy-background"
import HoverBlurCards from "../HoverBlurCards"
import { ItemType } from "../HoverBlurCards"
import { Binary, Boxes, Zap } from "lucide-react"
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

const RoboticsPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      <div className="text-center relative">
        <WavyBackground colors={["#03d011", "#9D2626", "#9D2626"]} className="grid place-items-center px-10">
          <p className="text-6xl font-bold">Robotics</p>
          <p className="text-lg font-semibold max-w-4xl">Lunar terrain. Autonomous excavation. A rover engineered for NASA’s Lunabotics challenge.</p>
          <p className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer">About the Project</p>
        </WavyBackground>
      </div>

      <div className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-4 px-10">
          <p>The Robotics project is designing and building a fully autonomous lunar rover as part of NASA’s annual Lunabotics Challenge. This national competition challenges university teams to simulate real lunar surface operations by constructing a robot capable of excavating and transporting regolith—moon-like soil—within a constrained arena that mimics the lunar environment, all while avoiding arbitrarily placed obstacles in the arena.</p>
          <p>The team’s rover is developed entirely in-house, with student-led subsystems spanning mechanical design, embedded systems, autonomy, perception, and control. It features terrain-adaptive locomotion, regolith excavation tools, and autonomous navigation algorithms to optimize excavation throughput and energy efficiency. By adhering to stringent NASA competition rules and engineering for the unique challenges of lunar conditions, students gain hands-on experience in planetary robotics, systems integration, and mission-driven problem solving. The project embodies real lunar mission constraints—resource limitation, autonomous decision-making, and dust mitigation—preparing members for careers in aerospace, robotics, and beyond.</p>
        </div>

        

        <div className="flex flex-col gap-5 px-10">
          <p className="text-2xl">Subteams</p>
          <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center">
            {/* <HoverBlurCards items={subteams} imgType="icon"/> */}
            <StarStat stat={"Mechanical"} headline="Lead: Name" Icon={Boxes} className="bg-radial from-red-400/20 to-transparent"/>
            <StarStat stat={"Electrical"} headline="Lead: Name" Icon={Zap} className="bg-radial from-red-400/20 to-transparent"/>
            <StarStat stat={"Software"} headline="Lead: Name" Icon={Binary} className="bg-radial from-red-400/20 to-transparent"/>
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
export default RoboticsPage