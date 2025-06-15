import { ShootingStars } from "../ui/shooting-stars"
import CubesatSubteams from "../CubesatSubteams"
import { WavyBackground } from "../ui/wavy-background"

const CubesatPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-center relative h-screen">
        <WavyBackground colors={["#999999", "#9D2626"]}>
          <p className="text-center font-medium text-5xl md:text-6xl py-5">Cube Satellite</p>
          <p className="font-semibold text-lg">High-altitude payloads. Near-space data. Engineered and launched every semester.</p>
        </WavyBackground>
      </div>
      
    </div>
  )
}
export default CubesatPage