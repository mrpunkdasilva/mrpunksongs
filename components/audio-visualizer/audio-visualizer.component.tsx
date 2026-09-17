"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function VisualizerBars() {
  const groupRef = useRef<THREE.Group>(null);
  const barsCount = 48;

  const bars = useMemo(() => {
    return Array.from({ length: barsCount }, (_, i) => ({
      x: (i - barsCount / 2) * 0.25,
      height: 0.5 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 1.5,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((bar, i) => {
        const mesh = bar as THREE.Mesh;
        const scale = Math.sin(state.clock.elapsedTime * bars[i].speed + i * 0.5) * 0.5 + 0.5;
        mesh.scale.y = scale * 3;
        mesh.position.y = scale * 1;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {bars.map((bar, i) => (
        <mesh key={i} position={[bar.x, 0, 0]}>
          <boxGeometry args={[0.15, 1, 0.15]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#FC5D7F" : i % 3 === 1 ? "#21DEEA" : "#a855f7"}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export function AudioVisualizer() {
  return (
    <div className="w-full h-48 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <VisualizerBars />
      </Canvas>
    </div>
  );
}
