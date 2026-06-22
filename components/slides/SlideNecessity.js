import NecessityBottomCardSvg from "./NecessityBottomCardSvg";
import React from "react";

export default function SlideNecessity() {
  const cardsData = [
    {
      logo: "/images/figma/Slide6_BMW 1.png",
      name: "BMW",
      desc: (
        <>
          생성형 AI를 UX와
          <br />
          디자인 프로세스에 적용
        </>
      ),
      delay: "1100ms",
      logoWidth: "128px",
      logoHeight: "128px",
    },
    {
      logo: "/images/figma/Slide6_gm 1.png",
      name: "GM",
      desc: (
        <>
          생성형 설계로 실제 부품의
          <br />
          경량화 · 성능 개선 검증
        </>
      ),
      delay: "1300ms",
      logoWidth: "114px",
      logoHeight: "114px",
    },
    {
      logo: "/images/figma/Slide6_MercedesBenz 1.png",
      name: "Mercedes-Benz",
      desc: (
        <>
          생성형 AI를 UX · 개발 · 생산
          <br />
          영역으로 확대
        </>
      ),
      delay: "1500ms",
      logoWidth: "200px",
      logoHeight: "124px",
    },
    {
      logo: "/images/figma/Slide6_China.svg 1.png",
      name: "중국 OEM",
      desc: (
        <>
          AI를 공력, 콕핏, R&D 전반에
          <br />
          빠르게 내재화 진행
        </>
      ),
      delay: "1700ms",
      logoWidth: "164.26px",
      logoHeight: "109.51px",
    },
  ];

  return (
    <section 
      className="slide figma-slide figma-necessity" 
      id="necessity"
      data-ch="1" 
      data-title="AI 전환은 선택이 아닌 필수"
    >
      <div className="figma-slide__inner figma-necessity__content">
        <h2 className="figma-necessity__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-quote-mark">“</span>
          <span className="figma-necessity__headline-regular">AI 전환은 </span>
          <span className="figma-necessity__headline-highlight">선택이 아닌 필수</span>
          <span className="figma-quote-mark">”</span>
        </h2>

        <p className="figma-necessity__sub-desc rv" style={{ "--rd": "850ms" }}>
          AI 전환의 속도는 이미 경쟁력 격차로 이어지고 있습니다.
          <br />
          그러나 현재 모든 OEM은 여전히 'Time to Market' 단축을 목표로 동일한 경쟁 구도 안에서 속도 경쟁을 벌이고 있습니다.
        </p>

        <div className="figma-necessity__cards">
          {cardsData.map((card, idx) => (
            <div 
              key={idx} 
              className="figma-necessity__card-wrapper rv" 
              style={{ "--rd": card.delay }}
            >
              <article className="figma-necessity__card">
                <div className="figma-necessity__card-logo-box">
                  <img 
                    src={card.logo} 
                    alt={`${card.name} Logo`}
                    className="figma-necessity__card-logo"
                    style={{ width: card.logoWidth, height: card.logoHeight }}
                  />
                </div>
                <h3 className="figma-necessity__card-title">{card.name}</h3>
                <p className="figma-necessity__card-body">{card.desc}</p>
              </article>
            </div>
          ))}
        </div>

        <NecessityBottomCardSvg
          className="figma-necessity__bottom-card rv"
          style={{ "--rd": "2000ms" }}
        />
      </div>
    </section>
  );
}
