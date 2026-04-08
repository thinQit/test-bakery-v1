"use client";

import { MapPin, Phone, Clock3 } from 'lucide-react'

export default function LocationMapSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl text-[#2F1E10]">Visit Flour & Fold</h2>
          <div className="mt-5 space-y-3 text-[#4c3a2b]">
            <p className="flex gap-2"><MapPin size={18} />214 Hearth Lane, Portland, OR 97205</p>
            <p className="flex gap-2"><Phone size={18} />(503) 555-0199</p>
            <p className="flex gap-2"><Clock3 size={18} />Mon–Fri 7am–6pm, Sat–Sun 8am–4pm</p>
          </div>
          <p className="mt-5 text-sm text-[#5a4634]">Service notes: limited patio seating, takeout window open until close, curbside pickup available for pre-orders.</p>
        </div>
        <iframe
          title="Flour & Fold Map"
          src="https://maps.google.com/maps?q=Portland%20OR&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[360px] w-full rounded-xl border border-[#722F37]/15"
          loading="lazy"
        />
      </div>
    </section>
  )
}
