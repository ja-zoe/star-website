import type { Role } from "../../content/people";
import { SUBTEAM_NAMES, subteamProject } from "../../content/subteams";
import { projectConfigs } from "../project/projectConfig";

const projectName = (id: string) => projectConfigs.find((config) => config.id === id)?.name ?? id;

/**
 * Display label for a role. `withProject: false` drops the project prefix where the page
 * already names the project (the project managers and chief engineers on a project page).
 */
export const roleLabel = (role: Role, { withProject = true } = {}) => {
  switch (role.kind) {
    case "eboard":
      return role.position;
    case "project": {
      const title = role.scope ? `${role.position} · ${role.scope}` : role.position;
      return withProject ? `${projectName(role.project)} · ${title}` : title;
    }
    case "subteam-lead": {
      const title = `${SUBTEAM_NAMES[role.subteam]} Lead`;
      return withProject ? `${projectName(subteamProject(role.subteam))} · ${title}` : title;
    }
  }
};
