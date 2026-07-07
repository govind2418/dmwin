export const siteConfig = {
  name: "DMWin Game",
  shortName: "DMWin",
  domain: "dmwingame.in.net",
  url: "https://dmwingame.in.net",
  tagline: "Play Bold. Win Big.",
  description:
    "DMWin Game is India's premium online gaming destination — Aviator, live casino, slots and instant games wrapped in a fast, secure and ultra-rewarding experience.",
  keywords: [
    "DMWin",
    "Dmwin",
    "DM Win",
    "Dm Win",
    "DMWin Game",
    "Dmwin Game",
    "DMWin login",
    "Dmwin login",
    "Dmwin App",
    "Dmwin Game login",
    "Dmwin online",
    "Dmwin casino",
    "Dmwin Aviator",
    "online gaming India",
    "Aviator game",
    "online casino games",
    "instant win games",
    "VIP rewards",
    "premium gaming platform",
  ],
  themeColor: "#06152D",
  links: {
    twitter: "https://twitter.com/dmwingame",
    instagram: "https://instagram.com/dmwingame",
    telegram: "https://t.me/dmwingame",
    facebook: "https://facebook.com/dmwingame",
    youtube: "https://youtube.com/@dmwingame",
  },
  contact: {
    email: "support@dmwingame.in.net",
    phone: "+91 90000 00000",
    address: "DMWin Game, Business Bay Tower, Mumbai, India",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Games", href: "/games" },
  { label: "Rewards", href: "/rewards" },
  { label: "VIP Club", href: "/vip-club" },
  { label: "Promotions", href: "/promotions" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const gameMegaMenu: { category: string; items: NavItem[] }[] = [
  {
    category: "Crash & Instant",
    items: [
      { label: "Aviator", href: "/games#aviator", description: "Cash out before it flies away" },
      { label: "Vortex", href: "/games#vortex", description: "Spiral multipliers, instant wins" },
      { label: "Chicken Road", href: "/games#chicken-road", description: "Step, multiply, cash out" },
    ],
  },
  {
    category: "Live Casino",
    items: [
      { label: "Live Roulette", href: "/games#roulette", description: "Real dealers, real time" },
      { label: "Live Blackjack", href: "/games#blackjack", description: "Beat the house live" },
      { label: "Teen Patti Live", href: "/games#teenpatti", description: "India's favourite table" },
    ],
  },
  {
    category: "Slots & Jackpots",
    items: [
      { label: "Super Jackpot Slots", href: "/games#jackpot", description: "Progressive mega wins" },
      { label: "Fortune Reels", href: "/games#fortune-reels", description: "Classic reels, modern wins" },
      { label: "Lucky Numbers", href: "/games#lucky-numbers", description: "Pick, play, win" },
    ],
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "VIP Club", href: "/vip-club" },
    { label: "Promotions", href: "/promotions" },
    { label: "Contact", href: "/contact" },
  ],
  platform: [
    { label: "All Games", href: "/games" },
    { label: "Rewards", href: "/rewards" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
