import PilotWorkspaceDiagramSvg from "./PilotWorkspaceDiagramSvg";

export default function SlidePilot() {
  return (
    <section className="slide figma-slide figma-pilot" data-ch="5" data-title="파일럿 실행 구조">
      <div className="figma-pilot__bg" aria-hidden="true" />

      <div className="figma-slide__inner figma-pilot__content">
        <PilotWorkspaceDiagramSvg className="figma-pilot__workspace-diagram" />
      </div>
    </section>
  );
}
