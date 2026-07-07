"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { PremiumButton } from "@/components/shared/premium-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <Reveal>
      <GlassCard strength="strong" className="p-8 sm:p-10">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
          >
            <div className="glass-subtle flex size-16 items-center justify-center rounded-full text-cyan-light">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">Message sent!</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Our support team will get back to you within 24 hours, usually much sooner.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="text-white/80">Full Name</Label>
                <Input id="name" required placeholder="Your name" className="glass-subtle h-12 border-white/10 text-white placeholder:text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white/80">Email Address</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="glass-subtle h-12 border-white/10 text-white placeholder:text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-white/80">Subject</Label>
              <Input id="subject" required placeholder="How can we help?" className="glass-subtle h-12 border-white/10 text-white placeholder:text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-white/80">Message</Label>
              <Textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us more..."
                className="glass-subtle border-white/10 text-white placeholder:text-muted-foreground"
              />
            </div>
            <PremiumButton type="submit" size="lg" disabled={loading} className="w-full justify-center sm:w-fit">
              {loading ? "Sending..." : "Send Message"} <Send className="size-4" />
            </PremiumButton>
          </form>
        )}
      </GlassCard>
    </Reveal>
  );
}
