"use client";
import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type SeqProps = { children: ReactNode; index: number; className?: string };

export function HeroSeq({ children, index, className }: SeqProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1 + index * 0.12, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroDashboard({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 40, scale: 0.96 }}
      animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}
