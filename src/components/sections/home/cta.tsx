import { CtaBanner } from "@/components/shared/cta-banner";

export function Cta() {
  return (
    <CtaBanner
      title="Your next big win is"
      highlight="one spin away"
      description="Join over 250,000 players already winning on DMWin Game. Sign up in under a minute."
      primary={{ label: "Create Free Account", href: "/games" }}
      secondary={{ label: "See Bonuses", href: "/promotions" }}
    />
  );
}
