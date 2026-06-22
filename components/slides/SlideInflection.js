import InflectionBottomCardSvg from "./InflectionBottomCardSvg";
import InflectionCardsBundleSvg from "./InflectionCardsBundleSvg";
import InflectionHeroTextSvg from "./InflectionHeroTextSvg";
import InflectionTagSvg from "./InflectionTagSvg";

export default function SlideInflection() {
  return (
    <section 
      className="slide figma-slide figma-inflection" 
      id="inflection"
      data-ch="1" 
      data-title="정보비용의 붕괴"
    >
      <div className="figma-slide__inner figma-inflection__content">
        <InflectionTagSvg className="figma-inflection__tag rv" style={{ "--rd": "250ms" }} />

        <InflectionHeroTextSvg
          className="figma-inflection__hero-text rv head"
          style={{ "--rd": "600ms" }}
        />

        <div className="figma-inflection__sub-summary rv" style={{ "--rd": "1100ms" }}>
          <p className="figma-inflection__sub-desc">
            단방향 구조를 지탱해 온 핵심인 정보의 비용이 AI로 인해 빠르게 낮아지고 있고, 이 변화는 점점 가속화되고 있습니다.
          </p>
        </div>

        <InflectionCardsBundleSvg
          className="figma-inflection__cards rv"
          style={{ "--rd": "1300ms" }}
        />

        <InflectionBottomCardSvg
          className="figma-inflection__bottom-card rv"
          style={{ "--rd": "2400ms" }}
        />
      </div>
    </section>
  );
}
