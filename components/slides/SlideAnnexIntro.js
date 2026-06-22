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

        {/* Headline */}
        <h2 className="figma-annex-intro__headline rv head" style={{ "--rd": "600ms" }}>
          APPENDIX
        </h2>

        {/* Summary */}
        <p className="figma-annex-intro__summary rv head" style={{ "--rd": "900ms" }}>
          본편에서 압축한 현장 기록과 상세 분석
        </p>
      </div>
    </section>
  );
}
