import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { tastingMenus } from '../data/contentData'

export default function TastingExperience() {
  return (
    <section id="tasting" className="relative bg-emerald-deep section-pad">
      <div className="container-rajwada">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Chef&rsquo;s Tasting Experience
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            A Curated Journey, <span className="italic text-gold-gradient">Course by Course</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="font-sans text-ivory-muted mt-6 leading-relaxed"
          >
            For those who wish to surrender entirely to the kitchen, our tasting menus offer a
            complete progression through India&rsquo;s royal cuisines &mdash; paced, plated, and
            narrated by our chefs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
          {tastingMenus.map((menu, i) => (
            <motion.div
              key={menu.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{ duration: 1, ease: easeRegal, delay: i * 0.15 }}
              className={`relative bg-emerald-panel p-8 md:p-10 flex flex-col group transition-colors duration-700 hover:bg-emerald-deep ${
                i === 1 ? 'lg:scale-[1.02] lg:z-10' : ''
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-px left-8 -translate-y-1/2 bg-gold text-emerald-deep font-sans text-[10px] uppercase tracking-[0.25em] px-3 py-1">
                  Most Reserved
                </span>
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne/80">
                    {menu.courses} Courses &middot; {menu.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4 leading-snug">
                  {menu.name}
                </h3>
                <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-6">
                  {menu.description}
                </p>
                <div className="gold-rule-left w-12 mb-6 opacity-50" />
                <ul className="space-y-2 mb-8">
                  {menu.highlights.map((h) => (
                    <li key={h} className="font-serif text-base text-ivory-dim italic">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-between pt-6 border-t border-gold/10">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ivory-muted">Per Guest</span>
                  <p className="font-display text-3xl text-gold-champagne mt-1">&#8377;{menu.price.toLocaleString('en-IN')}</p>
                </div>
                <a
                  href="#reserve"
                  className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] text-ivory hover:text-gold-champagne transition-colors duration-500"
                >
                  Reserve
                  <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center font-sans text-xs text-ivory-muted/70 mt-8 tracking-wide"
        >
          All tasting menus are served per table and require all guests to partake. Wine and beverage pairings available upon request.
        </motion.p>
      </div>
    </section>
  )
}
