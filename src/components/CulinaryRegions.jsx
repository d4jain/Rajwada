import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { regions } from '../data/regions'

export default function CulinaryRegions() {
  const [active, setActive] = useState(regions[0].id)
  const activeRegion = regions.find((r) => r.id === active)

  return (
    <section id="regions" className="relative bg-emerald section-pad overflow-hidden">
      <div className="absolute inset-0 jali-pattern opacity-25" />
      <div className="container-rajwada relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Culinary Regions of India
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Six Courts, <span className="italic text-gold-gradient">One Royal Table</span>
          </motion.h2>
        </div>

        {/* Region selector tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActive(region.id)}
              className={`relative px-5 md:px-7 py-3 font-sans text-[11px] md:text-xs uppercase tracking-[0.25em] transition-all duration-500 ease-regal border ${
                active === region.id
                  ? 'border-gold text-gold-champagne bg-gold/10'
                  : 'border-ivory/15 text-ivory/60 hover:border-gold/40 hover:text-ivory'
              }`}
            >
              {region.name}
            </button>
          ))}
        </motion.div>

        {/* Active region detail */}
        <div className="relative min-h-[480px] md:min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: easeRegal }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className="corner-frame order-1 lg:order-none">
                <div className="overflow-hidden">
                  <img
                    src={activeRegion.image}
                    alt={activeRegion.title}
                    className="w-full h-72 md:h-[420px] object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="eyebrow">{activeRegion.name}</span>
                <h3 className="heading-display text-3xl md:text-4xl mt-4 mb-6">
                  {activeRegion.title}
                </h3>
                <p className="font-serif text-lg text-ivory-dim leading-relaxed mb-8">
                  {activeRegion.story}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne mb-3">
                      Signature Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {activeRegion.ingredients.map((ing) => (
                        <li key={ing} className="font-sans text-sm text-ivory-muted flex items-center gap-2">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne mb-3">
                      Featured Dishes
                    </h4>
                    <ul className="space-y-2">
                      {activeRegion.dishes.map((dish) => (
                        <li key={dish} className="font-sans text-sm text-ivory-muted flex items-center gap-2">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {dish}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
