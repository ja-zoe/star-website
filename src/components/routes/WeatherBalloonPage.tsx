import { ShootingStars } from "../ui/shooting-stars"
import { WavyBackground } from "../ui/wavy-background"
import { PencilRuler } from "lucide-react"

const WeatherBalloonPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20 px-5 lg:px-10  pb-10 relative">
      <div className="flex flex-col lg:grid grid-cols-8 grid-rows-6 h-screen gap-8 max-w-[110rem]">
        <div className="px-5 pb-5 flex flex-col gap-3 justify-end col-span-2 row-span-3 border-2 border-white rounded-md">
          <p className="font-bold text-3xl">Project Overview</p>
          <p>The Weather Balloon Team designs, fabricates, and launches high-altitude experimental payloads each academic semester. These systems routinely reach altitudes exceeding 80,000 feet via high-altitude balloon platforms, enabling near-space data collection and flight system validation in low-pressure, low-temperature environments.</p>
        </div>

        <button className="text-start cursor-pointer flex items-end col-span-2 row-span-2 bg-wb/90 hover:bg-wb/70 duration-700 transition-all rounded-md">
          <p className="font-bold ps-5 pb-5 text-3xl">Meeting Times and Locations</p>
        </button>

        <div className="col-span-2 row-span-2 border-2 border-white rounded-md">

        </div>

        <button className="text-start cursor-pointer flex items-end col-span-2 row-span-3 bg-wb/90 hover:bg-wb/70 duration-700 transition-all rounded-md">
          <p className="font-bold ps-5 pb-5 text-3xl">Subteams</p>
        </button>
        <div className="grid place-items-center col-span-4 row-span-2 border-2 border-white rounded-md relative">
          <WavyBackground colors={["#0091ff", "#9D2626"]}>
            <p className="text-center font-normal text-5xl md:text-6xl py-5">Weather Balloon</p>
          </WavyBackground>
        </div>
        <button className="text-start cursor-pointer flex items-end col-span-2 row-span-1 bg-wb/90 hover:bg-wb/70 duration-700 transition-all rounded-md">
          <p className="font-bold ps-5 pb-5 text-3xl">Meet the Team</p>
        </button>
        <div className="grid place-items-center col-span-1 row-span-1 border-2 border-white rounded-md">
          <PencilRuler size={60}/>
        </div>
        <div className="col-span-1 row-span-1 border-2 border-white rounded-md"></div>
        <div className="col-span-4 row-span-2 border-2 border-white rounded-md"></div>
        <button className="text-start cursor-pointer flex items-end col-span-4 row-span-2 bg-wb/90 hover:bg-wb/70 duration-700 transition-all rounded-md">
          <p className="font-bold ps-5 pb-5 text-3xl">Frequently Asked Questions</p>
        </button>
      </div>
    </div>
  )
}
export default WeatherBalloonPage