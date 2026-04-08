'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AuroraHeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  layout?: 'split' | 'center' | 'editorial'
}

export default function AuroraHero({
  title = 'Warm Bread. Slow Butter. Everyday Rituals.',
  subtitle = 'Flour & Fold is your neighborhood artisan bakery and café for naturally leavened breads, laminated pastries, and cozy mornings.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1920,h_1080,q_auto:best,g_auto/v1771577055/site-images/restaurant/12436190.jpg',
  layout = 'split'
}: Partial<AuroraHeroProps>) {
  return (
    <AuroraBackground className="min-h-[92vh]">
      <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className={cn('grid items-center gap-10', layout === 'split' ? 'md:grid-cols-2' : 'max-w-3xl mx-auto text-center')}>
            <div className={cn(layout === 'split' ? '' : 'space-y-6')}>
              <p className="inline-flex rounded-full bg-[#722F37]/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#722F37]">
                Artisan Bakery & Café
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-[#2F1E10] leading-tight">
                <TextGenerateEffect words={title} />
              </h1>
              <p className="mt-5 text-[#3f2d1d] md:text-lg max-w-xl">{subtitle}</p>
              <div className={cn('mt-8 flex gap-3', layout === 'split' ? 'flex-wrap' : 'justify-center')}>
                <Button asChild className="bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252c]">
                  <Link href="#menu">Explore Menu</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#722F37]/40 text-[#722F37] hover:bg-[#FEFAE0]">
                  <Link href="#order">Order Pickup</Link>
                </Button>
              </div>
            </div>

            {layout === 'split' && (
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-[#DDA15E]/20 blur-2xl" />
                <Image
                  src={imageSrc}
                  alt="Flour & Fold bakery spread"
                  width={980}
                  height={760}
                  unoptimized
                  className="relative rounded-2xl object-cover shadow-xl border border-[#722F37]/10"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </AuroraBackground>
  )
}
