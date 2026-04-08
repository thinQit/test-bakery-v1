'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuCategoryTabsProps {
  categories?: string[]
  queryKey?: string
  onChange?: (value: string) => void
}

export default function MenuCategoryTabs({
  categories = ['Breads', 'Pastries', 'Café Plates', 'Seasonal'],
  queryKey = 'category',
  onChange = () => undefined
}: Partial<MenuCategoryTabsProps>) {
  const [active, setActive] = useState(categories[0] || 'Breads')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromUrl = params.get(queryKey)
    if (fromUrl && categories.includes(fromUrl)) setActive(fromUrl)
  }, [categories, queryKey])

  const selectCategory = (value: string) => {
    setActive(value)
    const params = new URLSearchParams(window.location.search)
    params.set(queryKey, value)
    window.history.replaceState({}, '', window.location.pathname + '?' + params.toString())
    onChange(value)
  }

  return (
    <div role="tablist" aria-label="Menu Categories" className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => selectCategory(cat)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm transition',
            active === cat
              ? 'bg-[#722F37] text-[#FEFAE0] border-[#722F37]'
              : 'bg-[#FEFAE0] text-[#722F37] border-[#722F37]/25 hover:border-[#722F37]/45'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
