import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Boxes } from "lucide-react";

const subteam: Subteam = {
  name: "Mechanical",
  lead: "Matt Leighton, Thomas Kamyszek & Kanika Syal",
  leadLabel: "Leads",
  icon: Boxes,
  summary:
    "Mechanical builds the rover that digs — a chassis, drivetrain, and excavation system tuned for lunar regolith.",
  responsibilities: [
    { title: "Chassis & structure", body: "Build a stiff, serviceable frame that takes shock, vibration, and digging loads." },
    { title: "Mobility & suspension", body: "Pick drivetrains, wheels, and suspension for traction on loose simulant and obstacles." },
    { title: "Excavation & handling", body: "Engineer buckets, augers, and hoppers for efficient cut-carry-dump cycles." },
    { title: "Dust & thermal hardening", body: "Seal and shield against abrasive dust and manage motor and sun heat." },
    { title: "Manufacturability", body: "Design for fast iteration and field swaps of actuators, wheels, and buckets." },
    { title: "Field trials", body: "Run FEA, endurance digs, and transport tests against competition limits." },
  ],
};

const Mechanical = () => <SubteamModal subteam={subteam} />;
export default Mechanical;
