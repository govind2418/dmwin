"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { FloatingCoin } from "./floating-coin";
import { NeonCube } from "./neon-cube";
import { CrystalCore } from "./crystal-core";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.25, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.15, 0.04);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.4, 0.03);
  });

  return <group ref={group}>{children}</group>;
}

function SceneContent() {
  return (
    <>
      <fog attach="fog" args={["#050b1a", 6, 16]} />
      <ambientLight intensity={0.35} color="#7dabff" />
      <pointLight position={[4, 3, 4]} intensity={2.4} color="#38bdf8" distance={14} />
      <pointLight position={[-4, -2, 3]} intensity={1.8} color="#1e4fff" distance={14} />
      <pointLight position={[0, 4, -3]} intensity={1.4} color="#7dd8fc" distance={16} />
      <spotLight position={[0, 6, 6]} angle={0.5} penumbra={1} intensity={1.2} color="#ffffff" />

      <ParallaxRig>
        <CrystalCore position={[0, 0.2, 0]} />
        <FloatingCoin position={[-2.6, 1.1, -1]} scale={0.8} speed={0.8} />
        <FloatingCoin position={[2.8, -0.6, -1.5]} scale={0.65} speed={1.1} />
        <FloatingCoin position={[-1.8, -1.6, -2]} scale={0.5} speed={0.9} />
        <NeonCube position={[2.2, 1.6, -2]} scale={0.7} speed={0.7} color="#38bdf8" />
        <NeonCube position={[-2.6, -1.3, -2.5]} scale={0.55} speed={1} color="#1e4fff" />
      </ParallaxRig>

      <Sparkles count={80} scale={[10, 6, 6]} size={2} speed={0.3} color="#7dd8fc" opacity={0.6} />

      <EffectComposer multisampling={0}>
        <Bloom intensity={0.85} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur radius={0.6} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.2} darkness={0.9} />
      </EffectComposer>
    </>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
