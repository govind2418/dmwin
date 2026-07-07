"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export function CrystalCore({ position = [0, 0, 0] as [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.22;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    if (inner.current) {
      inner.current.intensity = 3 + Math.sin(state.clock.elapsedTime * 2) * 1.2;
    }
  });

  return (
    <group position={position}>
      <pointLight ref={inner} color="#38bdf8" intensity={3} distance={4} />
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.3, 1]} />
        <MeshTransmissionMaterial
          color="#a9d4ff"
          thickness={1.2}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.4}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.4}
          temporalDistortion={0.15}
          clearcoat={1}
          attenuationDistance={2.5}
          attenuationColor="#1e4fff"
        />
      </mesh>
    </group>
  );
}
