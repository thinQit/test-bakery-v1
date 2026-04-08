'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface PhotoGalleryBentoProps {
  images?: string[]
  captions?: string[]
}

export default function PhotoGalleryBento({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577053/site-images/restaurant/12387879.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577073/site-images/restaurant/11236566.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577089/site-images/restaurant/10187182.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577101/site-images/restaurant/11669573.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577092/site-images/restaurant/12387876.jpg'
  ],
  captions = ['Morning viennoiserie', 'Open kitchen craft', 'Seasonal tart lineup', 'Brunch service', 'Naturally leavened loaves']
}: Partial<PhotoGalleryBentoProps>) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-[#f7f1d7]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-serif text-4xl text-[#2F1E10] mb-8">From Our Oven</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <button key={src + idx} onClick={() => setActive(idx)} className={idx === 0 ? 'col-span-2 row-span-2' : ''}>
              <Image src={src} alt={captions[idx] || 'Gallery image'} width={1000} height={800} unoptimized className="h-full w-full rounded-xl object-cover" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-black/80 p-4 flex items-center justify-center">
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setActive(null)} className="absolute right-2 top-2 text-white">
              <X />
            </button>
            <Image src={images[active]} alt={captions[active] || 'Active image'} width={1600} height={1100} unoptimized className="rounded-xl object-cover" />
            <p className="mt-3 text-center text-sm text-white/85">{captions[active] || ''}</p>
          </div>
        </div>
      )}
    </section>
  )
}
