import React from 'react'

interface LeadMagnetProps {
  email: string
  setEmail: (email: string) => void
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({ email, setEmail }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Email submitted:', email)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Get Your Free Wealth Reset Starter Kit
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey to financial freedom with our comprehensive guide to building wealth.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-semibold text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
              >
                Send It To Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnet 