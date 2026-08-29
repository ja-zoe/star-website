"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "../../lib/utils";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[124, 119, 119]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: CanvasRevealEffectProps) => {
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );

  useEffect(() => {
    const onVisibilityChange = () =>
      setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div
      className={cn("relative h-full w-full bg-white", containerClassName)}
      data-canvas-reveal="true"
    >
      <DotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        running={pageVisible}
        shader={`
          float animation_speed_factor = ${animationSpeed.toFixed(1)};
          float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
          opacity *= step(intro_offset, u_time * animation_speed_factor);
          opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
        `}
        center={["x", "y"]}
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors: number[][];
  opacities: number[];
  totalSize?: number;
  dotSize: number;
  shader: string;
  center: ("x" | "y")[];
  running: boolean;
}

const DotMatrix = ({
  colors,
  opacities,
  totalSize = 4,
  dotSize,
  shader,
  center,
  running,
}: DotMatrixProps) => {
  const uniforms = useMemo(() => {
    let colorsArray = Array.from({ length: 6 }, () => colors[0]);
    if (colors.length === 2) {
      colorsArray = [colors[0], colors[0], colors[0], colors[1], colors[1], colors[1]];
    } else if (colors.length >= 3) {
      colorsArray = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
    }

    return {
      u_colors: {
        value: colorsArray.map((color) => color.map((channel) => channel / 255)),
        type: "uniform3fv",
      },
      u_opacities: { value: opacities, type: "uniform1fv" },
      u_total_size: { value: totalSize, type: "uniform1f" },
      u_dot_size: { value: dotSize, type: "uniform1f" },
    } satisfies Uniforms;
  }, [colors, dotSize, opacities, totalSize]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
          return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }
        void main() {
          vec2 st = fragCoord.xy;
          ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
          ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
          float opacity = step(0.0, st.x) * step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
          float frequency = 5.0;
          float show_offset = random(st2);
          float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
          vec3 color = u_colors[int(show_offset * 6.0)];
          ${shader}
          fragColor = vec4(color, opacity);
          fragColor.rgb *= fragColor.a;
        }
      `}
      uniforms={uniforms}
      running={running}
    />
  );
};

type UniformValue = number | number[] | number[][];
type Uniforms = Record<string, { value: UniformValue; type: string }>;

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 30,
}: {
  source: string;
  maxFps?: number;
  uniforms: Uniforms;
}) => {
  const { size } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const lastFrameTime = useRef(0);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime.current < 1 / maxFps) return;
    lastFrameTime.current = timestamp;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    material.uniforms.u_time.value = timestamp;
  });

  const material = useMemo(() => {
    const preparedUniforms: Record<string, THREE.IUniform> = {};
    Object.entries(uniforms).forEach(([name, uniform]) => {
      if (uniform.type === "uniform3fv") {
        preparedUniforms[name] = {
          value: (uniform.value as number[][]).map((value) =>
            new THREE.Vector3().fromArray(value),
          ),
        };
      } else {
        preparedUniforms[name] = { value: uniform.value };
      }
    });
    preparedUniforms.u_time = { value: 0 };
    preparedUniforms.u_resolution = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
    };

    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          gl_Position = vec4(position.x, position.y, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: preparedUniforms,
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [size.height, size.width, source, uniforms]);

  useEffect(() => () => material.dispose(), [material]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = ({
  source,
  uniforms,
  running,
}: {
  source: string;
  uniforms: Uniforms;
  running: boolean;
}) => (
  <Canvas
    className="absolute inset-0 h-full w-full"
    dpr={[1, 1.5]}
    frameloop={running ? "always" : "never"}
    gl={{ antialias: false, powerPreference: "low-power" }}
  >
    <ShaderMaterial source={source} uniforms={uniforms} />
  </Canvas>
);
