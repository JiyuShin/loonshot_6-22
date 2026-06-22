import React, { useRef } from "react";

export default function SlideAnnexIntro() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="slide figma-slide figma-annex-intro" data-ch="a" data-title="부록 · 근거와 배경">
      {/* Slow floating radial gradient background */}
      <div className="figma-annex-intro__bg-wrap" aria-hidden="true">
        <div className="figma-annex-intro__bg" />
      </div>

      <div className="figma-slide__inner figma-annex-intro__content">
        {/* 부록 white capsule */}
        <div className="figma-pill rv head" style={{ "--rd": "300ms" }}>
          부록
        </div>

        {/* Headline + Summary */}
        <img
          className="figma-annex-intro__title-svg rv head"
          style={{ "--rd": "600ms" }}
          src="/images/figma/annex-intro-title.svg"
          width="357"
          height="135"
          alt="APPENDIX 본편에서 압축한 현장 기록과 상세 분석"
          draggable={false}
        />
      </div>
    </section>
  );
}
