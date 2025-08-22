import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { ThermometerSun } from "lucide-react";

const Thermal = () => {
  const starStatProps: StarStatProps = {
    stat: "Thermal",
    Icon: ThermometerSun,
    headline: "Lead: name",
    className: "bg-radial from-starblue/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Thermal team is responsible for managing the spacecraft’s
          temperature environment—ensuring that all components operate within
          safe limits despite the extremes of space. Their scope generally
          covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Thermal Modeling & Analysis:</span>{" "}
            Using software tools to predict how heat will flow through the
            CubeSat during different mission phases, including sunlight
            exposure, eclipse, and internal power dissipation.
          </li>
          <li>
            <span className="font-bold">Thermal Control Strategies:</span>{" "}
            Designing both passive (coatings, surface finishes, insulation, heat
            sinks) and active (heaters, thermostats) systems to keep subsystems
            within their allowable temperature ranges.
          </li>
          <li>
            <span className="font-bold">Material Selection:</span> Choosing
            thermal interface materials, insulation (like multi-layer insulation
            blankets), and coatings to balance heat absorption, emission, and
            retention.
          </li>
          <li>
            <span className="font-bold">Subsystem Interfaces:</span>{" "}
            Collaborating with avionics, power, and payload teams to ensure that
            heat-sensitive components receive adequate thermal protection and
            that power usage accounts for heater demand.
          </li>
          <li>
            <span className="font-bold">Testing & Validation:</span> Performing
            thermal vacuum (TVAC) tests, thermal balance tests, and heater
            cycling to verify that the spacecraft will survive orbital
            temperature swings and operate reliably.
          </li>
        </ul>
        <p>
          In essence, the Thermal Team safeguards the CubeSat against the
          temperature extremes of space, ensuring every subsystem remains
          functional from the cold darkness of eclipse to the searing heat of
          direct sunlight.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Thermal;
