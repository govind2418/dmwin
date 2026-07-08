"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown, Sparkles, LogIn, UserPlus, Download, Send } from "lucide-react";
import { StarField } from "@/components/shared/star-field";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { PremiumButton } from "@/components/shared/premium-button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { heroStats } from "@/lib/data/content";

const quickActions = [
  { label: "Login Now", icon: LogIn },
  { label: "Register", icon: UserPlus },
  { label: "Download App", icon: Download },
  { label: "Join Telegram", icon: Send },
];

const headlineWords = ["Play", "Bold.", "Win", "Big."];

const floatingBadges = [
  { label: "Instant Payouts", top: "22%", left: "8%", delay: 0 },
  { label: "120+ Games Live", top: "16%", right: "6%", delay: 0.15 },
  { label: "24/7 Support", bottom: "26%", left: "5%", delay: 0.3 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <AuroraBackground />
      <motion.div style={{ y: sceneY }} className="absolute inset-0">
        <StarField />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss to-transparent" />

      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 + badge.delay, ease: [0.16, 1, 0.3, 1] }}
          className="glass-subtle absolute z-10 hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80 md:flex animate-float"
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom,
            animationDelay: `${i * 1.3}s`,
          }}
        >
          <span className="size-1.5 rounded-full bg-cyan animate-pulse-glow" />
          {badge.label}
        </motion.div>
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-light"
        >
          <Sparkles className="size-3.5" />
          India&apos;s Premium Gaming Destination
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {quickActions.map((action) => (
            <PremiumButton key={action.label} type="button" variant="outline" size="sm">
              <action.icon className="size-4" /> {action.label}
            </PremiumButton>
          ))}
        </motion.div>

        <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block ${i % 2 === 1 ? "text-gradient-blue glow-text" : ""} mr-4`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          Aviator, live casino and premium slots in one ultra-fast, ultra-secure platform.
          Built for players who expect more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <PremiumButton href="/games" size="lg">
            Play Now <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </PremiumButton>
          <PremiumButton href="/about" variant="outline" size="lg">
            <PlayCircle className="size-4" /> Watch How It Works
          </PremiumButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong mt-6 grid w-full max-w-3xl grid-cols-2 gap-4 rounded-3xl p-6 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
