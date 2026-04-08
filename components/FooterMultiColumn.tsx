"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = "Golden Hearth",
  description = "Seasonal cuisine, warm hospitality, and memorable evenings in the heart of the city.",
  columns = [
    {
      title: "Contact",
      links: [
        { label: "(555) 248-1903", href: "tel:+15552481903" },
        { label: "hello@goldenhearth.com", href: "mailto:hello@goldenhearth.com" },
        { label: "184 Olive & Vine St, Downtown", href: "#" },
      ],
    },
    {
      title: "Hours",
      links: [
        { label: "Mon–Thu: 5:00 PM – 10:00 PM", href: "#" },
        { label: "Fri–Sat: 4:30 PM – 11:00 PM", href: "#" },
        { label: "Sun: 4:30 PM – 9:00 PM", href: "#" },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "X / Twitter", href: "#" },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 animate-fade-in-up">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-all duration-200 hover:text-background hover:translate-x-1 inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
