import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type RefObject } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface AssemblyProps {
  exploded: boolean;
  motionEnabled: boolean;
  draggingRef: RefObject<boolean>;
  rotationTargetRef: RefObject<{ x: number; y: number }>;
}

const moveAxis = (current: number, target: number, amount: number) =>
  current + (target - current) * amount;

const CubeSatAssembly = ({
  exploded,
  motionEnabled,
  draggingRef,
  rotationTargetRef,
}: AssemblyProps) => {
  const assemblyRef = useRef<THREE.Group>(null);
  const leftArrayRef = useRef<THREE.Group>(null);
  const rightArrayRef = useRef<THREE.Group>(null);
  const payloadRef = useRef<THREE.Group>(null);
  const avionicsRef = useRef<THREE.Group>(null);
  const antennaRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const assembly = assemblyRef.current;
    if (!assembly) return;

    if (motionEnabled && !draggingRef.current) {
      rotationTargetRef.current.y += delta * 0.12;
    }

    const easing = motionEnabled ? 1 - Math.exp(-7 * delta) : 1;
    assembly.rotation.x = moveAxis(assembly.rotation.x, rotationTargetRef.current.x, easing);
    assembly.rotation.y = moveAxis(assembly.rotation.y, rotationTargetRef.current.y, easing);

    const spread = exploded ? 1 : 0;
    if (leftArrayRef.current) {
      leftArrayRef.current.position.x = moveAxis(leftArrayRef.current.position.x, -1.15 - spread * 1.2, easing);
    }
    if (rightArrayRef.current) {
      rightArrayRef.current.position.x = moveAxis(rightArrayRef.current.position.x, 1.15 + spread * 1.2, easing);
    }
    if (payloadRef.current) {
      payloadRef.current.position.z = moveAxis(payloadRef.current.position.z, 0.86 + spread * 1.05, easing);
    }
    if (avionicsRef.current) {
      avionicsRef.current.position.z = moveAxis(avionicsRef.current.position.z, -0.86 - spread * 0.85, easing);
    }
    if (antennaRef.current) {
      antennaRef.current.position.y = moveAxis(antennaRef.current.position.y, 1.03 + spread * 0.75, easing);
    }
  });

  const railMaterial = <meshStandardMaterial color="#b7bec6" metalness={0.9} roughness={0.24} />;

  return (
    <group ref={assemblyRef} rotation={[0.24, -0.62, -0.04]} scale={0.82}>
      <mesh>
        <boxGeometry args={[1.55, 1.82, 1.55]} />
        <meshStandardMaterial color="#11161b" metalness={0.78} roughness={0.38} />
      </mesh>

      {[-1, 1].flatMap((x) =>
        [-1, 1].map((z) => (
          <mesh key={`vertical-${x}-${z}`} position={[x * 0.84, 0, z * 0.84]}>
            <boxGeometry args={[0.1, 2.08, 0.1]} />
            {railMaterial}
          </mesh>
        )),
      )}
      {[-1, 1].flatMap((y) =>
        [-1, 1].map((z) => (
          <mesh key={`x-rail-${y}-${z}`} position={[0, y * 1, z * 0.84]}>
            <boxGeometry args={[1.78, 0.1, 0.1]} />
            {railMaterial}
          </mesh>
        )),
      )}
      {[-1, 1].flatMap((x) =>
        [-1, 1].map((y) => (
          <mesh key={`z-rail-${x}-${y}`} position={[x * 0.84, y * 1, 0]}>
            <boxGeometry args={[0.1, 0.1, 1.78]} />
            {railMaterial}
          </mesh>
        )),
      )}

      <group ref={leftArrayRef} position={[-2.35, 0, 0]}>
        <SolarArray side={-1} />
      </group>
      <group ref={rightArrayRef} position={[2.35, 0, 0]}>
        <SolarArray side={1} />
      </group>

      <group ref={payloadRef} position={[0, 0, 1.91]}>
        <mesh>
          <boxGeometry args={[1.44, 1.66, 0.12]} />
          <meshStandardMaterial color="#2a3036" metalness={0.76} roughness={0.3} />
        </mesh>
        <mesh position={[0.12, 0.05, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.34, 0.42, 0.24, 32]} />
          <meshStandardMaterial color="#9d2626" metalness={0.7} roughness={0.24} />
        </mesh>
        <mesh position={[0.12, 0.05, 0.29]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
          <meshPhysicalMaterial color="#101b29" metalness={0.2} roughness={0.1} transmission={0.25} />
        </mesh>
        {[-0.55, 0.55].flatMap((x) =>
          [-0.65, 0.65].map((y) => (
            <mesh key={`payload-fastener-${x}-${y}`} position={[x, y, 0.09]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial color="#f1f3f5" metalness={1} roughness={0.18} />
            </mesh>
          )),
        )}
      </group>

      <group ref={avionicsRef} position={[0, 0, -1.71]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <boxGeometry args={[1.34, 1.56, 0.08]} />
          <meshStandardMaterial color="#173c31" metalness={0.25} roughness={0.58} />
        </mesh>
        {[-0.4, 0, 0.4].map((x, index) => (
          <mesh key={`chip-${x}`} position={[x, index === 1 ? 0.28 : -0.2, 0.09]}>
            <boxGeometry args={[0.24, 0.34, 0.1]} />
            <meshStandardMaterial color={index === 1 ? "#9d2626" : "#07090b"} metalness={0.45} roughness={0.45} />
          </mesh>
        ))}
        {[-0.45, -0.15, 0.15, 0.45].map((y) => (
          <mesh key={`trace-${y}`} position={[0, y, 0.055]}>
            <boxGeometry args={[1.05, 0.012, 0.012]} />
            <meshStandardMaterial color="#d5a94c" metalness={0.85} roughness={0.25} />
          </mesh>
        ))}
      </group>

      <group ref={antennaRef} position={[0, 1.78, 0]}>
        <mesh>
          <boxGeometry args={[0.72, 0.12, 0.72]} />
          <meshStandardMaterial color="#252a2f" metalness={0.82} roughness={0.3} />
        </mesh>
        {[-0.24, 0.24].flatMap((x) =>
          [-0.24, 0.24].map((z) => (
            <mesh key={`antenna-${x}-${z}`} position={[x, 0.48, z]} rotation={[0, 0, x * 0.7]}>
              <cylinderGeometry args={[0.018, 0.018, 0.9, 10]} />
              <meshStandardMaterial color="#d8dde2" metalness={0.9} roughness={0.2} />
            </mesh>
          )),
        )}
      </group>
    </group>
  );
};

const SolarArray = ({ side }: { side: -1 | 1 }) => (
  <group>
    <mesh>
      <boxGeometry args={[0.1, 1.64, 2.55]} />
      <meshStandardMaterial color="#111e31" metalness={0.48} roughness={0.34} />
    </mesh>
    {[-0.56, 0, 0.56].flatMap((y) =>
      [-0.92, -0.31, 0.31, 0.92].map((z) => (
        <mesh key={`cell-${side}-${y}-${z}`} position={[side * 0.065, y, z]}>
          <boxGeometry args={[0.025, 0.45, 0.49]} />
          <meshStandardMaterial color="#1e4d72" metalness={0.62} roughness={0.25} emissive="#0b263f" emissiveIntensity={0.45} />
        </mesh>
      )),
    )}
    <mesh position={[-side * 0.13, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.1, 0.1, 0.48, 16]} />
      <meshStandardMaterial color="#9d2626" metalness={0.72} roughness={0.28} />
    </mesh>
  </group>
);

const ExplodedCubeSat = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [exploded, setExploded] = useState(true);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );
  const stageRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const rotationTargetRef = useRef({ x: 0.24, y: -0.62 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "160px",
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    draggingRef.current = true;
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || reducedMotion) return;
    const deltaX = event.clientX - lastPointerRef.current.x;
    const deltaY = event.clientY - lastPointerRef.current.y;
    rotationTargetRef.current.y += deltaX * 0.008;
    rotationTargetRef.current.x = THREE.MathUtils.clamp(
      rotationTargetRef.current.x + deltaY * 0.006,
      -0.65,
      0.75,
    );
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const running = !reducedMotion && inView && pageVisible;

  return (
    <figure
      ref={stageRef}
      data-cubesat-prototype
      data-cubesat-running={running ? "true" : "false"}
      data-cubesat-exploded={exploded ? "true" : "false"}
      className="relative h-56 overflow-hidden border border-white/15 bg-[linear-gradient(145deg,rgba(157,38,38,0.09),rgba(255,255,255,0.015)_42%,rgba(56,189,248,0.04))] sm:h-[19rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <figcaption className="pointer-events-none absolute left-4 top-4 z-10 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/45">
        CubeSat hardware study<span className="hidden sm:inline"> / drag to inspect</span>
      </figcaption>
      <div className="pointer-events-none absolute bottom-4 left-4 z-10 flex gap-4 text-[0.5rem] uppercase tracking-[0.18em] text-white/30">
        <span>01 Bus</span>
        <span>02 Payload</span>
        <span>03 Arrays</span>
      </div>
      <button
        type="button"
        aria-pressed={exploded}
        onClick={() => setExploded((current) => !current)}
        className="absolute right-3 top-3 z-20 min-h-10 rounded-full border border-red-300/35 bg-black/80 px-4 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-red-100 transition-colors hover:border-red-200 hover:bg-red-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
      >
        {exploded ? "Assemble" : "Explode"}
      </button>
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <Canvas
          aria-hidden="true"
          camera={{ position: [5, 3.3, 6.2], fov: 34 }}
          dpr={[1, 1.5]}
          frameloop={running ? "always" : "demand"}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        >
          <ambientLight intensity={1.3} />
          <directionalLight position={[4, 6, 5]} intensity={3.2} color="#f8fafc" />
          <pointLight position={[-4, 1, 3]} intensity={18} distance={12} color="#9d2626" />
          <pointLight position={[3, -2, -4]} intensity={9} distance={10} color="#38bdf8" />
          <CubeSatAssembly
            exploded={exploded}
            motionEnabled={running}
            draggingRef={draggingRef}
            rotationTargetRef={rotationTargetRef}
          />
        </Canvas>
      </div>
    </figure>
  );
};

export default ExplodedCubeSat;
