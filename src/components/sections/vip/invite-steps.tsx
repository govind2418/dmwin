"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { vipSteps } from "@/lib/data/vip";

export function InviteSteps() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How To Get In" title="Your path to" highlight="Diamond status" />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
          {vipSteps.map((step, i) => (
            <motion.div key={step.title} variants={revealItemVariants} className="glass relative flex flex-col gap-3 rounded-3xl p-7">
              <span className="font-display text-4xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
