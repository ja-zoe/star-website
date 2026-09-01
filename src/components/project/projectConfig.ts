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
    "SPICEsat — Rutgers' first student-built satellite, engineered to study fuel slosh in microgravity.",
  accent: "#F5A524",
  motifIcon: Satellite,
  stats: [
    { value: "8", label: "Technical subteams" },
    { value: "UNP", label: "Program participant" },
    { value: "Microgravity", label: "Science focus" },
    { value: "Rutgers' first", label: "Student satellite" },
  ],
  mission: [
    {
      title: "Why it matters",
      body: "Spacecraft fuel moves in microgravity. Understanding that motion can improve how future vehicles model propellant and maintain control.",
    },
    {
      title: "What we are building",
      body: "SPICEsat combines a fuel-slosh experiment with onboard sensing and active stabilization. The mission participates in the University Nanosatellite Program with faculty and industry guidance.",
    },
    {
      title: "What members do",
      body: "Students work across the satellite lifecycle: requirements, mechanical and electrical design, flight software, payload integration, subsystem tests, and full-system verification using commercial and custom hardware.",
    },
  ],
  artifact: {
    kicker: "System view",
    title: "How the experiment becomes mission data",
    description:
      "SPICEsat is one connected system. Each handoff below depends on several subteams working from shared interfaces and test plans.",
    steps: [
      { label: "Payload experiment", detail: "Excite and observe fuel motion with the experiment hardware and sensors." },
      { label: "Attitude control", detail: "Point and stabilize the spacecraft around the experiment sequence." },
      { label: "Flight software", detail: "Coordinate commands, timing, health checks, and stored data." },
      { label: "Communications", detail: "Package mission telemetry for downlink and accept ground commands." },
      { label: "Ground analysis", detail: "Compare imagery and sensor measurements after each experiment run." },
    ],
    note: "Structures, thermal, power, and systems integration support every step of the sequence.",
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
    { value: "Lunar", label: "Regolith analog" },
  ],
  mission: [
    {
      title: "The challenge",
      body: "NASA Lunabotics asks university teams to excavate and transport simulated lunar regolith while navigating a competition arena under strict mission constraints.",
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
      "A successful dig is a closed loop: the rover senses the arena, decides where to move, controls its hardware, and checks that the mission remains safe.",
    steps: [
      { label: "Perceive", detail: "Use onboard sensors to understand pose, terrain, and obstacles." },
      { label: "Plan", detail: "Choose a safe route and excavation sequence within competition constraints." },
      { label: "Drive", detail: "Turn motion commands into controlled wheel and actuator behavior." },
      { label: "Excavate", detail: "Collect, carry, and deposit regolith simulant with the mechanical system." },
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
    "High-altitude payloads carrying student experiments to near-space conditions.",
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
      body: "High-altitude balloon flights expose student payloads to low pressure and low temperature while enabling measurements far above normal ground-test conditions.",
    },
    {
      title: "What we are building",
      body: "The team designs a recoverable payload enclosure, integrates sensors and flight electronics, writes onboard and ground software, and prepares the system for launch and tracking.",
    },
    {
      title: "What members do",
      body: "Members take a mission from experiment planning through fabrication, software, launch preparation, telemetry, recovery, and post-flight analysis.",
    },
  ],
  artifact: {
    kicker: "Flight profile",
    title: "A payload's path from bench to recovery",
    description:
      "The flight is only one part of the mission. Useful results depend on preparation before launch and careful recovery and analysis afterward.",
    steps: [
      { label: "Build", detail: "Integrate the enclosure, sensors, power, flight computer, and recovery hardware." },
      { label: "Launch", detail: "Complete final checks and begin live position and health tracking." },
      { label: "Ascent", detail: "Record environmental and experiment data through near-space conditions." },
      { label: "Descent", detail: "Track the payload after balloon burst while the recovery system slows the return." },
      { label: "Recover", detail: "Retrieve the payload, validate stored data, and document what to change next." },
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
