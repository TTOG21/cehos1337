'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="divider max-w-6xl mx-auto mb-16" />

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[120px] md:text-[200px] font-black text-white/[0.012] select-none tracking-widest">
          SKYPOL
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/logo.svg"
              alt="Skypol Arts & Media"
              width={100}
              height={40}
              className="h-9 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>

          <div className="flex items-center gap-8 text-[11px] text-white/25 uppercase tracking-widest">
            {['Fotografie', 'Print', 'Social Media', 'Branding'].map((item) => (
              <a key={item} href="#leistungen" className="hover:text-white/50 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: 'IN', ariaLabel: 'LinkedIn', href: '#' },
              { label: 'IG', ariaLabel: 'Instagram', href: '#' },
              { label: 'FB', ariaLabel: 'Facebook', href: '#' },
            ].map(({ label, ariaLabel, href }) => (
              <motion.a
                key={label} href={href}
                aria-label={ariaLabel}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-[10px] font-bold text-white/30 hover:text-white/70 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span aria-hidden="true">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Skypol Arts_Media. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-[11px] text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors">Impressum</a>
            <a href="#" className="hover:text-white/40 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
