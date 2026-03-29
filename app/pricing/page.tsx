'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const plans = [
  {
    name: 'Student Free',
    price: '£0',
    period: '/mo',
    description: 'For class students',
    badge: 'For school students',
    badgeColor: 'bg-emerald-400/10 text-emerald-400',
    highlighted: false,
    features: [
      'Always free for class students',
      'Take assigned exams',
      'Basic analytics',
      'Limited practice (3 sessions/mo)',
    ],
    cta: 'Get started',
    ctaHref: 'https://app.exaim.com/sign-up',
  },
  {
    name: 'Student Pro',
    price: '$5',
    period: '/mo',
    description: 'For independent learners',
    badge: 'Most popular',
    badgeColor: 'bg-indigo-400/10 text-indigo-400',
    highlighted: true,
    features: [
      'Everything in Free',
      'Unlimited practice sessions',
      'Ace AI companion (unlimited)',
      'Full analytics and score history',
      'Past papers',
      'Streak freeze (1/week)',
    ],
    cta: 'Start free trial',
    ctaHref: 'https://app.exaim.com/sign-up',
  },
  {
    name: 'Teacher Pro',
    price: '$12',
    period: '/mo',
    description: 'For educators',
    badge: null,
    badgeColor: '',
    highlighted: false,
    features: [
      'Everything in Free',
      'Unlimited classes and students',
      'AI question generation',
      'Full gradebook',
      'Student analytics drill-down',
      'Library of 300+ pre-built exams',
      'Content moderation dashboard',
    ],
    cta: 'Start free trial',
    ctaHref: 'https://app.exaim.com/sign-up',
  },
  {
    name: 'Schools',
    price: 'Custom',
    period: '',
    description: 'For institutions',
    badge: null,
    badgeColor: '',
    highlighted: false,
    features: [
      'Everything in Teacher Pro',
      'School admin dashboard',
      'Bulk CSV onboarding',
      'Branded invite codes',
      'Custom invoicing',
      'Dedicated support',
    ],
    cta: 'Contact us',
    ctaHref: '/for-schools',
  },
]

const faqs = [
  {
    q: 'Are class students really free?',
    a: 'Yes — students who are enrolled in a class by their teacher always have free access. No credit card required.',
  },
  {
    q: 'What curricula do you support?',
    a: 'GCSE and IGCSE at launch, covering AQA and Edexcel exam boards. Other curricula are available on request.',
  },
  {
    q: 'How does school billing work?',
    a: 'Schools are invoiced directly via bank transfer. No Stripe or credit card required.',
  },
  {
    q: 'Can I try before committing?',
    a: 'Yes — schools get a free pilot period to evaluate ExAIm with their teachers and students.',
  },
  {
    q: 'What AI model powers ExAIm?',
    a: 'Claude by Anthropic — the same model used by leading enterprises for safety, accuracy, and reliability.',
  },
  {
    q: 'Is student data safe?',
    a: 'Yes — data is encrypted at rest and in transit, row-level security is enforced, and all content is moderated. Students are never exposed to inappropriate content.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-brand-muted max-w-lg mx-auto">
              Students in partner schools are always free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  'relative rounded-xl border p-6 flex flex-col',
                  plan.highlighted
                    ? 'border-indigo-600/50 bg-indigo-600/5 glow-indigo'
                    : 'border-brand-border bg-brand-surface/50'
                )}
              >
                {plan.badge && (
                  <span className={`absolute -top-3 left-6 text-xs font-medium px-2.5 py-0.5 rounded-full ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-brand-text">{plan.name}</h3>
                  <p className="text-xs text-brand-muted mt-0.5">{plan.description}</p>
                </div>
                <div className="mb-5">
                  <span className="text-3xl font-bold text-brand-text">{plan.price}</span>
                  <span className="text-sm text-brand-muted">{plan.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-brand-muted">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.ctaHref.startsWith('/') ? (
                  <Link
                    href={plan.ctaHref}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                      plan.highlighted
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        : 'bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-brand-text border border-brand-border'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <a
                    href={plan.ctaHref}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                      plan.highlighted
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        : 'bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-brand-text border border-brand-border'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-brand-border/50">
        <div className="container-wrapper max-w-2xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="border border-brand-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                >
                  <span className="text-sm font-medium text-brand-text pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-brand-muted flex-shrink-0 transition-transform duration-200',
                      openFaq === i && 'rotate-180'
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-brand-muted leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
