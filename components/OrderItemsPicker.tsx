'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CatalogItem {
  name: string
  category: string
  price: number
}

export default function OrderItemsPicker() {
  const catalog: CatalogItem[] = [
    { name: 'Country Sourdough', category: 'Breads', price: 9 },
    { name: 'Sesame Baguette', category: 'Breads', price: 6 },
    { name: 'Pain au Chocolat', category: 'Pastries', price: 5.5 },
    { name: 'Almond Croissant', category: 'Pastries', price: 6.25 }
  ]
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [qty, setQty] = useState<Record<string, number>>({})

  const filtered = useMemo(
    () =>
      catalog.filter(
        (i) =>
          (category === 'All' || i.category === category) &&
          i.name.toLowerCase().includes(search.toLowerCase())
      ),
    [catalog, search, category]
  )

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search breads and pastries..." />
        <div className="flex gap-2">
          {['All', 'Breads', 'Pastries'].map((cat) => (
            <Button key={cat} type="button" variant={category === cat ? 'default' : 'outline'} onClick={() => setCategory(cat)}>
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {filtered.map((item) => {
          const count = qty[item.name] || 0
          return (
            <div key={item.name} className="flex items-center justify-between rounded-lg border border-[#722F37]/10 p-3 bg-white">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-[#722F37]">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" onClick={() => setQty((q) => ({ ...q, [item.name]: Math.max(0, count - 1) }))}>-</Button>
                <span className="w-5 text-center">{count}</span>
                <Button type="button" variant="outline" onClick={() => setQty((q) => ({ ...q, [item.name]: count + 1 }))}>+</Button>
                <span className="w-20 text-right text-sm">${(item.price * count).toFixed(2)}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
