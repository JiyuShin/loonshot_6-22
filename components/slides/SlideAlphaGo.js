import Silk from "../Silk";

const CARDS = [
  {
    year: "2016",
    title: "AI가 인간을 이겼다",
    body: "알파고는 “인간 고유의 영역도 \nAI가 넘을 수 있다”는 충격을 만들었다.",
    icon: "bolt"
  },
  {
    year: "2017",
    title: "사람은 AI에게 \n배우기 시작했다",
    body: "AI는 대체자가 아니라, 새로운 수와 패턴을 보여주는 학습 파트너가 되었다",
    icon: "book"
  },
  {
    year: "오늘",
    title: "가장 잘 쓰는 사람이 \n앞선다",
    body: "이제 경쟁력은 AI 사용 여부가 아니라, \nAI와 함께 질문하고 판단하고 실행하는 \n속도에서 나온다.",
    icon: "trophy"
  }
];

function formatText(text) {
  if (!text) return "";
  const parts = text.split(/(“[^”]+”)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("“") && part.endsWith("”")) {
      return (
        <span key={idx}>
          <span className="figma-quote-mark">“</span>
          {part.slice(1, -1)}
          <span className="figma-quote-mark">”</span>
        </span>
      );
    }
    return part.split("\n").map((line, lIdx, arr) => (
      <span key={`${idx}-${lIdx}`}>
        {line}
        {lIdx < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function SlideAlphaGo() {
  return (
    <section className="slide figma-slide figma-alphago" data-ch="a" data-title="알파고의 교훈">
      <div className="figma-alphago__bg" aria-hidden="true">
        <Silk
          speed={4.5}
          scale={0.4}
          color="#6690FF"
          color2="#E0E7EF"
          noiseIntensity={0.4}
          rotation={0.08}
        />
      </div>

      <div className="figma-alphago__bg-image-wrapper" aria-hidden="true">
        <img 
          src="/images/figma/image 6346662.png" 
          className="figma-alphago__bg-image" 
          alt="AlphaGo and Lee Sedol" 
        />
      </div>
      
      <div className="figma-slide__inner figma-alphago__content">
        <div className="figma-pill rv" style={{ "--rd": "200ms" }}>
          <span>Why · 왜 지금?</span>
        </div>

        <h2 className="figma-alphago__headline rv head" style={{ "--rd": "600ms" }}>
          알파고 이후, AI는 사람을 대체한 게 아니라<br />
          사람의 기준을 바꿨다.
        </h2>

        <div className="figma-alphago__intro rv" style={{ "--rd": "900ms" }}>
          <p>2016년 알파고는 충격적인 사건이었지만, 진짜 변화는 그 이후에 일어났다.</p>
          <p>사람들은 AI를 경쟁 상대로만 보지 않고, 더 빠르게 배우고 판단하는 도구로 받아들이기 시작했다.</p>
        </div>

        <div className="figma-alphago__cards rv" style={{ "--rd": "1200ms" }}>
          {CARDS.map((card) => (
            <article key={card.title} className="figma-glass-card">
              <div className="figma-alphago__card-header">
                <div className="figma-alphago__card-year">{card.year}</div>
                <div className={`figma-alphago__card-icon figma-alphago__card-icon--${card.icon}`} />
              </div>
              <div className="figma-glass-card__body">
                <h3 className="figma-glass-card__title">{formatText(card.title)}</h3>
                <p className="figma-glass-card__desc">{formatText(card.body)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="figma-alphago__footer rv" style={{ "--rd": "1800ms" }}>
          <p className="figma-alphago__footer-text">
            AI는 자동화 도구를 넘어선, 개인의 감각과 판단을 확장하는 시스템이다.
          </p>
        </div>
      </div>
    </section>
  );
}
