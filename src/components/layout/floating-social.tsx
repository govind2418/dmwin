"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { TelegramIcon, XIcon, InstagramIcon } from "@/components/shared/social-icons";

const quickLinks = [
  { icon: TelegramIcon, href: siteConfig.links.telegram, label: "Telegram" },
  { icon: XIcon, href: siteConfig.links.twitter, label: "X" },
  { icon: InstagramIcon, href: siteConfig.links.instagram, label: "Instagram" },
];

export function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open &&
          quickLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, y: 16, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.6 }}
              transition={{ duration: 0.25, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong flex size-11 items-center justify-center rounded-full text-cyan-light hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.7)]"
            >
              <link.icon className="size-4" />
            </motion.a>
          ))}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle quick links"
        className="glow-electric flex size-13 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan text-white"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
