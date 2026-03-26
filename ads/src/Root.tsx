import React from "react";
import { Composition } from "remotion";
import { AdBanner, AdVariant } from "./AdBanner";

// All 4 ad variations for the Heuri-stica campaign
export const AD_VARIANTS: AdVariant[] = [
  {
    angle: "pain",
    headline: "Stop Losing Users to Bad UX",
    subtext: "Your analytics can't see the real reason users leave. Heuristic evaluation can.",
    cta: "Get a Free UX Audit",
  },
  {
    angle: "outcome",
    headline: "UX Research With Measurable ROI",
    subtext: "Data-backed design decisions in days, not sprints. See exactly what to fix.",
    cta: "See How It Works",
  },
  {
    angle: "identity",
    headline: "Built for Product Teams Who Ship",
    subtext: "Expert UX analysis without the 6-week research cycle. Fast, focused, actionable.",
    cta: "Book a Call",
  },
  {
    angle: "contrarian",
    headline: "UX Insights in Days, Not Months",
    subtext: "Traditional user research takes forever. Our heuristic approach doesn't.",
    cta: "Start in 48 Hours",
  },
];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {AD_VARIANTS.map((variant, i) => (
        <Composition
          key={variant.angle}
          id={`Heuri-stica-Ad-${variant.angle}`}
          component={AdBanner}
          durationInFrames={90} // 3 seconds at 30fps
          fps={30}
          width={1080}
          height={1080} // 1:1 for social feed
          defaultProps={variant}
        />
      ))}
      {/* 9:16 vertical variants for Stories/Reels/TikTok */}
      {AD_VARIANTS.map((variant) => (
        <Composition
          key={`${variant.angle}-vertical`}
          id={`Heuri-stica-Vertical-${variant.angle}`}
          component={AdBanner}
          durationInFrames={90}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={variant}
        />
      ))}
    </>
  );
};
