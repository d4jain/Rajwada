import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Award } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { testimonials, awards } from '../data/contentData'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const current = testimonials[index]

  return (
    <section className="relative bg-emerald section-pad overflow-hidden">
      <div className="absolute inset-0 jali-pattern opacity-25" />
      <div className="container-rajwada relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Recognition &amp; Acclaim
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Words From Our <span className="italic text-gold-gradient">Distinguished Guests</span>
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto text-center mb-20 min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: easeRegal }}
            >
              <div className="flex justify-center gap-1 mb-6 text-gold-champagne">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-2xl md:text-3xl text-ivory-dim italic leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.25em] text-gold-champagne">
                {current.name}
              </p>
              <p className="font-sans text-xs text-ivory-muted mt-1">{current.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2 border border-gold/20 hover:border-gold/60 text-gold-champagne transition-colors duration-500"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                    i === index ? 'bg-gold' : 'bg-ivory/15'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2 border border-gold/20 hover:border-gold/60 text-gold-champagne transition-colors duration-500"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Awards strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/10"
        >
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-emerald-panel px-6 py-8 flex flex-col items-center text-center gap-3"
            >
              <Award size={22} className="text-gold-champagne" strokeWidth={1.25} />
              <p className="font-serif text-base text-ivory">{award.name}</p>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory-muted">
                {award.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
