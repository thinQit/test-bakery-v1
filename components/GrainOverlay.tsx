"use client";

import { cn } from '@/lib/utils'

interface GrainOverlayProps {
  className?: string
  opacity?: number
}

export default function GrainOverlay({
  className = '',
  opacity = 0.08
}: Partial<GrainOverlayProps>) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 mix-blend-multiply', className)}
      style={{
        opacity,
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.16) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.12) 1px, transparent 1px)',
        backgroundSize: '4px 4px'
      }}
    />
  )
}
