"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FluidSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      // Rotação suave constante
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;

      // Distort fluido baseado no tempo
      const time = state.clock.elapsedTime;
      materialRef.current.distort = 0.4 + Math.sin(time * 1.5) * 0.2;

      // Mudança de cor suave entre rosa e ciano
      const hue = (Math.sin(time * 0.5) + 1) / 2;
      const r = 0.988 - hue * 0.87;
      const g = 0.365 + hue * 0.5;
      const b = 0.498 + hue * 0.41;
      materialRef.current.color.setRGB(r, g, b);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#FC5D7F"
        wireframe
        transparent
        opacity={0.25}
        distort={0.4}
        speed={2}
      />
    </mesh>
  );
}

export function Interactive3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <FluidSphere />
      </Canvas>
    </div>
  );
}
