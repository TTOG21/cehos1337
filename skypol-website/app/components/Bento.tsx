'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiles = [
  {
    id: 'foto',
    col: 'md:col-span-2',
    row: 'md:row-span-2',
    color: 'var(--magenta)',
    colorRgb: '181,55,123',
    title: 'Fotografie',
    sub: 'Portrait · Produkt · Events',
    bg: 'radial-gradient(ellipse at 20% 80%, rgba(181,55,123,0.25) 0%, transparent 60%)',
    large: true,
    emoji: '📷',
  },
  {
    id: 'print',
    col: 'md:col-span-1',
    row: 'md:row-span-1',
    color: 'var(--gold)',
    colorRgb: '212,168,32',
    title: 'Print & Design',
    sub: 'Speisekarten · Poster · Flyer',
    bg: 'radial-gradient(ellipse at 80% 20%, rgba(212,168,32,0.2) 0%, transparent 60%)',
    large: false,
    emoji: '🎨',
  },
  {
    id: 'social',
    col: 'md:col-span-1',
    row: 'md:row-span-1',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    title: 'Social Media',
    sub: 'Content · Strategy · Growth',
    bg: 'radial-gradient(ellipse at 50% 80%, rgba(27,141,184,0.2) 0%, transparent 60%)',
    large: false,
    emoji: '📱',
  },
  {
    id: 'brand',
    col: 'md:col-span-2',
    row: 'md:row-span-1',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    title: 'Branding & Identity',
    sub: 'Logo · Farben · Typografie · Online-Präsenz',
    bg: 'radial-gradient(ellipse at 10% 50%, rgba(27,141,184,0.15) 0%, rgba(181,55,123,0.1) 100%)',
    large: false,
    emoji: '◈',
    wide: true,
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Kunden', color: 'var(--blue)' },
  { value: 100, suffix: '%', label: 'Individuell', color: 'var(--gold)' },
  { value: 3, suffix: '', label: 'Bereiche', color: 'var(--magenta)' },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="text-3xl font-black"
      style={{ color }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.01 }}
      >
        {inView && (
          <CountUp end={value} suffix={suffix} color={color} />
        )}
      </motion.span>
    </motion.span>
  );
}

function CountUp({ end, suffix, color }: { end: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onViewportEnter={() => {
        if (!ref.current) return;
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(start + (end - start) * eased);
          if (ref.current) ref.current.textContent = `${current}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      style={{ color }}
    >
      0{suffix}
    </motion.span>
  );
}

export default function Bento() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32 px-6 relative">
      <div className="divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/30 block mb-4"
          >
            Was wir schaffen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Kreativität
            <br />
            <span className="gradient-text">ohne Grenzen.</span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${tile.col} ${tile.row} group relative rounded-3xl overflow-hidden cursor-default glass ${tile.large ? 'min-h-[320px] md:min-h-[400px]' : 'min-h-[160px]'}`}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              style={{ background: tile.bg }}
            >
              {/* Animated border top */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${tile.color}, transparent)` }}
              />

              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                <div
                  className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `rgba(${tile.colorRgb},0.12)` }}
                >
                  {tile.emoji}
                </div>

                <div>
                  <h3 className={`font-bold text-white mb-1 ${tile.large ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                    {tile.title}
                  </h3>
                  <p className="text-sm text-white/40">{tile.sub}</p>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: tile.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              className="glass rounded-3xl p-7 text-center group hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <CountUp end={stat.value} suffix={stat.suffix} color={stat.color} />
              <p className="text-[11px] text-white/30 uppercase tracking-widest mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
