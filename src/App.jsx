import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import MyServices from './components/MyServices'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <WhoIAm />
      <MyServices />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
