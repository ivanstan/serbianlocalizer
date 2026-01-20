import { useEffect, useRef, useState } from 'react'

const About = () => {
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

  const tools = [
    'CAT tools (Trados Studio 2015, Trados 2007, SDLX, Idiom Workbench, Passolo)',
    'Quality Assurance tools (ApSIC Xbench)',
    'Spell-checker',
    'Tag validation tools'
  ]

  const events = [
    'BP14 conference for freelance translators, Budapest, Hungary',
    'Autumn 2015 SDL Roadshow: Budapest',
    'ProZ.com 2015 virtual conference for International Translation Day',
    'The Complete Web Developer Course by Rob Percival, Udemy',
    'BP17 conference for freelance translators, Budapest, Hungary',
    'BP18 conference for freelance translators, Vienna, Austria'
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            ABOUT
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* The Backstory */}
            <div className={`bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">The Backstory</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Looking back, I find it strange how everything in my life seems to have conspired to give me a head start as a technical translator.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I learned to read at 4 and have been a voracious reader ever since. I pretty much grew up in a picturesque library where my mother worked, got absolutely fascinated with computers at age 8 — hardware and software both — but also with computer games (and robots! giant, universe-defending ones — but that's a whole other subject).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                And this love of languages and the love of technology turned out to be the two themes to guide me throughout my life and education. So the way these two combined to make a perfect career for me to contribute in, enabling me to do what I love and help others by using my greatest strengths is something that I am grateful for every day.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                And what happens when you do what you love?
              </p>
              <p className="text-gray-700 leading-relaxed">
                You set the bar high and make it your mission to do your best work every time, and keep honing your skills and broadening your knowledge not due to external demands, but because on a very primal level, being able to do the job right is what makes you happy.
              </p>
            </div>

            {/* The Facts */}
            <div className={`bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 shadow-lg ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">THE FACTS</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My name is Iva Pajvancic.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am an English &gt; Serbian translator with a BA in English Language and Literature from the University of Belgrade, Serbia, and 15 years of experience, including 1 year in-house as a lead translator/reviewer in one of the largest translation agencies in the world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am currently based in Budapest, Hungary, where I live with my literary translator husband and our children, who are always keeping us on our toes.
              </p>
            </div>

            {/* The Quality Promise */}
            <div className={`bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl p-8 shadow-lg ${isVisible ? 'slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">THE QUALITY PROMISE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a full-time professional freelance translator, I am able to adapt my service to client's needs and requirements. This includes quality control, adherence to all applicable style guides and special scheduling if necessary. On-time delivery and client satisfaction guaranteed every time.
              </p>
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-sky-600 mr-2 mt-1">▶</span>
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Development */}
          <div className={`mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">COMMITTED TO PROFESSIONAL DEVELOPMENT</h3>
            <p className="text-center mb-8 text-lg">
              I am always improving my technical skills and broadening my knowledge of my subject areas. Here are just a few events and CPD activities that I recently completed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {events.map((event, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>{event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

