"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BarChart3, Building2, CheckCircle2, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { serviceDetails } from "@/data/service-details";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

const serviceTags = ["Dashboards", "Sales", "Inventory", "Procurement", "Profitability", "Reporting"];

const badgeThemes = [
  { bg: "#dcf5e8", fg: "#1f9d6f" },
  { bg: "#dbeafe", fg: "#1d6cdb" },
  { bg: "#ffe9d6", fg: "#c8791a" },
  { bg: "#ede9fe", fg: "#7c5cbf" },
  { bg: "#ffe1e7", fg: "#d64550" },
  { bg: "#d6f0f5", fg: "#268dbc" },
];

export function ServiceCards() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(prefersReduced ? 1 : 0);
  const [activeRows, setActiveRows] = useState<Set<number>>(
    prefersReduced ? new Set(serviceDetails.map((_, i) => i)) : new Set()
  );

  useEffect(() => {
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-row"));
          if (entry.isIntersecting) {
            setActiveRows((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    const nodes = container.querySelectorAll<HTMLElement>("[data-row]");
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

  const items = useMemo(() => serviceDetails, []);

  return (
    <div ref={containerRef} className="services-timeline" aria-label="Our services">
      <div className="stl-track" aria-hidden="true">
        <div className="stl-progress" style={{ height: `${progress * 100}%` }} />
      </div>
      {items.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const side = i % 2 === 0 ? "stl-left" : "stl-right";
        const active = activeRows.has(i);
        const theme = badgeThemes[i % badgeThemes.length];
        return (
          <motion.div
            key={service.id}
            data-row={i}
            className={`stl-row ${side} ${active ? "stl-active" : ""}`}
            initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05, ease }}
          >
            <Link href={`/services/${service.id}`} className="stl-card" aria-label={`View ${service.title} details`}>
              <div className="stl-card-head">
                <div className="stl-card-title">
                  <span className="stl-card-icon"><Icon /></span>
                  <h3>{service.title}</h3>
                </div>
                <span className="stl-badge" style={{ background: theme.bg, color: theme.fg }}>{serviceTags[i]}</span>
              </div>
              <ul className="stl-list">
                {service.capabilities.slice(0, 3).map((capability) => (
                  <li key={capability}><CheckCircle2 /> {capability}</li>
                ))}
              </ul>
              <span className="stl-cta">View service details <ArrowRight size={16} /></span>
            </Link>
            <span className="stl-number">{i + 1}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
