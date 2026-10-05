import SubteamModal, { type Subteam } from "../../../components/SubteamModal";
import { RadioTower } from "lucide-react";

const subteam: Subteam = {
  id: "cubesat/communications",
  discipline: "Electrical",
  icon: RadioTower,
  summary:
    "Communications is SPICEsat's link home — sending data down and taking commands up across the void.",
  responsibilities: [
    { title: "Radio system", body: "Design the transmitters and receivers that send data and commands within licensed frequency and bandwidth limits." },
    { title: "Antennas", body: "Build compact or deployable antennas that stow in the CubeSat and unfold reliably in orbit." },
    { title: "Signal planning", body: "Balance signal strength, noise, and data rate to guarantee a reliable connection to the ground station." },
    { title: "Ground integration", body: "Match signal formats, communication rules, and pass scheduling with the ground network." },
    { title: "Test & validate", body: "Run end-to-end and over-the-air trials to confirm the link holds under real conditions." },
  ],
};

const Communications = () => <SubteamModal subteam={subteam} />;
export default Communications;
