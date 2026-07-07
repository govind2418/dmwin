"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { PremiumButton } from "@/components/shared/premium-button";
import { ParticleField } from "@/components/shared/particle-field";
import { Reveal } from "@/components/shared/reveal";

interface CtaBannerProps {
  title: string;
  highlight: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CtaBanner({ title, highlight, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border-gradient-animated relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-midnight to-navy p-10 text-center sm:p-16">
            <ParticleField count={30} />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(56,189,248,0.25), transparent 70%)" }}
            />
            <div className="relative flex flex-col items-center gap-6">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="glass-subtle flex size-14 items-center justify-center rounded-2xl text-cyan-light"
              >
                <Sparkles className="size-6" />
              </motion.div>
              <h2 className="text-balance font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {title} <span className="text-gradient-blue glow-text">{highlight}</span>
              </h2>
              <p className="max-w-xl text-balance text-lg text-muted-foreground">{description}</p>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <PremiumButton href={primary.href} size="lg">
                  {primary.label} <ArrowRight className="size-4" />
                </PremiumButton>
                {secondary && (
                  <PremiumButton href={secondary.href} variant="outline" size="lg">
                    {secondary.label}
                  </PremiumButton>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
