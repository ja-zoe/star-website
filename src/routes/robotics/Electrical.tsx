import SubteamModal from "../../components/SubteamModal";
import { StarStatProps } from "../../components/StarStat";
import { Zap } from "lucide-react";

const Electrical = () => {
  const starStatProps: StarStatProps = {
    stat: "Electrical",
    Icon: Zap,
    headline: "Lead: name",
    className: "bg-radial from-yellow-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Electrical team is responsible for power generation, storage, and
          distribution; motor control; and sensor interfacing that underpin both
          autonomous and RC operations. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Power Architecture:</span> Designing
            battery systems, protection, and DC–DC regulation to deliver stable
            rails under peak loads from drive and excavation subsystems.
          </li>
          <li>
            <span className="font-bold">Motor Control & Actuation:</span>{" "}
            Specifying motor drivers/ESCs, current sensing, and feedback loops
            for traction, steering, and bucket or auger mechanisms.
          </li>
          <li>
            <span className="font-bold">Sensor & I/O Integration:</span>{" "}
            Interfacing encoders, IMUs, LiDARs/cameras, limit switches, and
            current/ voltage telemetry with robust, dust-resistant connectors
            and harnessing.
          </li>
          <li>
            <span className="font-bold">EMC & Reliability:</span> Implementing
            grounding, filtering, and cable management to suppress noise in
            high-current paths and maintain signal integrity.
          </li>
          <li>
            <span className="font-bold">Safety & Fault Tolerance:</span>{" "}
            Incorporating hard-kill/soft-kill, e-stops, fusing, and health
            monitoring to prevent thermal runaway or runaway actuation.
          </li>
          <li>
            <span className="font-bold">Testing & Diagnostics:</span> Performing
            power budgets, load steps, and HIL checks to validate margins before
            field trials on regolith simulant.
          </li>
        </ul>
        <p>
          In essence, the Electrical Team delivers a resilient energy and
          control backbone that survives dust, shock, and high transients
          without compromising autonomy or teleoperation.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Electrical;
