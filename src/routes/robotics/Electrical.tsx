import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Zap } from "lucide-react";

const subteam: Subteam = {
  name: "Electrical",
  lead: "Bhanavi Senthil",
  leadLabel: "Lead",
  icon: Zap,
  summary:
    "Electrical is the rover's power and control backbone — built to survive dust, shock, and big current swings.",
  responsibilities: [
    { title: "Power architecture", body: "Design batteries, protection, and DC–DC regulation to hold stable rails under peak load." },
    { title: "Motor control", body: "Spec drivers, current sensing, and feedback for drive, steering, and excavation." },
    { title: "Sensor & I/O", body: "Wire encoders, IMUs, LiDAR/cameras, and telemetry with dust-resistant connectors." },
    { title: "EMC & reliability", body: "Ground, filter, and route cabling to keep signals clean next to high-current paths." },
    { title: "Safety & fault tolerance", body: "Add e-stops, fusing, and health monitoring against thermal or actuation runaway." },
    { title: "Test & diagnostics", body: "Run power budgets, load steps, and HIL checks before trials on simulant." },
  ],
};

const Electrical = () => <SubteamModal subteam={subteam} />;
export default Electrical;
