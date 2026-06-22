function AlphaGoHeaderSvg({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width="1176"
      height="257"
      viewBox="0 0 1176 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Why · 왜 지금? 알파고 이후, AI는 사람을 대체한 게 아니라 사람의 기준을 바꿨다."
    >
      <g className="figma-alphago__svg-tag" filter="url(#filter0_i_589_26)">
        <rect x="530.875" width="114.253" height="33.4398" rx="16.7199" fill="url(#paint0_linear_589_26)" fillOpacity="0.73" />
        <text x="588" y="21.5" textAnchor="middle" fontFamily="Helvetica Neue, Arial, sans-serif" fontSize="12.55" fontWeight="500" fill="url(#paint1_linear_589_26)">
          Why · 왜 지금?
        </text>
      </g>
      <g className="figma-alphago__svg-title">
        <text x="588" y="99.5" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="43" fontWeight="500" letterSpacing="-0.86" fill="#002C5F">
          알파고 이후, AI는 사람을 대체한 게 아니라
        </text>
        <text x="588" y="159.5" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="43" fontWeight="500" letterSpacing="-0.86" fill="#0F2380">
          <tspan fontWeight="700">사람의 기준</tspan>
          <tspan fill="#000000">을 바꿨다.</tspan>
        </text>
        <rect x="397.246" y="167.941" width="203.86" height="4.6" fill="#0F2380" />
      </g>
      <g className="figma-alphago__svg-subtitle">
        <text x="588" y="219" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="15.5" fontWeight="400" letterSpacing="-0.31" fill="#000000">
          2016년 알파고는 충격적인 사건이었지만, 진짜 변화는 그 이후에 일어났다.
        </text>
        <text x="588" y="248" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="15.5" fontWeight="400" letterSpacing="-0.31" fill="#000000">
          사람들은 AI를 경쟁 상대로만 보지 않고, 더 빠르게 배우고 판단하는 도구로 받아들이기 시작했다.
        </text>
      </g>
      <defs>
        <filter id="filter0_i_589_26" x="530.875" y="0" width="114.25" height="44.4832" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="11.0418" />
          <feGaussianBlur stdDeviation="9.6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_589_26" />
        </filter>
        <linearGradient id="paint0_linear_589_26" x1="549.917" y1="4.15243e-08" x2="551.861" y2="35.4231" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A8BEE6" />
          <stop offset="1" stopColor="#FDFCFB" />
        </linearGradient>
        <linearGradient id="paint1_linear_589_26" x1="547" y1="16.7188" x2="629" y2="16.7188" gradientUnits="userSpaceOnUse">
          <stop stopColor="#002C5F" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function SlideAlphaGo() {
  return (
    <section className="slide figma-slide figma-alphago" data-ch="a" data-title="알파고의 교훈">
      <div className="figma-alphago__bg" aria-hidden="true" />

      <div className="figma-alphago__bg-image-wrapper" aria-hidden="true">
        <img 
          src="/images/figma/image 6346662.png" 
          className="figma-alphago__bg-image" 
          alt="AlphaGo and Lee Sedol" 
        />
      </div>
      
      <div className="figma-slide__inner figma-alphago__content">
        <AlphaGoHeaderSvg className="figma-alphago__header-svg" />
      </div>
    </section>
  );
}
