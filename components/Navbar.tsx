'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { href: '/#features', label: 'Product' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/for-schools', label: 'For Schools' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-xl border-b border-brand-border/50 bg-[var(--brand-bg)]/80'
          : 'bg-transparent'
      )}
    >
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="ExAIm"
              width={120}
              height={36}
              className="h-7 w-auto dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm text-brand-muted hover:text-brand-text transition-colors duration-200 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://portal.exaim.ai/auth/login?callbackUrl=%2Fdashboard"
              className="px-4 py-2 text-sm text-brand-muted hover:text-brand-text transition-colors duration-200"
            >
              Log in
            </a>
            <Link
              href="/contact"
              className="px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200"
            >
              Get started free
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-[var(--brand-bg)] border-brand-border pt-16">
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="px-4 py-3 text-base text-brand-muted hover:text-brand-text hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="border-t border-brand-border my-3" />
                <a
                  href="https://portal.exaim.ai/auth/login?callbackUrl=%2Fdashboard"
                  className="px-4 py-3 text-base text-brand-muted hover:text-brand-text rounded-lg transition-colors"
                >
                  Log in
                </a>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="mx-4 mt-2 px-4 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors text-center"
                  >
                    Get started free
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
  )
}
