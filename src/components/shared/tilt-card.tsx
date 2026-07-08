import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function TiltCard({ children, className, glare = true }: TiltCardProps) {
  return (
    <div
      className={cn(
        "group relative transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1.5",
        className
      )}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.14), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}
