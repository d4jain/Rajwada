import { motion } from 'framer-motion'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { signatureDishes } from '../data/signatureDishes'

export default function SignatureCollection() {
  return (
    <section id="signature" className="relative bg-emerald-deep section-pad">
      <div className="container-rajwada">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            The Signature Collection
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Six Dishes, <span className="italic text-gold-gradient">Five Centuries</span> of Royal Tables
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="font-sans text-ivory-muted mt-6 leading-relaxed"
          >
            Each dish on this menu is a heirloom &mdash; recreated faithfully from court records and
            oral tradition, then presented with the precision of modern fine dining.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
          {signatureDishes.map((dish, i) => (
            <motion.article
              key={dish.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{ duration: 1.1, ease: easeRegal, delay: (i % 3) * 0.12 }}
              className="group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportSettings}
                  transition={{ duration: 1.8, ease: easeRegal }}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-[1.4s] ease-regal group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/10 to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-deep/70 backdrop-blur-sm border border-gold/30">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne">
                    {dish.region}
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold/0 group-hover:bg-gold/60 transition-all duration-700 ease-regal" />
              </div>
              <div className="pt-6">
                <h3 className="font-display text-2xl md:text-[1.7rem] text-ivory group-hover:text-gold-champagne transition-colors duration-500">
                  {dish.name}
                </h3>
                <div className="gold-rule-left w-12 my-3 opacity-60" />
                <p className="font-sans text-sm text-ivory-muted leading-relaxed">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mt-16 md:mt-20"
        >
          <a href="#menu" className="btn-outline">
            Explore the Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
