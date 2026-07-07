"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icon-map";
import { howItWorks } from "@/lib/data/rewards";

export function HowItWorks() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Simple By Design" title="How rewards" highlight="work" />

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3" stagger={0.1}>
          <div className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent sm:block" />
          {howItWorks.map((step) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div key={step.step} variants={revealItemVariants} className="relative flex flex-col items-center gap-4 text-center">
                <div className="glass-strong glow-electric relative flex size-24 items-center justify-center rounded-full">
                  <Icon className="size-9 text-cyan-light" />
                  <span className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan font-mono text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="max-w-xs text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
