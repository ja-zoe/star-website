import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Boxes } from "lucide-react";

const subteam: Subteam = {
  id: "cubesat/structures",
  discipline: "Mechanical",
  icon: Boxes,
  summary:
    "Structures builds the frame that holds SPICEsat together and keeps it alive — through the violence of launch and years in vacuum.",
  responsibilities: [
    { title: "Chassis & 3D design", body: "Model the chassis, brackets, and deployable parts to fit CubeSat size limits and experiment requirements." },
    { title: "Material selection", body: "Pick lightweight alloys and composites that withstand launch forces, repeated temperature changes, and radiation." },
    { title: "Integration & interfaces", body: "Lay out mounts for computers, experiment hardware, power, and communications so the satellite assembles and can be serviced cleanly." },
    { title: "Structural analysis", body: "Use computer simulations for vibration, shock, and launch loads to prove the frame survives the ride up." },
    { title: "Test & validate", body: "Test vibration, temperature, and fit to confirm the build holds together through every mission phase." },
  ],
};

const Structures = () => <SubteamModal subteam={subteam} />;
export default Structures;
