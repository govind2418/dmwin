"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function FaqExplorer() {
  const [active, setActive] = useState(faqCategories[0].category);
  const activeCategory = faqCategories.find((c) => c.category === active) ?? faqCategories[0];

  return (
    <section className="relative pb-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass-subtle mx-auto flex w-fit flex-wrap items-center justify-center gap-1 rounded-full p-1.5">
          {faqCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActive(cat.category)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                active === cat.category ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              {active === cat.category && (
                <motion.span
                  layoutId="active-faq-category"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-royal to-cyan"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat.category}</span>
            </button>
          ))}
        </div>

        <Reveal key={active} delay={0.05} className="mt-10">
          <GlassCard className="p-3 sm:p-4">
            <Accordion className="w-full">
              {activeCategory.items.map((item, i) => (
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
