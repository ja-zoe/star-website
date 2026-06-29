import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { ThermometerSun } from "lucide-react";

const subteam: Subteam = {
  name: "Thermal",
  lead: "Timothy Wilburn",
  leadLabel: "Lead",
  icon: ThermometerSun,
  summary:
    "Thermal keeps every component in its safe temperature band — from the cold of eclipse to the heat of direct sun.",
  responsibilities: [
    { title: "Modeling & analysis", body: "Predict heat flow across the orbit: sunlight, eclipse, and internal power dissipation." },
    { title: "Control strategies", body: "Combine passive coatings and insulation with active heaters to hold subsystems in range." },
    { title: "Material selection", body: "Choose interface materials, MLI blankets, and finishes that balance heat absorbed, emitted, and retained." },
    { title: "Subsystem interfaces", body: "Work with power and payload so heat-sensitive parts stay protected and heater draw fits the budget." },
    { title: "TVAC testing", body: "Run thermal-vacuum and balance tests plus heater cycling to prove it survives orbital swings." },
  ],
};

const Thermal = () => <SubteamModal subteam={subteam} />;
export default Thermal;
