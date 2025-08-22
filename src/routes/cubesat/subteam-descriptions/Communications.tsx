import SubteamModal from "../../../components/SubteamModal";
import type { StarStatProps } from "../../../components/StarStat";
import { RadioTower } from "lucide-react";

const Communications = () => {
  const starStatProps: StarStatProps = {
    stat: "Communications",
    Icon: RadioTower,
    headline: "Lead: name",
    className: "bg-radial from-yellow-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Communications team is responsible for enabling the spacecraft to
          exchange data with Earth—transmitting mission results and receiving
          commands from operators. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">RF System Design:</span> Developing
            transceivers and radios capable of operating within the frequency
            allocations and bandwidth limitations set by regulatory agencies.
          </li>
          <li>
            <span className="font-bold">Antenna Design & Deployment:</span>{" "}
            Designing compact antennas (monopoles, patch, or deployable systems)
            that can stow within CubeSat constraints and reliably deploy in
            orbit.
          </li>
          <li>
            <span className="font-bold">Link Budget Analysis:</span> Calculating
            expected signal strength, noise, and data rates to ensure reliable
            communication between the CubeSat and ground stations.
          </li>
          <li>
            <span className="font-bold">Ground Station Integration:</span>{" "}
            Coordinating with ground networks to ensure compatibility in
            modulation schemes, protocols, and scheduling.
          </li>
          <li>
            <span className="font-bold">Testing & Validation:</span> Performing
            end-to-end communication tests, including over-the-air trials, to
            confirm robust data transfer under realistic conditions.
          </li>
        </ul>
        <p>
          In essence, the Communications Team ensures the CubeSat has a reliable
          voice with Earth—delivering mission data home and enabling operators
          to control the spacecraft across the void of space.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Communications;
