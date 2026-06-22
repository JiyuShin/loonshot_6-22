import React from "react";
import RiskTagSvg from "./RiskTagSvg";
import RiskSystemNatureColumnSvg from "./RiskSystemNatureColumnSvg";
import RiskBottomBannerSvg from "./RiskBottomBannerSvg";

function RiskSystemDiagram() {
  return (
    <div className="figma-risk__system-diagram" aria-label="판단체계 내재화 구조">
      <svg
        className="figma-risk__system-diagram-svg"
        width="1322"
        height="385"
        viewBox="0 0 1322 385"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="risk-system-main-fill" x1="6.2192e-08" y1="-34.8874" x2="992.934" y2="-9.73753" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.55" />
            <stop offset="0.98964" stopColor="white" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="risk-system-card-fill" x1="1153" y1="0" x2="1153" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="risk-system-card-stroke" x1="1153" y1="0" x2="1153" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="risk-system-arrow" x1="1153" y1="133" x2="1153" y2="232" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9" stopOpacity="0" />
            <stop offset="0.25" stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#92ABE9" />
          </linearGradient>
        </defs>

        <rect x="0.319737" y="0.319737" width="982.361" height="381.829" rx="25.3231" fill="url(#risk-system-main-fill)" stroke="#FFFFFF" strokeWidth="0.639473" />

        <line x1="313.5" y1="29" x2="313.5" y2="356" stroke="#7C838C" strokeWidth="1.28" opacity="0.72" />
        <line x1="693.1" y1="29" x2="693.1" y2="356" stroke="#7C838C" strokeWidth="1.28" opacity="0.72" />

        <text className="figma-risk__system-kicker figma-risk__system-kicker--medium figma-risk__system-kicker--layer" x="26" y="50">층위</text>
        <text className="figma-risk__system-kicker figma-risk__system-kicker--medium" x="361" y="50">정의</text>
        <text className="figma-risk__system-kicker figma-risk__system-kicker--medium figma-risk__system-kicker--layer" x="739" y="50">성격</text>

        <text className="figma-risk__system-title" x="26" y="133">엔진</text>
        <text className="figma-risk__system-title" x="26" y="235">판단체계</text>
        <text className="figma-risk__system-title" x="26" y="337">생태계</text>

        <text className="figma-risk__system-def" x="361" y="133">외부 범용 모델</text>
        <text className="figma-risk__system-def" x="361" y="235">우리 자료로 학습된 브랜드 판단 AI</text>
        <text className="figma-risk__system-def" x="361" y="337">엔진 활용 워크 플로우, 인프라</text>

        <RiskSystemNatureColumnSvg />

        <rect x="1002.97" y="214.63" width="300.74" height="168.74" rx="24.84" fill="url(#risk-system-card-fill)" stroke="url(#risk-system-card-stroke)" strokeWidth="1.26" />
        <text className="figma-risk__system-card-title" x="1153.34" y="281" textAnchor="middle">우리가 할 것은</text>
        <text className="figma-risk__system-card-body" x="1153.34" y="321" textAnchor="middle">엔진은 유지하되,</text>
        <text className="figma-risk__system-card-body" x="1153.34" y="347" textAnchor="middle">워크플로우와 브랜드 DNA 유지</text>

        <path d="M1075.32 133.26H1229.98C1229.98 133.26 1206.31 142.34 1200.72 158.15C1197.48 167.32 1194.98 183.04 1194.98 183.04H1229.98L1153 232.19L1075.32 183.04H1111.01C1111.01 183.04 1107.12 167.32 1103.88 158.15C1098.22 142.13 1075.32 133.26 1075.32 133.26Z" fill="url(#risk-system-arrow)" />

        <rect x="1002.97" y="0.63" width="300.74" height="168.74" rx="24.84" fill="url(#risk-system-card-fill)" stroke="url(#risk-system-card-stroke)" strokeWidth="1.26" />
        <text className="figma-risk__system-card-title" x="1153.34" y="68" textAnchor="middle">상용 AI를 그대로 쓰면</text>
        <text className="figma-risk__system-card-body" x="1153.34" y="118" textAnchor="middle">'외부 플랫폼 자산으로 축적'</text>
      </svg>
    </div>
  );
}

function RiskBottomBanner() {
  return (
    <RiskBottomBannerSvg className="figma-risk__bottom-banner" />
  );
}

export default function SlideRisk() {
  return (
    <section 
      className="slide figma-slide figma-risk" 
      data-ch="2" 
      data-title="진짜 리스크"
    >
      <div className="figma-slide__inner figma-risk__content">
        <RiskTagSvg className="figma-risk__tag rv" style={{ "--rd": "120ms" }} />

        <h2 className="figma-risk__headline rv head" style={{ "--rd": "420ms" }}>
          <span className="figma-risk__headline-regular">엔진이 아닌</span>
          <span className="figma-risk__headline-highlight">’판단체계’를 소유합니다</span>
        </h2>
      </div>

      <RiskSystemDiagram />
      <RiskBottomBanner />
    </section>
  );
}
