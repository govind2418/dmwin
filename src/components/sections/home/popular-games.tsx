"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { PremiumButton } from "@/components/shared/premium-button";
import { GameCard } from "@/components/shared/game-card";
import { games } from "@/lib/data/games";

export function PopularGames() {
  const featured = games.slice(0, 6);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Game Library"
            title="Popular games"
            highlight="players love"
            description="From high-octane crash games to live dealer tables — here's what's trending right now."
            className="items-start text-left"
          />
          <PremiumButton href="/games" variant="outline" className="shrink-0">
            View all games <ArrowRight className="size-4" />
          </PremiumButton>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3" stagger={0.06}>
          {featured.map((game) => (
            <motion.div key={game.id} variants={revealItemVariants} id={game.id} className="scroll-mt-32">
              <GameCard game={game} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
