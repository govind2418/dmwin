"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { PremiumButton } from "@/components/shared/premium-button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <GlassCard strength="strong" className="relative overflow-hidden p-8 sm:p-12">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)" }}
      />
      <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex max-w-md flex-col gap-3">
          <div className="glass-subtle mx-auto flex size-12 items-center justify-center rounded-2xl lg:mx-0">
            <Mail className="size-5 text-cyan-light" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Never miss a <span className="text-gradient-blue">jackpot drop</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Get exclusive bonus codes, VIP invites and new game alerts straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-subtle flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-cyan-light"
            >
              <CheckCircle2 className="size-4" /> You&apos;re on the list!
            </motion.div>
          ) : (
            <>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="glass-subtle h-13 w-full rounded-full border-white/10 px-5 py-3.5 text-sm text-white placeholder:text-muted-foreground focus:border-cyan/50 focus:outline-none"
              />
              <PremiumButton type="submit" className="shrink-0">
                Subscribe <ArrowRight className="size-4" />
              </PremiumButton>
            </>
          )}
        </form>
      </div>
    </GlassCard>
  );
}
