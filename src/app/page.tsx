import { Hero } from "@/components/sections/home/hero";
import { Features } from "@/components/sections/home/features";
import { PopularGames } from "@/components/sections/home/popular-games";
import { Rewards } from "@/components/sections/home/rewards";
import { Achievements } from "@/components/sections/home/achievements";
import { WhyChooseUs } from "@/components/sections/home/why-choose-us";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/brand/logo.png`,
          sameAs: Object.values(siteConfig.links),
        }}
      />
      <Hero />
      <Features />
      <PopularGames />
      <Rewards />
      <Achievements />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
