'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '📷',
    color: 'var(--magenta)',
    colorRgb: '181,55,123',
    title: 'Professionelle Fotografie',
    subtitle: 'unter der Leitung von Theodora Pol',
    items: [
      'Portrait & Personal Branding',
      'Produktfotografie',
      'Event- & Reportagefotografie',
      'Business & Corporate Fotografie',
    ],
  },
  {
    icon: '🎨',
    color: 'var(--gold)',
    colorRgb: '212,168,32',
    title: 'Werbeagentur & Print',
    subtitle: 'hochwertiges Design für Ihre Marke',
    items: [
      'Individuelle Speisekarten (Gastronomie)',
      'Poster, Plakate & Flyer',
      'Geschäftsausstattung & Visitenkarten',
      'Werbemittel & Promotion-Material',
    ],
  },
  {
    icon: '📱',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    title: 'Social Media & Digital',
    subtitle: 'Ihre Online-Präsenz, professionell',
    items: [
      'Content Creation für alle Plattformen',
      'Google My Business Betreuung & SEO',
      'Branding & Corporate Identity',
      'Konsistente Online-Markenpräsenz',
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl p-8 overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(${service.colorRgb},0.12) 0%, transparent 60%)`,
        }}
      />

      {/* Top border accent */}
      <div
        className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
        style={{ background: `rgba(${service.colorRgb},0.15)` }}
      >
        {service.icon}
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold mb-1 text-white">{service.title}</h3>
      <p className="text-xs text-white/40 mb-5 italic">{service.subtitle}</p>

      {/* Items */}
      <ul className="space-y-3">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-white/65 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section id="leistungen" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4 block"
            style={{ color: 'var(--blue)' }}
          >
            Was wir anbieten
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Von der Aufnahme bis zur Kampagne — wir begleiten Ihre Marke auf jedem Schritt.
          </p>
        </motion.div>

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
