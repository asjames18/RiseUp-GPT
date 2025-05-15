import React from 'react'
import { motion } from 'framer-motion'

const AppPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          See RiseUp in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Credit Score Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[9/16] bg-gray-800 rounded-3xl p-4 border border-gray-700">
              <div className="h-full flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Credit Score</h3>
                  <p className="text-3xl font-bold text-emerald-400">720</p>
                </div>
                <div className="flex-1 bg-gray-700/50 rounded-xl p-4">
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-600 rounded-full w-3/4" />
                    <div className="h-2 bg-gray-600 rounded-full w-1/2" />
                    <div className="h-2 bg-gray-600 rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Budget Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[9/16] bg-gray-800 rounded-3xl p-4 border border-gray-700">
              <div className="h-full flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-4">Budget Overview</h3>
                <div className="flex-1 space-y-4">
                  <div className="bg-gray-700/50 rounded-xl p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Savings</span>
                      <span className="text-emerald-400">$2,500</span>
                    </div>
                    <div className="h-2 bg-emerald-500/20 rounded-full">
                      <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <div className="bg-gray-700/50 rounded-xl p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Spending</span>
                      <span className="text-amber-400">$1,200</span>
                    </div>
                    <div className="h-2 bg-amber-500/20 rounded-full">
                      <div className="h-full w-1/2 bg-amber-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[9/16] bg-gray-800 rounded-3xl p-4 border border-gray-700">
              <div className="h-full flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-4">RiseUpGPT</h3>
                <div className="flex-1 bg-gray-700/50 rounded-xl p-4">
                  <div className="bg-amber-500/20 rounded-lg p-3 mb-4">
                    <p className="text-white">You're $50 away from your emergency goal! 💪</p>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-600 rounded-full w-3/4" />
                    <div className="h-8 bg-gray-600 rounded-full w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppPreview 