import SubteamModal from "../../components/SubteamModal";
import { StarStatProps } from "../../components/StarStat";
import { Boxes } from "lucide-react";

const Mechanical = () => {
  const starStatProps: StarStatProps = {
    stat: "Mechanical",
    Icon: Boxes,
    headline: "Lead: name",
    className: "bg-radial from-starblue/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Mechanical team is responsible for the rover’s chassis, mobility,
          and excavation systems—balancing strength, mass, and dust mitigation
          for regolith operations. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Chassis & Structural Design:</span>{" "}
            Creating a stiff, serviceable frame that protects subsystems and
            endures shock, vibration, and digging loads.
          </li>
          <li>
            <span className="font-bold">Mobility & Suspension:</span> Selecting
            drivetrains, wheels/tracks, and suspensions for traction on loose
            simulant and obstacle negotiation.
          </li>
          <li>
            <span className="font-bold">Excavation & Handling:</span>{" "}
            Engineering buckets, scoops, or augers; load paths; and hoppers for
            efficient cut, carry, and dump cycles with minimal sinkage.
          </li>
          <li>
            <span className="font-bold">Thermal & Dust Hardening:</span>{" "}
            Incorporating seals, shields, and material finishes to resist
            abrasive dust; managing heat from motors, electronics, and sun
            exposure.
          </li>
          <li>
            <span className="font-bold">Manufacturability & Service:</span>{" "}
            Designing for rapid iteration, field repair, and modular swaps of
            actuators, wheels, and buckets.
          </li>
          <li>
            <span className="font-bold">Verification & Field Trials:</span>{" "}
            Conducting structural FEA, endurance digs, and transport tests to
            validate durability and performance under competition constraints.
          </li>
        </ul>
        <p>
          In essence, the Mechanical Team delivers a robust, maintainable
          platform that digs effectively and keeps moving when the terrain
          conspires against it.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Mechanical;
