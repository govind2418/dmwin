"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, gameMegaMenu } from "@/lib/site-config";
import { PremiumButton } from "@/components/shared/premium-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(30,79,255,0.5)]" : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5" data-cursor="pointer">
            <div className="relative size-9 overflow-hidden rounded-xl ring-1 ring-cyan/30">
              <Image src="/brand/logo.png" alt="DMWin Game logo" fill sizes="36px" className="object-cover" priority />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              DM<span className="text-gradient-blue">Win</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) =>
              item.label === "Games" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                      pathname === item.href && "text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2"
                      >
                        <div className="glass-strong grid grid-cols-3 gap-6 rounded-3xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                          {gameMegaMenu.map((group) => (
                            <div key={group.category} className="flex flex-col gap-3">
                              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-light/80">
                                {group.category}
                              </p>
                              <div className="flex flex-col gap-1">
                                {group.items.map((g) => (
                                  <Link
                                    key={g.label}
                                    href={g.href}
                                    className="group rounded-xl px-2.5 py-2 transition-colors hover:bg-white/5"
                                  >
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-light">
                                      {g.label}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{g.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="col-span-3 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-royal/20 to-cyan/10 px-5 py-3">
                            <span className="text-sm text-white/80">Explore the full game library</span>
                            <Link href="/games" className="flex items-center gap-1 text-sm font-semibold text-cyan-light">
                              View all games <ArrowRight className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                    pathname === item.href && "text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <PremiumButton href="/vip-club" variant="outline" size="sm">
              VIP Club
            </PremiumButton>
            <PremiumButton href="/games" variant="primary" size="sm">
              Play Now
            </PremiumButton>
          </div>

          <button
            className="flex size-10 items-center justify-center rounded-full text-white lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 p-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <PremiumButton href="/vip-club" variant="outline" className="w-full">
                  VIP Club
                </PremiumButton>
                <PremiumButton href="/games" variant="primary" className="w-full">
                  Play Now
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
