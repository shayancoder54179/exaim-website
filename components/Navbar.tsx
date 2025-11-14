'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/product', label: 'Product', dropdown: [
      { href: '/product', label: 'Overview' },
      { href: '/product/ai-grading', label: 'AI Grading & Feedback' },
      { href: '/product/simulated-exam', label: 'Simulated Exam Conditions' },
      { href: '/product/question-bank', label: 'Question Bank & Assignments' },
      { href: '/product/analytics', label: 'Analytics & Insights' },
    ]},
    { href: '/solutions/teachers', label: 'Solutions', dropdown: [
      { href: '/solutions/teachers', label: 'For Teachers' },
      { href: '/solutions/schools', label: 'For Schools & SLT' },
      { href: '/solutions/students-parents', label: 'For Students & Parents' },
      { href: '/solutions/exam-boards', label: 'For Exam Boards' },
    ]},
    { href: '/pricing', label: 'Pricing' },
    { href: '/demo', label: 'Demo' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" prefetch={true} className="flex items-center">
              <Image 
                src="/logo/logo.png" 
                alt="ExAIm Logo" 
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`relative flex items-center gap-1 transition-colors font-medium group ${
                      pathname === link.href || (link.dropdown && link.dropdown.some(item => pathname === item.href))
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`} />
                    )}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"
                      initial={false}
                      animate={{ width: pathname === link.href ? '100%' : 0 }}
                    />
                  </Link>
                </motion.div>
                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            prefetch={true}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === item.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/demo"
                prefetch={true}
                className="relative px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium transition-opacity hover:opacity-90"
              >
                Book a Demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className={`block font-medium ${
                      pathname === link.href
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={true}
                          className={`block text-sm ${
                            pathname === item.href
                              ? 'text-primary-600'
                              : 'text-gray-600 hover:text-primary-600'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/demo"
                prefetch={true}
                className="block px-6 py-2 bg-primary-600 text-white rounded-lg text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

