import Structures from "./subteam-descriptions/Structures";
import ADCS from "./subteam-descriptions/ADCS";
import Communications from "./subteam-descriptions/Communications";
import FlightSoftware from "./subteam-descriptions/FSW";
import Payload from "./subteam-descriptions/Payload";
import SystemsIntegration from "./subteam-descriptions/SystemsIntegration";
import Thermal from "./subteam-descriptions/Thermal";
import Power from "./subteam-descriptions/Power";
import Seo from "../../components/Seo";
import ProjectShell from "../../components/project/ProjectShell";
import { cubesatConfig } from "../../components/project/projectConfig";

const CubesatPage = () => {
  return (
    <>
      <Seo
        title="CubeSat — STAR"
        description="STAR's CubeSat team is engineering Rutgers' first student-built satellite across eight technical subteams, with a mission focused on fuel slosh in microgravity."
        path="/cubesat"
        image="/og/cubesat.png"
      />
      <ProjectShell config={cubesatConfig}>
        <Structures />
        <Thermal />
        <Power />
        <Communications />
        <SystemsIntegration />
        <FlightSoftware />
        <Payload />
        <ADCS />
      </ProjectShell>
    </>
  );
};
export default CubesatPage;
