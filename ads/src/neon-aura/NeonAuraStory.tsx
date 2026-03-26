import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Audio,
} from "remotion";

const BRAND = {
  bg: "#080D1A",
  cyan: "#00E5FF",
  purple: "#7B2FE0",
  white: "#FFFFFF",
  subtext: "#8A9BB8",
};

// 9:16 vertical story-format ad
// Structure: Hook (0-1s) → Pain (1-2s) → Solution (2-3s) → CTA (3-4s)
// At 30fps: 0-30 | 30-60 | 60-90 | 90-120

export const NeonAuraStory: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Phase boundaries (30fps)
  const phase = Math.floor(frame / 30); // 0, 1, 2, 3

  // Per-phase entry progress
  const phaseFrame = frame % 30;
  const phaseIn = spring({ frame: phaseFrame - 2, fps, config: { damping: 14, stiffness: 120 } });

  const textY   = interpolate(phaseIn, [0, 1], [30, 0]);
  const opacity = interpolate(phaseIn, [0, 1], [0, 1]);

  // Background pulse
  const pulse = 1 + 0.05 * Math.sin(frame * 0.08);

  // Progress bar
  const progress = frame / durationInFrames;

  const phases = [
    {
      tag: "THE PROBLEM",
      tagColor: "#FF4444",
      headline: "Your brand is losing you clients.",
      sub: "Every day you show up with a weak logo and inconsistent visuals, someone else gets the job.",
    },
    {
      tag: "THE TRUTH",
      tagColor: BRAND.cyan,
      headline: "You don't need a rebrand. You need a glow-up.",
      sub: "A logo, a color system, a few templates. Done in days, not months.",
    },
    {
      tag: "THE SOLUTION",
      tagColor: BRAND.purple,
      headline: "We make brands glow.",
      sub: "Logos · Social Posts · Invitations · Business Cards",
    },
    {
      tag: "GET STARTED",
      tagColor: BRAND.cyan,
      headline: "Free 15-min consultation.",
      sub: "Book now. No pitch. Just honest brand advice.",
    },
  ];

  const current = phases[Math.min(phase, 3)];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.bg,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: -200,
          width: 700 * pulse,
          height: 700 * pulse,
          borderRadius: "50%",
          background: phase === 0 ? "#FF2200" : phase === 2 ? BRAND.purple : BRAND.cyan,
          opacity: 0.12,
          filter: "blur(180px)",
          transition: "background 0.5s",
        }}
      />

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          height: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            borderRadius: 2,
            background: `linear-gradient(to right, ${BRAND.cyan}, ${BRAND.purple})`,
          }}
        />
      </div>

      {/* Logo top */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <defs>
            <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={BRAND.cyan} />
              <stop offset="100%" stopColor={BRAND.purple} />
            </linearGradient>
          </defs>
          <circle cx="28" cy="28" r="24" stroke="url(#sg)" strokeWidth="2.5" fill="none" />
          <path d="M28 18 L29.5 26.5 L38 28 L29.5 29.5 L28 38 L26.5 29.5 L18 28 L26.5 26.5 Z" fill={BRAND.cyan} />
        </svg>
        <span style={{ color: BRAND.white, fontSize: 14, fontWeight: 800, letterSpacing: "3px" }}>
          NEON AURA STUDIO
        </span>
      </div>

      {/* Main content — centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          padding: "0 56px",
          gap: 28,
        }}
      >
        {/* Phase tag */}
        <div
          style={{
            backgroundColor: current.tagColor + "22",
            border: `1px solid ${current.tagColor}`,
            color: current.tagColor,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "3px",
            padding: "6px 16px",
            borderRadius: 4,
            opacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          {current.tag}
        </div>

        {/* Headline */}
        <h1
          style={{
            color: BRAND.white,
            fontSize: 52,
            fontWeight: 900,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-1px",
            opacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          {current.headline}
        </h1>

        {/* Sub */}
        <p
          style={{
            color: BRAND.subtext,
            fontSize: 20,
            lineHeight: 1.5,
            margin: 0,
            opacity: interpolate(phaseIn, [0, 1], [0, 0.85]),
            transform: `translateY(${interpolate(phaseIn, [0, 1], [15, 0])}px)`,
          }}
        >
          {current.sub}
        </p>

        {/* CTA in last phase */}
        {phase === 3 && (
          <div
            style={{
              opacity,
              transform: `translateY(${textY}px)`,
              marginTop: 8,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
                color: BRAND.bg,
                fontSize: 18,
                fontWeight: 800,
                padding: "18px 40px",
                borderRadius: 50,
                letterSpacing: "0.5px",
              }}
            >
              Book Free Consultation →
            </div>
          </div>
        )}
      </div>

      {/* Phase counter dots */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: i === phase ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === phase ? BRAND.cyan : "rgba(255,255,255,0.2)",
              transition: "width 0.3s",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
