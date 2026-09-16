"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Wireframe, Center } from "@react-three/drei";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<any>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2, 0), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Center>
      <group ref={meshRef}>
        <mesh geometry={geometry}>
          <meshBasicMaterial
            color="#FC5D7F"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <mesh geometry={geometry} scale={1.02}>
          <meshBasicMaterial
            color="#21DEEA"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh geometry={geometry} scale={0.98}>
          <meshBasicMaterial
            color="#FC5D7F"
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>
    </Center>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#21DEEA"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <Icosahedron />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
