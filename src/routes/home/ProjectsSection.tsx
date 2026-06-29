import ProjectCard from "../../components/ProjectCard";
import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";
import { TextHoverEffect } from "../../components/ui/text-hover-effect";
import {
  roboticsConfig,
  weatherBalloonConfig,
  cubesatConfig,
} from "../../components/project/projectConfig";

// Cards are sourced from the same projectConfig that themes the project pages,
// so a card's hover reveal (dots = accentRgb, backdrop = cardRevealBg) matches
// its page's signature accent. Order matches the existing visual layout.
const cards = [
  { href: "robotics", title: "Robotics", icon: roverIcon, config: roboticsConfig },
  {
    href: "weather-balloon",
    title: "Weather Balloon",
    icon: weatherBalloonIcon,
    config: weatherBalloonConfig,
  },
  { href: "cubesat", title: "Cubesat", icon: satelliteIcon, config: cubesatConfig },
];

const ProjectsSection = () => {
  return (
    <div
      id="ProjectsSection"
      className="w-screen flex flex-col gap-0 justify-center items-center relative pb-20 pt-10"
    >
      <TextHoverEffect text="OUR PROJECTS" />
      <div className="w-full px-5 z-20 flex flex-wrap items-center justify-center gap-5">
        {cards.map(({ href, title, icon, config }) => (
          <ProjectCard
            key={href}
            href={href}
            title={title}
            icon={icon}
            colors={[config.accentRgb]}
            revealBg={config.cardRevealBg}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
