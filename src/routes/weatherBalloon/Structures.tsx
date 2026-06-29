import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Boxes } from "lucide-react";

const subteam: Subteam = {
  name: "Structures",
  lead: "Ihsan Balik",
  leadLabel: "Lead",
  icon: Boxes,
  summary:
    "Structures builds the payload that comes home intact — housing the electronics through ascent, near-space, and landing.",
  responsibilities: [
    { title: "Payload enclosure", body: "Build a light, durable shell that protects electronics, batteries, and sensors." },
    { title: "Thermal protection", body: "Insulate and shield sensitive parts from the cold at altitude." },
    { title: "Mechanical integration", body: "Lay out mounts and routing for wiring, sensors, and comms hardware." },
    { title: "Aerodynamics", body: "Trim drag and balance mass for stable flight." },
    { title: "Recovery hardware", body: "Add parachute mounts and supports for a safe landing and intact recovery." },
  ],
};

const Structures = () => <SubteamModal subteam={subteam} />;
export default Structures;
