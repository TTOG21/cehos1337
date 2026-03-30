'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Zufriedene Kunden' },
  { value: '3', label: 'Kreative Kernbereiche' },
  { value: '100%', label: 'Maßgeschneidert' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ueber-uns" className="py-28 px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: 'var(--magenta)' }}
            >
              Über uns
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight"
            >
              Ihr visueller Partner für moderne Markenpräsenz
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 leading-relaxed mb-5"
            >
              Skypol Arts_Media ist eine Full-Service-Kreativagentur, die Fotografie, Grafikdesign und
              digitales Marketing vereint. Wir verstehen uns als visuellen Partner für Unternehmen,
              die ihre Marke modern und professionell präsentieren möchten.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              Unter der Leitung unserer Fotografin <strong className="text-white">Theodora Pol</strong> decken
              wir das gesamte Spektrum der Fotografie ab und setzen jedes Motiv perfekt in Szene —
              ob Portraits, Produkte oder Events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {['Fotografie', 'Grafikdesign', 'Social Media', 'Google Management', 'Print', 'Branding'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{ background: 'rgba(27,141,184,0.12)', border: '1px solid rgba(27,141,184,0.25)', color: 'var(--blue)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: stats + visual */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl p-5 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--blue)' }}>{stat.value}</div>
                  <div className="text-xs text-white/50 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Brand identity visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Unsere Markenfarben</p>
              <div className="flex gap-4 items-center">
                {[
                  { color: '#1B8DB8', name: 'Video & Digital' },
                  { color: '#D4A820', name: 'Audio & Kreation' },
                  { color: '#B5377B', name: 'Foto & Print' },
                ].map(({ color, name }) => (
                  <div key={name} className="flex flex-col items-center gap-2 flex-1">
                    <motion.div
                      className="w-full h-14 rounded-xl"
                      style={{ background: color }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-xs text-white/40 text-center leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
