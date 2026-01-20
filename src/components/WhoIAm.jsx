import { useEffect, useRef, useState } from 'react'

const WhoIAm = () => {
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
    <section id="who-i-am" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            WHO I AM
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                I am an experienced English &gt; Serbian IT translator and localizer, passionate about technology and languages.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                As a native speaker of Serbian with a degree in English Language and Literature, I offer linguistic expertise in both my source and target languages, combined with a thorough understanding of the localization process, subject-matter knowledge and 15 years of intensive, hands-on experience translating for the leading global brands in my fields of specialization.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                I pride myself on offering the highest quality service and giving each of your projects 100% every single time.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-semibold">
                Let's work together to help you communicate effectively in your target market and achieve your business goals.
              </p>
              
              <div className="mt-8 text-center">
                <a
                  href="#about"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-full font-semibold hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  MORE ABOUT ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoIAm

