import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Boxes } from "lucide-react";

const subteam: Subteam = {
  name: "Structures",
  lead: "Aidan McLendon",
  leadLabel: "Lead",
  icon: Boxes,
  summary:
    "Structures builds the frame that holds SPICEsat together and keeps it alive — through the violence of launch and years in vacuum.",
  responsibilities: [
    { title: "Chassis & CAD", body: "Model the chassis, brackets, and deployables to hit CubeSat form-factor limits and payload constraints." },
    { title: "Material selection", body: "Pick lightweight alloys and composites that take launch loads, thermal cycling, and radiation." },
    { title: "Integration & interfaces", body: "Lay out mounts for avionics, payload, power, and comms so the satellite assembles and services cleanly." },
    { title: "Structural analysis", body: "Run FEA against vibration, shock, and load cases to prove the frame survives the ride up." },
    { title: "Test & validate", body: "Vibe-test, thermal-test, and fit-check the build to confirm it holds through every mission phase." },
  ],
};

const Structures = () => <SubteamModal subteam={subteam} />;
export default Structures;
