import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { FlaskConical } from "lucide-react";

const Payload = () => {
  const starStatProps: StarStatProps = {
    stat: "Payload",
    Icon: FlaskConical,
    headline: "Lead: name",
    className: "bg-radial from-white/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Payload team is responsible for the core scientific or
          technological instrument that defines the CubeSat’s mission. They
          ensure that the payload is properly designed, integrated, and operated
          so that the mission objectives can be achieved. Their scope generally
          covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Payload Design & Development:</span>{" "}
            Engineering or adapting the scientific instrument, sensor, or
            technology demonstration that constitutes the heart of the mission.
          </li>
          <li>
            <span className="font-bold">Environmental Compatibility:</span>{" "}
            Ensuring the payload can survive the thermal, vibrational, and
            radiation conditions of launch and orbit.
          </li>
          <li>
            <span className="font-bold">
              Mechanical & Electrical Interfaces:
            </span>{" "}
            Coordinating with the structures, power, and avionics teams to
            ensure the payload fits within the spacecraft and connects
            seamlessly to available power and data resources.
          </li>
          <li>
            <span className="font-bold">Data Handling & Operations:</span>{" "}
            Defining how the payload will collect, store, and transmit data to
            the ground within the mission’s communication and power constraints.
          </li>
          <li>
            <span className="font-bold">Testing & Calibration:</span> Conducting
            functional tests, calibrations, and environmental verifications to
            confirm that the payload will generate meaningful results in orbit.
          </li>
        </ul>
        <p>
          In essence, the Payload Team delivers the reason the CubeSat exists,
          ensuring the mission produces valuable scientific data or demonstrates
          breakthrough technology in space.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Payload;
