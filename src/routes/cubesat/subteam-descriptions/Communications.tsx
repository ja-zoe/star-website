import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { RadioTower } from "lucide-react";

const subteam: Subteam = {
  name: "Communications",
  lead: "Miguel Pagador",
  leadLabel: "Lead",
  icon: RadioTower,
  summary:
    "Communications is SPICEsat's link home — sending data down and taking commands up across the void.",
  responsibilities: [
    { title: "RF system", body: "Design transceivers that operate within licensed frequencies and bandwidth limits." },
    { title: "Antennas", body: "Build compact or deployable antennas that stow in the CubeSat and unfold reliably in orbit." },
    { title: "Link budget", body: "Crunch signal, noise, and data rate to guarantee a solid link to the ground station." },
    { title: "Ground integration", body: "Match modulation, protocols, and pass scheduling with the ground network." },
    { title: "Test & validate", body: "Run end-to-end and over-the-air trials to confirm the link holds under real conditions." },
  ],
};

const Communications = () => <SubteamModal subteam={subteam} />;
export default Communications;
