"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface ReservationCTAProps {
  title?: string
  description?: string
  bullets?: string[]
}

export default function ReservationCTA({
  title = 'Reserve Your Table at Flour & Fold',
  description = 'For peak brunch hours and weekend evenings, we recommend reservations 24–48 hours ahead.',
  bullets = ['90-minute seating on weekends', 'Parties of 8+ require confirmation', 'Allergy requests welcome with advance notice']
}: Partial<ReservationCTAProps>) {
  return (
    <section className="py-20 md:py-24 bg-[#722F37] text-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-[#FEFAE0]/85">{description}</p>
          <ul className="mt-6 space-y-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={16} className="mt-0.5 text-[#DDA15E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[#FEFAE0]/20 bg-[#FEFAE0]/10 p-6">
          <h3 className="font-serif text-2xl">Planning Catering?</h3>
          <p className="mt-2 text-sm text-[#FEFAE0]/85">
            Corporate breakfasts, boxed pastry assortments, and family-style lunch boards available.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="bg-[#DDA15E] text-[#2F1E10] hover:bg-[#c98e4f]">
              <Link href="#reservation">Book Reservation</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#FEFAE0]/40 text-[#FEFAE0] hover:bg-[#FEFAE0]/10">
              <Link href="#contact">Request Catering</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
