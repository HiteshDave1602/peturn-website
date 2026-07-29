"use client";
import Image, { type ImageProps } from "next/image";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const scatterOffsets = [
  { x: -34, y: -16, rotate: -7 },
  { x: 32, y: 18, rotate: 6 },
  { x: -28, y: 22, rotate: 5 },
  { x: 30, y: -18, rotate: -6 },
];

export function ScatterReveal({ children, index, className, id }: { children: ReactNode; index: number; className?: string; id?: string }) {
  const prefersReduced = useReducedMotion();
  const offset = scatterOffsets[index % scatterOffsets.length];
  return (
    <motion.article
      id={id}
      className={className}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: offset.x, y: offset.y, rotate: offset.rotate }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      {children}
    </motion.article>
  );
}

export function SlideIn({ children, direction, delay = 0, className, as = "div", id }: { children: ReactNode; direction: "left" | "right"; delay?: number; className?: string; as?: "div" | "article"; id?: string }) {
  const prefersReduced = useReducedMotion();
  const x = direction === "left" ? -48 : 48;
  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </Tag>
  );
}

export function WipeImage({ direction, ...imageProps }: { direction: "left" | "right" } & ImageProps) {
  const prefersReduced = useReducedMotion();
  const hiddenClip = direction === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
  return (
    <motion.div
      style={{ position: "absolute", inset: 0 }}
      initial={prefersReduced ? { clipPath: "inset(0 0 0 0)" } : { clipPath: hiddenClip }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease }}
    >
      <Image {...imageProps} />
    </motion.div>
  );
}

export function BorderTraceCard({ children, delay = 0, className, id }: { children: ReactNode; delay?: number; className?: string; id?: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      id={id}
      className={`border-trace-card ${className ?? ""}`}
      initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {!prefersReduced && (
        <svg className="border-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <motion.rect
            x="1" y="1" width="98" height="98" rx="9" ry="9"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: delay + 0.25, ease }}
          />
        </svg>
      )}
      {children}
    </motion.article>
  );
}

export function ConnectorStem({ index }: { index: number }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.span
      className="integration-stem"
      aria-hidden="true"
      initial={prefersReduced ? { scaleY: 1 } : { scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
    />
  );
}

export function ShieldDraw() {
  const prefersReduced = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  return (
    <div className="shield-draw" aria-hidden="true">
      <svg viewBox="0 0 120 132" fill="none">
        <motion.path
          d="M60 6 L110 24 V60 C110 92 90 114 60 126 C30 114 10 92 10 60 V24 Z"
          stroke="#66c5ec"
          strokeWidth="3"
          strokeLinejoin="round"
          initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease }}
        />
        <motion.path
          d="M38 62 L53 78 L84 44"
          stroke="#66c5ec"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={prefersReduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 1, ease }}
          id={`${uid}-check`}
        />
      </svg>
    </div>
  );
}

export function BlurUp({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}

export function useOnceInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
