export const dynamic = 'force-dynamic';

import AuroraHero from "@/components/AuroraHero";
import SectionContainer from "@/components/SectionContainer";
import GrainOverlay from "@/components/GrainOverlay";
import MenuCategoryTabs from "@/components/MenuCategoryTabs";
import MenuGrid from "@/components/MenuGrid";
import ReservationCTA from "@/components/ReservationCTA";
import StorySection from "@/components/StorySection";
import PhotoGalleryBento from "@/components/PhotoGalleryBento";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import LocationMapSection from "@/components/LocationMapSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background">
      <div className="overflow-hidden">
        <AuroraHero
          headline="Artisan bread and pastry, baked fresh from dawn."
          subheadline="Flour & Fold is a neighborhood bakery-café in Portland’s Alberta Arts District—slow-fermented sourdough, laminated pastries, and seasonal coffee & tea served warm and unhurried."
          primaryCta={{ label: "Order for pickup", href: "/order" }}
          secondaryCta={{ label: "View today’s menu", href: "/menu" }}
          badge="Open daily • 7:00 AM–3:00 PM"
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
          <ReservationCTA />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <StorySection />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <PhotoGalleryBento />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer className="py-20 md:py-28 animate-fade-in-up">
          <TestimonialsAnimated
            title="Loved by regulars (and first-timers)"
            subtitle="Real notes from our community—thank you for letting us bake for your mornings."
            autoplay
            testimonials={[
              {
                quote:
                  "The butter croissant is unreal—shatters into a thousand perfect flakes. The staff is kind, and the café feels like a warm exhale.",
                name: "Janelle R.",
                designation: "Weekend regular",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              },
              {
                quote:
                  "We ordered a pastry board and sandwich tray for a team offsite. Everything arrived beautifully packed and tasted even better than it looked.",
                name: "Devon K.",
                designation: "Catering customer",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              },
              {
                quote:
                  "Their country sourdough has the best crust-to-crumb ratio in town. Toast it with olive oil and you’re set.",
                name: "Priya S.",
                designation: "Bread enthusiast",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                quote:
                  "House chai is perfectly spiced—not sugary. Pair it with the cinnamon knot and you’ll understand happiness.",
                name: "Marco L.",
                designation: "Coffee + pastry combo seeker",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              },
            ]}
          />
        </SectionContainer>
      </ScrollReveal>

      <ScrollReveal>
        <SectionContainer muted className="py-20 md:py-28 animate-fade-in-up">
          <LocationMapSection />
        </SectionContainer>
      </ScrollReveal>

      <GrainOverlay />
    </main>
  );
}
