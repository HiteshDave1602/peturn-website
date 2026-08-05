"use client";
import { useEffect, useState } from "react";
import { animate } from "motion";
import { useReducedMotion } from "motion/react";
import { formatMetric, parseMetric } from "@/lib/metric-format";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedMetric({ value, duration = 0.9 }: { value: string; duration?: number }) {
  const prefersReduced = useReducedMotion();
  const parsed = parseMetric(value);
  const shouldAnimate = Boolean(parsed) && !prefersReduced;
  const [animatedDisplay, setAnimatedDisplay] = useState(value);

  useEffect(() => {
    if (!shouldAnimate || !parsed) return;
    const controls = animate(0, parsed.num, {
      duration,
      ease,
      onUpdate: (latest) => {
        setAnimatedDisplay(`${parsed.prefix}${formatMetric(latest, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, shouldAnimate]);

  return <strong>{shouldAnimate ? animatedDisplay : value}</strong>;
}
