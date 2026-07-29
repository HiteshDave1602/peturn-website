import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CircleDollarSign, ClipboardCheck, Database, PackageSearch, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { serviceDetails } from "@/data/service-details";

const serviceIcons = [Database, BarChart3, TrendingUp, PackageSearch, Building2, CircleDollarSign, ClipboardCheck];

export function FeaturedServiceCards() {
  const featured = serviceDetails.slice(0, 2);
  return (
    <div className="services-featured-grid">
      {featured.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        return (
          <Reveal as="article" key={service.id} delay={i * 0.1} className="service-featured-card">
            <Link href={`/services/${service.id}`} className="service-card-link" aria-label={`View ${service.title} details`}>
              <div className="service-featured-header">
                <div className="service-featured-icon"><Icon /></div>
                <h2>{service.title}</h2>
              </div>
              <p>{service.description}</p>
              <span className="service-card-cta">View service details <ArrowRight size={16} /></span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ServiceDetailCards() {
  const grid = serviceDetails.slice(2);
  return (
    <div className="services-detail-grid">
      {grid.map((service, i) => {
        const Icon = serviceIcons[service.icon];
        return (
          <Reveal as="article" key={service.id} delay={i * 0.08} className="service-detail-card">
            <Link href={`/services/${service.id}`} className="service-card-link" aria-label={`View ${service.title} details`}>
              <div className="service-detail-icon"><Icon /></div>
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
