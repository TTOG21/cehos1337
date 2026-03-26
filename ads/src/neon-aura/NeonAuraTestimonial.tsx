import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BRAND = {
  bg: "#080D1A",
  cyan: "#00E5FF",
  purple: "#7B2FE0",
  white: "#FFFFFF",
  subtext: "#8A9BB8",
};

export type TestimonialVariant = {
  quote: string;
  name: string;
  role: string;
  result: string;
};

export const TESTIMONIALS: TestimonialVariant[] = [
  {
    quote: "I was embarrassed to give out my old business cards. After Neon Aura, I actually look forward to networking.",
    name: "Sarah M.",
    role: "Small Business Owner",
    result: "3 new clients in first month",
  },
  {
    quote: "My Instagram followers went up 40% in the first month after we launched the new templates. People finally see me as a real business.",
    name: "James T.",
    role: "Freelance Photographer",
    result: "+40% followers in 30 days",
  },
  {
    quote: "Every single guest asked who designed the invitations. It set the entire tone for the event.",
    name: "Priya R.",
    role: "Event Host",
    result: "Viral among event guests",
  },
];

export const NeonAuraTestimonial: React.FC<TestimonialVariant> = ({
  quote,
  name,
  role,
  result,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgIn    = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const quoteIn = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 90 } });
  const nameIn  = spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 100 } });
  const resultIn = spring({ frame: frame - 55, fps, config: { damping: 12, stiffness: 80 } });

  const quoteY  = interpolate(quoteIn,  [0, 1], [30, 0]);
  const nameX   = interpolate(nameIn,   [0, 1], [-20, 0]);
  const resultS = interpolate(resultIn, [0, 1], [0.85, 1]);

  const pulse = 1 + 0.03 * Math.sin(frame * 0.06);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.bg,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 500 * pulse,
          height: 500 * pulse,
          borderRadius: "50%",
          background: BRAND.purple,
          opacity: bgIn * 0.2,
          filter: "blur(140px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 400 * pulse,
          height: 400 * pulse,
          borderRadius: "50%",
          background: BRAND.cyan,
          opacity: bgIn * 0.15,
          filter: "blur(120px)",
        }}
      />

      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${bgIn * 100}%`,
          height: 3,
          background: `linear-gradient(to right, ${BRAND.cyan}, ${BRAND.purple})`,
        }}
      />

      <div
        style={{
          padding: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          boxSizing: "border-box",
          gap: 36,
        }}
      >
        {/* Giant quote mark */}
        <div
          style={{
            fontSize: 120,
            lineHeight: 0.8,
            color: BRAND.cyan,
            opacity: bgIn * 0.4,
            fontFamily: "Georgia, serif",
            userSelect: "none",
          }}
        >
          "
        </div>

        {/* Quote text */}
        <blockquote
          style={{
            margin: 0,
            color: BRAND.white,
            fontSize: 34,
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.3px",
            transform: `translateY(${quoteY}px)`,
            opacity: quoteIn,
            maxWidth: 700,
          }}
        >
          {quote}
        </blockquote>

        {/* Name + role */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            transform: `translateX(${nameX}px)`,
            opacity: nameIn,
          }}
        >
          {/* Avatar placeholder with gradient */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 800,
              color: BRAND.bg,
            }}
          >
            {name[0]}
          </div>
          <div>
            <div style={{ color: BRAND.white, fontSize: 18, fontWeight: 700 }}>{name}</div>
            <div style={{ color: BRAND.subtext, fontSize: 14, letterSpacing: "0.5px" }}>{role}</div>
          </div>
        </div>

        {/* Result badge */}
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            transform: `scale(${resultS})`,
            transformOrigin: "left center",
            opacity: resultIn,
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${BRAND.cyan}22, ${BRAND.purple}22)`,
              border: `1px solid ${BRAND.cyan}`,
              color: BRAND.cyan,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "2px",
              padding: "8px 20px",
              borderRadius: 4,
              textTransform: "uppercase",
            }}
          >
            ✦ {result}
          </div>
        </div>
      </div>

      {/* Logo watermark bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 64,
          opacity: bgIn * 0.5,
          color: BRAND.subtext,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        NEON AURA STUDIO
      </div>
    </AbsoluteFill>
  );
};
