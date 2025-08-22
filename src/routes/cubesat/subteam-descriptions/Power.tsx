import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { Zap } from "lucide-react";

const Power = () => {
  const starStatProps: StarStatProps = {
    stat: "Power",
    Icon: Zap,
    headline: "Lead: name",
    className: "bg-radial from-yellow-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Power team is responsible for generating, storing, and
          distributing electrical energy throughout the spacecraft. They ensure
          that every subsystem receives reliable power under all mission
          conditions. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Power Generation:</span> Designing and
            integrating solar panels to maximize energy capture within CubeSat
            size constraints and orbital conditions.
          </li>
          <li>
            <span className="font-bold">Energy Storage:</span> Selecting and
            managing rechargeable batteries to provide consistent power through
            eclipses and peak load events.
          </li>
          <li>
            <span className="font-bold">Power Regulation & Distribution:</span>{" "}
            Developing circuitry and power buses that step voltages up or down,
            protect against faults, and allocate power efficiently to
            subsystems.
          </li>
          <li>
            <span className="font-bold">Monitoring & Fault Protection:</span>{" "}
            Implementing sensors, current limiting, and fault detection systems
            to safeguard against overcurrent, overvoltage, or battery
            degradation.
          </li>
          <li>
            <span className="font-bold">Testing & Validation:</span> Conducting
            power budget analysis, hardware-in-the-loop testing, and lifetime
            cycling of batteries to ensure robust performance throughout the
            mission.
          </li>
        </ul>
        <p>
          In essence, the Power Team provides the electrical lifeblood of the
          CubeSat, making certain that every component has the energy required
          to perform its function across the mission’s lifetime.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Power;
