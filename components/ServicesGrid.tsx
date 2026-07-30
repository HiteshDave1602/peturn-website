import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { serviceDetails } from "@/data/service-details";

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

export function ServiceCards() {
  return (
    <div className="services-uniform-grid">
      {serviceDetails.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        return (
          <Reveal as="article" key={service.id} delay={i * 0.06} className="service-uniform-card">
            <Link href={`/services/${service.id}`} className="service-card-link" aria-label={`View ${service.title} details`}>
              <div className="service-uniform-icon"><Icon /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-cta">View service details <ArrowRight size={16} /></span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
