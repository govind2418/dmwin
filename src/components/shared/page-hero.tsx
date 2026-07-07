"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { ParticleField } from "@/components/shared/particle-field";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ eyebrow, title, highlight, description, breadcrumb, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48", className)}>
      <AuroraBackground className="opacity-70" />
      <ParticleField count={22} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-abyss to-transparent" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-cyan-light">
            <Home className="size-3" /> Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-cyan-light">{breadcrumb}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-light"
        >
          <span className="size-1.5 animate-pulse-glow rounded-full bg-cyan" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {title} {highlight && <span className="text-gradient-blue glow-text">{highlight}</span>}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-balance text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
