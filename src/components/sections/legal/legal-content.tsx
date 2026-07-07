"use client";

import { Reveal } from "@/components/shared/reveal";
import { GlassCard } from "@/components/shared/glass-card";
import type { LegalSection } from "@/lib/data/legal";

export function LegalContent({ sections, lastUpdated }: { sections: LegalSection[]; lastUpdated: string }) {
  return (
    <section className="relative pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <Reveal className="hidden lg:block">
          <div className="glass-subtle sticky top-28 flex flex-col gap-1 rounded-3xl p-5">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-cyan-light">On this page</p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-xl px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard strength="strong" className="flex flex-col gap-10 p-8 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">{s.title}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
