"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { PremiumButton } from "@/components/shared/premium-button";
import { getIcon } from "@/lib/icon-map";
import { promotions } from "@/lib/data/promotions";
import { cn } from "@/lib/utils";

export function PromotionsGrid() {
  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {promotions.map((promo) => {
            const Icon = getIcon(promo.icon);
            return (
              <motion.div key={promo.title} variants={revealItemVariants}>
                <TiltCard intensity={8} className="h-full">
                  <div className="glass flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08]">
                    <div className={cn("relative flex h-28 items-center justify-between bg-gradient-to-br px-6", promo.gradient)}>
                      <div className="absolute inset-0 bg-abyss/20" />
                      <Icon className="relative z-10 size-10 text-white drop-shadow-[0_0_16px_rgba(56,189,248,0.5)]" />
                      <span className="relative z-10 rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {promo.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-display text-lg font-semibold text-white">{promo.title}</h3>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{promo.description}</p>
                      <div className="flex items-start gap-1.5 text-xs text-muted-foreground/70">
                        <Info className="mt-0.5 size-3 shrink-0" />
                        {promo.terms}
                      </div>
                      <PremiumButton href="/games" size="sm" className="mt-2 w-full justify-center">
                        Claim Now
                      </PremiumButton>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
