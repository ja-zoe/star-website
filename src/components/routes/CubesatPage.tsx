// import CubesatSubteams from "../CubesatSubteams"
import { ShootingStars } from "../ui/shooting-stars"
import { WavyBackground } from "../ui/wavy-background"
import HoverBlurCards from "../HoverBlurCards"
import { ItemType } from "../HoverBlurCards"
import { Binary, Boxes, ThermometerSun, Zap, RadioTower, Layers, Compass, FlaskConical } from "lucide-react"
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

const CubesatPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      <div className="text-center relative">
        <WavyBackground colors={["#999999", "#9D2626"]} className="grid place-items-center px-10">
          <p className="text-6xl font-bold">Cube Satellite</p>
          <p className="text-lg font-semibold max-w-4xl">Fuel slosh. Orbital control. Rutgers’ first student satellite — engineered for microgravity experimentation.</p>
          <p className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer">About the Project</p>
        </WavyBackground>
      </div>

      <div className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-4 px-10">
          <p>The CubeSat project is developing SPICEsat, Rutgers University’s first student-built satellite. This mission is part of the prestigious University Nanosatellite Program, under mentorship from faculty and guidance from industry professionals. The satellite’s primary scientific objective is to investigate fluid sloshing dynamics in microgravity, a critical problem in spacecraft fuel management. By characterizing slosh behavior and testing active control stabilization algorithms in orbit, SPICEsat aims to advance the state of onboard fuel modeling and control strategies beyond what passive systems allow.</p>
          <p>Students on the team are directly involved in the complete satellite lifecycle—from mission conceptualization and payload integration to subsystem testing and full-system validation. SPICEsat uses a combination of COTS components and custom hardware, offering students exposure to real-world spacecraft design and interdisciplinary systems engineering. With an engineering model already in testing, the mission is rapidly progressing toward flight readiness and serves as a launchpad for the next generation of space systems engineers.</p>
        </div>

        

        <div className="flex flex-col gap-5 px-10">
          <p className="text-2xl">Subteams</p>
          <div className="flex justify-center gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-starblue/40 w-3 h-3"/>
              <p>Mechanical</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-yellow-500/40 w-3 h-3"/>
              <p>Electrical</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-purple-500/40 w-3 h-3"/>
              <p>Software</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white/40 w-3 h-3"/>
              <p>Payload</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center flex-wrap">
            {/* <HoverBlurCards items={subteams} imgType="icon"/> */}
            <StarStat stat={"Structures"} headline="Lead: Name" Icon={Boxes} className="bg-radial from-starblue/20 to-transparent"/>
            <StarStat stat={"Thermal"} headline="Lead: Name" Icon={ThermometerSun} className="bg-radial from-starblue/20 to-transparent"/>
            <StarStat stat={"Power"} headline="Lead: Name" Icon={Zap} className="bg-radial from-yellow-500/20 to-transparent"/>
            <StarStat stat={"Communications"} headline="Lead: Name" Icon={RadioTower} className="bg-radial from-yellow-500/20 to-transparent"/>
            <StarStat stat={"Sys Integration"} headline="Lead: Name" Icon={Layers} className="bg-radial from-purple-500/20 to-transparent"/>
            <StarStat stat={"Flight Software"} headline="Lead: Name" Icon={Binary} className="bg-radial from-purple-500/20 to-transparent"/>
            <StarStat stat={"Payload"} headline="Lead: Name" Icon={FlaskConical} className="bg-radial from-white/20 to-transparent"/>
            <StarStat stat={"ADCS"} headline="Lead: Name" Icon={Compass} className="bg-radial from-white/20 to-transparent"/>
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
export default CubesatPage