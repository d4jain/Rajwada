import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Calendar, Clock, Users } from 'lucide-react'
import { fadeUp, viewportSettings, easeRegal } from '../lib/motion'
import { OrnamentalDivider } from './Motifs'

const occasionOptions = ['An Evening Out', 'Anniversary', 'Birthday', 'Business Dinner', 'Celebration', 'Other']
const timeSlots = ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']
const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, '9+']

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: occasionOptions[0],
    guests: 2,
    date: '',
    time: timeSlots[2],
  })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="relative bg-emerald section-pad overflow-hidden">
      <div className="absolute inset-0 jali-pattern opacity-25" />
      <div className="container-rajwada relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="eyebrow">
            Reservations
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6"
          >
            Reserve Your Place <span className="italic text-gold-gradient">at the Royal Table</span>
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportSettings} className="mt-8">
            <OrnamentalDivider />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-3xl mx-auto bg-emerald-panel border border-gold/15 p-8 md:p-14"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeRegal }}
              className="flex flex-col items-center text-center py-16"
            >
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6">
                <Check size={28} className="text-gold-champagne" />
              </div>
              <h3 className="font-display text-3xl text-ivory mb-3">Your Table Awaits, {form.name.split(' ')[0] || 'Guest'}</h3>
              <p className="font-sans text-sm text-ivory-muted max-w-md">
                We have received your request for {form.guests} guest{form.guests === 1 ? '' : 's'} on {form.date || 'your selected date'} at {form.time}. 
                Our reservations team will confirm your booking shortly by phone or email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Guest Name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              </div>
              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />

              <div>
                <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-3 block">
                  Occasion
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasionOptions.map((occ) => (
                    <button
                      type="button"
                      key={occ}
                      onClick={() => setForm((f) => ({ ...f, occasion: occ }))}
                      className={`px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] border transition-all duration-400 ${
                        form.occasion === occ
                          ? 'border-gold text-gold-champagne bg-gold/10'
                          : 'border-ivory/10 text-ivory/50 hover:border-gold/30 hover:text-ivory'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-2 flex items-center gap-2">
                    <Calendar size={12} /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory transition-colors duration-500 outline-none [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-2 flex items-center gap-2">
                    <Clock size={12} /> Time
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-emerald-panel border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory transition-colors duration-500 outline-none"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 mb-2 flex items-center gap-2">
                    <Users size={12} /> Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full bg-emerald-panel border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory transition-colors duration-500 outline-none"
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-gold w-full mt-4">
                Confirm Reservation
              </button>
              <p className="text-center font-sans text-xs text-ivory-muted/70">
                For parties larger than ten guests, please contact us directly to arrange private dining.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
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
        className="w-full bg-transparent border border-gold/20 focus:border-gold/60 px-4 py-3 font-sans text-sm text-ivory transition-colors duration-500 outline-none"
      />
    </div>
  )
}
