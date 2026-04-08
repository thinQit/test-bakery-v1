export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import StorySection from "@/components/StorySection";
import GalleryMasonry from "@/components/GalleryMasonry";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="A bakery built on folds, patience, and good mornings."
          subheadline="Flour & Fold is a small team with a big love for fermentation, butter, and the quiet craft of baking."
          primaryCta={{ label: "Meet the team", href: "/about" }}
          secondaryCta={{ label: "Order pickup", href: "/order" }}
          badge="Daily bake starts at 4:30 AM"
        />
      </div>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <StorySection />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <GalleryMasonry
            headline="The people behind the pastry case"
            subheadline="Small team, big care—every loaf is touched by hand."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577325/site-images/team-people/10347164.jpg",
                alt: "Mara Ellison at the dough bench",
                caption: "Mara Ellison • Founder & Head Baker",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577363/site-images/team-people/12903169.jpg",
                alt: "Jon Park finishing pastries",
                caption: "Jon Park • Pastry Lead",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577358/site-images/team-people/1181401.jpg",
                alt: "Elena Ruiz preparing espresso",
                caption: "Elena Ruiz • Café Manager",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg",
                alt: "Baker shaping sourdough loaves",
              },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <FeaturesCards3D
            title="What we believe in"
            subtitle="A few principles that guide every bake."
            features={[
              { icon: "Wheat", title: "Regional flour, better flavor", description: "We prioritize Pacific Northwest mills." },
              { icon: "Leaf", title: "Seasonal fillings", description: "Our pastry case shifts with the calendar." },
              { icon: "Heart", title: "Warm hospitality", description: "Welcoming, unpretentious, and helpful service." },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>
    </main>
  );
}
