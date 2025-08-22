import { ShootingStars } from "../../components/ui/shooting-stars";
import ProjectCard from "../../components/ProjectCard";
import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";

const ProjectsPage = () => {
  return (
    <div
      id="ProjectsPage"
      className="w-screen flex flex-col gap-0 justify-center items-center relative pb-20 pt-10"
    >
      <TextHoverEffect text="OUR PROJECTS" />
      <div className="w-full px-5 z-20 flex flex-wrap items-center justify-center gap-5">
        <ProjectCard
          href="robotics"
          title="Robotics"
          icon={roverIcon}
          colors={[[3, 208, 16]]}
        />
        <ProjectCard
          href="weather-balloon"
          title="Weather Balloon"
          icon={weatherBalloonIcon}
          colors={[[0, 145, 255]]}
        />
        <ProjectCard
          href="cubesat"
          title="Cubesat"
          icon={satelliteIcon}
          colors={[[0, 0, 0]]}
        />
      </div>
      <ShootingStars />
    </div>
  );
};
export default ProjectsPage;
