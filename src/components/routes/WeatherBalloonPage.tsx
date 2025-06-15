import { ShootingStars } from "../ui/shooting-stars"
import { WavyBackground } from "../ui/wavy-background"
const WeatherBalloonPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="text-center relative h-screen">
        <WavyBackground colors={["#0091ff", "#9D2626"]} className="grid place-items-center">
          <p className="text-6xl font-bold">Weather Balloon</p>
          <p className="text-lg font-semibold">High-altitude payloads. Near-space data. Engineered and launched every semester.</p>
          <p className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer">Learn More About the Project</p>
        </WavyBackground>
      </div>

      <div>
        <div className="flex flex-col">
          <p>About the project</p>
          <p>The Weather Balloon Team designs, fabricates, and launches high-altitude experimental payloads each academic semester. These systems routinely reach altitudes exceeding 80,000 feet via high-altitude balloon platforms, enabling near-space data collection and flight system validation in low-pressure, low-temperature environments.</p>
        </div>
      </div>
    </div>
  )
}
export default WeatherBalloonPage