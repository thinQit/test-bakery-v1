"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface StorySectionProps {
  imageSrc?: string
}

export default function StorySection({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577321/site-images/team-people/1181622.jpg'
}: Partial<StorySectionProps>) {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 md:grid-cols-2 items-center">
        <Image src={imageSrc} alt="Head baker" width={900} height={1100} unoptimized className="rounded-2xl object-cover border border-[#722F37]/10" />
        <div>
          <h2 className="font-serif text-4xl text-[#2F1E10]">Our Baker Story</h2>
          <p className="mt-4 text-[#4c3a2b]">
            Flour & Fold began as a dawn ritual in a tiny home kitchen. Founder Mara Ellis baked one sourdough loaf daily for neighbors, learning to listen to dough, weather, and time.
          </p>
          <p className="mt-3 text-[#4c3a2b]">
            Today, we still bake in small batches, ferment naturally, and prioritize local grain mills and seasonal produce.
          </p>
          <blockquote className="mt-5 border-l-4 border-[#DDA15E] pl-4 italic text-[#5a3c1d]">
            “Good bread is memory you can taste.”
          </blockquote>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {['Slow Fermentation', 'Local Ingredients', 'Zero-Waste Kitchen'].map((value) => (
              <Card key={value} className="p-3 text-center text-sm bg-[#f7f1d7] border-[#DDA15E]/25">
                {value}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
