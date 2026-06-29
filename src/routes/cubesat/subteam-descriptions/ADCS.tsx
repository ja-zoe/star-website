import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Compass } from "lucide-react";

const subteam: Subteam = {
  name: "ADCS",
  lead: "Julian Vilfort",
  leadLabel: "Lead",
  icon: Compass,
  summary:
    "ADCS points the satellite — holding the attitude that comms, power, and the payload all depend on.",
  responsibilities: [
    { title: "Attitude determination", body: "Fuse gyros, magnetometers, and sun sensors to know orientation in real time." },
    { title: "Actuators", body: "Drive reaction wheels and magnetorquers to slew and stabilize." },
    { title: "Control algorithms", body: "Turn sensor data into commands that hit precise pointing and steady hold." },
    { title: "Subsystem interfaces", body: "Coordinate solar-array pointing, antenna alignment, and payload targeting." },
    { title: "Test & validate", body: "Prove it on air-bearing tables and hardware-in-the-loop before orbit." },
  ],
};

const ADCS = () => <SubteamModal subteam={subteam} />;
export default ADCS;
