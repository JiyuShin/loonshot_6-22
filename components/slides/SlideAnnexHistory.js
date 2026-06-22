import AnnexHistoryTagSvg from "./AnnexHistoryTagSvg";
import AnnexHistorySummarySvg from "./AnnexHistorySummarySvg";
import { annexHistoryOutcomeReplacementSvgContent } from "./annexHistoryOutcomeReplacementSvgContent";
import { annexHistoryTimelineReplacementSvgContent } from "./annexHistoryTimelineReplacementSvgContent";

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

        <div
          className="figma-annex-history__timeline-svg rv"
          style={{ "--rd": "1400ms" }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: annexHistoryTimelineReplacementSvgContent }}
        />

        <div
          className="figma-annex-history__outcome-svg rv"
          style={{ "--rd": "1600ms" }}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: annexHistoryOutcomeReplacementSvgContent }}
        />
      </div>
    </section>
  );
}
