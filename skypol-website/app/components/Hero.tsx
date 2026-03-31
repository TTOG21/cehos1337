'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const rotatingWords = ['sichtbar.', 'stark.', 'einzigartig.', 'unvergesslich.'];

function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative inline-block overflow-hidden" style={{ minWidth: '340px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="block"
          style={{ color: ['#1B8DB8', '#B5377B', '#D4A820', '#1B8DB8'][index % 4] }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary blue orb */}
        <motion.div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(27,141,184,0.2) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Magenta orb */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(181,55,123,0.18) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        {/* Gold accent */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,168,32,0.1) 0%, transparent 70%)' }}
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, var(--dark) 80%)' }} />
      </div>

      {/* Parallax content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/logo.svg"
            alt="Skypol Arts & Media"
            width={260}
            height={104}
            className="h-24 md:h-36 w-auto object-contain drop-shadow-[0_0_40px_rgba(27,141,184,0.2)]"
            priority
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 glass"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue)' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue)' }} />
          </span>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/60">Full-Service Kreativagentur</span>
        </motion.div>

        {/* Headline — split line animation */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95]"
          >
            Wir machen
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95] gradient-text"
          >
            Ihre Marke
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95]"
          >
            <WordRotator />
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-white/40 max-w-lg mx-auto mb-12 leading-relaxed font-light"
        >
          Fotografie · Grafikdesign · Social Media.
          <br />
          Von der Idee bis zur fertigen Kampagne — aus einer Hand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#leistungen"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(27,141,184,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
            style={{ background: 'linear-gradient(135deg, var(--blue), #1477a0)', color: '#fff' }}
          >
            Leistungen entdecken
          </motion.a>
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase border border-white/10 text-white/60 hover:text-white transition-colors duration-300"
          >
            Projekt starten →
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
