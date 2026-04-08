'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const TOPICS = [
  'Reservation request',
  'Catering request',
  'Menu/allergen question',
  'Press/partnership',
  'Other'
] as const

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Other',
    message: ''
  })
  const [error, setError] = useState('')

  const submitForm = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please complete all required fields.')
      return
    }
    setError('')
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
  }

  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0]">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="font-serif text-4xl text-[#2F1E10]">Contact Flour & Fold</h2>
        <div className="mt-6 space-y-4">
          <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input placeholder="Phone (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <select
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <textarea
            placeholder="How can we help? (Include date/time and guest count for reservations.)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="min-h-[130px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button onClick={submitForm} className="w-full bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252c]">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  )
}
