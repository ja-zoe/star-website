import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Zap } from "lucide-react";

const subteam: Subteam = {
  name: "Power",
  lead: "Ahmadh Hassan",
  leadLabel: "Lead",
  icon: Zap,
  summary:
    "Power generates, stores, and routes every watt SPICEsat needs — through eclipses and peak loads alike.",
  responsibilities: [
    { title: "Generation", body: "Size and integrate solar panels to capture the most energy within CubeSat limits." },
    { title: "Storage", body: "Manage rechargeable batteries that carry the satellite through eclipse and load spikes." },
    { title: "Regulation & distribution", body: "Build the buses that step voltages, guard against faults, and feed each subsystem." },
    { title: "Monitoring & protection", body: "Add sensing, current limiting, and fault detection against overcurrent, overvoltage, and battery wear." },
    { title: "Test & validate", body: "Run power budgets, hardware-in-the-loop tests, and battery cycling to prove it lasts the mission." },
  ],
};

const Power = () => <SubteamModal subteam={subteam} />;
export default Power;
