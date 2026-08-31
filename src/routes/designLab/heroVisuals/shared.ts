import roverIcon from "/rover-icon.png";
import satelliteIcon from "/satellite-icon.png";
import weatherBalloonIcon from "/weather-balloon-icon.png";

export type HeroProjectId = "robotics" | "weather-balloon" | "cubesat";

export interface HeroProject {
  id: HeroProjectId;
  label: string;
  number: string;
  accent: string;
  dimAccent: string;
  icon: string;
  signal: string;
}

export const heroProjects: HeroProject[] = [
  {
    id: "robotics",
    label: "Robotics",
    number: "01",
    accent: "#34D399",
    dimAccent: "rgba(52, 211, 153, 0.18)",
    icon: roverIcon,
    signal: "GROUND",
  },
  {
    id: "weather-balloon",
    label: "Weather Balloon",
    number: "02",
    accent: "#38BDF8",
    dimAccent: "rgba(56, 189, 248, 0.18)",
    icon: weatherBalloonIcon,
    signal: "ASCENT",
  },
  {
    id: "cubesat",
    label: "CubeSat",
    number: "03",
    accent: "#F5A524",
    dimAccent: "rgba(245, 165, 36, 0.18)",
    icon: satelliteIcon,
    signal: "ORBIT",
  },
];

export const getHeroProject = (id: HeroProjectId) =>
  heroProjects.find((project) => project.id === id) ?? heroProjects[2];

export interface HeroVisualProps {
  activeProject: HeroProjectId;
  motionEnabled: boolean;
}
