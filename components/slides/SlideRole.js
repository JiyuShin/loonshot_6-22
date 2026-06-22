import RoleRatioDiagramSvg from "./RoleRatioDiagramSvg";
import RolePercentLabelSvg from "./RolePercentLabelSvg";

export default function SlideRole() {
  return (
    <section className="slide figma-slide figma-role" data-ch="4" data-title="내재화된 프로세스에서 움직인다">
      <div className="figma-role__bg" aria-hidden="true" />

      <div className="figma-slide__inner figma-role__content">
        <div className="figma-role__header">
          <div className="figma-role__intro">
            <div className="figma-pill rv soft" style={{ "--rd": "250ms" }}>
              Early Evidence
            </div>

            <h2 className="figma-role__headline rv head" style={{ "--rd": "600ms" }}>
              내재화된 프로세스에서 움직인다
            </h2>
          </div>

          <RolePercentLabelSvg className="figma-role__percent-label" />

          <div className="figma-role__diagram-wrap">
            <RoleRatioDiagramSvg
              className="figma-role__ratio-diagram"
              style={{ "--role-diagram-rd": "900ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
