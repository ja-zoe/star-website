import SubteamModal from "../../components/SubteamModal";
import { StarStatProps } from "../../components/StarStat";
import { Binary } from "lucide-react";

const Software = () => {
  const starStatProps: StarStatProps = {
    stat: "Software",
    Icon: Binary,
    headline: "Lead: name",
    className: "bg-radial from-purple-500/20 to-transparent",
  };

  return (
    <SubteamModal starStatProps={starStatProps}>
      <div>
        <p className="mb-1">
          The Software team is responsible for designing, implementing, and
          maintaining the code that drives the weather balloon’s onboard systems
          and data operations. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Flight Software:</span> Developing
            embedded code for the balloon’s microcontroller or onboard computer
            to manage sensors, GPS, and communication modules.
          </li>
          <li>
            <span className="font-bold">Data Handling:</span> Collecting sensor
            readings, packaging them into structured formats, and ensuring
            reliable storage and transmission to ground stations.
          </li>
          <li>
            <span className="font-bold">Ground Communication:</span>{" "}
            Implementing telemetry protocols that allow real-time monitoring of
            the balloon’s position, altitude, and environmental data.
          </li>
          <li>
            <span className="font-bold">Fault Tolerance:</span> Writing
            safeguards and watchdog routines to detect anomalies, recover from
            errors, and prevent mission-critical failures.
          </li>
          <li>
            <span className="font-bold">Analysis Tools:</span> Building scripts
            or software pipelines to visualize, process, and interpret flight
            data after recovery.
          </li>
        </ul>
        <p>
          In essence, the Software Team ensures the weather balloon’s systems
          operate intelligently and that collected data is accessible, accurate,
          and useful for post-flight analysis.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Software;
