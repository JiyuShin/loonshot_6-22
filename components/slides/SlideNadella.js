import NadellaDiagramSvg from "./NadellaDiagramSvg";
import NadellaSubDescSvg from "./NadellaSubDescSvg";
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
        <h2 className="figma-nadella__quote rv head" style={{ "--rd": "800ms" }}>
          <span className="figma-quote-mark">“</span>
          <span className="figma-nadella__quote-regular">디자인 생성형 AI의 </span>
          <span className="figma-nadella__quote-highlight">내재화</span>
          <span className="figma-quote-mark">”</span>
        </h2>

        <NadellaSubDescSvg
          className="figma-nadella__meta rv soft"
          style={{ "--rd": "1700ms" }}
        />
      </div>

      <NadellaDiagramSvg className="figma-nadella__diagram figma-nadella__table-reveal" />
    </section>
  );
}
