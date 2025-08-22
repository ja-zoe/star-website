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
          The Software team is responsible for autonomy, teleoperation, and
          system orchestration—converting raw sensing into reliable motion and
          excavation under contest constraints. Their scope generally covers:
        </p>
        <ul className="list-disc list-inside mb-1">
          <li>
            <span className="font-bold">Perception & Localization:</span>{" "}
            Building sensor fusion (e.g., IMU, wheel odometry, LiDAR/vision) for
            pose estimation, terrain understanding, and dust-robust detection.
          </li>
          <li>
            <span className="font-bold">Planning & Control:</span> Implementing
            global/local planners, obstacle avoidance, and trajectory tracking
            with closed-loop controllers for traction and manipulators.
          </li>
          <li>
            <span className="font-bold">Autonomy Modes & RC Teleop:</span>{" "}
            Designing mode management, failover between autonomous and RC,
            latency-aware teleop, and safe state transitions.
          </li>
          <li>
            <span className="font-bold">Systems Middleware:</span> Defining
            messaging, logging, and parameterization (e.g., ROS2-style) for
            deterministic behavior and rapid iteration.
          </li>
          <li>
            <span className="font-bold">Fault Detection & Recovery:</span>{" "}
            Watchdogs, heartbeat monitoring, health checks, and graceful
            degradation when sensors or actuators misbehave.
          </li>
          <li>
            <span className="font-bold">Simulation & Testing:</span> Developing
            high-fidelity sims, unit/integration tests, and replay tooling to
            validate autonomy before field deployment.
          </li>
        </ul>
        <p>
          In essence, the Software Team engineers a verifiable autonomy stack
          that withstands dust, slip, and uncertainty—while preserving operator
          authority when conditions demand it.
        </p>
      </div>
    </SubteamModal>
  );
};
export default Software;
