import { roleRatioDiagramSvg } from "./roleRatioDiagramSvgContent";

export default function RoleRatioDiagramSvg({ className, style }) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: roleRatioDiagramSvg }}
    />
  );
}
