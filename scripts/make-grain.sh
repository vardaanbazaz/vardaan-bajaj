#!/usr/bin/env bash
# Builds the two page-background noise tiles in src/assets/ with ImageMagick 7.
# Fixed seeds, no date/time chunks: running it again produces byte-identical files.
#
#   grain-dark.png   light-grey noise, ~4% alpha   (dark theme, default)
#   grain-light.png  dark-grey noise,  ~3.5% alpha (light theme)
#
# Each tile is 256x256 8-bit grey+alpha. Per-pixel noise has no spatial correlation,
# so the tile repeats without a visible seam. Grey is posterized to 4 levels to keep
# each file under 40 KB (5+ levels or full-range noise does not fit).
#
# Usage: scripts/make-grain.sh   (from the repo root)

out_dir="src/assets"

if ! command -v magick >/dev/null 2>&1; then
  echo "make-grain.sh: ImageMagick 7 (magick) not found" >&2
  exit 1
fi

if [[ ! -d "$out_dir" ]]; then
  echo "make-grain.sh: run from the repo root ($out_dir missing)" >&2
  exit 1
fi

# make_tile <out> <seed> <grey-low%> <grey-high%> <alpha%>
make_tile() {
  local out=$1 seed=$2 lo=$3 hi=$4 alpha=$5
  magick -size 256x256 xc:gray50 -seed "$seed" +noise Random \
    -channel R -separate -posterize 4 +level "${lo}%,${hi}%" \
    -alpha set -channel A -evaluate set "${alpha}%" +channel \
    -strip -define png:exclude-chunks=date,time \
    -define png:color-type=4 -define png:bit-depth=8 \
    "$out" || return 1
  printf '%s  %s bytes\n' "$out" "$(stat -c %s "$out")"
}

make_tile "$out_dir/grain-dark.png" 20261125 40 100 4 || exit 1
make_tile "$out_dir/grain-light.png" 20261126 0 60 3.5 || exit 1
