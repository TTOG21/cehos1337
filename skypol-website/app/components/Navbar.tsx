'use client';

import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60);
  });

  const links = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(6,6,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.svg"
              alt="Skypol Arts & Media"
              width={130}
              height={52}
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative px-4 py-2 text-[13px] text-white/50 hover:text-white transition-colors duration-300 tracking-wider uppercase font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-[var(--blue)] to-[var(--magenta)] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="ml-4 text-[13px] px-6 py-2.5 rounded-full font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(27,141,184,0.3)]"
              style={{ background: 'linear-gradient(135deg, var(--blue), #1477a0)', color: '#fff' }}
            >
              Anfrage
            </motion.a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} className="block h-[1.5px] w-6 bg-white origin-center" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }} className="block h-[1.5px] w-6 bg-white" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} className="block h-[1.5px] w-6 bg-white origin-center" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <motion.div
        className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' as const : 'none' as const,
        }}
        transition={{ duration: 0.4 }}
        style={{ background: 'rgba(6,6,10,0.97)', backdropFilter: 'blur(30px)' }}
      >
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            animate={{ y: mobileOpen ? 0 : 30, opacity: mobileOpen ? 1 : 0 }}
            transition={{ delay: mobileOpen ? i * 0.1 : 0, duration: 0.4 }}
            className="text-2xl font-light tracking-widest uppercase text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.header>
  );
}
