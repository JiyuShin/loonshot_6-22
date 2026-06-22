import CountUp from "../CountUp";

const STATS = [
  { label: "제품 개발 비용 대부분은 디자인 단계에서 사실상 결정", value: 70, unit: "%+" },
  { label: "단계가 뒤로 갈수록 기하급수적으로 커지는 변경 비용", value: 10, unit: "배" },
  { label: "금형 단계의 변경 비용, 컨셉 단계 대비", value: 3000, unit: "배", isApprox: true }
];

export default function SlideAnnexCostCurve() {
  return (
    <section className="slide figma-slide figma-annex-cost" data-ch="a" data-title="변경 비용 곡선">
      <div className="figma-annex-cost__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-cost__content">
        {/* Header Pill */}
        <div className="figma-pill figma-annex-cost__pill rv" style={{ "--rd": "250ms" }}>
          크로스티켓 • 변경비용 곡선
        </div>

        <h2 className="figma-annex-cost__headline rv head" style={{ "--rd": "650ms" }}>
          가장 이른 단계에서, 가장 많이 검토하고,<br /><strong>가장 많이 합의합니다</strong>
        </h2>

        <div className="figma-annex-cost__main">
          <div className="figma-annex-cost__left">
            <div className="figma-annex-cost__chart-area rv" style={{ "--rd": "1050ms" }}>
              <div className="figma-annex-cost__chart-label">변경 비용</div>
              <div className="figma-annex-cost__chart-wrapper">
                <svg className="figma-annex-cost__curve" viewBox="0 -30 605 229">
                  <path
                    className="figma-annex-cost__curve-path"
                    d="M12,196.77 C205,196.77 455,150 590,-8"
                    fill="none"
                    stroke="#151D5B"
                    strokeWidth="1.93653"
                    strokeLinecap="round"
                  />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--1" cx="12" cy="191.27" r="3.23" />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--2" cx="334" cy="158" r="3.23" />
                  <circle className="figma-annex-cost__point figma-annex-cost__point--3" cx="549" cy="29" r="3.23" />
                </svg>
              </div>
            </div>

            <div className="figma-annex-cost__x-labels">
              <span className="is-active">컨셉</span>
              <span>설계 · 개발</span>
              <span>금형</span>
            </div>

            <div className="figma-annex-cost__stats">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="figma-annex-cost__stat-card rv" style={{ "--rd": `${3100 + index * 250}ms` }}>
                  <p className="figma-annex-cost__stat-value">
                    <CountUp
                      from={0}
                      to={stat.value}
                      duration={index === 1 ? 0.8 : 1.6}
                      delay={3.1 + index * 0.25}
                      className={`figma-annex-cost__stat-number${index === 0 ? " figma-annex-cost__stat-number--first" : ""}`}
                      separator=","
                      format={stat.isApprox ? () => "수천" : undefined}
                    />
                    <span className={index === 0 ? "figma-annex-cost__stat-unit--first" : ""}>{stat.unit}</span>
                  </p>
                  <p className={`figma-annex-cost__stat-label${index === 1 ? " figma-annex-cost__stat-label--two-line" : ""}`}>
                    {index === 1 ? (
                      <>
                        <span>단계가 뒤로 갈수록 기하급수적으로</span>
                        <span>커지는 변경 비용</span>
                      </>
                    ) : (
                      stat.label
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="figma-annex-cost__info rv" style={{ "--rd": "3950ms" }}>
            <div className="figma-annex-cost__info-item">
              <strong>Why</strong>
              <p className="figma-annex-cost__info-copy figma-annex-cost__info-copy--why">
                <span>도면 위에서 벽 하나를 옮기는 데 지우개면 충분합니다. 콘크리트를 붓기 전,</span>
                <span>AI는 수백개의 평면도를 빠르게 검토하고 비교하는 역할을 합니다.</span>
              </p>
            </div>
            <div className="figma-annex-cost__info-item">
              <strong>How</strong>
              <p className="figma-annex-cost__info-copy figma-annex-cost__info-copy--how">
                <span>재무, 상품, PM, 구매, 품질, 설계 등이 짧은 패스를 빠르게 주고 받으며 공간을 읽고,</span>
                <span>디자인은 가장 일찍 신호를 받고 볼을 배급하는 플레이 메이커가 됩니다.</span>
              </p>
            </div>
            <div className="figma-annex-cost__info-item">
              <strong>OEM</strong>
              <p className="figma-annex-cost__info-copy figma-annex-cost__info-copy--oem">
                <span>우리 구조에서는 엔지니어링, 구매, 품질의 제약이 초기 탐색 입력값으로 들어옵니다.</span>
                <span>제약을 보다 일찍 받아, 재작업 비용을 줄입니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
