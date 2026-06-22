import { nadellaReplacementSvgContent } from "./nadellaReplacementSvgContent";
import Silk from "../Silk";

const nadellaMotionLayers = [
  {
    className: "figma-nadella__motion-layer figma-nadella__motion-title rv head",
    style: { "--rd": "800ms" },
  },
  {
    className: "figma-nadella__motion-layer figma-nadella__motion-meta rv soft",
    style: { "--rd": "1700ms" },
  },
  {
    className: "figma-nadella__motion-layer figma-nadella__motion-table",
  },
  {
    className: "figma-nadella__motion-layer figma-nadella__motion-arrows",
  },
  {
    className: "figma-nadella__motion-layer figma-nadella__motion-pills",
  },
];

export default function SlideNadella() {
  return (
    <section className="slide figma-slide figma-nadella figma-silk" data-ch="2" data-title="나델라의 메시지">
      <div className="figma-silk__bg" aria-hidden="true">
        <Silk
          speed={4.5}
          scale={0.4}
          color="#6690FF"
          color2="#E0E7EF"
          noiseIntensity={0.4}
          rotation={0.12}
        />
      </div>

      <div className="figma-slide__inner figma-nadella__content">
        <div className="figma-nadella__replacement-svg" aria-hidden="true">
          {nadellaMotionLayers.map((layer) => (
            <div
              key={layer.className}
              className={layer.className}
              style={layer.style}
              dangerouslySetInnerHTML={{ __html: nadellaReplacementSvgContent }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
