export default function AnnexHistoryHighlightEventBoxSvg({ className }) {
  return (
    <svg
      className={className}
      width="267"
      height="128"
      viewBox="0 0 267 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g filter="url(#filter0_d_annex_history_highlight_box)">
        <rect x="22.1992" y="12.2002" width="222" height="83" rx="25.3895" fill="white" shapeRendering="crispEdges" />
      </g>
      <defs>
        <filter
          id="filter0_d_annex_history_highlight_box"
          x="-0.000782013"
          y="0.00019455"
          width="266.4"
          height="127.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="11.1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.576471 0 0 0 0 0.717647 0 0 0 0 1 0 0 0 0.64 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_annex_history_highlight_box" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_annex_history_highlight_box" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
