'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Sparkles, Heart, Zap, Users, TrendingUp, BookOpen, CheckCircle2, GraduationCap, Award } from 'lucide-react'

export function AnimatedMissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To revolutionize exam preparation by making examiner-quality feedback accessible to every student, empowering teachers with powerful tools, and transforming how schools prepare students for success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every student has access to personalized, examiner-quality feedback, where teachers can focus on teaching rather than marking, and where data-driven insights drive continuous improvement in education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function AnimatedValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Every decision we make prioritizes student success and learning outcomes.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push boundaries to deliver cutting-edge educational technology.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We empower teachers and students with tools that make a real difference.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product quality to support.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Accessibility',
      description: 'We believe exam excellence should be accessible to all students, regardless of background.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and a commitment to ethical AI practices.',
      color: 'from-primary-500 to-secondary-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at ExAIm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function AnimatedImpact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      number: '1,000+',
      label: 'Students Served',
      description: 'Through Improve ME Institute',
      icon: Users,
    },
    {
      number: '40+',
      label: 'Expert Tutors',
      description: 'Dedicated educators',
      icon: GraduationCap,
    },
    {
      number: 'Award-Winning',
      label: 'Recognition',
      description: 'After-school centre',
      icon: Award,
    },
    {
      number: '30+',
      label: 'Years Experience',
      description: 'In education',
      icon: BookOpen,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
      
      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Built on a foundation of proven educational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

