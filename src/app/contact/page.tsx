import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactFaq } from "@/components/sections/contact/contact-faq";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact",
  title: "Contact",
  description: "Get in touch with the DMWin Game support team — live chat, email or phone, available 24/7.",
  keywords: ["Dmwin contact", "Dmwin support", "Dmwin customer care", "Dmwin help"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We're here to"
        highlight="help, 24/7."
        description="Questions about your account, payments or promotions? Our team responds fast."
        breadcrumb="Contact"
      />
      <section className="relative pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      <ContactFaq />
    </>
  );
}
