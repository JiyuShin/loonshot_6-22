import React from "react";

export default function SlideAnnexConductor() {
  return (
    <section className="slide figma-slide figma-annex-conductor" data-ch="a" data-title="연주자에서 지휘자로">
      <div className="figma-annex-conductor__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-conductor__content">
        {/* Header Pill */}
        <div className="figma-pill figma-annex-conductor__pill rv" style={{ "--rd": "200ms" }}>
          관계 명시
        </div>

        {/* Headline */}
        <h2 className="figma-annex-conductor__headline rv head" style={{ "--rd": "500ms" }}>
          연주자에서 ‘지휘자’로
        </h2>

        {/* Comparison Container (Perfectly matching the elegant layout in the second image) */}
        <div className="figma-annex-conductor__comparison rv head" style={{ "--rd": "800ms" }}>
          
          {/* 전환 전 Card */}
          <div className="figma-annex-conductor__side figma-annex-conductor__side--before">
            <div className="figma-annex-conductor__side-bg" />
            <h3 className="figma-annex-conductor__side-title">전환 전</h3>
            <div className="figma-annex-conductor__table">
              <div className="figma-annex-conductor__line figma-annex-conductor__line--1" />
              <div className="figma-annex-conductor__line figma-annex-conductor__line--2" />
              <div className="figma-annex-conductor__line figma-annex-conductor__line--3" />

              <div className="figma-annex-conductor__row figma-annex-conductor__row--1">
                <span className="figma-annex-conductor__label">역할</span>
                <span className="figma-annex-conductor__value is-blue">‘실행자’ 유일하게 모든 것을 직접 실행</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--2">
                <span className="figma-annex-conductor__label">탐색</span>
                <span className="figma-annex-conductor__value">한 번에 한선, 직렬</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--3">
                <span className="figma-annex-conductor__label">판단</span>
                <span className="figma-annex-conductor__value">머릿속에 갇혀 사라짐</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--4">
                <span className="figma-annex-conductor__label">창의성</span>
                <span className="figma-annex-conductor__value">손과 눈만이 단련</span>
              </div>
            </div>
          </div>

          {/* Wedge Arrow with Gradient */}
          <div className="figma-annex-conductor__arrow-wrap">
            <svg width="122" height="78.04" viewBox="0 0 122 78.04" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#92ABE9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#92ABE9" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#92ABE9" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path d="M0 22H83V0L122 39.02L83 78.04V56.04H0Z" fill="url(#arrowGrad)"/>
            </svg>
          </div>

          {/* 전환 후 Card */}
          <div className="figma-annex-conductor__side figma-annex-conductor__side--after">
            <div className="figma-annex-conductor__side-bg" />
            <h3 className="figma-annex-conductor__side-title">전환 후</h3>
            <div className="figma-annex-conductor__table">
              <div className="figma-annex-conductor__line figma-annex-conductor__line--1" />
              <div className="figma-annex-conductor__line figma-annex-conductor__line--2" />
              <div className="figma-annex-conductor__line figma-annex-conductor__line--3" />

              <div className="figma-annex-conductor__row figma-annex-conductor__row--1">
                <span className="figma-annex-conductor__label">역할</span>
                <span className="figma-annex-conductor__value is-blue">‘지휘자’ 에이전트 조합을 설계, 지휘</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--2">
                <span className="figma-annex-conductor__label">탐색</span>
                <span className="figma-annex-conductor__value">수백 방향을 병렬 탐색</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--3">
                <span className="figma-annex-conductor__label">판단</span>
                <span className="figma-annex-conductor__value">기록되어 자신화</span>
              </div>
              <div className="figma-annex-conductor__row figma-annex-conductor__row--4">
                <span className="figma-annex-conductor__label">창의성</span>
                <span className="figma-annex-conductor__value">방대한 선택지를 브랜드 의도로 필터링, 조화</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
