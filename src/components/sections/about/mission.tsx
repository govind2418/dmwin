"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { getIcon } from "@/lib/icon-map";
import { aboutStats } from "@/lib/data/about";

export function Mission() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-light">Our Mission</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Gaming that feels as good as it <span className="text-gradient-blue glow-text">pays</span>
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
            DMWin Game was built on a simple belief — premium design and genuine fairness shouldn&apos;t be
            exclusive to Silicon Valley SaaS products. We bring that same obsession over detail to online gaming:
            zero-lag gameplay, transparent odds, and a rewards system that actually rewards you.
          </p>
          <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
            Every pixel, animation and payout flow is engineered by a team that plays the games they build.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <GlassCard strength="strong" className="grid grid-cols-2 gap-6 p-8 sm:p-10">
            {aboutStats.map((stat, i) => {
              const Icon = getIcon(stat.icon);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-start gap-2"
                >
                  <div className="glass-subtle flex size-10 items-center justify-center rounded-xl text-cyan-light">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </motion.div>
              );
            })}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
