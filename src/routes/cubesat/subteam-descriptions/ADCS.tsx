import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { Compass } from "lucide-react";

const ADCS = () => {
  const starStatProps: StarStatProps = {
    stat: "ADCS",
    Icon: Compass,
    headline: "Lead: name",
    className: "bg-radial from-white/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Attitude Determination and Control System (ADCS) team is
          responsible for controlling the CubeSat’s orientation in
          space—ensuring the spacecraft points where it needs to for
          communications, power generation, and payload operations. Their scope
          generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Attitude Determination:</span> Using
            sensors such as gyroscopes, magnetometers, star trackers, or sun
            sensors to calculate the spacecraft’s orientation in real time.
          </li>
          <li>
            <span className="font-bold">Actuator Design:</span> Implementing
            control devices like reaction wheels and magnetorquers to adjust and
            stabilize orientation.
          </li>
          <li>
            <span className="font-bold">Control Algorithms:</span> Developing
            software routines that process sensor data and command the actuators
            to achieve precise pointing or stability.
          </li>
          <li>
            <span className="font-bold">Subsystem Interfaces:</span>{" "}
            Coordinating with power (for solar array pointing), communications
            (for antenna alignment), and payload teams (for target tracking and
            imaging requirements).
          </li>
          <li>
            <span className="font-bold">Testing & Validation:</span> Running
            hardware-in-the-loop simulations, air-bearing table tests, and
            environmental verification to confirm that the ADCS performs
            reliably in orbit.
          </li>
        </ul>
        <p>
          In essence, the ADCS Team gives the CubeSat precise control over its
          orientation, enabling critical functions such as Earth communication,
          efficient power generation, and accurate payload operations.
        </p>
      </div>
    </SubteamModal>
  );
};
export default ADCS;
