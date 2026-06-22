import ClaimRoleDiagramSvg from "./ClaimRoleDiagramSvg";
import ClaimTagSvg from "./ClaimTagSvg";

export default function SlideClaim() {
  return (
    <section
      className="slide figma-slide figma-claim"
      data-ch="3"
      data-title="디자이너의 역할 변화"
    >
      <img
        className="figma-claim__side-image figma-claim__side-image--left"
        src="/m1.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="figma-claim__side-image figma-claim__side-image--right"
        src="/m2.png"
        alt=""
        aria-hidden="true"
      />

      <div className="figma-slide__inner figma-claim__content">
        <div className="figma-claim__header">
          <ClaimTagSvg className="rv soft" style={{ "--rd": "250ms" }} />

          <h2 className="figma-claim__headline rv head" style={{ "--rd": "600ms" }}>
            <span className="figma-claim__headline-muted">디자이너, </span>
            <span className="figma-claim__headline-accent">연주자에서 지휘자</span>
            <span className="figma-claim__headline-muted">로</span>
          </h2>
        </div>

        <div className="figma-claim__diagram-wrap rv" style={{ "--rd": "900ms" }}>
          <ClaimRoleDiagramSvg className="figma-claim__role-diagram" />
        </div>
      </div>
    </section>
  );
}
