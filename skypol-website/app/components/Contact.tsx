'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const services = ['Fotografie', 'Print & Design', 'Social Media', 'Branding', 'Anderes'];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = (field: string) =>
    `w-full rounded-2xl px-5 py-4 text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-300 ${
      focused === field ? 'border-white/20' : 'border-white/10'
    }`;

  const inputStyle = (field: string) => ({
    background: focused === field ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === field ? 'rgba(27,141,184,0.4)' : 'rgba(255,255,255,0.06)'}`,
    boxShadow: focused === field ? '0 0 0 4px rgba(27,141,184,0.06)' : 'none',
  });

  return (
    <section id="kontakt" className="py-32 px-6">
      <div className="divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-6"
        >
          Kontakt
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Bereit für Ihr
              <br />
              nächstes{' '}
              <span className="gradient-text">Projekt?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/35 leading-relaxed mb-12 text-[15px]"
            >
              Schreiben Sie uns — wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
            </motion.p>

            {/* Contact info cards */}
            {[
              { icon: '✉', label: 'E-Mail', value: 'info@skypol-arts.de', color: 'var(--blue)' },
              { icon: '📍', label: 'Standort', value: 'Deutschland', color: 'var(--gold)' },
              { icon: '📸', label: 'Instagram', value: '@skypolarts', color: 'var(--magenta)' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 mb-4 p-4 rounded-2xl glass group hover:border-white/10 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: `rgba(${item.color === 'var(--blue)' ? '27,141,184' : item.color === 'var(--gold)' ? '212,168,32' : '181,55,123'},0.12)` }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
                  style={{ background: 'rgba(27,141,184,0.12)', border: '1px solid rgba(27,141,184,0.2)' }}
                >
                  ✓
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Nachricht gesendet!</h3>
                <p className="text-white/40 text-sm">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-white/30 uppercase tracking-widest block mb-2">Name</label>
                    <input
                      type="text" required placeholder="Ihr Name"
                      className={inputClass('name')} style={inputStyle('name')}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/30 uppercase tracking-widest block mb-2">E-Mail</label>
                    <input
                      type="email" required placeholder="ihre@email.de"
                      className={inputClass('email')} style={inputStyle('email')}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-white/30 uppercase tracking-widest block mb-2">Leistung</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s} type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className="text-[11px] px-3 py-1.5 rounded-full transition-all duration-200 tracking-wide"
                        style={{
                          background: form.service === s ? 'var(--blue)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.service === s ? 'var(--blue)' : 'rgba(255,255,255,0.08)'}`,
                          color: form.service === s ? '#fff' : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-white/30 uppercase tracking-widest block mb-2">Nachricht</label>
                  <textarea
                    required rows={5} placeholder="Beschreiben Sie Ihr Projekt..."
                    className={inputClass('message')} style={inputStyle('message')}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(27,141,184,0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl font-semibold text-sm tracking-wider uppercase"
                  style={{ background: 'linear-gradient(135deg, var(--blue), #1477a0)', color: '#fff' }}
                >
                  Nachricht senden →
                </motion.button>

                <p className="text-[10px] text-white/20 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
