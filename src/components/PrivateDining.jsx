import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Crown, Briefcase, Heart, PartyPopper } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'

const occasions = [
  {
    icon: Briefcase,
    title: 'Corporate Dinners',
    text: 'Private rooms for board dinners, client entertainment, and executive gatherings, with bespoke menus and dedicated service.',
  },
  {
    icon: Heart,
    title: 'Anniversary Experiences',
    text: 'An intimate setting for milestone celebrations, complete with personalised menu cards and a chef-curated tasting journey.',
  },
  {
    icon: PartyPopper,
    title: 'Luxury Events',
    text: 'From milestone birthdays to product launches, our palace halls accommodate gatherings of up to eighty guests.',
  },
  {
    icon: Crown,
    title: 'Royal Tasting Menus',
    text: 'A fully customised multi-course experience designed in consultation with our Executive Chef for your occasion.',
  },
]

export default function PrivateDining() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', guests: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="private-dining" className="relative bg-emerald-deep section-pad overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep via-emerald-deep/90 to-emerald-deep" />
      </div>

      <div className="container-rajwada relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Private Dining &amp; Celebrations
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Host Your Occasion <span className="italic text-gold-gradient">In Palace Style</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="font-sans text-ivory-muted mt-6 leading-relaxed"
          >
            Our private dining halls &mdash; the Mahal Room and the Zenana Suite &mdash; offer an
            intimate setting for life&rsquo;s most significant moments, attended by a dedicated
            team of butlers and chefs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Occasion cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {occasions.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  transition={{ duration: 1, ease: easeRegal, delay: i * 0.1 }}
                  className="border border-gold/15 p-7 hover:border-gold/40 transition-colors duration-700 group"
                >
                  <Icon size={26} className="text-gold-champagne mb-5" strokeWidth={1.25} />
                  <h3 className="font-serif text-xl text-ivory mb-2 group-hover:text-gold-champagne transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-ivory-muted leading-relaxed">{item.text}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Enquiry form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="bg-emerald-panel border border-gold/15 p-8 md:p-10"
          >
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">Make an Enquiry</h3>
            <p className="font-sans text-sm text-ivory-muted mb-8">
              Our events team will respond within twenty-four hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeRegal }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center mb-5">
                  <Check size={24} className="text-gold-champagne" />
                </div>
                <p className="font-serif text-xl text-ivory mb-2">Thank you, {form.name.split(' ')[0] || 'Guest'}.</p>
                <p className="font-sans text-sm text-ivory-muted">
                  Your enquiry has been received. A member of our events team will be in touch shortly to begin curating your experience.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                </div>
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Occasion" name="occasion" value={form.occasion} onChange={handleChange} placeholder="e.g. Corporate Dinner" />
                  <Field label="Expected Guests" name="guests" type="number" value={form.guests} onChange={handleChange} placeholder="e.g. 12" />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-2 block">
                    Tell Us More
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share details about your event, dietary preferences, or special requests"
                    className="w-full bg-transparent border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors duration-500 outline-none resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full mt-2">
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder = '' }) {
  return (
    <div>
      <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-2 block">
        {label} {required && <span className="text-burgundy-bright">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors duration-500 outline-none"
      />
    </div>
  )
}
