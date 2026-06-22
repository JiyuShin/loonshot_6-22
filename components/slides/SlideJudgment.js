import JudgmentRightPanelSvg from "@/components/slides/JudgmentRightPanelSvg";

export default function SlideJudgment() {
  return (
    <section className="slide figma-slide figma-judgment" data-ch="2" data-title="엔진이 아니라 판단 체계">
      <div className="figma-judgment__object" aria-hidden="true" />
      <div className="figma-judgment__right-panel" aria-hidden="true">
        <JudgmentRightPanelSvg className="figma-judgment__right-panel-svg figma-judgment__right-panel-svg--top" />
        <JudgmentRightPanelSvg className="figma-judgment__right-panel-svg figma-judgment__right-panel-svg--bottom" />
      </div>

      <div className="figma-slide__inner figma-judgment__content">
        <div className="figma-pill rv" style={{ "--rd": "250ms" }}>
          자동 품질 향상 · 거버넌스
        </div>

        <h2 className="figma-judgment__headline rv head" style={{ "--rd": "600ms" }}>
          <span>
            받침대가 견고하면, <strong>연장이 좋아질수록</strong>
          </span>
          <span className="figma-judgment__headline-indent">결과도 함께 좋아집니다</span>
        </h2>
      </div>
    </section>
  );
}
