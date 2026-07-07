import { PageHero } from "@/components/shared/page-hero";
import { HowItWorks } from "@/components/sections/rewards/how-it-works";
import { TiersShowcase } from "@/components/sections/rewards/tiers-showcase";
import { BonusTypes } from "@/components/sections/rewards/bonus-types";
import { CtaBanner } from "@/components/shared/cta-banner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/rewards",
  title: "Rewards",
  description:
    "Earn loyalty points on every wager, climb four VIP tiers and unlock cashback, bonus spins and exclusive perks on DMWin Game.",
  keywords: ["Dmwin rewards", "Dmwin cashback", "Dmwin VIP tiers", "Dmwin bonus", "Dmwin loyalty points"],
});

export default function RewardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rewards Program"
        title="Play more."
        highlight="Earn more."
        description="A rewards ladder that actually rewards you — real cashback, real perks, no gimmicks."
        breadcrumb="Rewards"
      />
      <HowItWorks />
      <TiersShowcase />
      <BonusTypes />
      <CtaBanner
        title="Start earning your"
        highlight="first rewards today"
        description="Every game you play brings you closer to your next tier."
        primary={{ label: "Browse Games", href: "/games" }}
        secondary={{ label: "View VIP Club", href: "/vip-club" }}
      />
    </>
  );
}
