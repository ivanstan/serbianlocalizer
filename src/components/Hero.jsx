import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 text-white pt-20">
      <div className="section-container text-center py-20">
        <div className={`space-y-6 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            SERBIAN LOCALIZER
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl font-light opacity-95">
              Hello, my name is Iva Pajvancic and I am an English &gt; Serbian IT translator and localizer.
            </p>
            <p className="text-2xl md:text-3xl font-semibold mt-6">
              Welcome to my website!
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="px-8 py-4 bg-white text-sky-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}

export default Hero

