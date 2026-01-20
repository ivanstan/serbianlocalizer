import { useEffect, useRef, useState } from 'react'

const MyServices = () => {
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

  const services = [
    {
      title: 'Localization',
      icon: '🌐',
      description: 'Do you need your software, website or a mobile application localized into Serbian in a way that enhances user experience and accurately reflects your brand image? With 15 years of hands-on experience in localization, I know the ins and outs of the localization process.',
      delay: '0s'
    },
    {
      title: 'IT Translation',
      icon: '💻',
      description: 'Are you looking for top-quality Serbian translation for your product documentation, online help or user manuals? As an experienced IT translator and a lifelong technology geek, I offer accurate translations which reflect your company\'s reputation for excellence.',
      delay: '0.2s'
    },
    {
      title: 'Marketing Translation',
      icon: '📱',
      description: 'Do you need your high-impact marketing copy translated into Serbian in a way that maintains the quality and consistency of your message across multiple channels and campaigns? Let me help you win more clients in the Serbian market and achieve your business goals.',
      delay: '0.4s'
    }
  ]

  return (
    <section id="my-services" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            MY SERVICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: service.delay }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#services"
              className="inline-block px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-full font-semibold hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices

