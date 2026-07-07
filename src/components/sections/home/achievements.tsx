"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Marquee } from "@/components/shared/marquee";
import { getIcon } from "@/lib/icon-map";
import { achievements } from "@/lib/data/content";
import { games } from "@/lib/data/games";

export function Achievements() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard strength="strong" className="relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(56,189,248,0.2), transparent 70%)" }}
          />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="glass-subtle flex size-12 items-center justify-center rounded-2xl text-cyan-light">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix ?? ""}
                      suffix={item.suffix ?? ""}
                      decimals={item.decimals ?? 0}
                    />
                  </span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      <div className="mt-14">
        <Marquee speed="slow">
          {[...games, ...games].map((game, i) => (
            <span
              key={`${game.id}-${i}`}
              className="glass-subtle mx-2 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white/70"
            >
              <span className="size-1.5 rounded-full bg-cyan animate-pulse-glow" />
              {game.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
