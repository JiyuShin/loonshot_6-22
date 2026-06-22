import OwnershipSummarySvg from "./OwnershipSummarySvg";

function OwnershipLoopDiagram() {
  return (
    <svg
      className="figma-ownership__diagram"
      width="988"
      height="654"
      viewBox="0 0 988 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Closed loop diagram"
    >
      <defs>
        <linearGradient id="ownership-node-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#7091CF" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="ownership-ring-gradient" x1="307" y1="67" x2="681" y2="441" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6FA1FF" />
          <stop offset="0.365" stopColor="#758BB3" />
          <stop offset="0.674" stopColor="#D4DDED" />
          <stop offset="1" stopColor="#F1F6FF" />
        </linearGradient>
        <filter id="ownership-node-inner-shadow" x="-20%" y="-20%" width="140%" height="150%" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4.38394" />
          <feGaussianBlur stdDeviation="10.219" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>

      <circle className="figma-ownership__ring-flow" cx="494.434" cy="254" r="187" stroke="url(#ownership-ring-gradient)" strokeWidth="6" />

      <ellipse className="figma-ownership__diagram-node-part figma-ownership__diagram-node-part--generate" cx="493.934" cy="71" rx="71.5" ry="71" fill="url(#ownership-node-gradient)" filter="url(#ownership-node-inner-shadow)" />
      <circle className="figma-ownership__diagram-node-part figma-ownership__diagram-node-part--select" cx="670.434" cy="248" r="71" fill="url(#ownership-node-gradient)" filter="url(#ownership-node-inner-shadow)" />
      <circle className="figma-ownership__diagram-node-part figma-ownership__diagram-node-part--assetize" cx="317.434" cy="248" r="71" fill="url(#ownership-node-gradient)" filter="url(#ownership-node-inner-shadow)" />
      <ellipse className="figma-ownership__diagram-node-part figma-ownership__diagram-node-part--validate" cx="493.934" cy="424" rx="71.5" ry="71" fill="url(#ownership-node-gradient)" filter="url(#ownership-node-inner-shadow)" />

      <g className="figma-ownership__diagram-node figma-ownership__diagram-node-part figma-ownership__diagram-node-part--generate">
        <text x="493.934" y="61">Generate</text>
        <text x="493.934" y="82" className="ko">생성</text>
        <text x="493.934" y="103">AI 무한 작업</text>
      </g>
      <g className="figma-ownership__diagram-node figma-ownership__diagram-node-part figma-ownership__diagram-node-part--select">
        <text x="670.434" y="235">Select</text>
        <text x="670.434" y="256" className="ko">선택</text>
        <text x="670.434" y="277">디자이너의 판단</text>
      </g>
      <g className="figma-ownership__diagram-node figma-ownership__diagram-node-part figma-ownership__diagram-node-part--assetize">
        <text x="317.434" y="238">Assetize</text>
        <text x="317.434" y="259" className="ko">자산화</text>
        <text x="317.434" y="280">판단체계</text>
      </g>
      <g className="figma-ownership__diagram-node figma-ownership__diagram-node-part figma-ownership__diagram-node-part--validate">
        <text x="493.934" y="414">Validate</text>
        <text x="493.934" y="435" className="ko">검증</text>
        <text x="493.934" y="456">크로스 티켓</text>
      </g>

      <g className="figma-ownership__diagram-center figma-ownership__diagram-center-reveal">
        <text x="494.434" y="242">Closed Loop</text>
        <text x="494.434" y="274">개발 체계</text>
      </g>

      <g className="figma-ownership__diagram-box figma-ownership__diagram-box-reveal">
        <rect y="525" width="307.925" height="128.186" rx="31.3495" fill="white" fillOpacity="0.6" />
        <text x="153.963" y="572" className="title">내재화</text>
        <text x="153.963" y="598">디자인 생성형 AI를 전사 개발</text>
        <text x="153.963" y="618">프로세스의 출발점으로 내재화</text>
      </g>
      <g className="figma-ownership__diagram-box figma-ownership__diagram-box-reveal">
        <rect x="339.973" y="525" width="307.925" height="128.186" rx="31.3495" fill="white" fillOpacity="0.6" />
        <text x="493.936" y="572" className="title">동시 개발 체계</text>
        <text x="493.936" y="598">후행 검토 구조 앞당겨 재작업과</text>
        <text x="493.936" y="618">병목을 줄이는 동시 개발 구축</text>
      </g>
      <g className="figma-ownership__diagram-box figma-ownership__diagram-box-reveal">
        <rect x="679.941" y="525" width="307.925" height="128.186" rx="31.3495" fill="white" fillOpacity="0.6" />
        <text x="833.904" y="572" className="title">자산화 플랫폼</text>
        <text x="833.904" y="598">디자인, 검토, 소비자 반응 데이터를</text>
        <text x="833.904" y="618">축적하는 자산화 플랫폼 확보</text>
      </g>
    </svg>
  );
}

export default function SlideOwnership() {
  return (
    <section className="slide figma-slide figma-ownership" data-ch="1" data-title="오늘의 핵심 · 소유권">
      <div className="figma-ownership__bg" aria-hidden="true">
        <div className="figma-ownership__glow figma-ownership__glow--a" />
        <div className="figma-ownership__glow figma-ownership__glow--b" />
      </div>

      <div className="figma-slide__inner figma-ownership__content">
        <h2 className="figma-ownership__headline rv head" style={{ "--rd": "600ms" }}>
          <span className="figma-ownership__headline-regular">경쟁사를 </span>
          <span className="figma-ownership__headline-highlight">뛰어넘는 방법</span>
        </h2>

        <OwnershipSummarySvg
          className="figma-ownership__summary rv"
          style={{ "--rd": "1100ms" }}
        />

        <div className="figma-ownership__diagram-wrap">
          <img
            src="/c2.png"
            alt=""
            className="figma-ownership__side-image figma-ownership__side-image--left figma-ownership__side-image-reveal"
            aria-hidden="true"
          />
          <img
            src="/c2.png"
            alt=""
            className="figma-ownership__side-image figma-ownership__side-image--right figma-ownership__side-image-reveal"
            aria-hidden="true"
          />
          <OwnershipLoopDiagram />
        </div>
      </div>
    </section>
  );
}
