import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCards } from "@/components/ServicesGrid";
import { PricingSection } from "@/components/PageSections";

export function ServicesPageContent() {
  return (
    <>
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What we help you see"
              title="Business Intelligence Solutions Built Around Your Business"
              text="From sales and inventory to procurement and profitability, Peturn helps you see what is happening, understand why it is happening, and decide what to do next."
            />
          </Reveal>

          <ServiceCards />

          <Reveal>
            <div className="services-cta">
              <p>Every engagement is tailored to your business data, reporting requirements, and goals.</p>
              <a href="/contact#start-conversation" className="button">Book a Free Consultation</a>
            </div>
          </Reveal>
        </div>
      </section>

      <PricingSection />
    </>
  );
}
