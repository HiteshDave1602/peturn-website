"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Step = {
  title: string;
  text: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(prefersReduced ? 1 : 0);
  const [activeSteps, setActiveSteps] = useState<Set<number>>(
    prefersReduced ? new Set(steps.map((_, i) => i)) : new Set()
  );

  useEffect(() => {
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-step"));
          if (entry.isIntersecting) {
            setActiveSteps((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    const nodes = container.querySelectorAll<HTMLElement>("[data-step]");
    nodes.forEach((node) => observer.observe(node));

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height + windowH;
      const scrolled = windowH - rect.top;
      const pct = Math.max(0, Math.min(1, scrolled / total));
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [prefersReduced]);

  const nodeArray = useMemo(() => steps, [steps]);

  return (
    <div ref={containerRef} className="process-timeline" aria-label="Process timeline">
      <div className="timeline-track" aria-hidden="true">
        <div className="timeline-progress" style={{ height: `${progress * 100}%` }} />
      </div>
      {nodeArray.map((step, i) => (
        <motion.div
          key={step.title}
          data-step={i}
          className={`timeline-node ${activeSteps.has(i) ? "active" : ""}`}
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          animate={activeSteps.has(i) ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05, ease }}
        >
          <div className="node-marker" aria-hidden="true">
            <span className="node-dot" />
            <span className="node-number">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="node-content">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
