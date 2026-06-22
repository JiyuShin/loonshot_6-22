#!/usr/bin/env python3
"""Generate OwnershipSummarySvg.js from ownership-summary.svg"""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SVG_PATH = ROOT / "components/slides/ownership-summary.svg"
OUT_PATH = ROOT / "components/slides/OwnershipSummarySvg.js"

svg = SVG_PATH.read_text(encoding="utf-8")
inner = svg
if "<svg" in inner:
    inner = inner.split("<svg", 1)[1]
    inner = inner.split(">", 1)[1]
inner = inner.rsplit("</svg>", 1)[0].strip()

header = """export default function OwnershipSummarySvg({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 723 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-label="경쟁사를 뛰어넘는 방법은 단순히 AI를 도입하여 사용하는 것이 아닙니다. 디자인을 시작으로 소비자-설계-검토 모든 것이 연결되고 그 결과가 자산으로 축적되는 것입니다."
      role="img"
    >
"""

footer = """
    </svg>
  );
}
"""

OUT_PATH.write_text(header + inner + footer, encoding="utf-8")
print(f"Wrote {OUT_PATH} ({OUT_PATH.stat().st_size} bytes)")
