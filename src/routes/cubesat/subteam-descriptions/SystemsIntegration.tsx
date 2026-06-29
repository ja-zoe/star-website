import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Layers } from "lucide-react";

const subteam: Subteam = {
  name: "Sys Integration",
  lead: "Amrik Krishnakumar & Parth Patel",
  leadLabel: "Leads",
  icon: Layers,
  summary:
    "Systems Integration is the connective tissue — turning eight subsystems into one flight-ready spacecraft.",
  responsibilities: [
    { title: "Requirements", body: "Own system-level requirements and verify every subsystem traces back to mission goals." },
    { title: "Interface control", body: "Define the electrical, data, and mechanical interfaces so subsystems actually fit together." },
    { title: "Assembly & integration", body: "Integrate and harness subsystems onto the structure into a unified satellite." },
    { title: "Systems testing", body: "Drive functional, end-to-end, and environmental tests on the fully integrated stack." },
    { title: "Mission readiness", body: "Resolve cross-team issues and prep the satellite for launch-vehicle integration." },
  ],
};

const SystemsIntegration = () => <SubteamModal subteam={subteam} />;
export default SystemsIntegration;
