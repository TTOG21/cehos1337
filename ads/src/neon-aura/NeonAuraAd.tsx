import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ─── Brand tokens extracted from Neon Aura Studio assets ───────────────────
const BRAND = {
  bg: "#080D1A",           // deep navy
  bgGlow: "#0C1428",       // slightly lighter navy for glow areas
  cyan: "#00E5FF",         // primary accent – teal/cyan
  purple: "#7B2FE0",       // secondary accent – violet
  white: "#FFFFFF",
  subtext: "#8A9BB8",      // muted blue-grey
  gradientStart: "#00CFCF",
  gradientEnd: "#7B2FE0",
};

export type NeonAuraVariant = {
  id: string;
  headline: string;
  sub: string;
  cta: string;
  service: "logos" | "social" | "invitations" | "cards" | "general";
  tagline?: string;
};

// ─── SVG Logo mark (circle + 4-pointed star) ────────────────────────────────
const LogoMark: React.FC<{ size?: number }> = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
    <defs>
      <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={BRAND.cyan} />
        <stop offset="100%" stopColor={BRAND.purple} />
      </linearGradient>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Outer ring */}
    <circle cx="28" cy="28" r="24" stroke="url(#ring-grad)" strokeWidth="2.5" fill="none" filter="url(#glow)" />
    {/* 4-pointed star */}
    <path
      d="M28 18 L29.5 26.5 L38 28 L29.5 29.5 L28 38 L26.5 29.5 L18 28 L26.5 26.5 Z"
      fill={BRAND.cyan}
      filter="url(#glow)"
    />
  </svg>
);

// ─── Glow circle background decoration ──────────────────────────────────────
const GlowOrb: React.FC<{ x: number; y: number; color: string; size: number; opacity: number }> = ({
  x, y, color, size, opacity,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      opacity,
      filter: `blur(${size * 0.45}px)`,
      pointerEvents: "none",
    }}
  />
);

// ─── Service badge icons ─────────────────────────────────────────────────────
const SERVICE_LABELS: Record<NeonAuraVariant["service"], string> = {
  logos: "LOGO DESIGN",
  social: "SOCIAL MEDIA POSTS",
  invitations: "INVITATIONS",
  cards: "BUSINESS CARDS",
  general: "BRAND DESIGN",
};

// ─── Main Ad Component ───────────────────────────────────────────────────────
export const NeonAuraAd: React.FC<NeonAuraVariant> = ({
  headline,
  sub,
  cta,
  service,
  tagline,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animation timing
  const logoIn   = spring({ frame: frame - 0,  fps, config: { damping: 16, stiffness: 120 } });
  const glowIn   = interpolate(frame, [5, 35], [0, 1], { extrapolateRight: "clamp" });
  const lineIn   = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });
  const headIn   = spring({ frame: frame - 18, fps, config: { damping: 14, stiffness: 100 } });
  const subIn    = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 } });
  const ctaIn    = spring({ frame: frame - 44, fps, config: { damping: 12, stiffness: 80 } });
  const badgeIn  = spring({ frame: frame - 8,  fps, config: { damping: 18, stiffness: 130 } });

  const headY  = interpolate(headIn, [0, 1], [36, 0]);
  const subY   = interpolate(subIn,  [0, 1], [24, 0]);
  const ctaY   = interpolate(ctaIn,  [0, 1], [20, 0]);
  const logoS  = interpolate(logoIn, [0, 1], [0.7, 1]);

  // Subtle pulse on glow orbs
  const pulse = 1 + 0.04 * Math.sin(frame * 0.07);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.bg,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <GlowOrb x={-120} y={-80}  color={BRAND.purple} size={400 * pulse} opacity={glowIn * 0.35} />
      <GlowOrb x={700}  y={600}  color={BRAND.cyan}   size={320 * pulse} opacity={glowIn * 0.25} />
      <GlowOrb x={400}  y={200}  color={BRAND.purple} size={200}         opacity={glowIn * 0.12} />

      {/* Gradient accent line (top) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${lineIn * 100}%`,
          height: 3,
          background: `linear-gradient(to right, ${BRAND.cyan}, ${BRAND.purple})`,
          opacity: 0.9,
        }}
      />

      <div style={{ padding: 64, display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>

        {/* ── Logo row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: logoIn,
            transform: `scale(${logoS})`,
            transformOrigin: "left center",
          }}
        >
          <LogoMark size={52} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                color: BRAND.white,
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              NEON AURA
            </span>
            <span
              style={{
                color: BRAND.cyan,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "5px",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              STUDIO
            </span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>

          {/* Service badge */}
          <div
            style={{
              display: "inline-flex",
              opacity: badgeIn,
              transform: `translateX(${interpolate(badgeIn, [0, 1], [-20, 0])}px)`,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                border: `1px solid ${BRAND.cyan}`,
                color: BRAND.cyan,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "3px",
                padding: "6px 14px",
                borderRadius: 4,
                textTransform: "uppercase",
                background: "rgba(0,229,255,0.07)",
              }}
            >
              {SERVICE_LABELS[service]}
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              color: BRAND.white,
              fontSize: 58,
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-1px",
              transform: `translateY(${headY}px)`,
              opacity: headIn,
              maxWidth: 560,
              textShadow: `0 0 40px rgba(0,229,255,0.15)`,
            }}
          >
            {headline}
          </h1>

          {/* Subtext */}
          <p
            style={{
              color: BRAND.subtext,
              fontSize: 19,
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 500,
              transform: `translateY(${subY}px)`,
              opacity: interpolate(subIn, [0, 1], [0, 1]),
            }}
          >
            {sub}
          </p>

          {/* Tagline badge */}
          {tagline && (
            <div
              style={{
                color: BRAND.cyan,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "1px",
                opacity: interpolate(subIn, [0, 1], [0, 0.8]),
                fontStyle: "italic",
              }}
            >
              "{tagline}"
            </div>
          )}
        </div>

        {/* ── CTA row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            transform: `translateY(${ctaY}px)`,
            opacity: ctaIn,
          }}
        >
          {/* CTA button with gradient border */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -2,
                borderRadius: 50,
                background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
                filter: "blur(1px)",
              }}
            />
            <div
              style={{
                position: "relative",
                backgroundColor: BRAND.bg,
                padding: "16px 36px",
                borderRadius: 50,
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: "0.5px",
                color: BRAND.white,
                background: `linear-gradient(135deg, ${BRAND.cyan}22, ${BRAND.purple}22)`,
                border: `1.5px solid transparent`,
                backgroundClip: "padding-box",
              }}
            >
              {cta}
            </div>
          </div>

          {/* Dot separator + services list */}
          <div
            style={{
              color: BRAND.subtext,
              fontSize: 12,
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: 1.8,
            }}
          >
            LOGOS · SOCIAL · INVITES
            <br />
            BUSINESS CARDS
          </div>
        </div>

      </div>

      {/* Bottom gradient accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: `${lineIn * 60}%`,
          height: 2,
          background: `linear-gradient(to left, ${BRAND.cyan}, transparent)`,
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};
