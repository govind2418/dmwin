"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { TiltCard } from "@/components/shared/tilt-card";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { motion } from "framer-motion";
import { getIcon } from "@/lib/icon-map";
import { features } from "@/lib/data/content";

export function Features() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Players Choose Us"
          title="Engineered for a"
          highlight="premium experience"
          description="Every layer of DMWin Game — from infrastructure to UI — is built to feel fast, fair and effortlessly premium."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div key={feature.title} variants={revealItemVariants}>
                <TiltCard intensity={8}>
                  <GlassCard glow className="h-full p-7">
                    <div className="glow-electric mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal/30 to-cyan/20">
                      <Icon className="size-6 text-cyan-light" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
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
