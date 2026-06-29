import Mechanical from "./Mechanical";
import Software from "./Software";
import Electrical from "./Electrical";
import Seo from "../../components/Seo";
import ProjectShell from "../../components/project/ProjectShell";
import { roboticsConfig } from "../../components/project/projectConfig";

const RoboticsPage = () => {
  return (
    <>
      <Seo
        title="Robotics — STAR"
        description="STAR's Robotics team builds an autonomous excavation rover for NASA's Lunabotics challenge, spanning mechanical, electrical, and software subteams."
        path="/robotics"
      />
      <ProjectShell config={roboticsConfig}>
        <Mechanical />
        <Electrical />
        <Software />
      </ProjectShell>
    </>
  );
};
export default RoboticsPage;
