import { PageHero } from "@/components/shared/page-hero";
import { LegalContent } from "@/components/sections/legal/legal-content";
import { termsSections } from "@/lib/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/terms",
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of DMWin Game.",
  keywords: ["Dmwin terms and conditions", "Dmwin rules"],
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms &"
        highlight="Conditions"
        description="Please read these terms carefully before using DMWin Game."
        breadcrumb="Terms"
      />
      <LegalContent sections={termsSections} lastUpdated="July 7, 2026" />
    </>
  );
}
