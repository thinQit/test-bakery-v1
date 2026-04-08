"use client";

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionContainerProps {
  children?: ReactNode
  className?: string
  muted?: boolean
  id?: string
}

export default function SectionContainer({
  children = null,
  className = '',
  muted = false,
  id = ''
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-28', muted ? 'bg-[#f7f1d7]' : 'bg-[#FEFAE0]', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  )
}
