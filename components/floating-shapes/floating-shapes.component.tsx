"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShape({ position, color, speed, scale }: { position: [number, number, number]; color: string; speed: number; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function FloatingShapes() {
  const shapes = useMemo(() => [
    { position: [-8, 2, -10] as [number, number, number], color: "#FC5D7F", speed: 0.3, scale: 1.5 },
    { position: [8, -3, -12] as [number, number, number], color: "#21DEEA", speed: 0.4, scale: 2 },
    { position: [-5, -5, -8] as [number, number, number], color: "#a855f7", speed: 0.2, scale: 1.2 },
    { position: [6, 4, -15] as [number, number, number], color: "#FC5D7F", speed: 0.35, scale: 1.8 },
    { position: [-10, 0, -20] as [number, number, number], color: "#21DEEA", speed: 0.25, scale: 2.5 },
    { position: [10, -2, -18] as [number, number, number], color: "#f97316", speed: 0.3, scale: 1.6 },
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
}

export function FloatingShapesCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
