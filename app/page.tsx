'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Clock, MessageSquare, Sparkles, Trophy, BookOpen } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SocialProofMarquee from '@/components/SocialProofMarquee'
import StudentDashboardMockup from '@/components/mockups/StudentDashboardMockup'
import QuestionMockup from '@/components/mockups/QuestionMockup'
import AceChatMockup from '@/components/mockups/AceChatMockup'
import GradebookMockup from '@/components/mockups/GradebookMockup'
import GamificationMockup from '@/components/mockups/GamificationMockup'
import CurriculumSection from '@/components/CurriculumSection'
import TestimonialsSection from '@/components/TestimonialsSection'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-600/6 rounded-full blur-3xl" />

        <div className="container-wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.1] tracking-tight">
                Exam prep that knows{' '}
                <span className="gradient-text">what you need</span>
              </h1>
              <p className="mt-5 text-lg text-brand-muted leading-relaxed max-w-lg">
                AI-powered questions, instant grading, and a personal tutor — built for GCSE and IGCSE students on the British curriculum.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.exaim.com/sign-up"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200"
                >
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/for-schools"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-brand-text bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 border border-brand-border rounded-lg transition-colors duration-200"
                >
                  Book a school demo
                </Link>
              </div>
            </motion.div>

            {/* Mockup */}
            <div className="lg:pl-4">
              <StudentDashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <SocialProofMarquee />

      {/* ── Problem → Solution ── */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
              The problems with traditional revision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Brain,
                problem: 'Revision without direction',
                solution: 'ExAIm generates curriculum-aligned questions instantly.',
                color: 'text-indigo-400 bg-indigo-400/10',
              },
              {
                icon: Clock,
                problem: 'Feedback that arrives too late',
                solution: 'AI grades essays in seconds with examiner-level detail.',
                color: 'text-purple-400 bg-purple-400/10',
              },
              {
                icon: MessageSquare,
                problem: 'Studying alone without support',
                solution: 'Ace, your AI tutor, is available 24/7.',
                color: 'text-emerald-400 bg-emerald-400/10',
              },
            ].map((card, i) => (
              <motion.div
                key={card.problem}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-brand-text mb-2">{card.problem}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{card.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <CurriculumSection />

      {/* ── Features ── */}
      <section id="features" className="section-padding">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-2">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
              Everything students and teachers need
            </h2>
          </motion.div>

          {/* Feature 1 — AI Question Generation */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-400">AI Question Generation</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                Curriculum-aligned questions in seconds
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Generate exam-style questions tailored to any GCSE or IGCSE topic. Choose the subject, exam board, and difficulty — ExAIm handles the rest.
              </p>
              <ul className="space-y-2">
                {['AQA and Edexcel aligned', 'Supports 2–12 mark questions', 'AI grading with examiner-level feedback'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <QuestionMockup />
            </motion.div>
          </div>

          {/* Feature 2 — Ace AI Companion */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div {...fadeUp} className="order-2 lg:order-1" transition={{ delay: 0.1 }}>
              <AceChatMockup />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Ace AI Companion</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                A personal tutor that never sleeps
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Ace explains concepts, breaks down mark schemes, and helps students understand where they went wrong — available 24/7.
              </p>
              <ul className="space-y-2">
                {['Powered by Claude (Anthropic)', 'Context-aware explanations', 'Safe, moderated responses'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 3 — Teacher Gradebook */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">Teacher Gradebook</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                Track every student, every score
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                A complete view of student performance across all exams. Colour-coded scores make it easy to spot who needs help.
              </p>
              <ul className="space-y-2">
                {['Colour-coded performance bands', 'Retake tracking', 'Export-ready analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <GradebookMockup />
            </motion.div>
          </div>

          {/* Feature 4 — Gamification */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1" transition={{ delay: 0.1 }}>
              <GamificationMockup />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Gamification</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                Make revision something they want to do
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                XP, streaks, levels, and achievement badges turn exam prep into a daily habit. Students stay motivated without being told to.
              </p>
              <ul className="space-y-2">
                {['XP and levelling system', 'Daily streaks with freeze protection', 'Unlockable achievement badges'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Pricing Teaser ── */}
      <section className="section-padding-sm">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-lg md:text-xl text-brand-text font-medium">
              Free for students in partner schools. From $5/mo for independent learners.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              See pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── For Schools CTA ── */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div
            {...fadeUp}
            className="relative rounded-2xl overflow-hidden p-8 md:p-14 text-center"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-brand-surface to-purple-600/10 border border-brand-border rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-3">
                Bring ExAIm to your school
              </h2>
              <p className="text-brand-muted mb-6 max-w-md mx-auto">
                Students get free access. Deploy in minutes.
              </p>
              <Link
                href="/for-schools"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200"
              >
                Talk to us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
