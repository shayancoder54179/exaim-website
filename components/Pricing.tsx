'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Per Subject',
    price: '$10',
    period: 'per student/year',
    subjects: 1,
    features: ['Single subject access', 'Full feature set', 'All curricula support'],
    popular: false,
  },
  {
    name: '4-Subject Bundle',
    price: '$36',
    period: 'per student/year',
    subjects: 4,
    features: ['4 subjects', 'Best value', 'Full feature set', 'All curricula support'],
    popular: true,
  },
  {
    name: '6-Subject Premium',
    price: '$60',
    period: 'per student/year',
    subjects: 6,
    features: ['6 subjects', 'Maximum coverage', 'Full feature set', 'All curricula support', 'Priority support'],
    popular: false,
  },
]

const benefits = [
  'Pilot Test: 30-day commitment-free trial',
  'Onboarding: Institution setup and teacher training',
  'Subscribe: Full access for the academic year',
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 5,
                z: 50
              }}
              className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow overflow-visible group ${
                plan.popular ? 'ring-2 ring-primary-600 md:scale-105 pulse-glow' : ''
              }`}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                initial={false}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                initial={false}
              />
              
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </motion.span>
                </motion.div>
              )}
              
              <div className="relative z-10 text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {plan.name}
                </h3>
                <motion.div 
                  className="flex items-baseline justify-center gap-2 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </motion.div>
                <p className="text-gray-600 text-sm md:text-base">{plan.period}</p>
                {plan.subjects > 1 && (
                  <p className="text-xs md:text-sm text-gray-500 mt-1">({plan.subjects} subjects)</p>
                )}
              </div>
              
              <ul className="space-y-2.5 mb-6 relative z-10">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    className="flex items-start group/item"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-gray-700 text-sm md:text-base group-hover/item:text-primary-600 transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-full py-3 rounded-lg font-semibold overflow-hidden group/btn ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Get Started</span>
              </motion.button>
            </motion.div>
          ))}
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-10 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-3">{index + 1}</div>
              <p className="text-lg leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

