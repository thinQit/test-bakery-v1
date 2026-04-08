export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import MenuCategoryTabs from "@/components/MenuCategoryTabs";
import MenuGrid from "@/components/MenuGrid";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="Today’s bake—simple, seasonal, and made by hand."
          subheadline="We bake in small batches. If you’re set on a favorite, ordering ahead is the surest way to get it."
          primaryCta={{ label: "Order for pickup", href: "/order" }}
          secondaryCta={{ label: "Catering menu", href: "/services" }}
          badge="Updated daily • Last pickup at 2:30 PM"
        />
      </div>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <MenuCategoryTabs />
          <MenuGrid />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <FeaturesCards3D
            badge="Ordering made easy"
            title="Ordering ahead is the best way to guarantee your loaf."
            subtitle="Choose pickup time, add notes, and we’ll have it ready at the counter."
            features={[
              { icon: "Clock3", title: "Pickup in 20–40 minutes", description: "Fast queue for most small orders." },
              { icon: "Gift", title: "Gift notes available", description: "Add a message for boxed pastries." },
              { icon: "Bread", title: "Free loaf slicing", description: "Tell us your preference at checkout." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
