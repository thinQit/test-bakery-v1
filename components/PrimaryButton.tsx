'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function PrimaryButton({
  children = 'Primary Action',
  className = '',
  onClick = () => undefined,
  type = 'button'
}: Partial<PrimaryButtonProps>) {
  return (
    <Button type={type} onClick={onClick} className={cn('bg-[#DDA15E] text-[#2F1E10] hover:bg-[#c98e4f] hover:-translate-y-0.5 transition-transform', className)}>
      {children}
    </Button>
  )
}
