import { PageHero } from "@/components/shared/page-hero";
import { FaqExplorer } from "@/components/sections/faq/faq-explorer";
import { CtaBanner } from "@/components/shared/cta-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { faqCategories } from "@/lib/data/faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/faq",
  title: "FAQ",
  description:
    "Answers to common questions about DMWin Game accounts, payments, games and the VIP rewards program.",
  keywords: ["Dmwin login", "Dmwin FAQ", "Dmwin account help", "Dmwin questions", "DMWin Game login"],
});

export default function FaqPage() {
  const allFaqs = faqCategories.flatMap((c) => c.items);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <PageHero
        eyebrow="Help Center"
        title="Frequently asked"
        highlight="questions."
        description="Can't find what you're looking for? Our support team is available 24/7."
        breadcrumb="FAQ"
      />
      <FaqExplorer />
      <CtaBanner
        title="Still have"
        highlight="questions?"
        description="Our live chat team responds in under two minutes, day or night."
        primary={{ label: "Contact Support", href: "/contact" }}
      />
    </>
  );
}
