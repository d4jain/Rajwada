import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'

export default function StickyReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
      setVisible(window.scrollY > heroHeight && !nearBottom)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#reserve"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 px-6 py-4 bg-emerald-deep/90 backdrop-blur-md border border-gold/30 hover:border-gold text-ivory hover:text-gold-champagne font-sans text-[11px] uppercase tracking-[0.25em] shadow-panel transition-all duration-500 ease-regal"
        >
          <CalendarCheck size={15} />
          Reserve a Table
        </motion.a>
      )}
    </AnimatePresence>
  )
}
