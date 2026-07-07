import { PageHero } from "@/components/shared/page-hero";
import { GamesExplorer } from "@/components/sections/games/games-explorer";
import { CtaBanner } from "@/components/shared/cta-banner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/games",
  title: "Games",
  description:
    "Explore DMWin Game's full library — Aviator, Vortex, live casino tables, premium slots and instant games, all with transparent RTPs.",
  keywords: [
    "Dmwin games",
    "Dmwin Aviator",
    "DMWin Vortex",
    "Dmwin live casino",
    "Dmwin slots",
    "Dmwin Chicken Road",
  ],
});

export default function GamesPage() {
  return (
    <>
      <PageHero
        eyebrow="Game Library"
        title="Every game."
        highlight="One platform."
        description="120+ crash games, live tables, slots and instant wins — browse by category and jump straight in."
        breadcrumb="Games"
      />
      <GamesExplorer />
      <CtaBanner
        title="Ready to test your"
        highlight="luck today?"
        description="Create your account in under a minute and claim your welcome bonus."
        primary={{ label: "Get Started", href: "/promotions" }}
        secondary={{ label: "View VIP Perks", href: "/vip-club" }}
      />
    </>
  );
}
