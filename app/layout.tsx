import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Flour & Fold | Artisan Bakery & Café in Portland",
  description:
    "Flour & Fold is an artisan bakery-café in Portland’s Alberta Arts District serving naturally leavened sourdough, laminated pastries, and seasonal coffee & tea. Order ahead for pickup or request catering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-background text-foreground`}>
        <Navbar
          brandName="Flour & Fold"
          logoText="F&F"
          links={links}
          ctaLabel="Order for pickup"
          ctaHref="/order"
          transparentOnHero
        />
        {children}
        <Footer
          brandName="Flour & Fold"
          blurb="Flour & Fold is an artisan bakery-café serving naturally leavened breads, laminated pastries, and seasonal drinks—baked fresh daily in Portland, Oregon."
        />
      </body>
    </html>
  );
}
