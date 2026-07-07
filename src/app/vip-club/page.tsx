import { PageHero } from "@/components/shared/page-hero";
import { Spotlight } from "@/components/sections/vip/spotlight";
import { Perks } from "@/components/sections/vip/perks";
import { InviteSteps } from "@/components/sections/vip/invite-steps";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/vip-club",
  title: "VIP Club",
  description:
    "Step into DMWin's exclusive VIP Club — dedicated hosts, instant payouts, elevated cashback and invite-only tournaments.",
  keywords: ["Dmwin VIP Club", "Dmwin VIP", "Dmwin exclusive rewards", "Dmwin high roller"],
});

export default function VipClubPage() {
  return (
    <>
      <PageHero
        eyebrow="Exclusive Membership"
        title="An experience reserved"
        highlight="for the elite."
        description="DMWin's VIP Club rewards our most dedicated players with perks money can't ordinarily buy."
        breadcrumb="VIP Club"
      />
      <Spotlight />
      <Perks />
      <InviteSteps />
    </>
  );
}
