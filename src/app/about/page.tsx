import { PageHero } from "@/components/shared/page-hero";
import { Mission } from "@/components/sections/about/mission";
import { Timeline } from "@/components/sections/about/timeline";
import { Values } from "@/components/sections/about/values";
import { CtaBanner } from "@/components/shared/cta-banner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/about",
  title: "About Us",
  description:
    "Learn the story behind DMWin Game — India's premium online gaming platform built on speed, fairness and genuine rewards.",
  keywords: ["DMWin", "Dmwin Game", "about DMWin", "DM Win story", "DMWin platform"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DMWin"
        title="Built by players,"
        highlight="for players."
        description="We're on a mission to make premium online gaming fast, fair and genuinely rewarding."
        breadcrumb="About"
      />
      <Mission />
      <Timeline />
      <Values />
      <CtaBanner
        title="Join a platform built"
        highlight="around you"
        description="Experience the difference obsessive craftsmanship makes."
        primary={{ label: "Explore Games", href: "/games" }}
        secondary={{ label: "Meet VIP Club", href: "/vip-club" }}
      />
    </>
  );
}
