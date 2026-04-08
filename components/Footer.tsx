"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Clock3, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  brandName?: string
  blurb?: string
  className?: string
}

export default function Footer({
  brandName = 'Flour & Fold',
  blurb = 'An artisan bakery & café crafting naturally leavened breads, buttery pastries, and seasonal café plates with locally sourced ingredients.',
  className = ''
}: Partial<FooterProps>) {
  return (
    <footer className={cn('bg-[#722F37] text-[#FEFAE0]', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-2xl">{brandName}</h3>
          <p className="max-w-xl text-sm text-[#FEFAE0]/85">{blurb}</p>
          <Button asChild className="bg-[#DDA15E] text-[#2F1E10] hover:bg-[#c98e4f]">
            <Link href="#order">Start an Order</Link>
          </Button>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-[#FEFAE0]/90">
            <li><Link href="#menu">Menu</Link></li>
            <li><Link href="#catering">Catering</Link></li>
            <li><Link href="#about">Our Story</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Visit Us</h4>
          <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> 214 Hearth Lane, Portland, OR 97205</p>
          <p className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> (503) 555-0199</p>
          <p className="flex items-start gap-2"><Clock3 size={16} className="mt-0.5" /> Mon–Fri 7am–6pm, Sat–Sun 8am–4pm</p>
        </div>
      </div>
      <div className="border-t border-[#FEFAE0]/15 py-4 text-center text-xs text-[#FEFAE0]/75">
        © {new Date().getFullYear()} {brandName}. Handcrafted daily.
      </div>
    </footer>
  )
}
