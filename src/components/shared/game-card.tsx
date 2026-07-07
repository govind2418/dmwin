"use client";

import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/shared/tilt-card";
import { getIcon } from "@/lib/icon-map";
import type { Game } from "@/lib/data/games";
import { cn } from "@/lib/utils";

const tagStyles: Record<string, string> = {
  Hot: "bg-royal/20 text-cyan-light border-royal/40",
  New: "bg-cyan/20 text-cyan-light border-cyan/40",
  Trending: "bg-electric/20 text-cyan-light border-electric/40",
  Jackpot: "bg-gradient-to-r from-royal to-cyan text-white border-transparent",
};

export function GameCard({ game }: { game: Game }) {
  const Icon = getIcon(game.icon);
  return (
    <TiltCard intensity={10} className="group h-full">
      <div className="glass relative h-full overflow-hidden rounded-3xl border border-white/[0.08] transition-all duration-500 hover:border-cyan/40">
        <div className={cn("relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br", game.gradient)}>
          <div className="absolute inset-0 bg-abyss/30" />
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 60%)" }}
          />
          <Icon className="relative z-10 size-16 text-white/90 drop-shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-transform duration-500 group-hover:scale-110" />
          {game.tag && (
            <span
              className={cn(
                "absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md",
                tagStyles[game.tag]
              )}
            >
              {game.tag}
            </span>
          )}
          <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white/80 backdrop-blur-md">
            RTP {game.rtp}
          </span>
        </div>
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="font-display text-sm font-semibold text-white">{game.name}</p>
            <p className="text-xs text-muted-foreground">{game.category}</p>
          </div>
          <div className="glass-subtle flex size-8 items-center justify-center rounded-full text-cyan-light opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowRight className="size-3.5" />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
