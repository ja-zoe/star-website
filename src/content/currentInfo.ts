export type ProjectId = "cubesat" | "robotics" | "weather-balloon";

interface ProjectCurrentInfo {
  status: string;
  schedule: string;
  phase: string;
  latestPublished: string;
  latestNote: string;
  workingNowNote: string;
  nextCheckpoint: string;
  nextNote: string;
  lastUpdatedISO: string;
  lastUpdatedLabel: string;
  contentOwner: string;
}

interface CurrentInfo {
  term: string;
  lastUpdatedISO: string;
  lastUpdatedLabel: string;
  recruitment: {
    status: string;
    eligibility: string;
    prerequisites: string;
    commitment: string;
  };
  meetings: {
    status: string;
    usualLocation: string;
    locationNote: string;
  };
  contact: {
    email: string;
    emailHref: string;
    discordHref: string;
  };
  projects: Record<ProjectId, ProjectCurrentInfo>;
}

export const currentInfo: CurrentInfo = {
  term: "Fall 2026",
  lastUpdatedISO: "2026-08-29",
  lastUpdatedLabel: "August 29, 2026",
  recruitment: {
    status: "Interest open",
    eligibility: "Open to all Rutgers students",
    prerequisites: "No prior experience required",
    commitment: "Varies by project and subteam; confirm with a team lead",
  },
  meetings: {
    status: "Schedule being finalized",
    usualLocation: "The Cage",
    locationNote: "Exact date, time, and room vary; confirm by email or Discord",
  },
  contact: {
    email: "rutgersstar@gmail.com",
    emailHref:
      "mailto:rutgersstar@gmail.com?subject=STAR%20Fall%202026%20meeting%20details",
    discordHref: "https://discord.gg/vHa52wx9VK",
  },
  projects: {
    cubesat: {
      status: "Team focus: subsystem development toward FlatSat integration and spacecraft orientation-control testing",
      schedule: "CubeSat team schedule being finalized",
      phase: "Subsystem development & FlatSat integration",
      latestPublished: "Summer 2026 development underway",
      latestNote: "Structures, power, orientation control, flight software, and experiment-computer interfaces are being advanced toward a unified FlatSat for ground testing.",
      workingNowNote: "Structures, power, orientation control, flight software, and experiment-computer interfaces are advancing in parallel toward FlatSat integration.",
      nextCheckpoint: "Design review and FlatSat integration",
      nextNote: "Current work includes electrical power system validation, reaction-wheel bench testing, and verification between the main spacecraft computer and experiment computer.",
      lastUpdatedISO: "2026-08-29",
      lastUpdatedLabel: "August 29, 2026",
      contentOwner: "STAR CubeSat leadership",
    },
    robotics: {
      status: "Team focus: autonomous rover development for NASA Lunabotics",
      schedule: "Robotics team schedule being finalized",
      phase: "Rover development & integration",
      latestPublished: "Active autonomous rover development",
      latestNote: "The current season milestone and field-test date are awaiting team confirmation.",
      workingNowNote: "The chassis, electrical, and software subteams are developing their systems in parallel.",
      nextCheckpoint: "Next field-test checkpoint being confirmed",
      nextNote: "Ask the Robotics lead for the current build and test plan.",
      lastUpdatedISO: "2026-08-29",
      lastUpdatedLabel: "August 29, 2026",
      contentOwner: "STAR Robotics leadership",
    },
    "weather-balloon": {
      status: "Team focus: high-altitude payload development",
      schedule: "Weather Balloon team schedule being finalized",
      phase: "High-altitude payload development",
      latestPublished: "80,000+ ft published peak altitude",
      latestNote: "The supporting flight date and payload manifest are awaiting team confirmation.",
      workingNowNote: "The team is developing the high-altitude payload while preparing the next flight and launch plan.",
      nextCheckpoint: "Next flight window being confirmed",
      nextNote: "Ask the Weather Balloon lead for the current payload and launch plan.",
      lastUpdatedISO: "2026-08-29",
      lastUpdatedLabel: "August 29, 2026",
      contentOwner: "STAR Weather Balloon leadership",
    },
  },
};
