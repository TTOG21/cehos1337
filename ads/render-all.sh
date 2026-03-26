#!/bin/bash
# Batch render all 8 Heuri-stica ad variations (4 angles × 2 aspect ratios)
set -e

mkdir -p out

ANGLES=("pain" "outcome" "identity" "contrarian")

for angle in "${ANGLES[@]}"; do
  echo "Rendering 1:1 feed ad — $angle..."
  npx remotion render src/index.ts "Heuri-stica-Ad-$angle" "out/heuri-stica-$angle-1x1.mp4"

  echo "Rendering 9:16 vertical ad — $angle..."
  npx remotion render src/index.ts "Heuri-stica-Vertical-$angle" "out/heuri-stica-$angle-9x16.mp4"
done

echo ""
echo "Done! Rendered files:"
ls -lh out/
