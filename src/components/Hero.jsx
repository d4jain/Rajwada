import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { RajwadaEmblem } from './Motifs'
import { easeRegal } from '../lib/motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-emerald-deep">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: easeRegal }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2400&auto=format&fit=crop"
          alt="Grand palace dining hall with golden chandeliers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/50 to-emerald-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/70 via-transparent to-emerald-deep/50" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 jali-pattern opacity-40" />
      </motion.div>

      {/* Curtain reveal panels */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.4, ease: easeRegal, delay: 0.2 }}
        style={{ transformOrigin: 'top' }}
        className="absolute inset-0 bg-emerald-deep z-20"
      />

      {/* Content */}
      <div className="relative z-10 container-rajwada flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: easeRegal, delay: 1.5 }}
          className="mb-8"
        >
          <RajwadaEmblem className="w-16 h-16 md:w-20 md:h-20 text-gold-champagne" strokeWidth={0.9} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: easeRegal, delay: 1.8 }}
          className="eyebrow mb-6"
        >
          Bengaluru &middot; Est. for the Modern Maharaja
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: easeRegal, delay: 2.0 }}
          className="heading-display text-shadow-luxe text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl"
        >
          A Journey Through<br />
          <span className="text-gold-gradient italic">India&rsquo;s Royal Kitchens</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeRegal, delay: 2.35 }}
          className="mt-8 max-w-2xl font-serif text-lg md:text-xl text-ivory-dim italic leading-relaxed"
        >
          Experience heirloom recipes once reserved for Maharajas, Nawabs, and Royal Courts &mdash;
          reimagined for a modern table, without compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeRegal, delay: 2.65 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a href="#reserve" className="btn-gold w-full sm:w-auto">
            Reserve Table
          </a>
          <a href="#menu" className="btn-outline w-full sm:w-auto">
            View Signature Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 text-gold-champagne/70 z-10"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.35em]">Descend Into Opulence</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
