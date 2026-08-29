import { Satellite, Bot, Wind, type LucideIcon } from "lucide-react";

export interface ProjectStat {
  /** Big accent value, e.g. "8" or "80,000+ ft". */
  value: string;
  /** Small uppercase caption under it. */
  label: string;
}

export interface ProjectConfig {
  /** Mono eyebrow over the title, e.g. "PROJECT 01 · CUBESAT". */
  eyebrow: string;
  /** Page <h1>. */
  name: string;
  /** One-line mission tagline. */
  tagline: string;
  /** Signature accent (design/tokens.md › Project signature accents). */
  accent: string;
  /** Faint backdrop motif (lucide). */
  motifIcon: LucideIcon;
  /** At-a-glance stat band — verifiable facts only. */
  stats: ProjectStat[];
  /** "The mission" prose, paragraph by paragraph (existing page copy). */
  mission: string[];
  /** Current-status line for the closing section. */
  statusBody: string;
  /** Meeting/▸join note. */
  meetingNote: string;
  ctaHref: string;
  ctaLabel: string;
}

const DISCORD = "https://discord.gg/vHa52wx9VK";
const MEETING_NOTE =
  "Meeting times will be posted here soon — check the Discord for the current schedule and to get plugged into a subteam.";

export const cubesatConfig: ProjectConfig = {
  eyebrow: "PROJECT 01 · CUBE SATELLITE",
  name: "Cube Satellite",
  tagline:
    "SPICEsat — Rutgers' first student-built satellite, engineered to study fuel slosh in microgravity.",
  accent: "#F5A524",
  motifIcon: Satellite,
  stats: [
    { value: "8", label: "Subteams" },
    { value: "UNP", label: "Nanosat program" },
    { value: "Microgravity", label: "Science focus" },
    { value: "Rutgers 1st", label: "Student satellite" },
  ],
  mission: [
    "The CubeSat project is developing SPICEsat, Rutgers University's first student-built satellite. This mission is part of the prestigious University Nanosatellite Program, under mentorship from faculty and guidance from industry professionals. The satellite's primary scientific objective is to investigate fluid sloshing dynamics in microgravity, a critical problem in spacecraft fuel management. By characterizing slosh behavior and testing active control stabilization algorithms in orbit, SPICEsat aims to advance the state of onboard fuel modeling and control strategies beyond what passive systems allow.",
    "Students on the team are directly involved in the complete satellite lifecycle—from mission conceptualization and payload integration to subsystem testing and full-system validation. SPICEsat uses a combination of COTS components and custom hardware, offering students exposure to real-world spacecraft design and interdisciplinary systems engineering. With an engineering model already in testing, the mission is rapidly progressing toward flight readiness and serves as a launchpad for the next generation of space systems engineers.",
  ],
  statusBody:
    "An engineering model is already in testing as the mission progresses toward flight readiness.",
  meetingNote: MEETING_NOTE,
  ctaHref: DISCORD,
  ctaLabel: "Join the mission on Discord",
};

export const roboticsConfig: ProjectConfig = {
  eyebrow: "PROJECT 02 · ROBOTICS",
  name: "Robotics",
  tagline:
    "An autonomous excavation rover engineered for NASA's Lunabotics challenge.",
  accent: "#34D399",
  motifIcon: Bot,
  stats: [
    { value: "3", label: "Subteams" },
    { value: "NASA", label: "Lunabotics" },
    { value: "Autonomous", label: "Excavation" },
    { value: "Lunar", label: "Regolith ops" },
  ],
  mission: [
    "The Robotics project is designing and building a fully autonomous lunar rover for NASA's annual Lunabotics Challenge, a national competition where university teams simulate real lunar surface operations by constructing a robot capable of excavating and transporting regolith — moon-like soil — while navigating a competition arena that mimics the lunar environment. The team's rover is developed entirely in-house, with student-led subsystems spanning mechanical design, embedded systems, autonomy, perception, and control, featuring terrain-adaptive locomotion, regolith excavation tools, and autonomous navigation algorithms optimized for excavation throughput and energy efficiency. By engineering under stringent NASA competition rules and real lunar mission constraints — resource limitation, autonomous decision-making, and dust mitigation — members gain hands-on experience in planetary robotics, systems integration, and mission-driven problem solving, preparing them for careers in aerospace, robotics, and beyond.",
  ],
  statusBody:
    "The team competes in NASA's annual Lunabotics Challenge, iterating the rover season over season.",
  meetingNote: MEETING_NOTE,
  ctaHref: DISCORD,
  ctaLabel: "Join the mission on Discord",
};

export const weatherBalloonConfig: ProjectConfig = {
  eyebrow: "PROJECT 03 · WEATHER BALLOON",
  name: "Weather Balloon",
  tagline:
    "High-altitude payloads carrying experiments to the edge of space — launched every semester.",
  accent: "#38BDF8",
  motifIcon: Wind,
  stats: [
    { value: "80,000+ ft", label: "Peak altitude" },
    { value: "2", label: "Subteams" },
    { value: "Every sem.", label: "Launch cadence" },
    { value: "Near-space", label: "Flight regime" },
  ],
  mission: [
    "The Weather Balloon Team designs, fabricates, and launches high-altitude experimental payloads each academic semester. These systems routinely reach altitudes exceeding 80,000 feet via high-altitude balloon platforms, enabling near-space data collection and flight system validation in low-pressure, low-temperature environments.",
  ],
  statusBody:
    "The team designs and launches a new high-altitude payload every academic semester.",
  meetingNote: MEETING_NOTE,
  ctaHref: DISCORD,
  ctaLabel: "Join the mission on Discord",
};
