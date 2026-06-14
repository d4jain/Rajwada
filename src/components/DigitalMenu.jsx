import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Flame } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { menuCategories, menuItems } from '../data/menuData'

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const inCategory = activeCategory === 'All' || item.category === activeCategory
      const inSearch =
        query.trim() === '' ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.region.toLowerCase().includes(query.toLowerCase())
      return inCategory && inSearch
    })
  }, [activeCategory, query])

  // group by category for display
  const grouped = useMemo(() => {
    const map = {}
    filteredItems.forEach((item) => {
      if (!map[item.category]) map[item.category] = []
      map[item.category].push(item)
    })
    return map
  }, [filteredItems])

  const categoriesToShow = activeCategory === 'All' ? menuCategories : [activeCategory]

  return (
    <section id="menu" className="relative bg-emerald section-pad overflow-hidden">
      <div className="absolute inset-0 jali-pattern opacity-25" />
      <div className="container-rajwada relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            The Digital Menu
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Every Dish, <span className="italic text-gold-gradient">A Royal Recipe</span>
          </motion.h2>
        </div>

        {/* Search + filter bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="sticky top-20 md:top-24 z-20 bg-emerald/95 backdrop-blur-md border border-gold/15 px-5 md:px-6 py-5 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-champagne/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes, regions, ingredients..."
                className="w-full bg-transparent border border-gold/20 focus:border-gold/60 pl-11 pr-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory-muted/50 transition-colors duration-500 outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', ...menuCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] border transition-all duration-400 ${
                    activeCategory === cat
                      ? 'border-gold text-gold-champagne bg-gold/10'
                      : 'border-ivory/10 text-ivory/50 hover:border-gold/30 hover:text-ivory'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Menu listing */}
        <div className="space-y-16">
          {categoriesToShow.map((category) => {
            const items = grouped[category]
            if (!items || items.length === 0) return null
            return (
              <div key={category}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="flex items-center gap-5 mb-8"
                >
                  <h3 className="font-display text-2xl md:text-3xl text-gold-champagne whitespace-nowrap">
                    {category}
                  </h3>
                  <div className="gold-rule flex-1" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.6, ease: easeRegal, delay: (i % 6) * 0.03 }}
                        className="flex justify-between gap-6 pb-6 border-b border-gold/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap mb-1.5">
                            <h4 className="font-serif text-lg md:text-xl text-ivory">{item.name}</h4>
                            {item.spice > 0 && (
                              <span className="flex items-center gap-0.5 text-burgundy-bright">
                                {Array.from({ length: item.spice }).map((_, idx) => (
                                  <Flame key={idx} size={11} fill="currentColor" />
                                ))}
                              </span>
                            )}
                          </div>
                          <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-champagne/70">
                              {item.region}
                            </span>
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-sans text-[10px] uppercase tracking-[0.2em] text-ivory-muted/60 border border-ivory/10 px-2 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="font-display text-lg md:text-xl text-gold-champagne whitespace-nowrap pt-1">
                          &#8377;{item.price.toLocaleString('en-IN')}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-serif text-xl text-ivory-dim italic">
                No dishes found. Perhaps our chef has yet to reveal this one.
              </p>
            </motion.div>
          )}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center font-sans text-xs text-ivory-muted/60 mt-16 tracking-wide"
        >
          Prices are in Indian Rupees (&#8377;) and inclusive of applicable taxes. A discretionary
          service charge may apply. Please inform your host of any allergies or dietary preferences.
        </motion.p>
      </div>
    </section>
  )
}
