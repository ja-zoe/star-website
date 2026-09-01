import { Satellite, Bot, Wind, type LucideIcon } from "lucide-react";
import type { ProjectId } from "../../content/currentInfo";

export interface ProjectStat {
  value: string;
  label: string;
}

export interface MissionSection {
  title: string;
  body: string;
}

export interface MissionArtifactStep {
  label: string;
  detail: string;
}

export interface MissionArtifact {
  kicker: string;
  title: string;
  description: string;
  steps: MissionArtifactStep[];
  note: string;
}

export interface ProjectConfig {
  id: ProjectId;
  eyebrow: string;
  name: string;
  tagline: string;
  accent: string;
  motifIcon: LucideIcon;
  stats: ProjectStat[];
  mission: MissionSection[];
  artifact: MissionArtifact;
  ctaHref: string;
  ctaLabel: string;
}

const DISCORD = "https://discord.gg/vHa52wx9VK";

export const cubesatConfig: ProjectConfig = {
  id: "cubesat",
  eyebrow: "PROJECT 01 · CUBESAT",
  name: "CubeSat",
  tagline:
    "SPICEsat — Rutgers' first student-built satellite, designed to characterize propellant slosh in microgravity and test active control.",
  accent: "#F5A524",
  motifIcon: Satellite,
  stats: [
    { value: "8", label: "Technical subteams" },
    { value: "UNP", label: "University Nanosatellite Program" },
    { value: "Microgravity", label: "Science focus" },
    { value: "Rutgers' first", label: "Student satellite" },
  ],
  mission: [
    {
      title: "Why it matters",
      body: "SPICEsat is a student-developed 6U (six-unit) CubeSat investigating liquid sloshing in microgravity. Propellant motion can create forces and torques that affect spacecraft pointing and orientation control, especially when propellant is a substantial share of the spacecraft mass.",
    },
    {
      title: "What we are building",
      body: "An instrumented fluid experiment and controlled spacecraft maneuvers will characterize low-gravity slosh and evaluate active reduction of fluid settling time. Flight data will help validate improved slosh models and control strategies for future spacecraft.",
    },
    {
      title: "What members do",
      body: "The team is preparing for a major design review while updating structural analyses for the revised tank and spacecraft configuration, validating the electrical power system and ground-test equipment, integrating the reaction wheel with the onboard flight software, and defining the command, data, timing, and control handoff between the main and experiment computers.",
    },
  ],
  artifact: {
    kicker: "System view",
    title: "How SPICEsat works",
    description:
      "The spacecraft is both the experiment apparatus and the thing under test. It disturbs its own propellant on command, measures the response, and then tries to damp it out.",
    steps: [
      { label: "Excite", detail: "Command the internal spinning reaction wheel through defined maneuvers to intentionally disturb the experiment fluid." },
      { label: "Measure", detail: "Use experiment sensors and spacecraft orientation data to record how the fluid and spacecraft respond during each maneuver." },
      { label: "Characterize", detail: "Process the measurements onboard and on the ground to study the relationship between spacecraft motion and fluid behavior." },
      { label: "Mitigate", detail: "Run a control algorithm that commands the spacecraft response with the goal of reducing slosh and fluid settling time." },
      { label: "Compare", detail: "Compare flight measurements with analytical and numerical slosh models to improve low-gravity fluid predictions." },
    ],
    note: "Structures, thermal, power, communications, and systems integration support every step of the closed loop.",
  },
  ctaHref: DISCORD,
  ctaLabel: "Join CubeSat on Discord",
};

