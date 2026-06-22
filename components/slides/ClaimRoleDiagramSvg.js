import { claimRoleDiagramSvg } from "./claimRoleDiagramSvgContent";

export default function ClaimRoleDiagramSvg({ className, style }) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: claimRoleDiagramSvg }}
    />
  );
}
