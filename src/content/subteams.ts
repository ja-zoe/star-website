import type { ProjectId } from "./currentInfo";

/** Display name of every subteam, keyed by `<project>/<slug>`. The single source for subteam
 *  names: subteam cards and people's lead roles both reference these ids. */
export const SUBTEAM_NAMES = {
  "cubesat/structures": "Structures",
  "cubesat/thermal": "Thermal",
  "cubesat/power": "Power",
  "cubesat/communications": "Communications",
  "cubesat/systems-integration": "Systems Integration",
  "cubesat/flight-software": "Flight Software",
  "cubesat/payload": "Payload",
  "cubesat/guidance-and-controls": "Guidance & Controls",
  "robotics/mechanical": "Mechanical",
  "robotics/electrical": "Electrical",
  "robotics/software": "Software",
  "weather-balloon/software": "Software",
  "weather-balloon/structures": "Structures",
} as const satisfies Record<`${ProjectId}/${string}`, string>;

export type SubteamId = keyof typeof SUBTEAM_NAMES;

export const subteamProject = (id: SubteamId) => id.split("/")[0] as ProjectId;
