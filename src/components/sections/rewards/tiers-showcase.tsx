"use client";

import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { detailedTiers } from "@/lib/data/rewards";
import { cn } from "@/lib/utils";

export function TiersShowcase() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Loyalty Tiers" title="Four tiers," highlight="endless perks" />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {detailedTiers.map((tier, i) => (
            <motion.div key={tier.tier} variants={revealItemVariants}>
              <GlassCard
                glow
                strength={i === detailedTiers.length - 1 ? "strong" : "regular"}
                className={cn("relative flex h-full flex-col gap-5 overflow-hidden p-7", i === detailedTiers.length - 1 && "border-cyan/40")}
              >
                {i === detailedTiers.length - 1 && (
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-royal to-cyan px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                    <Crown className="size-3" /> Elite
                  </span>
                )}
                <div className={cn("flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br text-abyss font-display font-bold", tier.color)}>
                  {tier.tier[0]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{tier.tier}</h3>
                  <p className="text-xs text-muted-foreground">{tier.points} points</p>
                </div>
                <div className="glass-subtle w-fit rounded-full px-3 py-1 font-mono text-xs font-semibold text-cyan-light">
                  {tier.cashback} cashback
                </div>
                <ul className="flex flex-1 flex-col gap-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="size-3.5 shrink-0 text-cyan-light" /> {perk}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
