"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { milestones } from "@/lib/data/about";

export function Timeline() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Journey" title="Milestones that" highlight="shaped us" />

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-royal via-cyan to-transparent" />
          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-2 pl-10"
              >
                <span className="absolute left-0 top-2 size-3.5 rounded-full bg-cyan shadow-[0_0_16px_4px_rgba(56,189,248,0.6)]" />
                <span className="glass-subtle inline-block w-fit rounded-full px-3 py-1 font-mono text-xs font-semibold text-cyan-light">
                  {m.year}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
