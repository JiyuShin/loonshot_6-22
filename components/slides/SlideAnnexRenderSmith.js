export default function SlideAnnexRenderSmith() {
  const svgSrc = "/images/figma/annex-rendersmith-thread.svg";
  const tagSvgSrc = "/images/figma/annex-rendersmith-field-evidence-tag.svg";

  return (
    <section className="slide figma-slide figma-annex-rendersmith" data-ch="a" data-title="Render Smith">
      <div className="figma-annex-rendersmith__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-rendersmith__content">
        <div
          className="figma-annex-rendersmith__svg-stage"
          role="img"
          aria-label="현장 기록 03 FIELD EVIDENCE, Render Smith 사례와 One Digital Thread 설명"
        >
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--header rv head" style={{ "--rd": "200ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
          <object
            className="figma-annex-rendersmith__tag-overlay rv head"
            data={tagSvgSrc}
            type="image/svg+xml"
            aria-hidden="true"
            style={{ "--rd": "200ms" }}
          />
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--card-1 rv" style={{ "--rd": "500ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--card-2 rv" style={{ "--rd": "700ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--card-3 rv" style={{ "--rd": "900ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--card-4 rv" style={{ "--rd": "1100ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
          <div className="figma-annex-rendersmith__svg-layer figma-annex-rendersmith__svg-layer--thread rv" style={{ "--rd": "1400ms" }}>
            <img src={svgSrc} alt="" aria-hidden="true" draggable="false" />
          </div>
        </div>
      </div>
    </section>
  );
}
