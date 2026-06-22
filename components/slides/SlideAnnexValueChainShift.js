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
          {/* Frame 20 - Pill Tag */}
          <div className="figma-pill figma-annex-vc__pill rv" style={{ "--rd": "200ms" }}>
            보조 인터랙션 · 흐름을 되돌리다
          </div>

          {/* Frame 312 / 318 - Content Group */}
          <div className="figma-annex-vc__frame-312">
            <div className="figma-annex-vc__frame-318">
              {/* Frame 311 - Main & Sub Title Stack */}
              <div className="figma-annex-vc__frame-311">
                {/* Frame 314 - Main Title */}
                <h1 className="figma-annex-vc__main-title rv head" style={{ "--rd": "500ms" }}>
                  밸류체인의 소유 지점을 옮깁니다
                </h1>
                
                {/* Frame 315 - Sub Title */}
                <h2 className="figma-annex-vc__sub-title rv head" style={{ "--rd": "800ms" }}>
                  118년간 단방향이었던 진짜 이유는 <strong className="figma-annex-vc__highlight">‘정보의 비용’</strong>
                </h2>
              </div>

              {/* Frame 316 - Description */}
              <p className="figma-annex-vc__description rv head" style={{ "--rd": "1100ms" }}>
                단방향 구조를 지탱해 온 핵심인 정보의 비용이 AI로 인해 빠르게 낮아지고 있고, 이 변화는 점점 가속화되고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
