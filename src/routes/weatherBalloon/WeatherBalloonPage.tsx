import Software from "./Software";
import Structures from "./Structures";
import Seo from "../../components/Seo";
import ProjectShell from "../../components/project/ProjectShell";
import { weatherBalloonConfig } from "../../components/project/projectConfig";

const WeatherBalloonPage = () => {
  return (
    <>
      <Seo
        title="Weather Balloon — STAR"
        description="STAR's Weather Balloon team designs and launches high-altitude payloads every semester, capturing near-space data and imagery on the edge of the atmosphere."
        path="/weather-balloon"
      />
      <ProjectShell config={weatherBalloonConfig}>
        <Software />
        <Structures />
      </ProjectShell>
    </>
  );
};
export default WeatherBalloonPage;
