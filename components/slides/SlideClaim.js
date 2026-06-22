import ClaimRoleDiagramSvg from "./ClaimRoleDiagramSvg";

export default function SlideClaim() {
  return (
    <section
      className="slide figma-slide figma-claim"
      data-ch="3"
      data-title="디자이너의 역할 변화"
    >
      <img
        className="figma-claim__bg-image"
        src="/f4.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-slide__inner figma-claim__content">
        <div className="figma-claim__header">
          <div className="figma-pill rv soft" style={{ "--rd": "250ms" }}>
            디자이너의 역할 변화
          </div>

          <h2 className="figma-claim__headline rv head" style={{ "--rd": "600ms" }}>
            <span className="figma-claim__headline-muted">디자이너, </span>
            <span className="figma-claim__headline-accent">연주자에서 지휘자로</span>
          </h2>
        </div>

        <div className="figma-claim__diagram-wrap rv" style={{ "--rd": "900ms" }}>
          <ClaimRoleDiagramSvg className="figma-claim__role-diagram" />
        </div>
      </div>
    </section>
  );
}
