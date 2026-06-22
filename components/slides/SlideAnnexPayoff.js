import React from "react";

const PAYOFFS_ROW1 = [
  { title: "속도", desc: "개발 사이클 단축" },
  { title: "비용", desc: "변경비용의 조기 절감" },
  { title: "품질", desc: "반복 탐색을 통한 품질 상승" },
  { title: "유산", desc: "브랜드 판단의 축적" }
];

const PAYOFFS_ROW2 = [
  { title: "주권", desc: "데이터의 내부 축적과 보호" },
  { title: "미래 대응력", desc: "엔진 교체 가능 구조" },
  { title: "CMF", desc: "의사결정의 초기화" },
  { title: "증명", desc: "선언이 아닌 파일럿으로" }
];

export default function SlideAnnexPayoff() {
  return (
    <section className="slide figma-slide figma-annex-payoff" data-ch="a" data-title="성과로 착지">
      <div className="figma-annex-payoff__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-payoff__content">
        
        {/* Frame 343 (Main Wrapper) */}
        <div className="figma-annex-payoff__wrapper">
          
          {/* Frame 342 (Header Frame) */}
          <div className="figma-annex-payoff__header rv head" style={{ "--rd": "200ms" }}>
            {/* Frame 341 */}
            <div className="figma-annex-payoff__header-top">
              {/* Frame 162 */}
              <div className="figma-annex-payoff__badge-container">
                {/* Frame 22 (Pill) */}
                <div className="figma-pill">
                  THE PAYOFF • 성과로 착지
                </div>
              </div>
              {/* 우리는 성과를 제안합니다 */}
              <h2 className="figma-annex-payoff__title">
                우리는 성과를 제안합니다
              </h2>
            </div>
            {/* 회사가 더 빠르고, 더 좋고, 더 싸게 자동차를 개발하게 만드는 성과입니다. */}
            <p className="figma-annex-payoff__subtitle">
              회사가 더 빠르고, 더 좋고, 더 싸게 자동차를 개발하게 만드는 성과입니다.
            </p>
          </div>

          {/* Frame 170 (Grid Container) */}
          <div className="figma-annex-payoff__grid rv" style={{ "--rd": "600ms" }}>
            {/* Frame 53 (Row 1) */}
            <div className="figma-annex-payoff__row">
              {PAYOFFS_ROW1.map((item, index) => (
                <div key={item.title} className={`figma-annex-payoff__card figma-annex-payoff__card--${index + 1}`}>
                  <div className="figma-annex-payoff__card-inner">
                    <h3 className="figma-annex-payoff__card-title">{item.title}</h3>
                    <p className="figma-annex-payoff__card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Frame 52 (Row 2) */}
            <div className="figma-annex-payoff__row">
              {PAYOFFS_ROW2.map((item, index) => (
                <div key={item.title} className={`figma-annex-payoff__card figma-annex-payoff__card--${index + 5}`}>
                  <div className="figma-annex-payoff__card-inner">
                    <h3 className="figma-annex-payoff__card-title">{item.title}</h3>
                    <p className="figma-annex-payoff__card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
