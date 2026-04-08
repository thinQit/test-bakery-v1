"use client";

import { cn } from '@/lib/utils'
import { Leaf, Nut, Salad } from 'lucide-react'

interface DietaryTagProps {
  type?: string
  label?: string
}

export default function DietaryTag({
  type = 'vegetarian',
  label = 'Vegetarian'
}: Partial<DietaryTagProps>) {
  const icon = type.includes('nut') ? <Nut size={12} /> : type.includes('vegan') ? <Leaf size={12} /> : <Salad size={12} />

  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium bg-[#f7f1d7] border-[#DDA15E]/40 text-[#5a3c1d]')}>
      {icon}
      {label}
    </span>
  )
}
