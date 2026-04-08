"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import DietaryTag from '@/components/DietaryTag'

interface MenuItem {
  name: string
  description: string
  price: string
  tags: string[]
}

interface MenuGridProps {
  items?: MenuItem[]
  layout?: 'bento' | 'standard'
}

export default function MenuGrid({
  items = [
    { name: 'Country Sourdough', description: '72-hour fermented loaf with crisp crust and airy crumb.', price: '$9', tags: ['Vegetarian'] },
    { name: 'Pain au Chocolat', description: 'Cultured butter lamination with dark chocolate baton.', price: '$5.5', tags: ['Vegetarian'] },
    { name: 'Olive Focaccia', description: 'Rosemary, Castelvetrano olives, and flaky Maldon salt.', price: '$7', tags: ['Vegan'] },
    { name: 'Hazelnut Morning Bun', description: 'Caramelized sugar swirl with toasted hazelnut praline.', price: '$6', tags: ['Contains Nuts'] }
  ],
  layout = 'standard'
}: Partial<MenuGridProps>) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-5',
        layout === 'bento' ? 'md:grid-cols-3 auto-rows-fr' : 'sm:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {items.map((item, idx) => (
        <Card key={item.name + idx} className="rounded-xl border-[#722F37]/10 bg-white/70 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-xl text-[#2F1E10]">{item.name}</h3>
            <p className="font-semibold text-[#722F37]">{item.price}</p>
          </div>
          <p className="mt-2 text-sm text-[#4c3a2b]">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <DietaryTag key={tag} type={tag.toLowerCase().replace(' ', '-')} label={tag} />
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
