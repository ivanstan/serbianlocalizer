import { useEffect, useRef, useState } from 'react'

const Services = () => {
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

  const servicesList = [
    'Software and Website Localization',
    'Mobile App Localization',
    'Localization of Social Media Platforms',
    'Linguistic Testing',
    'Localization of E-learning Platforms',
    'E-Commerce',
    'Game Localization',
    'Transcreation & Online Marketing',
    'Terminology Management & Style Guide Creation'
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 text-white">
      <div className="section-container">
        <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            SERVICES
          </h2>
          
          <p className="text-xl text-center mb-6 max-w-3xl mx-auto">
            Over the past 12 years, I have worked for end-clients ranging from leading global brands to dynamic start-ups.
          </p>
          
          <p className="text-2xl text-center mb-12 font-semibold">
            Here are the services I offer:
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">✓</span>
                    <span className="text-lg font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-lg mb-4">
                Questions about my experience or specific projects?
              </p>
              <p className="text-xl font-semibold mb-6">
                Contact me at{' '}
                <a href="mailto:iva@serbianlocalizer.com" className="underline hover:text-yellow-300 transition-colors">
                  iva@serbianlocalizer.com
                </a>
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONTACT ME NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

