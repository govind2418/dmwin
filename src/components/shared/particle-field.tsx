"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function ParticleField({ count = 36, className }: ParticleFieldProps) {
  const particles = useMemo(() => {
    const random = mulberry32(count * 7919 + 17);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: random() * 100,
      top: random() * 100,
      size: random() * 2.5 + 1,
      duration: random() * 8 + 6,
      delay: random() * -14,
      opacity: random() * 0.5 + 0.2,
    }));
  }, [count]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cyan-light animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 6px 1px rgba(56,189,248,0.6)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
