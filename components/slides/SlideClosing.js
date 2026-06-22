import React from "react";

export default function SlideClosing() {
  return (
    <section className="slide figma-slide figma-closing" data-ch="5" data-title="마치며">
      {/* Monochrome aircraft model in the background */}
      <div className="figma-closing__airplane" aria-hidden="true" />

      {/* Frame 447 - Content Frame */}
      <div className="figma-closing__content-frame">
        {/* Frame 445 - Top Container */}
        <div className="figma-closing__top-frame">
          {/* PROJECT LOONSHOT */}
          <div className="figma-closing__project-title rv head" style={{ "--rd": "300ms" }}>
            <span className="project-title__sub">PROJECT</span>
            <span className="project-title__main">LOONSHOT</span>
          </div>

          {/* Frame 310 - Title Container */}
          <div className="figma-closing__title-group rv head" style={{ "--rd": "600ms" }}>
            <h2 className="figma-closing__subtitle">
              118년 전, 컨베이어 벨트가 산업의 구조를 바꿨다면
            </h2>
            <h1 className="figma-closing__main-title">
              다음 혁신은 <strong>Seed→Thread→Twin의 Closed Loop</strong>로<br />연결하는 것입니다.
            </h1>
          </div>
        </div>

        {/* Frame 446 - Bottom Container */}
        <div className="figma-closing__bottom-frame">
          {/* Frame 323 */}
          <div className="figma-closing__desc-group">
            {/* Frame 54 */}
            <p className="figma-closing__desc-p rv head" style={{ "--rd": "900ms" }}>
              디자인 AI를 만들자는 것이 아닙니다.<br />
              현대차 디자인의 판단이 우리 안에서 계속 좋아지는 <strong>학습 루프 구조</strong>를 만들자는 것입니다.
            </p>
            {/* Frame 54 */}
            <p className="figma-closing__desc-p rv head" style={{ "--rd": "1200ms" }}>
              다만 그 구조를 만들려면 <strong>최고 경영층의 승인</strong>이 필요합니다.
            </p>
          </div>

          {/* Frame 70 - Glass CTA Button */}
          <div className="figma-closing__action-btn rv head" style={{ "--rd": "1500ms" }}>
            <span className="figma-closing__action-text">
              첫 시험 비행을 승인해 주십시오.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
