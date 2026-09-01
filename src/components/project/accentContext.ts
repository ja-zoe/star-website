import { createContext } from "react";
import type { ProjectId } from "../../content/currentInfo";

/**
 * Carries the active project identity to descendants that render into a portal
 * (e.g. the Radix Dialog in SubteamModal, which mounts at document.body and
 * therefore escapes the ProjectShell DOM cascade). The accent re-themes the
 * portal; the project id/name support project-specific contact actions.
 */
export interface ProjectContextValue {
  accent: string;
  projectId: ProjectId;
  projectName: string;
}

export const AccentContext = createContext<ProjectContextValue>({
  accent: "#ffffff",
  projectId: "cubesat",
  projectName: "STAR",
});
