"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "A Taste of the Golden Hearth",
  subheadline = "From plated signatures to candlelit corners—explore the flavors and ambiance before your visit.",
  images = [
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577055/site-images/restaurant/12436190.jpg",
      alt: "Chef plating a fine dining entrée",
      caption: "Signature truffle risotto",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577073/site-images/restaurant/11236566.jpg",
      alt: "Elegant restaurant interior with warm lighting",
      caption: "Evening dining ambiance",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577089/site-images/restaurant/10187182.jpg",
      alt: "Close-up of artisanal cocktail",
      caption: "House-crafted seasonal cocktail",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577070/site-images/restaurant/10636732.jpg",
      alt: "Fresh plated seafood dish",
      caption: "Atlantic catch with olive herb butter",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577084/site-images/restaurant/10918168.jpg",
      alt: "Dessert with gold garnish",
      caption: "Honey saffron crème brûlée",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/11669573.jpg",
      alt: "Dining table setup",
      caption: "Reserved for unforgettable evenings",
    },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map(function (img, i) {
            return (
              <button
                key={i}
                type="button"
                className="group relative mb-4 w-full overflow-hidden rounded-xl border border-border bg-card text-left card-hover"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  unoptimized
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="translate-y-3 text-sm text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {img.caption}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1600}
              height={1000}
              unoptimized
              className="max-h-[85vh] w-auto max-w-[92vw] rounded-xl border border-border object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
