import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { ThermometerSun } from "lucide-react";

const subteam: Subteam = {
  name: "Thermal",
  discipline: "Mechanical",
  lead: "Timothy Wilburn",
  leadLabel: "Lead",
  icon: ThermometerSun,
  summary:
    "Thermal keeps every component in its safe temperature range — from the cold of orbital shadow to the heat of direct sunlight.",
  responsibilities: [
    { title: "Modeling & analysis", body: "Predict heat flow through the orbit, including sunlight, orbital shadow, and heat produced by the spacecraft's electronics." },
    { title: "Control strategies", body: "Combine passive coatings and insulation with active heaters to hold subsystems in range." },
    { title: "Material selection", body: "Choose connection materials, insulation blankets, and surface finishes that balance heat absorbed, emitted, and retained." },
    { title: "System interfaces", body: "Work with power and the experiment team so heat-sensitive parts stay protected and heater use fits the budget." },
    { title: "Thermal-vacuum testing", body: "Test the satellite in cold, low-pressure conditions and cycle the heaters to prove it survives orbital temperature swings." },
  ],
};

const Thermal = () => <SubteamModal subteam={subteam} />;
export default Thermal;
