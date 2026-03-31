'use client';

import { motion } from 'framer-motion';

const words = [
  { text: 'Fotografie', color: 'var(--magenta)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Grafikdesign', color: 'var(--gold)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Social Media', color: 'var(--blue)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Branding', color: 'var(--magenta)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Print & Design', color: 'var(--gold)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Google Management', color: 'var(--blue)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Events', color: 'var(--magenta)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
  { text: 'Corporate Identity', color: 'var(--gold)' },
  { text: '✦', color: 'rgba(255,255,255,0.15)' },
];

const doubled = [...words, ...words];

export default function Marquee() {
  return (
    <div className="relative py-6 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--dark), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--dark), transparent)' }} />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            className="text-sm font-medium tracking-widest uppercase flex-shrink-0"
            style={{ color: word.color }}
          >
            {word.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
