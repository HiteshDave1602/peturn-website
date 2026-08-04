"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { BarChart3, Building2, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { serviceDetails } from "@/data/service-details";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

const hexThemes = [
  "#e0a72e",
  "#d6631f",
  "#7c5cbf",
  "#1d6cdb",
  "#268dbc",
  "#1f9d6f",
];

function hexToRgb(hex: string) {
  const value = parseInt(hex.slice(1), 16);
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`;
}

export function ServiceCards() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="hex-timeline" aria-label="Our services">
      {serviceDetails.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const color = hexThemes[i % hexThemes.length];
        return (
          <motion.div
            key={service.id}
            className={`hex-col${i % 2 === 1 ? " down" : ""}`}
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : (i % 3) * 0.08, ease }}
          >
            <Link
              href={`/services/${service.id}`}
              aria-label={`View ${service.title} details`}
              className="hex-link-wrap"
              style={{ "--accent": color, "--accent-rgb": hexToRgb(color) } as React.CSSProperties}
            >
              <span className="hex-shape" style={{ background: color, color }}>
                <Icon />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
