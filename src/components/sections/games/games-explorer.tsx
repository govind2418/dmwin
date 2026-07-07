"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealGroup, revealItemVariants } from "@/components/shared/reveal";
import { GameCard } from "@/components/shared/game-card";
import { games, gameCategories } from "@/lib/data/games";
import { cn } from "@/lib/utils";

export function GamesExplorer() {
  const [active, setActive] = useState<(typeof gameCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? games : games.filter((g) => g.category === active)),
    [active]
  );

  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-subtle mx-auto flex w-fit flex-wrap items-center justify-center gap-1 rounded-full p-1.5">
          {gameCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                active === cat ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="active-game-category"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-royal to-cyan"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <RevealGroup
            key={active}
            className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
            stagger={0.05}
          >
            {filtered.map((game) => (
              <motion.div key={game.id} variants={revealItemVariants} id={game.id} className="scroll-mt-32">
                <GameCard game={game} />
              </motion.div>
            ))}
          </RevealGroup>
        </AnimatePresence>
      </div>
    </section>
  );
}
