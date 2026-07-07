"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  strength?: "subtle" | "regular" | "strong";
  glow?: boolean;
  border?: boolean;
}

export function GlassCard({
  children,
  className,
  strength = "regular",
  glow = false,
  border = true,
  ...props
}: GlassCardProps) {
  const strengthClass =
    strength === "strong" ? "glass-strong" : strength === "subtle" ? "glass-subtle" : "glass";

  return (
    <div
      className={cn(
        "relative rounded-3xl",
        strengthClass,
        border && "border border-white/[0.08]",
        glow && "glow-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
