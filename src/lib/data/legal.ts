export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export const privacySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy explains how DMWin Game (\"DMWin\", \"we\", \"us\") collects, uses, stores and protects your personal information when you use our website and gaming platform.",
      "By creating an account or using our services, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    paragraphs: [
      "Account Information: name, email address, mobile number, date of birth and government-issued identification for KYC verification.",
      "Transaction Information: deposit and withdrawal history, payment method details and wallet balances.",
      "Technical Information: IP address, device identifiers, browser type and gameplay activity logs collected automatically via cookies and similar technologies.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use your information to create and manage your account, process deposits and withdrawals, verify your identity and age, prevent fraud and money laundering, personalise your experience, and communicate important account or promotional updates.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    paragraphs: [
      "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how players interact with our platform so we can improve it. You can control cookie preferences through your browser settings.",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    paragraphs: [
      "We apply 256-bit SSL encryption, secure payment gateways and strict access controls to protect your personal and financial data. While no system is completely immune to risk, we continuously invest in safeguarding your information.",
    ],
  },
  {
    id: "third-party-sharing",
    title: "6. Third-Party Sharing",
    paragraphs: [
      "We may share information with payment processors, identity verification providers and regulatory authorities where required by law. Any third party we work with is contractually bound to protect your data.",
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team, subject to our legal and regulatory record-keeping obligations.",
    ],
  },
  {
    id: "responsible-gaming",
    title: "8. Age Restriction & Responsible Gaming",
    paragraphs: [
      "DMWin Game is intended strictly for users aged 18 and above. We use verification checks to prevent underage access and offer self-exclusion and deposit-limit tools for responsible play.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes To This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically. Material changes will be communicated via email or an in-app notice. Continued use of DMWin after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    paragraphs: [
      "For any privacy-related questions or requests, please reach out via our Contact page or email our support team directly.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using DMWin Game, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our platform.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    paragraphs: [
      "You must be at least 18 years old and legally permitted to participate in online gaming under the laws of your jurisdiction to use DMWin Game. It is your responsibility to ensure your use of the platform complies with local laws.",
    ],
  },
  {
    id: "account-registration",
    title: "3. Account Registration",
    paragraphs: [
      "Each user may register only one account. You must provide accurate information during registration and complete KYC verification when required. You are responsible for maintaining the confidentiality of your login credentials.",
    ],
  },
  {
    id: "deposits-withdrawals",
    title: "4. Deposits & Withdrawals",
    paragraphs: [
      "Deposits are typically credited instantly. Withdrawals are processed after identity verification and may take up to 24 hours, though most are completed within minutes. DMWin reserves the right to request additional verification for unusual transaction patterns.",
    ],
  },
  {
    id: "bonuses-wagering",
    title: "5. Bonuses & Wagering Requirements",
    paragraphs: [
      "Promotional bonuses are subject to specific wagering requirements and terms disclosed at the time of the offer. DMWin reserves the right to modify or withdraw promotions and to void bonus winnings obtained through abuse of promotional terms.",
    ],
  },
  {
    id: "prohibited-conduct",
    title: "6. Prohibited Conduct",
    paragraphs: [
      "Users may not use bots, exploits, collusion, multiple accounts, or any fraudulent method to gain an unfair advantage. Violation of these rules may result in account suspension and forfeiture of funds.",
    ],
  },
  {
    id: "responsible-gambling",
    title: "7. Responsible Gambling",
    paragraphs: [
      "Gaming should be an enjoyable form of entertainment, not a source of income. We provide tools such as deposit limits, cool-off periods and self-exclusion to help you play responsibly. Please play within your means.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    paragraphs: [
      "DMWin Game is provided on an \"as is\" basis. To the fullest extent permitted by law, DMWin is not liable for indirect, incidental or consequential damages arising from your use of the platform.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    paragraphs: [
      "These Terms are governed by the applicable laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts.",
    ],
  },
  {
    id: "termination",
    title: "10. Termination",
    paragraphs: [
      "DMWin reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a risk to the platform or other users.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes To These Terms",
    paragraphs: [
      "We may revise these Terms from time to time. Continued use of DMWin Game after changes are posted constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    paragraphs: [
      "For questions about these Terms & Conditions, please reach out via our Contact page.",
    ],
  },
];
