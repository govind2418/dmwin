"use client";

import { ButtonHTMLAttributes, MouseEvent, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-display font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-royal via-electric to-cyan text-white shadow-[0_0_0_1px_rgba(56,189,248,0.3),0_10px_40px_-10px_rgba(30,79,255,0.7)] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.5),0_16px_50px_-8px_rgba(56,189,248,0.8)]",
        outline:
          "glass text-frost hover:border-cyan/50 hover:bg-cyan/5",
        ghost: "text-frost/80 hover:text-white hover:bg-white/5",
      },
      size: {
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
        sm: "h-10 px-5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type Ripple = { x: number; y: number; id: number };

interface PremiumButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  href?: string;
  children: ReactNode;
  magnetic?: boolean;
}

export function PremiumButton({
  href,
  variant,
  size,
  className,
  children,
  magnetic = true,
  onClick,
  ...props
}: PremiumButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const spawnRipple = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rip) => rip.id !== id)), 650);
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant !== "ghost" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
      )}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.6 }}
          animate={{ width: 260, height: 260, x: -130, y: -130, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      ))}
    </>
  );

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={spawnRipple}
    >
      {href ? (
        <Link href={href} className={cn(buttonStyles({ variant, size }), className)}>
          {content}
        </Link>
      ) : (
        <button className={cn(buttonStyles({ variant, size }), className)} onClick={onClick} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
