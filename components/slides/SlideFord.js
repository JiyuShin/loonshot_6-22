export default function SlideFord() {
  return (
    <section
      className="slide figma-slide figma-ford"
      id="ford"
      data-ch="1"
      data-title="포드 · 다시 설계할 시점"
    >
      <div className="figma-ford__bg-wrap" aria-hidden="true">
        <img
          className="figma-ford__bg-image"
          src="/images/figma/2.png"
          alt=""
        />
      </div>

      <div className="figma-slide__inner figma-ford__content">
        <div className="figma-pill rv" style={{ "--rd": "300ms" }}>
          1908
        </div>

        <h2 className="figma-ford__quote rv head" style={{ "--rd": "800ms" }}>
          <span className="figma-quote-mark">“</span>고객은 어떤 색이든 고를 수 있습니다.
          <br />
          물론, <span className="figma-ford__quote-em">검정</span>일 경우에만요.<span className="figma-quote-mark">”</span>
        </h2>

        <p className="figma-ford__who rv soft" style={{ "--rd": "1700ms" }}>
          Henry Ford · Model T
        </p>
      </div>
    </section>
  );
}
