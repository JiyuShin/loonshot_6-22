import { loopFlowDiagramSvg } from "./loopFlowDiagramSvgContent";

export default function LoopFlowDiagramSvg({ className, style }) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: loopFlowDiagramSvg }}
    />
  );
}
