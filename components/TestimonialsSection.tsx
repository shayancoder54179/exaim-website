'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Significantly enhanced my teaching process. Excited to continue using it.',
    name: 'Steve Porter',
    role: 'Head of Business & Economics, Tanglin Trust Singapore',
    initials: 'SP',
  },
  {
    quote:
      'The feature that allows students to answer questions and receive instant feedback is a game-changer.',
    name: 'Vanessa North-Panting',
    role: 'Head of Digital Learning, Charterhouse',
    initials: 'VN',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding-sm">
      <div className="container-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            What educators are saying
          </h2>
          <p className="mt-3 text-brand-muted">
            From leading British curriculum schools across the world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-indigo-500/10 to-transparent"
            >
              {/* Inner card */}
              <div className="flex flex-col flex-1 rounded-[15px] bg-white/80 dark:bg-[#1A1830]/80 backdrop-blur-xl p-7 md:p-8">
                {/* Decorative quote mark */}
                <span
                  className="text-6xl font-serif leading-none text-indigo-500 select-none -mb-2"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-lg md:text-xl italic leading-relaxed text-brand-text dark:text-[#F1F0FF]">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-text">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-muted dark:text-[#8B8AA0]">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
