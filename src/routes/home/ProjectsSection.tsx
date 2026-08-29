import ProjectCard from "../../components/ProjectCard";
import SectionHeading from "../../components/SectionHeading";
import {
  cubesatConfig,
  roboticsConfig,
  weatherBalloonConfig,
} from "../../components/project/projectConfig";
import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";

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

const ProjectsSection = () => (
  <section
    id="ProjectsSection"
    className="relative w-full scroll-mt-24 border-b border-white/10 px-5 py-20 md:px-10 md:py-28"
  >
    <div className="mx-auto w-full max-w-7xl">
      <SectionHeading
        eyebrow="Choose a mission"
        title="Three teams. Real hardware."
        description="Start where your curiosity points. Each program has room for new builders across technical and non-technical roles."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-7">
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
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
