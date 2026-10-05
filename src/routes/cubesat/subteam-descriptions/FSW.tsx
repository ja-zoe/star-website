import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  id: "cubesat/flight-software",
  discipline: "Software",
  icon: Binary,
  summary:
    "Flight Software is SPICEsat's brain — the onboard code that runs the mission and answers the ground.",
  responsibilities: [
    { title: "Onboard control", body: "Command power, communications, experiment, and temperature-control systems according to the mission plan." },
    { title: "Fault detection & autonomy", body: "Build health checks, safe modes, and recovery so the satellite protects itself without us." },
    { title: "Command & data handling", body: "Move and store data between systems and package status reports for transmission to the ground." },
    { title: "Ground interface", body: "Implement the communication rules that let operators send commands up to the satellite and receive data back on the ground." },
    { title: "Test & simulate", body: "Validate with connected-hardware tests, mission simulations, and unit tests before flight." },
  ],
};

const FlightSoftware = () => <SubteamModal subteam={subteam} />;
export default FlightSoftware;
