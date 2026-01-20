import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            LET'S WORK TOGETHER
          </h2>
          
          <p className="text-2xl md:text-3xl mb-12 text-gray-700 font-light">
            Let's talk about how I can help you.
          </p>
          
          <div className="bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 rounded-2xl p-12 shadow-2xl text-white">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-xl mb-6">
                Ready to start your project? Have questions about my services?
              </p>
              <p className="text-2xl font-semibold mb-8">
                Contact me at:
              </p>
              <a
                href="mailto:iva@serbianlocalizer.com"
                className="inline-block text-3xl font-bold hover:text-yellow-300 transition-colors duration-300 underline"
              >
                iva@serbianlocalizer.com
              </a>
            </div>
            
            <div className="mt-10">
              <a
                href="mailto:iva@serbianlocalizer.com"
                className="inline-block px-10 py-4 bg-white text-sky-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONTACT ME NOW
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-gray-800 mb-2">Location</h4>
              <p className="text-gray-600">Budapest, Hungary</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-gray-800 mb-2">Experience</h4>
              <p className="text-gray-600">15+ Years</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-800 mb-2">Specialization</h4>
              <p className="text-gray-600">IT & Localization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

