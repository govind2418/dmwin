"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CursorGlow } from "@/components/providers/cursor-glow";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      <CursorGlow />
      {children}
    </TooltipProvider>
  );
}
