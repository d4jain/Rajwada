import { motion } from 'framer-motion'
import { fadeUp, fadeIn, viewportSettings, easeRegal } from '../lib/motion'
import { OrnamentalDivider } from './Motifs'

const pillars = [
  {
    title: 'Royal Culinary Traditions',
    text:
      'Every recipe at Rajwada traces its lineage to a specific court \u2014 the Mewar kitchens of Udaipur, the Nizami banquets of Hyderabad, the Wazwan feasts of Kashmir. We do not invent; we preserve.',
  },
  {
    title: 'Inspiration from Indian Kingdoms',
    text:
      'Our menu reads like a map of princely India \u2014 Rajasthan\u2019s desert fortresses, Awadh\u2019s refined Nawabi courts, the Deccan plateau\u2019s layered biryanis, and the saffron valleys of Kashmir.',
  },
  {
    title: 'Master Chefs of Heritage',
    text:
      'Our kitchen is led by custodians of these recipes \u2014 chefs trained in the lineage of palace kitchens, where techniques were passed not in cookbooks, but from hand to hand across generations.',
  },
  {
    title: 'Heritage Preservation',
    text:
      'Beyond the plate, Rajwada works with regional artisans for our tableware, textiles and serving vessels \u2014 ensuring that every element of the experience carries forward a living craft tradition.',
  },
]

export default function Heritage() {
  return (
    <section id="heritage" className="relative bg-emerald section-pad overflow-hidden">
      <div className="absolute inset-0 jali-pattern opacity-30" />
      <div className="container-rajwada relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: large editorial image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-5 relative"
          >
            <div className="corner-frame">
              <div className="overflow-hidden">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportSettings}
                  transition={{ duration: 2, ease: easeRegal }}
                  src="https://images.unsplash.com/photo-1732158606078-b1eb6555d910?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVyaXRhZ2UlMjBJbmRpYW4lMjBwYWxhY2UlMjBraXRjaGVuJTIwY3JhZnRzbWFuc2hpcHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=1400&auto=format&fit=crop"
                  alt="Heritage Indian palace kitchen craftsmanship"
                  className="w-full h-[420px] md:h-[560px] object-cover"
                />
              </div>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="absolute -bottom-10 -right-6 md:-right-12 bg-emerald-panel border border-gold/25 px-8 py-6 max-w-[260px] hidden sm:block"
            >
              <p className="font-display text-4xl text-gold-champagne">5</p>
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory-dim mt-2">
                Royal Culinary Lineages, One Table
              </p>
            </motion.div>
          </motion.div>

          {/* Right: editorial copy */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
              Our Heritage
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 max-w-2xl"
            >
              A Table Set by <span className="italic text-gold-gradient">Five Kingdoms</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="font-serif text-xl text-ivory-dim leading-relaxed max-w-2xl mb-4"
            >
              Long before restaurants existed, India&rsquo;s greatest meals were prepared in the
              private kitchens of its kingdoms &mdash; the <em className="text-gold-champagne not-italic">matbakh</em> of
              the Nawabs, the <em className="text-gold-champagne not-italic">rasoi</em> of the Rajput zenana,
              the banquet halls of the Nizam.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="font-sans text-base text-ivory-muted leading-relaxed max-w-2xl mb-12"
            >
              Rajwada was conceived as a vessel for these recipes &mdash; many of them undocumented,
              passed only through apprenticeship within royal households. Our founding chefs spent
              years travelling across Rajasthan, Awadh, Hyderabad, Kashmir and Mysore, working
              alongside the descendants of royal khansamas to record, refine and revive dishes
              that had nearly disappeared from living memory.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  transition={{ duration: 1, ease: easeRegal, delay: i * 0.1 }}
                  className="border-l border-gold/30 pl-5"
                >
                  <h3 className="font-serif text-xl text-gold-champagne mb-2">{p.title}</h3>
                  <p className="font-sans text-sm text-ivory-muted leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-24"
        >
          <OrnamentalDivider />
        </motion.div>
      </div>
    </section>
  )
}
