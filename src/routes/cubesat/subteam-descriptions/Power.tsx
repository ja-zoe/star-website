import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Zap } from "lucide-react";

const subteam: Subteam = {
  name: "Power",
  discipline: "Electrical",
  lead: "Ahmadh Hassan",
  leadLabel: "Lead",
  icon: Zap,
  summary:
    "Power generates, stores, and routes every watt SPICEsat needs — through orbital shadow and sudden demand alike.",
  responsibilities: [
    { title: "Generation", body: "Size and integrate solar panels to capture the most energy within CubeSat limits." },
    { title: "Storage", body: "Manage rechargeable batteries that carry the satellite through orbital shadow and sudden increases in demand." },
    { title: "Voltage & distribution", body: "Build the circuits that adjust voltage, guard against faults, and feed power to each system." },
    { title: "Monitoring & protection", body: "Add sensing, current limiting, and fault detection against overcurrent, overvoltage, and battery wear." },
    { title: "Test & validate", body: "Run power budgets, connected-hardware tests, and battery cycling to prove the system can support the mission." },
  ],
};

const Power = () => <SubteamModal subteam={subteam} />;
export default Power;
