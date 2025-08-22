import SubteamModal from "../../components/SubteamModal";
import { StarStatProps } from "../../components/StarStat";
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
          The Structures team is responsible for designing and building the
          physical framework of the weather balloon payload, ensuring that all
          subsystems are securely housed and can withstand flight conditions.
          Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Payload Enclosure:</span> Creating a
            lightweight, durable structure to protect electronics, batteries,
            and sensors during ascent and descent.
          </li>
          <li>
            <span className="font-bold">Thermal Protection:</span> Designing
            insulation and shielding to safeguard sensitive components from
            extreme temperatures at high altitude.
          </li>
          <li>
            <span className="font-bold">Mechanical Integration:</span> Providing
            mounting solutions and internal layouts that accommodate wiring,
            sensors, and communication hardware.
          </li>
          <li>
            <span className="font-bold">Aerodynamic Considerations:</span>{" "}
            Minimizing drag and ensuring stable flight dynamics through careful
            enclosure design and mass distribution.
          </li>
          <li>
            <span className="font-bold">Recovery Hardware:</span> Incorporating
            features like parachute mounts and structural supports to ensure a
            safe landing and intact payload recovery.
          </li>
        </ul>
        <p>
          In essence, the Structures Team provides the physical backbone of the
          weather balloon payload, enabling all other subsystems to function
          safely and reliably throughout the mission.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Structures;
