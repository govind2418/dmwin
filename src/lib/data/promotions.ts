export interface Promotion {
  icon: string;
  title: string;
  badge: string;
  description: string;
  terms: string;
  gradient: string;
}

export const promotions: Promotion[] = [
  {
    icon: "PartyPopper",
    title: "100% Welcome Bonus",
    badge: "New Players",
    description: "Double your first deposit up to ₹10,000 and start playing with twice the firepower.",
    terms: "Min. deposit ₹500. 10x wagering requirement applies.",
    gradient: "from-royal via-electric to-cyan",
  },
  {
    icon: "CalendarClock",
    title: "Weekly Reload Bonus",
    badge: "Every Monday",
    description: "Kick off your week with a 50% reload bonus on any deposit made before Wednesday.",
    terms: "Max bonus ₹5,000. 5x wagering requirement applies.",
    gradient: "from-navy-lighter via-royal to-cyan-light",
  },
  {
    icon: "Percent",
    title: "Cashback Fridays",
    badge: "Weekly",
    description: "Get up to 18% of your net losses back automatically, credited every Friday.",
    terms: "Cashback tier depends on VIP status. No wagering required.",
    gradient: "from-cyan via-electric to-royal",
  },
  {
    icon: "Users",
    title: "Refer A Friend",
    badge: "Ongoing",
    description: "Earn ₹500 in bonus credit for every friend who signs up and deposits with your code.",
    terms: "Referred player must deposit a minimum of ₹500.",
    gradient: "from-royal via-navy-lighter to-electric",
  },
  {
    icon: "Ticket",
    title: "Aviator Tournament",
    badge: "Live Now",
    description: "Compete on the Aviator leaderboard for a share of a ₹10 lakh weekly prize pool.",
    terms: "Rankings based on total multiplier volume. Top 100 win prizes.",
    gradient: "from-midnight via-royal to-cyan",
  },
  {
    icon: "Gift",
    title: "Birthday Surprise",
    badge: "Annual",
    description: "A free bonus credited automatically to your account every year on your birthday.",
    terms: "Requires verified date of birth on your KYC profile.",
    gradient: "from-electric via-cyan to-cyan-light",
  },
];
