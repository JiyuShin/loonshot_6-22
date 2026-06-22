import React from "react";

export default function SlideAnnexValueChain() {
  return (
    <section
      className="slide figma-slide figma-annex-vc"
      data-ch="a"
      data-title="소유 지점의 이동"
    >
      <div className="figma-annex-vc__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-vc__content">
        {/* Frame 448 - Centered Outer Container */}
        <div className="figma-annex-vc__frame-448">
          <img
            className="figma-annex-vc__text-group-svg rv head"
            style={{ "--rd": "200ms" }}
            src="/images/figma/annex-value-chain-text-group.svg"
            width="1152"
            height="270"
            alt="보조 인터랙션, 흐름을 되돌리다"
            draggable={false}
          />
          <div className="figma-annex-vc__tag-text rv head" style={{ "--rd": "200ms" }}>
            보조 인터랙션 · 흐름을 되돌리다
          </div>
        </div>
      </div>
    </section>
  );
}
