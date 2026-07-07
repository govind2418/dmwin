import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({ children, className, reverse, speed = "normal" }: MarqueeProps) {
  const duration = speed === "slow" ? "48s" : speed === "fast" ? "18s" : "30s";

  return (
    <div className={cn("group relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className="flex shrink-0 items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
      </div>
    </div>
  );
}
