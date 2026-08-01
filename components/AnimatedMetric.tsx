"use client";
import { useEffect, useState } from "react";
import { animate } from "motion";
import { useReducedMotion } from "motion/react";
import { formatMetric, parseMetric } from "@/lib/metric-format";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedMetric({ value, duration = 0.9 }: { value: string; duration?: number }) {
  const prefersReduced = useReducedMotion();
  const parsed = parseMetric(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed || prefersReduced) {
      setDisplay(value);
      return;
    }
    setDisplay(`${parsed.prefix}${formatMetric(0, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`);
    const controls = animate(0, parsed.num, {
      duration,
      ease,
      onUpdate: (latest) => {
        setDisplay(`${parsed.prefix}${formatMetric(latest, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <strong>{display}</strong>;
}
