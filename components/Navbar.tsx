'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  logoText?: string
  ctaLabel?: string
  ctaHref?: string
  links?: NavItem[]
  transparentOnHero?: boolean
}

export default function Navbar({
  brandName = 'Flour & Fold',
  logoText = 'F&F',
  ctaLabel = 'Reserve a Table',
  ctaHref = '#reservation',
  links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Catering', href: '#catering' },
    { label: 'Our Story', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ],
  transparentOnHero = true
}: Partial<NavbarProps>) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isTransparent = transparentOnHero && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isTransparent ? 'bg-transparent' : 'bg-background/95 backdrop-blur border-b border-border shadow-sm'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
              {logoText}
            </div>
            <span className="font-serif text-xl text-foreground">{brandName}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="block text-foreground" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg">
              <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
