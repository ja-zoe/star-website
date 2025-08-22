import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { Binary } from "lucide-react";

const FlightSoftware = () => {
  const starStatProps: StarStatProps = {
    stat: "Flight Software",
    Icon: Binary,
    headline: "Lead: name",
    className: "bg-radial from-purple-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Flight Software team is responsible for writing and maintaining
          the onboard code that commands and controls the CubeSat in orbit. They
          ensure that the spacecraft can autonomously operate, execute mission
          tasks, and respond to ground commands. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Onboard Control Software:</span>{" "}
            Developing code to manage power, communications, payloads, and
            thermal systems according to mission requirements.
          </li>
          <li>
            <span className="font-bold">Fault Detection & Autonomy:</span>{" "}
            Implementing watchdogs, safe modes, and recovery logic so the
            spacecraft can detect anomalies and protect itself without immediate
            ground intervention.
          </li>
          <li>
            <span className="font-bold">Command & Data Handling:</span> Writing
            routines to store, process, and route data between subsystems, and
            to package telemetry for downlink to the ground.
          </li>
          <li>
            <span className="font-bold">Ground Interface:</span> Ensuring
            compatibility with uplink/downlink protocols so that operators can
            send commands and receive data reliably.
          </li>
          <li>
            <span className="font-bold">Testing & Simulation:</span> Validating
            flight code with hardware-in-the-loop tests, mission simulations,
            and unit testing to ensure reliability before launch.
          </li>
        </ul>
        <p>
          In essence, the Flight Software Team gives the CubeSat its “brain,”
          enabling autonomous operation, robust fault tolerance, and seamless
          interaction with mission operators on Earth.
        </p>
      </div>
    </SubteamModal>
  );
};
export default FlightSoftware;
