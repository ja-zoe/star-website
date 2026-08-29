export type ProjectId = "cubesat" | "robotics" | "weather-balloon";

interface ProjectCurrentInfo {
  status: string;
  schedule: string;
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
    },
    robotics: {
      status: "Team focus: autonomous rover development for NASA Lunabotics",
      schedule: "Robotics team schedule being finalized",
    },
    "weather-balloon": {
      status: "Team focus: high-altitude payload development",
      schedule: "Weather Balloon team schedule being finalized",
    },
  },
};
