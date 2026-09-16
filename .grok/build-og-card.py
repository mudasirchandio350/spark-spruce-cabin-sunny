#!/usr/bin/env python3
"""Build Fieldline 1200x630 share-card HTML (topographic contours + lockup)."""
from __future__ import annotations

import math
from pathlib import Path

W, H = 1200, 630
CHARCOAL = "#0C0D0C"
PAPER = "#EDEAE3"
SAGE = "#9AA3A0"


def height(x: float, y: float) -> float:
    """Soft rolling-hill height field, slightly calmer near the title center."""
    nx, ny = x / W, y / H
    h = (
        0.55 * math.sin(nx * 5.2 + 0.4)
        + 0.40 * math.sin(ny * 4.1 + nx * 1.7 + 1.1)
        + 0.28 * math.sin((nx + ny) * 6.4 + 0.6)
        + 0.18 * math.sin(nx * 11.0 - ny * 3.2)
        + 0.12 * math.sin(ny * 9.5 + 2.2)
        + 0.08 * math.sin(nx * 17.0 + ny * 8.0)
    )
    cx, cy = 0.50, 0.48
    d = math.hypot((nx - cx) * 1.15, (ny - cy) * 1.6)
    hush = 1.0 - 0.55 * math.exp(-((d / 0.42) ** 2))
    return h * hush


def marching_polylines(level: float, step: int = 8) -> list[list[tuple[float, float]]]:
    cols, rows = W // step, H // step
    segs: list[tuple[tuple[float, float], tuple[float, float]]] = []

    def interp(p1, p2, v1, v2):
        t = 0 if v2 == v1 else (level - v1) / (v2 - v1)
        t = max(0.0, min(1.0, t))
        return (p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1]))

    grid = [[height(c * step, r * step) for c in range(cols + 1)] for r in range(rows + 1)]
    for r in range(rows):
        for c in range(cols):
            v = [
                grid[r][c],
                grid[r][c + 1],
                grid[r + 1][c + 1],
                grid[r + 1][c],
            ]
            p = [
                (c * step, r * step),
                ((c + 1) * step, r * step),
                ((c + 1) * step, (r + 1) * step),
                (c * step, (r + 1) * step),
            ]
            idx = sum(1 << i for i, val in enumerate(v) if val >= level)
            table = {
                1: [(0, 3)],
                2: [(0, 1)],
                3: [(1, 3)],
                4: [(1, 2)],
                5: [(0, 1), (2, 3)],
                6: [(0, 2)],
                7: [(2, 3)],
                8: [(2, 3)],
                9: [(0, 2)],
                10: [(0, 3), (1, 2)],
                11: [(1, 2)],
                12: [(1, 3)],
                13: [(0, 1)],
                14: [(0, 3)],
            }.get(idx, [])
            for a, b in table:
                pa = interp(p[a], p[(a + 1) % 4], v[a], v[(a + 1) % 4])
                pb = interp(p[b], p[(b + 1) % 4], v[b], v[(b + 1) % 4])
                segs.append((pa, pb))

    # stitch into polylines
    unused = set(range(len(segs)))
    key = lambda pt: (round(pt[0], 1), round(pt[1], 1))
    start_map: dict[tuple[float, float], list[int]] = {}
    for i, (a, b) in enumerate(segs):
        start_map.setdefault(key(a), []).append(i)
        start_map.setdefault(key(b), []).append(i)

    polylines: list[list[tuple[float, float]]] = []
    while unused:
        i = unused.pop()
        a, b = segs[i]
        pts = [a, b]
        # grow forward
        for _ in range(4000):
            k = key(pts[-1])
            nxt = None
            for j in start_map.get(k, []):
                if j in unused:
                    sa, sb = segs[j]
                    unused.remove(j)
                    nxt = sb if key(sa) == k else sa
                    break
            if nxt is None:
                break
            pts.append(nxt)
        polylines.append(pts)
    return [pl for pl in polylines if len(pl) > 8]


def path_d(pts: list[tuple[float, float]]) -> str:
    bits = [f"M{pts[0][0]:.1f},{pts[0][1]:.1f}"]
    for x, y in pts[1:]:
        bits.append(f"L{x:.1f},{y:.1f}")
    return " ".join(bits)


def contour_svg() -> str:
    levels = [-0.85, -0.62, -0.40, -0.18, 0.04, 0.26, 0.48, 0.70, 0.92]
    parts = []
    for i, lv in enumerate(levels):
        # alternate sage / paper, thinner at higher frequency
        color = PAPER if i % 3 == 0 else SAGE
        opacity = 0.18 if i % 3 == 0 else 0.38
        width = 1.15 if i % 2 == 0 else 0.85
        for pl in marching_polylines(lv):
            parts.append(
                f'<path d="{path_d(pl)}" fill="none" stroke="{color}" '
                f'stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round" '
                f'opacity="{opacity}"/>'
            )
    return "\n".join(parts)


def main() -> None:
    svg_paths = contour_svg()
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
@font-face {{
  font-family: "Barlow Condensed";
  src: url("fonts/f1.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}}
html, body {{
  margin: 0;
  padding: 0;
  width: {W}px;
  height: {H}px;
  background: {CHARCOAL};
  overflow: hidden;
}}
.stage {{
  position: relative;
  width: {W}px;
  height: {H}px;
  background: {CHARCOAL};
}}
.stage svg {{
  position: absolute;
  inset: 0;
}}
.lockup {{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 760px;
}}
.rule {{
  width: 220px;
  height: 1px;
  margin: 0 auto;
  background: {SAGE};
  opacity: 0.85;
}}
.title {{
  font-family: "Barlow Condensed", "Liberation Sans Narrow", sans-serif;
  font-weight: 600;
  font-size: 92px;
  letter-spacing: 0.28em;
  color: {PAPER};
  line-height: 1;
  margin: 22px 0 20px 18px; /* optical: tracking adds space on the right */
  text-indent: 0.28em;
}}
</style>
</head>
<body>
<div class="stage">
  <svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
    <rect width="{W}" height="{H}" fill="{CHARCOAL}"/>
    <defs>
      <radialGradient id="glow" cx="50%" cy="48%" r="42%">
        <stop offset="0%" stop-color="{PAPER}" stop-opacity="0.10"/>
        <stop offset="55%" stop-color="{CHARCOAL}" stop-opacity="0"/>
        <stop offset="100%" stop-color="{CHARCOAL}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    {svg_paths}
    <rect width="{W}" height="{H}" fill="url(#glow)"/>
  </svg>
  <div class="lockup">
    <div class="rule"></div>
    <div class="title">FIELDLINE</div>
    <div class="rule"></div>
  </div>
</div>
</body>
</html>
"""
    out = Path("/workspace/.grok/og-card.html")
    out.write_text(html)
    print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
