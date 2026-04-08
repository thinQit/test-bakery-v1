'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function SecondaryButton({
  children = 'Learn More',
  className = '',
  onClick = () => undefined,
  type = 'button'
}: Partial<SecondaryButtonProps>) {
  return (
    <Button
      type={type}
      variant="outline"
      onClick={onClick}
      className={cn('border-[#722F37]/35 text-[#722F37] hover:bg-[#f7f1d7] hover:border-[#722F37]/55', className)}
    >
      {children}
    </Button>
  )
}
