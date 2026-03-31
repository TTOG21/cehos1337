'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    color: 'var(--magenta)',
    colorRgb: '181,55,123',
    title: 'Professionelle Fotografie',
    description: 'Unter der Leitung von Theodora Pol setzen wir jedes Motiv perfekt in Szene — ob Portraits, Produkte oder Events.',
    items: ['Portrait & Personal Branding', 'Produktfotografie', 'Event-Reportagen', 'Corporate & Business'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    number: '02',
    color: 'var(--gold)',
    colorRgb: '212,168,32',
    title: 'Werbeagentur & Print',
    description: 'Hochwertige Drucksachen und Werbemittel, die Ihre Marke greifbar machen — von Speisekarten bis Geschäftsausstattung.',
    items: ['Individuelle Speisekarten', 'Poster & Plakate', 'Geschäftsausstattung', 'Werbemittel & Flyer'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '03',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    title: 'Social Media & Digital',
    description: 'Wir sind das Gesicht Ihrer Marke in der digitalen Welt — von Content Creation bis Google-Optimierung.',
    items: ['Content Creation', 'Google My Business', 'Corporate Branding', 'Online-Markenpräsenz'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl p-8 md:p-10 overflow-hidden cursor-default glass"
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(${service.colorRgb},0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
      />

      {/* Number */}
      <div className="flex items-center justify-between mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
          style={{ background: `rgba(${service.colorRgb},0.12)`, color: service.color }}
        >
          {service.icon}
        </div>
        <span className="text-5xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
          {service.number}
        </span>
      </div>

      {/* Text */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-tight">{service.title}</h3>
      <p className="text-sm text-white/40 mb-8 leading-relaxed">{service.description}</p>

      {/* Items */}
      <ul className="space-y-3">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-500 group-hover:w-4 group-hover:h-[2px] group-hover:rounded-none"
              style={{ background: service.color }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <motion.div
        className="absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: `rgba(${service.colorRgb},0.15)`, color: service.color }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="leistungen" className="py-32 px-6 relative">
      {/* Divider */}
      <div className="divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-4"
          >
            Was wir anbieten
          </motion.span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Drei Bereiche.
              <br />
              <span className="gradient-text">Eine Vision.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/35 text-sm max-w-sm leading-relaxed"
            >
              Von der Aufnahme bis zur Kampagne — wir begleiten Ihre Marke auf jedem Schritt mit Kreativität und Expertise.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
