import { motion } from 'framer-motion'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { galleryImages } from '../data/contentData'

const spanClasses = {
  tall: 'sm:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-emerald-deep section-pad">
      <div className="container-rajwada">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Gallery of Opulence
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            A Glimpse <span className="italic text-gold-gradient">Within the Palace</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{ duration: 1, ease: easeRegal, delay: (i % 4) * 0.1 }}
              className={`relative overflow-hidden group ${spanClasses[img.span]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.6s] ease-regal group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/30 transition-colors duration-700" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
