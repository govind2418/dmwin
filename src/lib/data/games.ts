export interface Game {
  id: string;
  name: string;
  category: string;
  rtp: string;
  tag?: "Hot" | "New" | "Trending" | "Jackpot";
  icon: string;
  gradient: string;
}

export const games: Game[] = [
  {
    id: "aviator",
    name: "Aviator",
    category: "Crash",
    rtp: "97.43%",
    tag: "Hot",
    icon: "Rocket",
    gradient: "from-royal via-electric to-cyan",
  },
  {
    id: "vortex",
    name: "Vortex",
    category: "Crash",
    rtp: "96.80%",
    tag: "Trending",
    icon: "Tornado",
    gradient: "from-navy-lighter via-royal to-cyan-light",
  },
  {
    id: "chicken-road",
    name: "Chicken Road",
    category: "Instant",
    rtp: "96.11%",
    tag: "New",
    icon: "Footprints",
    gradient: "from-cyan via-electric to-royal",
  },
  {
    id: "roulette",
    name: "Live Roulette",
    category: "Live Casino",
    rtp: "97.30%",
    icon: "Target",
    gradient: "from-royal via-navy-lighter to-electric",
  },
  {
    id: "blackjack",
    name: "Live Blackjack",
    category: "Live Casino",
    rtp: "99.10%",
    tag: "Trending",
    icon: "Spade",
    gradient: "from-midnight via-royal to-cyan",
  },
  {
    id: "teenpatti",
    name: "Teen Patti Live",
    category: "Live Casino",
    rtp: "97.00%",
    icon: "Club",
    gradient: "from-electric via-cyan to-cyan-light",
  },
  {
    id: "jackpot",
    name: "Super Jackpot Slots",
    category: "Slots",
    rtp: "95.90%",
    tag: "Jackpot",
    icon: "Gem",
    gradient: "from-royal via-cyan to-frost",
  },
  {
    id: "fortune-reels",
    name: "Fortune Reels",
    category: "Slots",
    rtp: "96.40%",
    icon: "Coins",
    gradient: "from-navy-lighter via-electric to-royal-light",
  },
  {
    id: "lucky-numbers",
    name: "Lucky Numbers",
    category: "Instant",
    rtp: "95.60%",
    icon: "Dices",
    gradient: "from-cyan-light via-cyan to-royal",
  },
  {
    id: "rocket-x",
    name: "Rocket X",
    category: "Crash",
    rtp: "97.10%",
    tag: "New",
    icon: "Rocket",
    gradient: "from-midnight via-royal-light to-cyan",
  },
  {
    id: "mines-quest",
    name: "Mines Quest",
    category: "Instant",
    rtp: "96.75%",
    icon: "Target",
    gradient: "from-navy via-royal to-cyan-light",
  },
  {
    id: "diamond-strike",
    name: "Diamond Strike",
    category: "Slots",
    rtp: "96.20%",
    tag: "Hot",
    icon: "Gem",
    gradient: "from-royal-light via-cyan to-frost",
  },
];

export const gameCategories = ["All", "Crash", "Live Casino", "Slots", "Instant"] as const;
