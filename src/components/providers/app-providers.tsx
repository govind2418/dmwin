"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CursorGlow } from "@/components/providers/cursor-glow";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <SmoothScrollProvider>
        <CursorGlow />
        {children}
      </SmoothScrollProvider>
    </TooltipProvider>
  );
}
