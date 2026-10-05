import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Boxes } from "lucide-react";

const subteam: Subteam = {
  id: "robotics/mechanical",
  discipline: "Hardware",
  icon: Boxes,
  summary:
    "Mechanical builds the rover that digs — a chassis, drivetrain, and excavation system tuned for simulated lunar soil.",
  responsibilities: [
    { title: "Chassis & structure", body: "Build a stiff, serviceable frame that takes shock, vibration, and digging loads." },
    { title: "Mobility & suspension", body: "Pick drivetrains, wheels, and suspension for traction on loose simulant and obstacles." },
    { title: "Excavation & handling", body: "Engineer buckets, augers, and hoppers for efficient cut-carry-dump cycles." },
    { title: "Dust & thermal hardening", body: "Seal and shield against abrasive dust and manage motor and sun heat." },
    { title: "Manufacturability", body: "Design for fast iteration and field swaps of actuators, wheels, and buckets." },
    { title: "Field trials", body: "Run computer-based strength checks, endurance digs, and transport tests against competition limits." },
  ],
};

const Mechanical = () => <SubteamModal subteam={subteam} />;
export default Mechanical;
