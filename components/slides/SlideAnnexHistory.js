import AnnexHistoryTagSvg from "./AnnexHistoryTagSvg";
import AnnexHistorySummarySvg from "./AnnexHistorySummarySvg";
import AnnexHistoryFordEventBoxSvg from "./AnnexHistoryFordEventBoxSvg";
import AnnexHistoryPorterEventBoxSvg from "./AnnexHistoryPorterEventBoxSvg";
import AnnexHistoryHighlightEventBoxSvg from "./AnnexHistoryHighlightEventBoxSvg";

export default function SlideAnnexHistory() {
  return (
    <section className="slide figma-slide figma-annex-history" data-ch="1" data-title="가치 흐름의 방향">
      <div className="figma-annex-history__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-history__content">
        <AnnexHistoryTagSvg className="figma-annex-history__tag rv" style={{ "--rd": "250ms" }} />

        <h2 className="figma-annex-history__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-annex-history__headline-accent">118년,</span> Value Chain 가치 흐름의{" "}
          <span className="figma-annex-history__headline-accent">방향 불변</span>
        </h2>

        <AnnexHistorySummarySvg className="figma-annex-history__summary rv" style={{ "--rd": "1000ms" }} />

        <div className="figma-annex-history__timeline rv" style={{ "--rd": "1400ms" }}>
          <div className="figma-annex-history__line">
            <div className="figma-annex-history__line-inner" />
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "0%" }}>
            <span className="figma-annex-history__year">1908</span>
            <div className="figma-annex-history__event figma-annex-history__event--ford">
              <AnnexHistoryFordEventBoxSvg className="figma-annex-history__event-bg" />
              <strong>Ford Model T</strong>
              <p>단방향 구조의 탄생</p>
            </div>
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "50%" }}>
            <span className="figma-annex-history__year">1985</span>
            <div className="figma-annex-history__event figma-annex-history__event--porter">
              <AnnexHistoryPorterEventBoxSvg className="figma-annex-history__event-bg" />
              <strong>Porter</strong>
              <p>단방향 밸류체인 이론화</p>
            </div>
          </div>
          <div className="figma-annex-history__milestone" style={{ left: "100%" }}>
            <span className="figma-annex-history__year">2026</span>
            <div className="figma-annex-history__event is-highlight figma-annex-history__event--highlight">
              <AnnexHistoryHighlightEventBoxSvg className="figma-annex-history__event-bg" />
              <p>처음으로 방향성을<br />바꿀 수 있는 해</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
