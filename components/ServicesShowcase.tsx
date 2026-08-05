"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Check, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { SlideIn } from "@/components/HomeAnimations";
import { ServicePreviewDashboard } from "@/components/ServicePreview";
import { serviceDetails } from "@/data/service-details";
import { hexToRgb, serviceAccents } from "@/lib/service-theme";

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

export function ServicesShowcase() {
  return (
    <div className="service-showcase" aria-label="Our services">
      {serviceDetails.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        const color = serviceAccents[i % serviceAccents.length];
        const reversed = i % 2 === 1;

        return (
          <div
            key={service.id}
            className={`service-showcase-row${reversed ? " reverse" : ""}`}
            style={{ "--accent": color, "--accent-rgb": hexToRgb(color) } as React.CSSProperties}
          >
            <SlideIn direction={reversed ? "right" : "left"} className="service-showcase-copy">
              <span className="service-showcase-number">0{i + 1}</span>
              <span className="service-showcase-icon">
                <Icon />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-showcase-list">
                {service.capabilities.slice(0, 4).map((c) => (
                  <li key={c}><Check size={14} />{c}</li>
                ))}
              </ul>
              <Link href={`/services/${service.id}`} className="service-showcase-cta">
                Explore This Service <ArrowRight size={16} />
              </Link>
            </SlideIn>

            <SlideIn direction={reversed ? "left" : "right"} delay={0.1} className="service-showcase-visual">
              <ServicePreviewDashboard title={service.title} preview={service.preview} />
            </SlideIn>
          </div>
        );
      })}
    </div>
  );
}
