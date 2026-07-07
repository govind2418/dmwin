"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.5 });
  const springY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.5 });
  const hasFinePointer = useRef(true);

  useEffect(() => {
    hasFinePointer.current = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer.current) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor='pointer']"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height] duration-300 ease-out"
        style={{
          width: isPointer ? 220 : 140,
          height: isPointer ? 220 : 140,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.16) 0%, rgba(30,79,255,0.10) 45%, transparent 72%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-light transition-transform duration-200"
        style={{ transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})` }}
      />
    </motion.div>
  );
}
