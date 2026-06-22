import AnnexCostRightPanelSvg from "./AnnexCostRightPanelSvg";

export default function SlideAnnexCostCurve() {
  const leftPanelSvgSrc = "/images/figma/annex-cost-left-panel.svg";

  return (
    <section className="slide figma-slide figma-annex-cost" data-ch="a" data-title="변경 비용 곡선">
      <div className="figma-annex-cost__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-cost__content">
        {/* Header Pill */}
        <div className="figma-pill figma-annex-cost__pill rv" style={{ "--rd": "250ms" }}>
          <object
            className="figma-annex-cost__pill-text-svg"
            data="/images/figma/annex-cost-pill-text.svg"
            type="image/svg+xml"
            aria-label="크로스티켓 • 변경비용 곡선"
          />
        </div>

        <h2 className="figma-annex-cost__headline rv head" style={{ "--rd": "650ms" }}>
          <span className="figma-annex-cost__headline-copy" aria-hidden="true">
            가장 이른 단계에서, 가장 많이 검토하고,<br /><strong>가장 많이 합의합니다</strong>
          </span>
          <object
            className="figma-annex-cost__headline-svg"
            data="/images/figma/annex-cost-title.svg"
            type="image/svg+xml"
            aria-label="가장 이른 단계에서, 가장 많이 검토하고, 가장 많이 합의합니다"
          />
        </h2>

        <div
          className="figma-annex-cost__main"
          role="img"
          aria-label="변경 비용 곡선 그래프와 Why, How, OEM 설명"
        >
          <div className="figma-annex-cost__panel figma-annex-cost__panel--left rv" style={{ "--rd": "1050ms" }}>
            <img src={leftPanelSvgSrc} alt="" aria-hidden="true" draggable="false" />
            <svg className="figma-annex-cost__curve" viewBox="0 0 747 539" aria-hidden="true">
              <path
                className="figma-annex-cost__curve-path"
                d="M1.39062 468.5C330.066 457.983 652.813 182.472 723.131 -0.699219"
                fill="none"
                stroke="#0F2380"
                strokeWidth="2.69822"
                strokeLinecap="round"
                pathLength="1"
              />
              <circle className="figma-annex-cost__point figma-annex-cost__point--1" cx="50.88765" cy="464.497" r="4.49703" fill="#0F2380" />
              <circle className="figma-annex-cost__point figma-annex-cost__point--2" cx="404.372" cy="355.497" r="4.49703" fill="#808080" />
              <circle className="figma-annex-cost__point figma-annex-cost__point--3" cx="695.583" cy="21.9736" r="4.49703" fill="#000" />
            </svg>
          </div>
          <div className="figma-annex-cost__panel figma-annex-cost__panel--right rv" style={{ "--rd": "3950ms" }}>
            <AnnexCostRightPanelSvg className="figma-annex-cost__right-panel-svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
