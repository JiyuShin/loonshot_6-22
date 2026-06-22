#!/usr/bin/env python3
"""Generate NadellaDiagramSvg.js from transcript or nadella-diagram.svg"""

import json
import glob
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT / "components/slides/NadellaDiagramSvg.js"
SVG_PATH = ROOT / "components/slides/nadella-diagram.svg"
ID_PREFIX = "nadellaDiagram_"

ATTR_MAP = {
    "stroke-width": "strokeWidth",
    "stroke-opacity": "strokeOpacity",
    "fill-opacity": "fillOpacity",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "flood-opacity": "floodOpacity",
    "color-interpolation-filters": "colorInterpolationFilters",
    "shape-rendering": "shapeRendering",
}


def reactify_attrs(text: str) -> str:
    for old, new in ATTR_MAP.items():
        text = re.sub(rf'\b{old}=', f'{new}=', text)
    return text


def prefix_ids(svg: str) -> str:
    ids = set(re.findall(r'\bid="([^"]+)"', svg))
    ids |= set(re.findall(r'url\(#([^)]+)\)', svg))
    for id_ in sorted(ids, key=len, reverse=True):
        if id_.startswith(ID_PREFIX):
            continue
        svg = svg.replace(f'id="{id_}"', f'id="{ID_PREFIX}{id_}"')
        svg = svg.replace(f"url(#{id_})", f"url(#{ID_PREFIX}{id_})")
    return svg


def extract_inner(svg: str) -> str:
    inner = svg.split("<svg", 1)[1].split(">", 1)[1]
    return inner.rsplit("</svg>", 1)[0].strip()


def find_svg_in_transcripts() -> str | None:
    pattern = 'viewBox="0 0 1119 553"'
    marker = "M81.6358 48.1178"
    glob_pattern = "/Users/jiyushin/.cursor/projects/**/agent-transcripts/**/*.jsonl"
    for path in sorted(glob.glob(glob_pattern, recursive=True)):
        try:
            for line in Path(path).read_text(encoding="utf-8").splitlines():
                data = json.loads(line)
                if data.get("role") != "user":
                    continue
                for part in data.get("message", {}).get("content", []):
                    text = part.get("text", "")
                    if pattern in text and marker in text:
                        m = re.search(r'(<svg width="1119".*?</svg>)', text, re.DOTALL)
                        if m:
                            return m.group(1)
        except Exception:
            pass
    return None


def main():
    svg = None
    if SVG_PATH.exists():
        svg = SVG_PATH.read_text(encoding="utf-8")
    else:
        svg = find_svg_in_transcripts()
    if not svg:
        raise SystemExit("nadella diagram SVG not found")

    inner = extract_inner(svg)
    inner = prefix_ids(inner)
    inner = reactify_attrs(inner)

    header = f"""export default function NadellaDiagramSvg({{ className, style }}) {{
  return (
    <svg
      className={{className}}
      style={{style}}
      viewBox="0 0 1119 553"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-label="내재화와 외부 툴 활용 비교"
      role="img"
    >
"""

    footer = """    </svg>
  );
}
"""

    OUT_PATH.write_text(header + inner + "\n" + footer, encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({OUT_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
