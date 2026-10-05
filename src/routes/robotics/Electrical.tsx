import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Zap } from "lucide-react";

const subteam: Subteam = {
  id: "robotics/electrical",
  discipline: "Power & controls",
  icon: Zap,
  summary:
    "Electrical is the rover's power and control backbone — built to survive dust, shock, and big current swings.",
  responsibilities: [
    { title: "Power architecture", body: "Design batteries and protection circuits, and convert voltage as needed to keep each part powered during peak demand." },
    { title: "Motor control", body: "Choose motor controllers and feedback sensors for driving, steering, and excavation." },
    { title: "Sensors & connections", body: "Wire wheel sensors, motion sensors, laser scanners/cameras, and status data with dust-resistant connectors." },
    { title: "Electrical noise & reliability", body: "Ground, filter, and route cabling to keep signals clean next to high-current paths." },
    { title: "Safety & fault tolerance", body: "Add e-stops, fusing, and health monitoring against thermal or actuation runaway." },
    { title: "Test & diagnostics", body: "Check power needs, test sudden changes in demand, and test connected hardware before trials on simulated lunar soil." },
  ],
};

const Electrical = () => <SubteamModal subteam={subteam} />;
export default Electrical;
