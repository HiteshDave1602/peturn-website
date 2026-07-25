import ScrollReveal from "@/components/ScrollReveal";
import { HeroSection, ProblemsSection, SampleDashboardsSection } from "@/components/PageSections";

export default function Home() {
  return <>
    <ScrollReveal />
    <main id="main">
      <HeroSection />
      <ProblemsSection />
      <SampleDashboardsSection />
    </main>
  </>;
}
