"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { TiltCard } from "@/components/shared/tilt-card";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icon-map";
import { bonusTypes } from "@/lib/data/rewards";

export function BonusTypes() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bonus Vault" title="More ways to" highlight="earn extra" />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {bonusTypes.map((bonus) => {
            const Icon = getIcon(bonus.icon);
            return (
              <motion.div key={bonus.title} variants={revealItemVariants}>
                <TiltCard intensity={8}>
                  <GlassCard glow className="flex h-full flex-col gap-4 p-7">
                    <div className="flex items-center justify-between">
                      <div className="glow-electric flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-cyan/20">
                        <Icon className="size-6 text-cyan-light" />
                      </div>
                      <span className="glass-subtle rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-light">
                        {bonus.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{bonus.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{bonus.description}</p>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
