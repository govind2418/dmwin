"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

interface NeonCubeProps {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}

export function NeonCube({ position, scale = 1, speed = 1, color = "#3b82f6" }: NeonCubeProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed + seed;
    mesh.current.rotation.x = t * 0.3;
    mesh.current.rotation.y = t * 0.4;
    mesh.current.position.y = position[1] + Math.cos(t) * 0.35;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.08}
        roughness={0.1}
        metalness={0.2}
        transmission={0.6}
        emissive={color}
        emissiveIntensity={0.4}
      />
      <Edges scale={1.001} color={color} lineWidth={1.5} />
    </mesh>
  );
}
