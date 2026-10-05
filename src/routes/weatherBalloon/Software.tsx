import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  id: "weather-balloon/software",
  discipline: "Flight software",
  icon: Binary,
  summary:
    "Software runs the payload in flight — driving the sensors and getting data safely to the ground and back.",
  responsibilities: [
    { title: "Flight software", body: "Write the onboard code that runs the sensors, location tracker, and communication hardware." },
    { title: "Data handling", body: "Collect readings, structure them, and store and transmit them reliably." },
    { title: "Ground communications", body: "Build live status updates that stream position, altitude, and environmental readings to the ground." },
    { title: "Fault tolerance", body: "Add health checks and safeguards that catch problems and recover during flight." },
    { title: "Analysis tools", body: "Build the pipelines that visualize and interpret data after recovery." },
  ],
};

const Software = () => <SubteamModal subteam={subteam} />;
export default Software;
