import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  name: "Flight Software",
  lead: "Adil Hydari",
  leadLabel: "Lead",
  icon: Binary,
  summary:
    "Flight Software is SPICEsat's brain — the onboard code that runs the mission and answers the ground.",
  responsibilities: [
    { title: "Onboard control", body: "Command power, comms, payload, and thermal systems to the mission plan." },
    { title: "Fault detection & autonomy", body: "Build watchdogs, safe modes, and recovery so the satellite protects itself without us." },
    { title: "Command & data handling", body: "Move and store data between subsystems and package telemetry for downlink." },
    { title: "Ground interface", body: "Speak the uplink/downlink protocols so operators command and receive cleanly." },
    { title: "Test & simulate", body: "Validate with hardware-in-the-loop, mission sims, and unit tests before flight." },
  ],
};

const FlightSoftware = () => <SubteamModal subteam={subteam} />;
export default FlightSoftware;
