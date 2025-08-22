import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { Boxes } from "lucide-react";

const Structures = () => {
  const starStatProps: StarStatProps = {
    stat: "Structures",
    Icon: Boxes,
    headline: "Lead: name",
    className: "bg-radial from-starblue/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Structures team is responsible for the spacecraft’s physical
          frame—the skeleton that holds everything together and ensures survival
          in the harsh conditions of launch and orbit. Their scope generally
          covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Mechanical Design & CAD Modeling:</span>{" "}
            Developing the CubeSat’s chassis, brackets, and deployables (like
            solar panels or antennas) to fit within CubeSat standards and
            payload constraints.
          </li>
          <li>
            <span className="font-bold">Material Selection:</span> Choosing
            lightweight yet durable materials (often aluminum alloys or
            composites) that can endure high launch loads, thermal cycling, and
            radiation exposure.
          </li>
          <li>
            <span className="font-bold">Integration & Interfaces:</span>{" "}
            Designing mounting schemes for subsystems (avionics, payload, power,
            comms) and ensuring accessibility for assembly and testing.
          </li>
          <li>
            <span className="font-bold">Structural Analysis:</span> Using finite
            element analysis (FEA) and other methods to validate that the
            structure can withstand vibration, shock, and load conditions of
            launch.
          </li>
          <li>
            <span className="font-bold">Testing & Validation:</span> Conducting
            vibration, thermal, and fit-check tests to verify that the CubeSat
            will remain structurally sound through all mission phases.
          </li>
        </ul>
        <p>
          In essence, the Structures Team transforms the CubeSat from a
          collection of boards and components into a robust spacecraft capable
          of surviving the violence of launch and the vacuum of space.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Structures;
