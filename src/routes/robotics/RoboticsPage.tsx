import { WavyBackground } from "../../components/ui/wavy-background";
import Mechanical from "./Mechanical";
import Software from "./Software";
import Electrical from "./Electrical";

const RoboticsPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col pb-10">
      <div className="text-center relative">
        <WavyBackground
          colors={["#03d011", "#9D2626", "#9D2626"]}
          className="grid place-items-center px-10"
        >
          <p className="text-6xl font-bold">Robotics</p>
          <p className="text-lg font-semibold max-w-4xl">
            Lunar terrain. Autonomous excavation. A rover engineered for NASA’s
            Lunabotics challenge.
          </p>
          <p className="px-3 py-1 w-fit mt-8 bg-white text-black rounded-xl text-xl cursor-pointer">
            About the Project
          </p>
        </WavyBackground>
      </div>

      <div className="flex flex-col gap-10 text-center">
        <div className="flex flex-col gap-4 px-10 lg:px-36">
          <p>
            TThe Robotics project is designing and building a fully autonomous
            lunar rover for NASA's annual Lunabotics Challenge, a national
            competition where university teams simulate real lunar surface
            operations by constructing a robot capable of excavating and
            transporting regolith — moon-like soil — while navigating a
            competition arena that mimics the lunar environment. The team's
            rover is developed entirely in-house, with student-led subsystems
            spanning mechanical design, embedded systems, autonomy, perception,
            and control, featuring terrain-adaptive locomotion, regolith
            excavation tools, and autonomous navigation algorithms optimized for
            excavation throughput and energy efficiency. By engineering under
            stringent NASA competition rules and real lunar mission constraints
            — resource limitation, autonomous decision-making, and dust
            mitigation — members gain hands-on experience in planetary robotics,
            systems integration, and mission-driven problem solving, preparing
            them for careers in aerospace, robotics, and beyond.
          </p>
        </div>

        <div className="flex flex-col gap-5 px-10">
          <p className="text-5xl font-bold">Subteams</p>
          <div className="w-full flex flex-col gap-10 md:gap-8 sm:flex-row items-center justify-center">
            <Mechanical />
            <Electrical />
            <Software />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-10 lg:px-36">
          <p className="text-5xl font-bold">Meeting times and locations</p>
          <p>
            Meeting times will be added to website soon. Check Discord for now.
          </p>
        </div>

        {/* <div className="flex flex-col gap-5 px-10">
          <p className="text-5xl font-bold">Leads and Members</p>
          <HoverBlurCards items={members} imgType="icon" circled />
        </div> */}
      </div>
    </div>
  );
};
export default RoboticsPage;
