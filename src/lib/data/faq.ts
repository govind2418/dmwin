export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: "Is DMWin Game safe and secure to use?",
    answer:
      "Yes. DMWin Game uses bank-grade 256-bit SSL encryption, secure payment gateways and independently audited game engines to keep every session and transaction protected.",
  },
  {
    question: "How fast are deposits and withdrawals?",
    answer:
      "Deposits reflect instantly via UPI, net banking and cards. Withdrawals are processed within minutes for verified accounts, and always within 24 hours as per policy.",
  },
  {
    question: "Do I need to verify my account?",
    answer:
      "A quick one-time KYC verification is required to unlock full withdrawal limits and VIP perks — it usually takes less than five minutes.",
  },
  {
    question: "What games can I play on DMWin?",
    answer:
      "Crash games like Aviator and Vortex, live casino tables including Roulette, Blackjack and Teen Patti, plus premium slots and instant games — all in one platform.",
  },
  {
    question: "How does the VIP Club work?",
    answer:
      "Every wager earns loyalty points that move you up through Silver, Gold, Platinum and Diamond tiers, unlocking higher cashback, faster withdrawals and dedicated support.",
  },
  {
    question: "Can I play on mobile?",
    answer:
      "DMWin Game is fully responsive and optimised for mobile browsers with the same premium experience as desktop — no app download required.",
  },
];

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "Account",
    items: [
      { question: "How do I create a DMWin account?", answer: "Click Play Now, enter your mobile number or email, set a password and you're ready to play in under a minute." },
      { question: "How do I login to DMWin Game?", answer: "Tap Login on the DMWin Game homepage, enter your registered mobile number or email and password, and you're straight into the lobby." },
      { question: "Do I need to verify my account?", answer: "A one-time KYC verification is required to unlock full withdrawal limits and VIP perks — it usually takes less than five minutes." },
      { question: "Can I have more than one account?", answer: "No, each player is permitted only one account. Duplicate accounts may be suspended as per our terms." },
      { question: "How do I reset my password?", answer: "Use the 'Forgot Password' link on the DMWin login screen to receive a secure reset link via email or SMS." },
    ],
  },
  {
    category: "Payments",
    items: [
      { question: "How fast are deposits and withdrawals?", answer: "Deposits reflect instantly via UPI, net banking and cards. Withdrawals are processed within minutes for verified accounts." },
      { question: "What payment methods are supported?", answer: "We support UPI, net banking, debit/credit cards and popular digital wallets." },
      { question: "Are there any deposit fees?", answer: "DMWin never charges deposit fees. Your payment provider's standard charges may still apply." },
      { question: "What is the minimum withdrawal amount?", answer: "The minimum withdrawal amount is ₹200, with no upper limit for verified VIP members." },
    ],
  },
  {
    category: "Games",
    items: [
      { question: "What games can I play on DMWin?", answer: "Crash games like Aviator and Vortex, live casino tables including Roulette, Blackjack and Teen Patti, plus premium slots and instant games." },
      { question: "Are the games fair?", answer: "Every game engine is independently audited and certified for fairness with published RTP percentages." },
      { question: "Can I play for free before betting real money?", answer: "Most instant and slot games offer a demo mode so you can practice before wagering real money." },
      { question: "Can I play on mobile?", answer: "DMWin Game is fully responsive and optimised for mobile browsers — no app download required." },
    ],
  },
  {
    category: "VIP & Rewards",
    items: [
      { question: "How does the VIP Club work?", answer: "Every wager earns loyalty points that move you up through Silver, Gold, Platinum and Diamond tiers, unlocking higher cashback and faster withdrawals." },
      { question: "How do I get invited to VIP Club?", answer: "Our VIP team monitors activity and automatically reaches out once you qualify based on your play volume." },
      { question: "Do reward points expire?", answer: "Loyalty points remain valid as long as your account stays active with at least one wager every 90 days." },
    ],
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "What is the fastest way to reach support?",
    answer: "Live chat is available 24/7 and typically responds within under two minutes.",
  },
  {
    question: "Can I get help with a failed transaction?",
    answer:
      "Yes, our payments team monitors transactions in real time and resolves most failed deposit or withdrawal issues within the hour.",
  },
  {
    question: "Do you offer support in regional languages?",
    answer: "Our support team assists in English and Hindi, with more regional languages rolling out soon.",
  },
];
