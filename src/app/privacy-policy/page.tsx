import { PageHero } from "@/components/shared/page-hero";
import { LegalContent } from "@/components/sections/legal/legal-content";
import { privacySections } from "@/lib/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description: "Learn how DMWin Game collects, uses and protects your personal information.",
  keywords: ["Dmwin privacy policy", "Dmwin data protection"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        highlight="Policy"
        description="Your privacy matters to us. Here's exactly how we handle your data."
        breadcrumb="Privacy Policy"
      />
      <LegalContent sections={privacySections} lastUpdated="July 7, 2026" />
    </>
  );
}
