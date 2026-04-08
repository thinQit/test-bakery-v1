'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface LineItem {
  name: string
  price: number
  qty: number
}

export default function OrderForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [items, setItems] = useState<LineItem[]>([
    { name: 'Country Sourdough', price: 9, qty: 1 },
    { name: 'Pain au Chocolat', price: 5.5, qty: 2 }
  ])

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])

  const updateQty = (idx: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item, i) => (i === idx ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    )
  }

  const submitOrder = async () => {
    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, items, subtotal })
    })
  }

  return (
    <section id="order" className="py-20 md:py-28 bg-[#f7f1d7]">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="font-serif text-4xl text-[#2F1E10]">Pickup Order</h2>
        <div className="mt-6 grid gap-4">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
        </div>
        <div className="mt-6 space-y-3">
          {items.map((item, idx) => (
            <div key={item.name + idx} className="flex items-center justify-between rounded-lg bg-white p-3 border border-[#722F37]/10">
              <div>
                <p className="font-medium text-[#2F1E10]">{item.name}</p>
                <p className="text-sm text-[#722F37]">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" onClick={() => updateQty(idx, -1)}>-</Button>
                <span>{item.qty}</span>
                <Button type="button" variant="outline" onClick={() => updateQty(idx, 1)}>+</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between font-semibold text-[#2F1E10]">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Button onClick={submitOrder} className="mt-6 w-full bg-[#722F37] text-[#FEFAE0] hover:bg-[#5e252c]">
          Submit Order
        </Button>
      </div>
    </section>
  )
}
