"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "Guests Who Return for the Experience",
  subheadline = "From anniversaries to spontaneous evenings out, our guests share what keeps them coming back.",
  testimonials = [
    {
      quote:
        "Every course felt intentional and beautifully balanced. Golden Hearth made our anniversary dinner feel truly special.",
      name: "Elena Marquez",
      designation: "Local Food Enthusiast",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg",
    },
    {
      quote:
        "The service was warm, the atmosphere was elegant, and the seasonal tasting menu was outstanding from start to finish.",
      name: "Daniel Brooks",
      designation: "Weekend Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577357/site-images/team-people/1181738.jpg",
    },
    {
      quote:
        "From cocktails to dessert, everything was crafted with care. It’s now our favorite place to host clients.",
      name: "Priya Nair",
      designation: "Business Host",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
