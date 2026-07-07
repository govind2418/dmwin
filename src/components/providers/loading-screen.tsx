"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("dmwin-loaded");
    if (alreadyLoaded) {
      setLoading(false);
      return;
    }

    let raf: number;
    const start = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("dmwin-loaded", "1");
        setTimeout(() => setLoading(false), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-abyss"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(30,79,255,0.25), transparent 70%)",
            }}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.55), transparent 70%)" }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative size-20 overflow-hidden rounded-2xl ring-1 ring-cyan/30">
                <Image src="/brand/logo.png" alt="DMWin Game" fill sizes="80px" priority className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-cyan-light">
                DMWin Game
              </p>
              <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-royal via-cyan to-royal-light"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
