"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { getIcon } from "@/lib/icon-map";
import { whyChooseUs } from "@/lib/data/content";
import { ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-full opacity-60 blur-3xl" style={{ background: "radial-gradient(circle, rgba(30,79,255,0.4), transparent 70%)" }} />
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-cyan/20"
              style={{ inset: `${ring * 14}%` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + ring * 8, repeat: Infinity, ease: "linear" }}
            >
              <span
                className="absolute size-2.5 rounded-full bg-cyan-light"
                style={{ top: "-4px", left: "50%", boxShadow: "0 0 14px 3px rgba(56,189,248,0.7)" }}
              />
            </motion.div>
          ))}
          <div className="glass-strong relative flex size-40 items-center justify-center rounded-full">
            <ShieldCheck className="size-16 text-cyan-light drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          <SectionHeading
            align="left"
            eyebrow="Why DMWin"
            title="Trust, built into"
            highlight="every layer"
            description="We obsess over the fundamentals so you can focus on the game."
            className="items-start text-left"
          />

          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {whyChooseUs.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div key={item.title} variants={revealItemVariants} className="flex gap-4">
                  <div className="glass-subtle flex size-11 shrink-0 items-center justify-center rounded-xl text-cyan-light">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
