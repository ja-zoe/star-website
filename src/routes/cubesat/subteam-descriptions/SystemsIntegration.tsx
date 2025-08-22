import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { Layers } from "lucide-react";

const SystemsIntegration = () => {
  const starStatProps: StarStatProps = {
    stat: "Sys Integration",
    Icon: Layers,
    headline: "Lead: name",
    className: "bg-radial from-purple-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Systems Integration team is responsible for bringing all CubeSat
          subsystems together into a cohesive, functioning spacecraft. They
          ensure that mechanical, electrical, and software elements interact
          correctly and that the overall mission objectives are achievable.
          Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">
              Requirements Definition & Tracking:
            </span>{" "}
            Managing system-level requirements and verifying that each subsystem
            design aligns with mission goals and constraints.
          </li>
          <li>
            <span className="font-bold">Interface Control:</span> Defining and
            managing electrical, data, and mechanical interfaces between
            subsystems to ensure compatibility and minimize integration issues.
          </li>
          <li>
            <span className="font-bold">Assembly & Integration:</span>{" "}
            Overseeing the physical and electrical integration of subsystems
            onto the CubeSat structure and harnessing them into a unified
            spacecraft.
          </li>
          <li>
            <span className="font-bold">Systems Testing:</span> Conducting
            functional, end-to-end, and environmental tests (vibration, thermal
            vacuum, deployment) to validate that the integrated system works
            under mission conditions.
          </li>
          <li>
            <span className="font-bold">Mission Readiness:</span> Coordinating
            test data, resolving cross-team issues, and preparing the spacecraft
            for launch vehicle integration and operations.
          </li>
        </ul>
        <p>
          In essence, the Systems Integration Team serves as the connective
          tissue of the CubeSat, ensuring all subsystems work in harmony to
          deliver a reliable, flight-ready spacecraft.
        </p>
      </div>
    </SubteamModal>
  );
};
export default SystemsIntegration;
