export type ProjectId = "cubesat" | "robotics" | "weather-balloon";

interface ProjectCurrentInfo {
  status: string;
  schedule: string;
  phase: string;
  latestPublished: string;
  latestNote: string;
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
      status: "Team focus: SPICEsat systems engineering and testing",
      schedule: "CubeSat team schedule being finalized",
      phase: "Engineering model & systems testing",
      latestPublished: "Engineering model in testing",
      latestNote: "A completion date and test record are awaiting public confirmation.",
      nextCheckpoint: "Next public milestone being confirmed",
      nextNote: "Ask the CubeSat lead for the current internal test schedule.",
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
      nextCheckpoint: "Next flight window being confirmed",
      nextNote: "Ask the Weather Balloon lead for the current payload and launch plan.",
      lastUpdatedISO: "2026-08-29",
      lastUpdatedLabel: "August 29, 2026",
      contentOwner: "STAR Weather Balloon leadership",
    },
  },
};
