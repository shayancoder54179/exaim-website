'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Lightbulb, Target, Rocket, Award } from 'lucide-react'

const milestones = [
  {
    year: '2010',
    title: 'Improve ME Institute Founded',
    description: 'An award-winning after-school centre established in the UAE, growing to serve over 1,000 students with 40 dedicated tutors.',
    icon: GraduationCap,
    color: 'from-gray-600 to-gray-800',
  },
  {
    year: '2015-2020',
    title: 'Recognizing the Challenge',
    description: 'Years of firsthand experience witnessing the struggles teachers and students face in exam preparation, marking, and feedback.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: '2021',
    title: 'The Vision Takes Shape',
    description: 'The idea for ExAIm emerges: leveraging AI to make exam excellence accessible, efficient, and data-driven for all.',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2022',
    title: 'Building the Platform',
    description: 'Development begins, combining educational expertise with cutting-edge technology to create a revolutionary exam preparation platform.',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2023',
    title: 'Launch & Impact',
    description: 'ExAIm launches, transforming how schools prepare students for GCSE, A-Level, IB, and other curricula worldwide.',
    icon: Award,
    color: 'from-primary-500 to-secondary-500',
  },
]

export default function AnimatedTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
            Our Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            From classroom experience to global innovation—discover the milestones that shaped ExAIm.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500" />
          
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Icon and year */}
                    <div className="flex-shrink-0 flex items-center gap-4 md:w-48">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg relative z-10`}>
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="md:hidden">
                        <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                      </div>
                      <div className="hidden md:block text-right md:text-left text-2xl font-bold text-gray-900">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    }`} style={{ maxWidth: '600px' }}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

