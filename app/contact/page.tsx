'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ZohoContactForm from '@/components/ZohoContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wrapper max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-brand-muted">
              Questions, feedback, or partnership enquiries — we&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact info */}
          <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@exaim.ai"
              className="glass-card-hover p-5 flex items-center gap-3 flex-1 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-400/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text">Email us</p>
                <p className="text-sm text-indigo-400">contact@exaim.ai</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/exaimltd"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover p-5 flex items-center gap-3 flex-1 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-400/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text">LinkedIn</p>
                <p className="text-sm text-indigo-400">ExAIm Ltd</p>
              </div>
            </a>
          </motion.div>

          {/* Note */}
          <motion.p {...fadeUp} className="mt-6 text-sm text-brand-muted">
            For school enquiries, visit our{' '}
            <Link href="/for-schools" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
              For Schools
            </Link>{' '}
            page.
          </motion.p>

          {/* Zoho Contact Form */}
          <motion.div {...fadeUp} className="mt-10 glass-card p-6 md:p-8">
            <h2 className="text-lg font-semibold text-brand-text mb-4">Request a demo</h2>
            <ZohoContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
