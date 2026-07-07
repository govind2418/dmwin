export interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  rating: number;
  tier: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Malhotra",
    handle: "@rohit.wins",
    quote:
      "The withdrawal speed alone makes DMWin worth it — funds land in minutes. The Aviator UI feels like a AAA game, not a betting app.",
    rating: 5,
    tier: "Platinum VIP",
  },
  {
    name: "Ananya Sharma",
    handle: "@ananya_plays",
    quote:
      "I've tried a dozen platforms and nothing feels this polished. The rewards ladder actually keeps me motivated to climb tiers.",
    rating: 5,
    tier: "Gold VIP",
  },
  {
    name: "Karan Verma",
    handle: "@karanv",
    quote:
      "Live tables feel genuinely premium — smooth dealers, zero lag, and the interface is easily the cleanest I've used.",
    rating: 5,
    tier: "Diamond VIP",
  },
  {
    name: "Priya Nair",
    handle: "@priya.n",
    quote:
      "Customer support resolved my query in under two minutes on live chat. That kind of speed builds real trust.",
    rating: 4,
    tier: "Silver VIP",
  },
  {
    name: "Aditya Rao",
    handle: "@adi.rao",
    quote:
      "The daily missions and jackpot drops make every session exciting. It doesn't feel repetitive like other platforms.",
    rating: 5,
    tier: "Platinum VIP",
  },
];
