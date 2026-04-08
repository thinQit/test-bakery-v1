"use client";

export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import ContactForm from "@/components/ContactForm";
import LocationMapSection from "@/components/LocationMapSection";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="Questions, reservations, or catering requests?"
          subheadline="Send a note and we’ll reply within 1 business day. For same-day changes, please call."
          primaryCta={{ label: "Call (503) 555-0148", href: "tel:+15035550148" }}
          secondaryCta={{ label: "Order pickup", href: "/order" }}
          badge="Reservations • Catering • General inquiries"
        />
      </div>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <ContactForm />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <LocationMapSection />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <FeaturesCards3D
            title="Want to guarantee your favorites?"
            subtitle="Order ahead for pickup and we’ll pack it fresh—ready when you are."
            features={[
              { icon: "ShoppingBag", title: "Order pickup", description: "Reserve your favorites before they sell out." },
              { icon: "MapPin", title: "Easy to find", description: "1824 NE Alberta St, Portland, OR 97211." },
              { icon: "PhoneCall", title: "Need help fast?", description: "Call us for same-day updates." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
