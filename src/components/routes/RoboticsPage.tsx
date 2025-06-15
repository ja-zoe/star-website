
import { WavyBackground } from "../ui/wavy-background"

const RoboticsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-center relative h-screen">
        <WavyBackground colors={["#03d011", "#9D2626", "#9D2626"]}>
          <p className="text-center font-medium text-5xl md:text-6xl py-5">Robotics</p>
          <p className="font-semibold text-lg">High-altitude payloads. Near-space data. Engineered and launched every semester.</p>
        </WavyBackground>
      </div>

    </div>
  )
}
export default RoboticsPage