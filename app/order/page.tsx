"use client";

export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import OrderForm from "@/components/OrderForm";
import OrderItemsPicker from "@/components/OrderItemsPicker";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function OrderPage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="Order ahead for pickup—fresh, fast, and guaranteed."
          subheadline="Choose your items, select a pickup time, and we’ll have everything packed and ready at the counter."
          primaryCta={{ label: "Start pickup order", href: "/order" }}
          secondaryCta={{ label: "View menu", href: "/menu" }}
          badge="Mock checkout (no payments)"
        />
      </div>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <OrderItemsPicker />
          <OrderForm />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <FeaturesCards3D
            title="Ordering FAQ"
            subtitle="Quick answers for smooth pickups."
            features={[
              { icon: "Clock", title: "How early should I order?", description: "Best availability before 10:30 AM." },
              { icon: "RefreshCw", title: "Can I change pickup time?", description: "Call us and we’ll do our best." },
              { icon: "ShieldAlert", title: "Allergen note", description: "Our kitchen handles nuts and gluten." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
