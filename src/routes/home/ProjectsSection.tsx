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
  {
    href: "/robotics",
    index: "01",
    title: "Robotics",
    purpose: "Build an autonomous rover for NASA Lunabotics.",
    icon: roverIcon,
    config: roboticsConfig,
  },
  {
    href: "/weather-balloon",
    index: "02",
    title: "Weather Balloon",
    purpose: "Launch student experiments to the edge of space.",
    icon: weatherBalloonIcon,
    config: weatherBalloonConfig,
  },
  {
    href: "/cubesat",
    index: "03",
    title: "CubeSat",
    purpose: "Engineer Rutgers' first student-built satellite.",
    icon: satelliteIcon,
    config: cubesatConfig,
  },
];

const ProjectsSection = () => {
  return (
    <div
      id="ProjectsSection"
      className="relative flex w-screen scroll-mt-24 flex-col items-center justify-center gap-0 pb-20 pt-10"
    >
      <TextHoverEffect text="OUR PROJECTS" />
      <div className="z-20 flex w-full max-w-7xl flex-wrap items-center justify-center gap-6 px-5 lg:gap-8">
        {cards.map(({ href, index, title, purpose, icon, config }) => (
          <ProjectCard
            key={href}
            href={href}
            index={index}
            title={title}
            icon={icon}
            purpose={purpose}
            facts={config.stats}
            accent={config.accent}
            colors={[config.accentRgb]}
            revealBg={config.cardRevealBg}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
