import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  name: "Software",
  lead: "Victoria Santiago",
  leadLabel: "Lead",
  icon: Binary,
  summary:
    "Software runs the payload in flight — driving the sensors and getting data safely to the ground and back.",
  responsibilities: [
    { title: "Flight software", body: "Write the embedded code that runs the sensors, GPS, and comms modules." },
    { title: "Data handling", body: "Collect readings, structure them, and store and transmit them reliably." },
    { title: "Ground comms", body: "Build telemetry that streams position, altitude, and environment in real time." },
    { title: "Fault tolerance", body: "Add watchdogs and safeguards that catch anomalies and recover mid-flight." },
    { title: "Analysis tools", body: "Build the pipelines that visualize and interpret data after recovery." },
  ],
};

const Software = () => <SubteamModal subteam={subteam} />;
export default Software;
