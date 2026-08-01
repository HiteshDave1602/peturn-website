"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, BarChart3, Building2, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { serviceDetails } from "@/data/service-details";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

const visualThemes = [
  "linear-gradient(135deg,#1d6cdb 0%,#0b2f8c 100%)",
  "linear-gradient(135deg,#268dbc 0%,#1d6cdb 100%)",
  "linear-gradient(135deg,#1f9d6f 0%,#12734f 100%)",
  "linear-gradient(135deg,#e0a72e 0%,#c8791a 100%)",
  "linear-gradient(135deg,#7c5cbf 0%,#523e8c 100%)",
  "linear-gradient(135deg,#d64550 0%,#a3323c 100%)",
];

export function ServiceCards() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="services-grid" aria-label="Our services">
      {serviceDetails.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        return (
          <motion.div
            key={service.id}
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : (i % 3) * 0.08, ease }}
          >
            <Link href={`/services/${service.id}`} className="svc-card" aria-label={`View ${service.title} details`}>
              <div className="svc-visual" style={{ background: visualThemes[i % visualThemes.length] }}>
                <Icon />
              </div>
              <div className="svc-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="svc-link">View Service <ArrowRight size={15} /></span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
