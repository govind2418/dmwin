"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

export function ParticleField({ count = 36, className }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * -14,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count]
  );

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
