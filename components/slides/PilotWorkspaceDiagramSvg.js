import { pilotWorkspaceDiagramSvg } from "./pilotWorkspaceDiagramSvgContent";
import PilotWorkspaceBoxesSvg from "./PilotWorkspaceBoxesSvg";

export default function PilotWorkspaceDiagramSvg({ className, style }) {
  return (
    <div className={className} style={style} aria-hidden="true">
      <div
        className="figma-pilot__workspace-diagram-base"
        dangerouslySetInnerHTML={{ __html: pilotWorkspaceDiagramSvg }}
      />
      <PilotWorkspaceBoxesSvg className="figma-pilot__workspace-boxes-svg" />
    </div>
  );
}
