import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Car, Navigation } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'

const details = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['The Leela Palace, 23 Old Airport Road', 'HAL Sanjaynagar, Bengaluru 560008'],
  },
  {
    icon: Clock,
    title: 'Timings',
    lines: ['Lunch: 12:30 PM \u2013 3:00 PM', 'Dinner: 7:00 PM \u2013 11:30 PM'],
  },
  {
    icon: Car,
    title: 'Valet Parking',
    lines: ['Complimentary valet parking', 'available for all guests'],
  },
  {
    icon: Phone,
    title: 'Contact',
    lines: ['+91 80 2521 1234', 'reservations@rajwada.co.in'],
  },
]

export default function Location() {
  return (
    <section id="location" className="relative bg-emerald-deep section-pad">
      <div className="container-rajwada">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Visit Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Find Your Way <span className="italic text-gold-gradient">to the Palace</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="corner-frame relative min-h-[360px] lg:min-h-[460px]"
          >
            <div className="absolute inset-0 overflow-hidden grayscale-[40%] sepia-[20%] contrast-[1.1]">
              <iframe
                title="Rajwada location map"
                src="https://www.google.com/maps?q=The+Leela+Palace+Bengaluru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute inset-0 bg-gold/5 pointer-events-none mix-blend-multiply" />
          </motion.div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="grid sm:grid-cols-2 gap-8 flex-1">
              {details.map((d, i) => {
                const Icon = d.icon
                return (
                  <motion.div
                    key={d.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    transition={{ duration: 1, ease: easeRegal, delay: i * 0.1 }}
                  >
                    <Icon size={24} className="text-gold-champagne mb-4" strokeWidth={1.25} />
                    <h3 className="font-serif text-xl text-ivory mb-2">{d.title}</h3>
                    {d.lines.map((line) => (
                      <p key={line} className="font-sans text-sm text-ivory-muted leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="https://www.google.com/maps?q=The+Leela+Palace+Bengaluru"
                target="_blank"
                rel="noreferrer"
                className="btn-gold flex-1"
              >
                <Navigation size={14} />
                Get Directions
              </a>
              <a href="tel:+918025211234" className="btn-outline flex-1">
                <Phone size={14} />
                Call Restaurant
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
