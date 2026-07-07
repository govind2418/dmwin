"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./hero-canvas").then((m) => m.HeroCanvas), {
  ssr: false,
  loading: () => null,
});

export function HeroScene() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <HeroCanvas />
    </div>
  );
}
