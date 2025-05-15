import React from 'react'
import { LightBulbIcon, CreditCardIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: LightBulbIcon,
    title: 'WiseBot AI Coach',
    description: 'Ask questions like "Should I invest or pay off debt?" and get real talk back.'
  },
  {
    icon: CreditCardIcon,
    title: 'Credit Comeback Toolkit',
    description: 'Track your score, fix your credit, and learn the system.'
  },
  {
    icon: ChartBarIcon,
    title: 'Wealth Quests',
    description: 'Gamified money challenges that build your skills and confidence.'
  }
]

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-amber-500/50 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 