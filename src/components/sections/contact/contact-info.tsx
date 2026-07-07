"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { siteConfig } from "@/lib/site-config";

const cards = [
  { icon: Mail, title: "Email Us", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, title: "Call Us", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: MessageCircle, title: "Live Chat", value: "Available 24/7", href: "#" },
  { icon: MapPin, title: "Visit Us", value: siteConfig.contact.address, href: "#" },
];

export function ContactInfo() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
      {cards.map((card) => (
        <motion.a key={card.title} href={card.href} variants={revealItemVariants}>
          <GlassCard glow className="flex h-full flex-col gap-3 p-6">
            <div className="glass-subtle flex size-10 items-center justify-center rounded-xl text-cyan-light">
              <card.icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{card.value}</p>
            </div>
          </GlassCard>
        </motion.a>
      ))}
    </RevealGroup>
  );
}
