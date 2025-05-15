import React from 'react'

const OurWhy: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
          Built For Us. By Us.
        </h2>
        <div className="prose prose-lg mx-auto text-gray-300">
          <p className="mb-6">
            For too long, financial education has been gatekept, leaving our community behind. 
            We've seen the impact of financial exclusion and generational struggle firsthand.
          </p>
          <p className="mb-6">
            RiseUp was born from a simple truth: when we understand the system, we can work it to our advantage. 
            We're not just building another finance app – we're creating a movement rooted in freedom, 
            not just finance.
          </p>
          <p>
            Our mission is to empower Black Americans and the global Black diaspora with the tools, 
            knowledge, and support needed to build generational wealth. Because when we rise, 
            we all rise together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurWhy 