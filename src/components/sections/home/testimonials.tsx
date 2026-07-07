"use client";

import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Player Stories"
          title="Loved by players"
          highlight="across India"
          description="Real feedback from a growing community of DMWin players."
        />

        <Reveal delay={0.1} className="mt-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.handle} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                  <GlassCard className="flex h-full flex-col gap-5 p-7">
                    <Quote className="size-7 text-cyan/40" />
                    <p className="flex-1 text-sm leading-relaxed text-white/85">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-3.5 ${i < t.rating ? "fill-cyan-light text-cyan-light" : "text-white/15"}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                      <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-royal to-cyan font-display text-sm font-bold text-white">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-cyan-light/80">{t.tier}</p>
                      </div>
                    </div>
                  </GlassCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 border-white/10 bg-white/5 text-white hover:bg-white/10" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
