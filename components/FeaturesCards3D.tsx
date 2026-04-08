"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import {
  Soup,
  Wine,
  UtensilsCrossed,
  Leaf,
  Star,
  Sparkles,
  Gift,
  Coffee,
  Heart,
  Clock,
  RefreshCw,
  ShoppingBag,
  MapPin,
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  Gift,
  Coffee,
  Heart,
  Clock,
  RefreshCw,
  ShoppingBag,
  MapPin,
  Soup,
  Wine,
  UtensilsCrossed,
  Leaf,
  Star,
  Sparkles,
};

export default function FeaturesCards3D({
  badge = "Why Dine With Us",
  headline = "Crafted Service, Elevated Atmosphere",
  subheadline = "Three essentials that define every table at Golden Hearth.",
  features = [
    {
      icon: "UtensilsCrossed",
      title: "Seasonal Signature Menu",
      description: "Chef-led dishes built around fresh market ingredients and bold, balanced flavors.",
    },
    {
      icon: "Wine",
      title: "Curated Wine & Cocktail Pairings",
      description: "A thoughtful beverage program designed to complement each course and occasion.",
    },
    {
      icon: "Sparkles",
      title: "Refined Yet Warm Hospitality",
      description: "Attentive service and elegant details that make each visit feel personal.",
    },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative h-auto w-auto rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm card-hover">
                  <CardItem translateZ={50} className="mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </CardItem>
                  <CardItem translateZ={60} className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ={40} className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
