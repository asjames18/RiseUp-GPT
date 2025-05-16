import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import SuccessStories from './components/SuccessStories'
import OurWhy from './components/OurWhy'
import LeadMagnet from './components/LeadMagnet'
import AppPreview from './components/AppPreview'
import Footer from './components/Footer'
import { useOneSignal } from './hooks/useOneSignal'

function App() {
  useOneSignal();

  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <SuccessStories />
      <OurWhy />
      <LeadMagnet email={email} setEmail={setEmail} />
      <AppPreview />
      <Footer />
    </div>
  )
}

export default App 