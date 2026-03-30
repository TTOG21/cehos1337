'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-4"
            style={{ color: 'var(--gold)' }}
          >
            Kontakt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Schreiben Sie uns — wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl p-8 md:p-12"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ background: 'rgba(27,141,184,0.15)' }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Nachricht gesendet!</h3>
              <p className="text-white/50">Wir melden uns so schnell wie möglich bei Ihnen.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ihr Name"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      // @ts-ignore
                      '--tw-ring-color': 'var(--blue)',
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ihre@email.de"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/50 font-medium uppercase tracking-wider block mb-2">
                  Nachricht
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Beschreiben Sie Ihr Projekt..."
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none transition-all duration-200 focus:ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="text-xs text-white/30">
                  Wir behandeln Ihre Daten vertraulich und geben sie nicht weiter.
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, var(--blue), #1565a8)', color: '#fff' }}
                >
                  Nachricht senden →
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Social / contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/40"
        >
          <span>📧 info@skypol-arts.de</span>
          <span>📍 Deutschland</span>
          <span>📸 @skypolarts</span>
        </motion.div>
      </div>
    </section>
  );
}
