import HomeSectionTitle from "../../components/HomeSectionTitle";
import ProjectCard from "../../components/ProjectCard";
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
      <HomeSectionTitle
        title="Our projects"
        display="OUR PROJECTS"
        description="Three teams with equal room to learn, contribute, and build something real."
      />
      <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3 lg:gap-7">
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
