#!/bin/bash
# Render all Neon Aura Studio ad variations
# 6 angles × 3 aspect ratios = 18 videos total
set -e

mkdir -p out/neon-aura

IDS=("hero" "logos" "social" "invitations" "cards" "pain")
SIZES=("1x1" "9x16" "16x9")

for id in "${IDS[@]}"; do
  for size in "${SIZES[@]}"; do
    COMP="NeonAura-${id}-${size}"
    OUT="out/neon-aura/${id}-${size}.mp4"
    echo "Rendering $COMP → $OUT"
    npx remotion render src/index.ts "$COMP" "$OUT"
  done
done

echo ""
echo "✓ Done — 18 videos in out/neon-aura/"
ls -lh out/neon-aura/
