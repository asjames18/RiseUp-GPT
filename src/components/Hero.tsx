import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-amber-900/20" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
          Wealth. Wisdom. Woke.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          RiseUp is your financial coach — built for the block and beyond. Budget better. Build credit. Break cycles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
            Start Your Wealth Quest
          </button>
          <button className="px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero 