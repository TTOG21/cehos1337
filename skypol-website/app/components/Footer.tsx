'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Skypol Arts & Media"
            width={90}
            height={36}
            className="h-8 w-auto object-contain opacity-80"
          />
        </div>

        <p className="text-xs text-white/30 text-center">
          © {new Date().getFullYear()} Skypol Arts_Media. Alle Rechte vorbehalten.
        </p>

        <div className="flex gap-5 text-xs text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Impressum</a>
          <a href="#" className="hover:text-white/60 transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
