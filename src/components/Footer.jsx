import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { RajwadaEmblem, OrnamentalDivider } from './Motifs'

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Heritage', href: '#heritage' },
      { label: 'Signature Collection', href: '#signature' },
      { label: 'Culinary Regions', href: '#regions' },
      { label: 'Tasting Menus', href: '#tasting' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { label: 'Digital Menu', href: '#menu' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Private Dining', href: '#private-dining' },
      { label: 'Reservations', href: '#reserve' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Reservation Policy', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Allergen Information', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-emerald-deep border-t border-gold/10 pt-20 pb-10">
      <div className="container-rajwada">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <RajwadaEmblem className="w-10 h-10 text-gold-champagne" strokeWidth={1.1} />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-[0.15em] text-ivory">RAJWADA</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-champagne/80 mt-1">
                  The Royal Kitchens of India
                </span>
              </div>
            </div>
            <p className="font-serif text-ivory-dim italic leading-relaxed max-w-sm mb-6">
              A luxury Indian fine dining destination at The Leela Palace, Bengaluru &mdash;
              honouring the royal kitchens of Rajasthan, Awadh, Hyderabad, Kashmir and Mysore.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 flex items-center justify-center border border-gold/20 hover:border-gold/60 text-ivory hover:text-gold-champagne transition-all duration-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-ivory-muted hover:text-ivory transition-colors duration-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <OrnamentalDivider className="mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-ivory-muted/60 tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} Rajwada. All rights reserved. Recognised among India&rsquo;s
            finest dining experiences.
          </p>
          <a href="#reserve" className="btn-outline">
            Reserve Your Table
          </a>
        </div>
      </div>
    </footer>
  )
}
