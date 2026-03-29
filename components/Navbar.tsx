'use client'

import { useState, useEffect, useRef } from 'react'
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
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleComingSoon = () => {
    setShowPopover((prev) => !prev)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close popover on scroll, outside click, or Escape
  useEffect(() => {
    if (!showPopover) return

    const close = () => setShowPopover(false)

    const onClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        close()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    window.addEventListener('scroll', close, { passive: true })
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', close)
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [showPopover])

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
          <Link href="/" className="flex items-center gap-1.5">
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
          <div className="hidden md:flex items-center gap-1">
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
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://portal.exaim.ai/auth/login?callbackUrl=%2Fdashboard"
              className="px-4 py-2 text-sm text-brand-muted hover:text-brand-text transition-colors duration-200"
            >
              Log in
            </a>
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={handleComingSoon}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Get started free
              </button>
              {showPopover && (
                <div
                  ref={popoverRef}
                  className="absolute top-[calc(100%+8px)] right-0 z-[60] w-[280px] rounded-xl shadow-lg border border-brand-border bg-[var(--brand-bg)] p-4"
                >
                  {/* Caret */}
                  <div className="absolute -top-2 right-6 w-4 h-4 rotate-45 border-l border-t border-brand-border bg-[var(--brand-bg)]" />
                  <p className="relative font-medium text-sm text-brand-text">Coming soon!</p>
                  <p className="relative text-xs text-brand-muted mt-1">
                    Email us at{' '}
                    <a href="mailto:contact@exaim.ai" className="text-indigo-400 hover:underline">
                      contact@exaim.ai
                    </a>{' '}
                    to get early access.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
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
                <button
                  onClick={handleComingSoon}
                  className="mx-4 mt-2 px-4 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Get started free
                </button>
                {showPopover && (
                  <div className="mx-4 mt-2 p-3 rounded-lg border border-brand-border bg-[var(--brand-surface)] text-sm">
                    <p className="font-medium text-brand-text">Coming soon!</p>
                    <p className="text-brand-muted text-xs mt-1">
                      Email us at{' '}
                      <a href="mailto:contact@exaim.ai" className="text-indigo-400 hover:underline">
                        contact@exaim.ai
                      </a>{' '}
                      to get early access.
                    </p>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
  )
}
