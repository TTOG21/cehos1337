'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '50+', label: 'Zufriedene Kunden', color: 'var(--blue)' },
  { value: '3', label: 'Kreative Bereiche', color: 'var(--gold)' },
  { value: '100%', label: 'Maßgeschneidert', color: 'var(--magenta)' },
];

const brands = [
  { color: '#1B8DB8', label: 'Video & Digital', icon: '▶' },
  { color: '#D4A820', label: 'Audio & Kreation', icon: '♪' },
  { color: '#B5377B', label: 'Foto & Print', icon: '◎' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const xLeft = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const xRight = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="ueber-uns" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="divider max-w-6xl mx-auto mb-32" />

      {/* Floating brand letters */}
      <motion.div style={{ x: xLeft }} className="absolute top-1/4 -left-20 text-[200px] font-black text-white/[0.015] select-none pointer-events-none">S</motion.div>
      <motion.div style={{ x: xRight }} className="absolute bottom-1/4 -right-20 text-[200px] font-black text-white/[0.015] select-none pointer-events-none">M</motion.div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-16"
        >
          Über uns
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Ihr visueller Partner
              <br />
              für moderne{' '}
              <span className="gradient-text">Markenpräsenz.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-white/40 leading-[1.9] mb-5 text-[15px]"
            >
              Skypol Arts_Media ist eine Full-Service-Kreativagentur, die Fotografie, Grafikdesign
              und digitales Marketing vereint. Wir verstehen uns als visuellen Partner für Unternehmen,
              die ihre Marke modern und professionell präsentieren möchten.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-white/40 leading-[1.9] mb-12 text-[15px]"
            >
              Unter der Leitung unserer Fotografin{' '}
              <span className="text-white font-medium">Theodora Pol</span>{' '}
              decken wir das gesamte Spektrum der Fotografie ab und setzen jedes Motiv
              perfekt in Szene — ob Portraits, Produkte oder Events.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {['Fotografie', 'Grafikdesign', 'Social Media', 'Google Management', 'Print', 'Branding', 'Events'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1.5 rounded-full font-medium tracking-wider uppercase text-white/40 hover:text-white/70 transition-colors duration-300 cursor-default"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center group hover:border-white/10 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold mb-1 transition-all duration-300" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Brand colors card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass rounded-3xl p-8"
            >
              <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] mb-6">Unsere Markenwelt</p>
              <div className="flex gap-4">
                {brands.map(({ color, label, icon }) => (
                  <motion.div
                    key={label}
                    className="flex-1 rounded-2xl overflow-hidden cursor-default group"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="h-20 flex items-center justify-center text-2xl font-bold text-white/60 group-hover:text-white/90 transition-colors"
                      style={{ background: color }}
                    >
                      {icon}
                    </div>
                    <p className="text-[10px] text-white/30 text-center mt-3 leading-tight">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="gradient-border rounded-3xl p-8 flex items-center justify-between group cursor-pointer block"
              style={{ background: 'rgba(255,255,255,0.02)' }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <p className="text-sm font-semibold text-white mb-1">Bereit für Ihr Projekt?</p>
                <p className="text-[12px] text-white/35">Wir freuen uns auf Ihre Anfrage.</p>
              </div>
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--blue)' }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