export const roboticsConfig: ProjectConfig = {
  id: "robotics",
  eyebrow: "PROJECT 02 · ROBOTICS",
  name: "Robotics",
  tagline:
    "An autonomous excavation rover engineered for NASA's Lunabotics challenge.",
  accent: "#34D399",
  motifIcon: Bot,
  stats: [
    { value: "3", label: "Technical subteams" },
    { value: "NASA", label: "Lunabotics" },
    { value: "Autonomous", label: "Excavation goal" },
    { value: "Lunar", label: "Soil simulant" },
  ],
  mission: [
    {
      title: "The challenge",
      body: "NASA Lunabotics asks university teams to excavate and transport simulated lunar soil while navigating a competition arena under strict mission constraints.",
    },
    {
      title: "What we are building",
      body: "The team develops its competition rover in-house, combining terrain-aware mobility, excavation hardware, electrical power and controls, perception, planning, and autonomous operation.",
    },
    {
      title: "What members do",
      body: "Members design, fabricate, wire, program, integrate, and field-test the rover. The work connects mechanical design, embedded systems, autonomy, safety, and mission-driven iteration.",
    },
  ],
  artifact: {
    kicker: "Excavation cycle",
    title: "One autonomous run, three subteams",
    description:
      "A competition run can be teleop or autonomous, and the team can switch modes in the middle of the run. Fully autonomous operation earns more points, so the rover must keep the same sensing, planning, control, and safety loop working without driver input.",
    steps: [
      { label: "Perceive", detail: "Use onboard sensors to understand pose, terrain, and obstacles." },
      { label: "Plan", detail: "Choose a safe route and excavation sequence within competition constraints." },
      { label: "Drive", detail: "Turn motion commands into controlled wheel and actuator behavior." },
      { label: "Excavate", detail: "Collect, carry, and deposit simulated lunar soil with the mechanical system." },
      { label: "Verify", detail: "Monitor health, log results, and recover safely when conditions change." },
    ],
    note: "Mechanical, Electrical, and Software own different parts of the loop and test the complete cycle together.",
  },
  ctaHref: DISCORD,
  ctaLabel: "Join Robotics on Discord",
};

export const weatherBalloonConfig: ProjectConfig = {
  id: "weather-balloon",
  eyebrow: "PROJECT 03 · WEATHER BALLOON",
  name: "Weather Balloon",
  tagline:
    "Recoverable high-altitude experiment packages carrying student experiments to near-space conditions.",
  accent: "#38BDF8",
  motifIcon: Wind,
  stats: [
    { value: "80,000+ ft", label: "Published peak" },
    { value: "2", label: "Technical subteams" },
    { value: "Semester", label: "Target cadence" },
    { value: "Near-space", label: "Flight environment" },
  ],
  mission: [
    {
      title: "The environment",
      body: "High-altitude balloon flights expose student experiment packages to low pressure and low temperature while enabling measurements far above normal ground-test conditions.",
    },
    {
      title: "What we are building",
      body: "The team designs a recoverable experiment enclosure, integrates sensors and flight electronics, writes onboard and ground software, and prepares the system for launch and tracking.",
    },
    {
      title: "What members do",
      body: "Members take a mission from experiment planning through fabrication, software, launch preparation, live status data, recovery, and post-flight analysis.",
    },
  ],
  artifact: {
    kicker: "Flight profile",
    title: "An experiment package's path from bench to recovery",
    description:
      "The flight is only one part of the mission. Useful results depend on preparation before launch and careful recovery and analysis afterward.",
    steps: [
      { label: "Build", detail: "Integrate the enclosure, sensors, power, flight computer, and recovery hardware." },
      { label: "Launch", detail: "Complete final checks and begin live position and health tracking." },
      { label: "Ascent", detail: "Record environmental and experiment data through near-space conditions." },
      { label: "Descent", detail: "Track the experiment package after balloon burst while the recovery system slows the return." },
      { label: "Recover", detail: "Retrieve the experiment package, validate stored data, and document what to change next." },
    ],
    note: "Public flight dates, payload manifests, and results will appear here once confirmed by the team.",
  },
  ctaHref: DISCORD,
  ctaLabel: "Join Weather Balloon on Discord",
};

export const projectConfigs: ProjectConfig[] = [
  cubesatConfig,
  roboticsConfig,
  weatherBalloonConfig,
];
