export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="Catering that travels beautifully—and tastes even better."
          subheadline="From pastry boards to lunch trays, we cater meetings, brunches, showers, and small weddings across Portland."
          primaryCta={{ label: "Request catering", href: "/contact" }}
          secondaryCta={{ label: "Order pickup", href: "/order" }}
          badge="Delivery within 6 miles • Pickup available"
        />
      </div>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <FeaturesCards3D
            badge="Popular packages"
            title="Designed for easy sharing"
            subtitle="Vegetarian adjustments available, with clear allergen labeling."
            features={[
              { icon: "Croissant", title: "Morning Pastry Board", description: "Serves 8–10 • From $68" },
              { icon: "Coffee", title: "Meeting Coffee Kit", description: "Serves 8–12 • From $52" },
              { icon: "Sandwich", title: "Lunch Tray", description: "Serves 8–10 • From $118" },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
