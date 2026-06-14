import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { RajwadaEmblem } from './Motifs'

const navLinks = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Signature Collection', href: '#signature' },
  { label: 'Culinary Regions', href: '#regions' },
  { label: 'Tasting Menus', href: '#tasting' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Private Dining', href: '#private-dining' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-regal ${
        scrolled ? 'bg-emerald-deep/90 backdrop-blur-md border-b border-gold/15' : 'bg-transparent'
      }`}
    >
      <div className="container-rajwada flex items-center justify-between h-20 md:h-24">
        <a href="#top" className="flex items-center gap-3 group">
          <RajwadaEmblem className="w-9 h-9 md:w-11 md:h-11 text-gold-champagne transition-transform duration-700 ease-regal group-hover:rotate-[18deg]" strokeWidth={1.25} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl tracking-[0.15em] text-ivory">RAJWADA</span>
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-gold-champagne/80 mt-1">
              The Royal Kitchens of India
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/80 hover:text-gold-champagne transition-colors duration-500 group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-500 ease-regal group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#reserve" className="btn-gold">
            Reserve Table
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-gold-champagne p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-emerald-deep border-t border-gold/15 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-xl text-ivory hover:text-gold-champagne transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full">
                Reserve Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
