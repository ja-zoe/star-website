import SubteamModal, { type Subteam } from "../../components/SubteamModal";
import { Binary } from "lucide-react";

const subteam: Subteam = {
  name: "Software",
  lead: "Taha Touil",
  leadLabel: "Lead",
  icon: Binary,
  summary:
    "Software turns sensing into motion — the autonomy and teleop stack that digs under contest constraints.",
  responsibilities: [
    { title: "Perception & localization", body: "Fuse IMU, odometry, and LiDAR/vision for pose, terrain, and dust-robust detection." },
    { title: "Planning & control", body: "Build planners, obstacle avoidance, and trajectory tracking for traction and manipulators." },
    { title: "Autonomy & teleop", body: "Manage modes, failover between autonomous and RC, and safe state transitions." },
    { title: "Middleware", body: "Define messaging, logging, and parameters (ROS2-style) for deterministic, fast iteration." },
    { title: "Fault recovery", body: "Run watchdogs, heartbeats, and graceful degradation when hardware misbehaves." },
    { title: "Sim & testing", body: "Validate in high-fidelity sim with unit, integration, and replay tooling before the field." },
  ],
};

const Software = () => <SubteamModal subteam={subteam} />;
export default Software;
