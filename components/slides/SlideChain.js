import { Fragment } from "react";
import ChainHeadlineSvg from "./ChainHeadlineSvg";
import ChainPanelsBundleSvg from "./ChainPanelsBundleSvg";
import ChainSummaryBoxSvg from "./ChainSummaryBoxSvg";

const STAGES = [
  { ko: "공급자", en: "INVEST" },
  { ko: "제조", en: "BUILD" },
  { ko: "디자인 · 개발", en: "DESIGN" },
  { ko: "품질 · 마케팅", en: "REFINE" },
  { ko: "소비자", en: "SELL" }
];

function ChainArrow({ delay }) {
  return (
    <div className="figma-chain__arrow-wrap rv" style={{ "--rd": delay }}>
      <div className="figma-chain__arrow-line" />
      <svg
        className="figma-chain__arrow-head"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 1L7 5L3 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SlideChain() {
  return (
    <section
      className="slide figma-slide figma-chain"
      data-ch="1"
      data-title="단방향 밸류체인"
    >
      <div className="figma-slide__inner figma-chain__content">
        <div className="figma-chain__hero">
          <ChainHeadlineSvg className="figma-chain__headline rv head" style={{ "--rd": "600ms" }} />
        </div>

        <div className="figma-chain__flow">
          {STAGES.map((stage, index) => {
            const stageDelay = 1000 + (index * 200);
            const arrowDelay = 1000 + (index * 200) + 100;
            const isDesignStage = stage.en === "DESIGN";
            return (
              <Fragment key={stage.en}>
                <div
                  className={`figma-chain__stage rv${isDesignStage ? " figma-chain__stage--design" : ""}`}
                  style={{ "--rd": `${stageDelay}ms` }}
                >
                  <span className="figma-chain__stage-ko">{stage.ko}</span>
                  <span className="figma-chain__stage-en">{stage.en}</span>
                </div>
                {index < STAGES.length - 1 && <ChainArrow delay={`${arrowDelay}ms`} />}
              </Fragment>
            );
          })}
        </div>

        <div className="figma-chain__bottom">
          <ChainPanelsBundleSvg className="figma-chain__panels-bundle rv" style={{ "--rd": "2400ms" }} />
          <ChainSummaryBoxSvg className="figma-chain__summary-box rv" style={{ "--rd": "2600ms" }} />
        </div>
      </div>
    </section>
  );
}
