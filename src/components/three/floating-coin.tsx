"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingCoinProps {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}

export function FloatingCoin({ position, scale = 1, speed = 1, color = "#cfe3ff" }: FloatingCoinProps) {
  const group = useRef<THREE.Group>(null);
  const seed = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * speed + seed;
    group.current.position.y = position[1] + Math.sin(t) * 0.4;
    group.current.rotation.y += 0.012 * speed;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.25;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.16, 56]} />
        <meshPhysicalMaterial
          color={color}
          metalness={1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.02, 0.02, 16, 64]} />
        <meshBasicMaterial color="#38bdf8" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.081, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.6, 48]} />
        <meshStandardMaterial color="#1e4fff" metalness={0.9} roughness={0.3} emissive="#1e4fff" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, -0.081, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.6, 48]} />
        <meshStandardMaterial color="#1e4fff" metalness={0.9} roughness={0.3} emissive="#1e4fff" emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}
