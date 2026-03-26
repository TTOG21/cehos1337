import React from "react";
import { Composition } from "remotion";
import { NeonAuraAd, NeonAuraVariant } from "./NeonAuraAd";
import { NeonAuraTestimonial, TESTIMONIALS } from "./NeonAuraTestimonial";
import { NeonAuraStory } from "./NeonAuraStory";

export const NEON_AURA_VARIANTS: NeonAuraVariant[] = [
  // 1 — General brand / hero
  {
    id: "hero",
    service: "general",
    headline: "We Make Brands Glow.",
    sub: "From bold logos to stunning social content — every pixel crafted to make your brand impossible to ignore.",
    cta: "Start Your Project",
    tagline: "We make brands glow",
  },
  // 2 — Logo design focus
  {
    id: "logos",
    service: "logos",
    headline: "Your Logo Should Stop the Scroll.",
    sub: "We design logos that people remember — clean, bold, and built to last across every platform.",
    cta: "Get a Logo Quote",
  },
  // 3 — Social media posts
  {
    id: "social",
    service: "social",
    headline: "Social Posts That Get Saves, Not Skips.",
    sub: "Eye-catching social media graphics designed to grow your audience and convert followers into fans.",
    cta: "See Our Work",
  },
  // 4 — Invitations
  {
    id: "invitations",
    service: "invitations",
    headline: "Invitations as Memorable as the Event.",
    sub: "Custom digital and print invitations that set the tone before guests even arrive.",
    cta: "Design My Invite",
  },
  // 5 — Business cards
  {
    id: "cards",
    service: "cards",
    headline: "Leave a Lasting Impression.",
    sub: "Business cards that people keep. Premium design that makes your first meeting unforgettable.",
    cta: "Order Business Cards",
  },
  // 6 — Pain / urgency angle
  {
    id: "pain",
    service: "general",
    headline: "A Weak Brand Is Costing You Clients.",
    sub: "If your visuals don't reflect your value, you're losing deals before you even speak. Let's fix that.",
    cta: "Rebrand Now",
  },
];

export const NeonAuraCompositions: React.FC = () => (
  <>
    {/* 1:1 Square — Meta feed, LinkedIn */}
    {NEON_AURA_VARIANTS.map((v) => (
      <Composition
        key={`${v.id}-1x1`}
        id={`NeonAura-${v.id}-1x1`}
        component={NeonAuraAd}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={v}
      />
    ))}

    {/* 9:16 Vertical — Stories, Reels, TikTok */}
    {NEON_AURA_VARIANTS.map((v) => (
      <Composition
        key={`${v.id}-9x16`}
        id={`NeonAura-${v.id}-9x16`}
        component={NeonAuraAd}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={v}
      />
    ))}

    {/* 16:9 Landscape — YouTube pre-roll, Google Display */}
    {NEON_AURA_VARIANTS.map((v) => (
      <Composition
        key={`${v.id}-16x9`}
        id={`NeonAura-${v.id}-16x9`}
        component={NeonAuraAd}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={v}
      />
    ))}

    {/* Testimonial cards — 1:1 and 9:16 */}
    {TESTIMONIALS.map((t, i) => (
      <React.Fragment key={`testimonial-${i}`}>
        <Composition
          id={`NeonAura-Testimonial-${i + 1}-1x1`}
          component={NeonAuraTestimonial}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1080}
          defaultProps={t}
        />
        <Composition
          id={`NeonAura-Testimonial-${i + 1}-9x16`}
          component={NeonAuraTestimonial}
          durationInFrames={120}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={t}
        />
      </React.Fragment>
    ))}

    {/* Story ad — 4-phase 9:16 (120 frames = 4 seconds) */}
    <Composition
      id="NeonAura-Story-9x16"
      component={NeonAuraStory}
      durationInFrames={120}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  </>
);
