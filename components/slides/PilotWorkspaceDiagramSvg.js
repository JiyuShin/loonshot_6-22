import { pilotWorkspaceDiagramSvg } from "./pilotWorkspaceDiagramSvgContent";

export default function PilotWorkspaceDiagramSvg({ className, style }) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: pilotWorkspaceDiagramSvg }}
    />
  );
}
