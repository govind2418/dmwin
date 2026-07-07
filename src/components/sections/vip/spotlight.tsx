"use client";

import { motion } from "framer-motion";
import { Crown, Check } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { PremiumButton } from "@/components/shared/premium-button";
import { ParticleField } from "@/components/shared/particle-field";

const highlights = [
  "18% weekly cashback, zero wagering",
  "Instant sub-60-second withdrawals",
  "Dedicated 24/7 relationship manager",
  "Invite-only tournaments & luxury gifting",
];

export function Spotlight() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <GlassCard strength="strong" className="relative overflow-hidden border-cyan/30 p-10 sm:p-16">
            <ParticleField count={30} />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(56,189,248,0.28), transparent 70%)" }}
            />
            <div className="relative flex flex-col items-center gap-8 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="relative flex size-24 items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan/30" />
                <div className="glow-electric flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan">
                  <Crown className="size-8 text-white" />
                </div>
              </motion.div>

              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cyan-light">
                  The Diamond Tier
                </p>
                <h2 className="mt-3 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
                  Where high rollers <span className="text-gradient-blue glow-text">belong</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
                  Diamond membership is DMWin&apos;s most exclusive tier — reserved for players who demand nothing
                  but the best.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <div key={h} className="glass-subtle flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm text-white/85">
                    <Check className="size-4 shrink-0 text-cyan-light" /> {h}
                  </div>
                ))}
              </div>

              <PremiumButton href="/contact" size="lg">
                Apply For VIP Club
              </PremiumButton>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
