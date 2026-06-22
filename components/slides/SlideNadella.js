import { nadellaReplacementSvgContent } from "./nadellaReplacementSvgContent";
import Silk from "../Silk";

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
        <div
          className="figma-nadella__replacement-svg"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: nadellaReplacementSvgContent }}
        />
      </div>
    </section>
  );
}
