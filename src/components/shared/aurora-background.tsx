import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div
        className="absolute -left-1/4 top-[-10%] h-[60vh] w-[60vw] rounded-full opacity-60 animate-aurora"
        style={{ background: "radial-gradient(circle, rgba(30,79,255,0.55) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -right-1/4 top-[10%] h-[55vh] w-[55vw] rounded-full opacity-50 animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.45) 0%, transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-1/3 h-[50vh] w-[50vw] rounded-full opacity-40 animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(77,114,255,0.4) 0%, transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "-11s",
        }}
      />
      <div className="bg-noise absolute inset-0 mix-blend-overlay" />
    </div>
  );
}
