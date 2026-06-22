import CapitalSummarySvg from "./CapitalSummarySvg";
import CapitalOsPanelSvg from "./CapitalOsPanelSvg";

function CapitalCardsDiagram() {
  const cards = [
    { x: 0, title: "모델", en: "(Model)", body: ["기성 모델 선택 · DN4 LLM", "디자인 업무 특화 모델"] },
    { x: 292, title: "데이터", en: "(Data)", body: ["현대차 고유 데이터 · CMF", "이미지, 리서치, 브랜드 기준 축적"] },
    { x: 584, title: "워크플로우", en: "(Workflow)", body: ["생성-선택-검증", "디자인 개발 프로세스 전사 연결"] },
    { x: 876, title: "평가", en: "(Evaluation)", body: ["소비자 반응 · 디자인 검토 결과", "의사결정 기준"] },
    { x: 1168, title: "자산화", en: "(Assetization)", body: ["결과와 판단을 축적", "다음 개발에 재사용 · 경쟁우위 강화"] },
  ];

  return (
    <svg
      className="figma-capital__cards-diagram"
      width="1439"
      height="199"
      viewBox="0 0 1439 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="내재화 구성 요소"
    >
      <defs>
        <linearGradient id="capital-card-gradient" x1="0" y1="0" x2="0" y2="199" gradientUnits="userSpaceOnUse">
          <stop offset="0.423077" stopColor="#F5F8FF" />
          <stop offset="1" stopColor="#D4E2FF" />
        </linearGradient>
      </defs>

      {cards.map((card, index) => (
        <g key={card.title} transform={`translate(${card.x} 0)`}>
          <g className="figma-capital__card-group" style={{ "--card-rd": `${1100 + index * 180}ms` }}>
            <rect width="271" height="199" rx="20" fill="url(#capital-card-gradient)" />
            <rect x="0.5" y="0.5" width="270" height="198" rx="19.5" stroke="white" strokeOpacity="0.5" />
            <text className="figma-capital__cards-title" x="135.5" y="61" textAnchor="middle">{card.title}</text>
            <text className="figma-capital__cards-en" x="135.5" y="93" textAnchor="middle">{card.en}</text>
            {card.body.map((line, index) => (
              <text
                key={line}
                className="figma-capital__cards-body"
                x="135.5"
                y={145 + index * 20}
                textAnchor="middle"
              >
                {line}
              </text>
            ))}
          </g>
        </g>
      ))}
    </svg>
  );
}

export default function SlideCapital() {
  return (
    <section 
      className="slide figma-slide figma-capital" 
      data-ch="2" 
      data-title="좋아지는 회사 · 두 자본"
    >
      <div className="figma-slide__inner figma-capital__content">
        <h2 className="figma-capital__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-capital__headline-regular">무엇을 </span>
          <span className="figma-capital__headline-highlight">내재화</span>
          <span className="figma-capital__headline-regular"> 할 것인가?</span>
        </h2>

        <CapitalCardsDiagram />

        <CapitalSummarySvg
          className="figma-capital__summary rv"
          style={{ "--rd": "2200ms" }}
        />

        <CapitalOsPanelSvg
          className="figma-capital__os-panel rv soft"
          style={{ "--rd": "2600ms" }}
        />
      </div>
    </section>
  );
}
