import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { FlaskConical } from "lucide-react";

const subteam: Subteam = {
  name: "Payload",
  lead: "Daniel Jedrzejczyk",
  leadLabel: "Lead",
  icon: FlaskConical,
  summary:
    "Payload is the reason SPICEsat flies — the instrument that measures fuel slosh in microgravity.",
  responsibilities: [
    { title: "Design & development", body: "Engineer the instrument and slosh experiment at the heart of the mission." },
    { title: "Environmental survival", body: "Make it take the thermal, vibration, and radiation of launch and orbit." },
    { title: "Mechanical & electrical interfaces", body: "Fit it to the structure and tie it cleanly into power and data." },
    { title: "Data & operations", body: "Define how it collects, stores, and downlinks results within power and comms limits." },
    { title: "Test & calibrate", body: "Calibrate and verify so the data coming home actually means something." },
  ],
};

const Payload = () => <SubteamModal subteam={subteam} />;
export default Payload;
