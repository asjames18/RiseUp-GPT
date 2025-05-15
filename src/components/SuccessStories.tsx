import React from 'react'

const testimonials = [
  {
    quote: "I used to hustle the wrong way. Now I'm stacking the right way. RiseUp changed how I think.",
    author: "Tone",
    age: 26
  },
  {
    quote: "Nobody ever taught me how credit worked. Now I'm teaching my nieces.",
    author: "Tasha",
    age: 28
  },
  {
    quote: "This app feels like talking to someone who *gets it.*",
    author: "Malik",
    age: 34
  }
]

const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
            >
              <p className="text-xl text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories 