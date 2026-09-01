import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { FlaskConical } from "lucide-react";

const subteam: Subteam = {
  name: "Payload",
  discipline: "Payload",
  lead: "Christian Metchenko",
  leadLabel: "Lead",
  icon: FlaskConical,
  summary:
    "Payload runs SPICEsat's core experiment — measuring fuel slosh in microgravity and owning everything from the sensors to the control algorithms that fly it.",
  responsibilities: [
    { title: "Experiment hardware", body: "Design, mount, cable, and flight-harden the tank, camera, LED illumination, and torque/pressure sensors around the Raspberry Pi payload computer." },
    { title: "Payload flight software", body: "Run PFSW: talk to the OBC, convert ADCS commands into quaternions, and read out experiment parameters and commands to the control software." },
    { title: "Ground software & imaging", body: "Build the data pipeline and computer vision that check sloshing on camera against what the sensors measured." },
    { title: "Architecture & strategy", body: "Define reference frames (body, ECI, ECEF), model orbit and attitude in STK, and align sensor axes with the CAD model to set each run's initial conditions." },
    { title: "One cohesive team", body: "Split into software and general sections, but tightly coupled — everyone builds toward the same experiment." },
  ],
};

const Payload = () => <SubteamModal subteam={subteam} />;
export default Payload;
