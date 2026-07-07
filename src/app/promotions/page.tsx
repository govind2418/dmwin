import { PageHero } from "@/components/shared/page-hero";
import { PromotionsGrid } from "@/components/sections/promotions/promotions-grid";
import { CtaBanner } from "@/components/shared/cta-banner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/promotions",
  title: "Promotions",
  description:
    "Discover DMWin Game's latest promotions — welcome bonuses, weekly reloads, cashback Fridays, referral rewards and live tournaments.",
  keywords: ["Dmwin promotions", "Dmwin bonus offers", "Dmwin welcome bonus", "Dmwin cashback Friday"],
});

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Promotions"
        title="Bonuses that keep"
        highlight="on giving."
        description="From your first deposit to your hundredth session, there's always something extra waiting for you."
        breadcrumb="Promotions"
      />
      <PromotionsGrid />
      <CtaBanner
        title="Terms apply to all"
        highlight="promotions"
        description="Read the full terms and conditions before claiming any bonus offer."
        primary={{ label: "View Terms", href: "/terms" }}
        secondary={{ label: "Contact Support", href: "/contact" }}
      />
    </>
  );
}
