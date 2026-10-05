import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { Layers } from "lucide-react";

const subteam: Subteam = {
  id: "cubesat/systems-integration",
  discipline: "Systems",
  icon: Layers,
  summary:
    "Systems Integration is the connective tissue — turning eight technical systems into one flight-ready spacecraft.",
  responsibilities: [
    { title: "Requirements", body: "Own the spacecraft's requirements and verify every technical system supports the mission goals." },
    { title: "Interface control", body: "Define the electrical, data, and mechanical connections so every part actually fits and communicates with the others." },
    { title: "Assembly & integration", body: "Install and connect each system onto the structure to create one working satellite." },
    { title: "Systems testing", body: "Lead functional, end-to-end, and environmental tests on the fully assembled satellite." },
    { title: "Mission readiness", body: "Resolve cross-team issues and prep the satellite for launch-vehicle integration." },
  ],
};

const SystemsIntegration = () => <SubteamModal subteam={subteam} />;
export default SystemsIntegration;
