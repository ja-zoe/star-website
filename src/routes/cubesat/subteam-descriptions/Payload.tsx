import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { FlaskConical } from "lucide-react";

const subteam: Subteam = {
  name: "Payload",
  discipline: "Payload",
  lead: "Christian Metchenko",
  leadLabel: "Lead",
  icon: FlaskConical,
  summary:
    "The Experiment team runs SPICEsat's core investigation — measuring fuel slosh in microgravity and owning everything from the sensors to the control algorithms that fly it.",
  responsibilities: [
    { title: "Experiment hardware", body: "Design, mount, cable, and prepare the tank, camera, LED illumination, and force/pressure sensors around the Raspberry Pi computer that runs the experiment." },
    { title: "Experiment flight software", body: "Write the code that communicates with the main spacecraft computer, translates orientation commands, and sends experiment settings and commands to the control software." },
    { title: "Ground software & imaging", body: "Build the data pipeline and computer vision that check sloshing on camera against what the sensors measured." },
    { title: "Architecture & strategy", body: "Define the coordinate systems used by the experiment, model orbit and orientation in mission-planning software, and align sensor axes with the 3D design to set each run's starting conditions." },
    { title: "One cohesive team", body: "Split into software and general sections, but tightly coupled — everyone builds toward the same experiment." },
  ],
};

const Payload = () => <SubteamModal subteam={subteam} />;
export default Payload;
