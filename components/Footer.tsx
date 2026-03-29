import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'For Schools', href: '/for-schools' },
  ],
  Company: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms-and-conditions' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="container-wrapper section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo.png"
                alt="ExAIm"
                width={100}
                height={30}
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-xs">
              AI-powered exam preparation for GCSE and IGCSE students on the British curriculum.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-brand-text mb-3">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <h3 className="text-sm font-semibold text-brand-text mb-3">Connect</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@exaim.ai"
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  contact@exaim.ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/exaimltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-border">
          <p className="text-xs text-brand-muted text-center">
            &copy; {new Date().getFullYear()} ExAIm Ltd. Built for British curriculum students.
          </p>
        </div>
      </div>
    </footer>
  )
}
