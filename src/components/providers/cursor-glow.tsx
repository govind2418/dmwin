"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const pos = useRef({ x: -200, y: -200 });
  const isPointer = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const apply = () => {
      rafId.current = null;
      const dot = dotRef.current;
      const glow = glowRef.current;
      if (!dot || !glow) return;
      const { x, y } = pos.current;
      const dotScale = isPointer.current ? 1.8 : 1;
      const glowScale = isPointer.current ? 1.55 : 1;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${glowScale})`;
      glow.style.opacity = "1";
    };

    const schedule = () => {
      if (rafId.current === null) rafId.current = requestAnimationFrame(apply);
    };

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      schedule();
    };

    const leave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const over = (e: MouseEvent) => {
      isPointer.current = !!(e.target as HTMLElement).closest("a, button, [data-cursor='pointer']");
      schedule();
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseover", over);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[999] hidden md:block">
      <div
        ref={glowRef}
        className="absolute left-0 top-0 size-[140px] rounded-full opacity-0 transition-[opacity,transform] duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(30,79,255,0.10) 45%, transparent 72%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-2 rounded-full bg-cyan-light transition-transform duration-200 ease-out"
      />
    </div>
  );
}
