"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function AnimatedText() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <Text3D
          font="/fonts/Protest Guerrilla_Regular.json"
          size={0.8}
          height={0.2}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          curveSegments={12}
          position={[0, 0.5, 0]}
        >
          MR PUNK'S
          <meshBasicMaterial color="#FC5D7F" wireframe />
        </Text3D>
        <Text3D
          font="/fonts/Protest Guerrilla_Regular.json"
          size={0.6}
          height={0.15}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.01}
          curveSegments={12}
          position={[0, -0.3, 0]}
        >
          SONGS
          <meshBasicMaterial color="#21DEEA" wireframe />
        </Text3D>
      </group>
    </Center>
  );
}

export function Hero3DText() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedText />
      </Canvas>
    </div>
  );
}
