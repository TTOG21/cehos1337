import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type AdVariant = {
  headline: string;
  subtext: string;
  cta: string;
  angle: "pain" | "outcome" | "identity" | "contrarian";
};

const COLORS = {
  pain:       { bg: "#0D0D0D", accent: "#FF3B3B", text: "#FFFFFF", sub: "#AAAAAA" },
  outcome:    { bg: "#0A1628", accent: "#4F8EF7", text: "#FFFFFF", sub: "#7AA3D8" },
  identity:   { bg: "#F5F0E8", accent: "#1A1A1A", text: "#1A1A1A", sub: "#555555" },
  contrarian: { bg: "#111827", accent: "#A855F7", text: "#FFFFFF", sub: "#9CA3AF" },
};

export const AdBanner: React.FC<AdVariant> = ({ headline, subtext, cta, angle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const c = COLORS[angle];

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const headlineProgress = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 100 } });
  const headlineY = interpolate(headlineProgress, [0, 1], [40, 0]);

  const subtextProgress = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const subtextOpacity = interpolate(subtextProgress, [0, 1], [0, 1]);

  const ctaProgress = spring({ frame: frame - 38, fps, config: { damping: 12, stiffness: 80 } });
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.8, 1]);
  const ctaOpacity = interpolate(ctaProgress, [0, 1], [0, 1]);

  const accentLineWidth = interpolate(frame, [5, 35], [0, 80], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: c.bg,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        padding: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo row */}
      <div style={{ opacity: logoOpacity, display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: c.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 18,
            color: angle === "identity" ? "#fff" : c.bg,
          }}
        >
          H
        </div>
        <span style={{ color: c.text, fontSize: 18, fontWeight: 600, letterSpacing: "-0.3px" }}>
          heuri-stica
        </span>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        {/* Accent line */}
        <div
          style={{
            width: accentLineWidth,
            height: 3,
            backgroundColor: c.accent,
            borderRadius: 2,
          }}
        />

        {/* Headline */}
        <h1
          style={{
            color: c.text,
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-1.5px",
            transform: `translateY(${headlineY}px)`,
            maxWidth: 540,
          }}
        >
          {headline}
        </h1>

        {/* Subtext */}
        <p
          style={{
            color: c.sub,
            fontSize: 20,
            lineHeight: 1.5,
            margin: 0,
            maxWidth: 480,
            opacity: subtextOpacity,
          }}
        >
          {subtext}
        </p>
      </div>

      {/* CTA */}
      <div
        style={{
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
          transformOrigin: "left center",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            backgroundColor: c.accent,
            color: angle === "identity" ? "#fff" : c.bg,
            padding: "16px 32px",
            borderRadius: 50,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "-0.3px",
          }}
        >
          {cta}
        </div>
        <span style={{ color: c.sub, fontSize: 15 }}>heuri-stica.netlify.app</span>
      </div>
    </AbsoluteFill>
  );
};
