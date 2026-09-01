import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Compass } from "lucide-react";

const subteam: Subteam = {
  name: "Guidance & Controls",
  discipline: "Guidance & controls",
  lead: "Julian Vilfort",
  leadLabel: "Lead",
  icon: Compass,
  summary:
    "Guidance and controls points the satellite — keeping its orientation steady so communications, power, and the experiment can do their jobs.",
  responsibilities: [
    { title: "Orientation sensing", body: "Combine gyroscopes, magnetic-field sensors, and sun sensors to know the satellite's orientation in real time." },
    { title: "Motion hardware", body: "Drive reaction wheels and magnetic actuators to turn and stabilize the satellite." },
    { title: "Control algorithms", body: "Turn sensor data into commands that hit precise pointing and steady hold." },
    { title: "System connections", body: "Coordinate solar-array pointing, antenna alignment, and experiment targeting." },
    { title: "Test & validate", body: "Prove the system on low-friction test tables and with connected hardware before orbit." },
  ],
};

const ADCS = () => <SubteamModal subteam={subteam} />;
export default ADCS;
