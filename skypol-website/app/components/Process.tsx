'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Kennenlernen',
    description: 'Wir hören zu. In einem kostenlosen Erstgespräch verstehen wir Ihre Marke, Ihre Ziele und Ihre Wünsche.',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategie & Konzept',
    description: 'Wir entwickeln ein maßgeschneidertes Konzept — visuell, inhaltlich, strategisch. Kein Copy-Paste.',
    color: 'var(--gold)',
    colorRgb: '212,168,32',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Produktion',
    description: 'Vom Shooting bis zum fertigen Design — wir produzieren mit höchster Sorgfalt und Liebe zum Detail.',
    color: 'var(--magenta)',
    colorRgb: '181,55,123',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch & Betreuung',
    description: 'Wir liefern, präsentieren und bleiben an Ihrer Seite — mit laufender Betreuung und regelmäßigem Reporting.',
    color: 'var(--blue)',
    colorRgb: '27,141,184',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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
            Wie wir arbeiten
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Unser Prozess.
            <br />
            <span className="gradient-text">Ihr Erfolg.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, var(--blue), var(--magenta), var(--gold), var(--blue))' }} />

          <div className="space-y-6 md:space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative md:pl-20"
              >
                {/* Step dot (desktop) */}
                <div
                  className="absolute left-0 top-8 w-12 h-12 rounded-full items-center justify-center hidden md:flex transition-all duration-500 group-hover:scale-110"
                  style={{ background: `rgba(${step.colorRgb},0.12)`, border: `1px solid rgba(${step.colorRgb},0.2)`, color: step.color }}
                >
                  {step.icon}
                </div>

                <motion.div
                  className="glass rounded-3xl p-7 md:p-8 flex items-start gap-6 cursor-default overflow-hidden"
                  whileHover={{ x: 8, transition: { duration: 0.25 } }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, rgba(${step.colorRgb},0.07) 0%, transparent 60%)` }}
                  />

                  {/* Number */}
                  <span
                    className="text-4xl font-black flex-shrink-0 leading-none mt-1"
                    style={{ color: `rgba(${step.colorRgb},0.25)` }}
                  >
                    {step.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow on hover */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full items-center justify-center hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-500 mt-1"
                    style={{ background: `rgba(${step.colorRgb},0.15)`, color: step.color }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
