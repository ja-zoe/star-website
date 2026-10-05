import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  id: "robotics/software",
  discipline: "Autonomy",
  icon: Binary,
  summary:
    "Software turns sensing into motion — the autonomy and teleop stack that digs under contest constraints.",
  responsibilities: [
    { title: "Sensing & position", body: "Combine motion sensors, wheel measurements, and laser/camera data to estimate position, terrain, and dust-obscured obstacles." },
    { title: "Planning & control", body: "Build route planning, obstacle avoidance, and motion tracking for traction and digging tools." },
    { title: "Autonomy & teleop", body: "Manage autonomous and driver-controlled modes, switching between them safely during a run." },
    { title: "Robot communications", body: "Define the messages, logs, and settings that let the rover's computers exchange information reliably." },
    { title: "Fault recovery", body: "Run health checks and automatic safeguards when hardware misbehaves." },
    { title: "Simulation & testing", body: "Validate in a realistic virtual rover environment with unit, integration, and replay tests before field trials." },
  ],
};

const Software = () => <SubteamModal subteam={subteam} />;
export default Software;
