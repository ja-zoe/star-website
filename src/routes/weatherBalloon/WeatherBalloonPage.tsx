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
        description="STAR's Weather Balloon team develops recoverable high-altitude payloads, flight software, telemetry, and experiments for near-space conditions."
        path="/weather-balloon"
        image="/og/weather-balloon.png"
      />
      <ProjectShell config={weatherBalloonConfig}>
        <Software />
        <Structures />
      </ProjectShell>
    </>
  );
};
export default WeatherBalloonPage;
