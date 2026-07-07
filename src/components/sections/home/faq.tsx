"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaq } from "@/lib/data/faq";

export function Faq() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently asked"
          highlight="questions"
          description="Everything you need to know before you start playing."
        />

        <Reveal delay={0.1} className="mt-14">
          <GlassCard className="p-3 sm:p-4">
            <Accordion className="w-full">
              {homeFaq.map((item, i) => (
                <AccordionItem key={item.question} value={`item-${i}`} className="border-white/[0.06] px-3">
                  <AccordionTrigger className="py-5 text-left text-sm font-medium text-white hover:text-cyan-light sm:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
