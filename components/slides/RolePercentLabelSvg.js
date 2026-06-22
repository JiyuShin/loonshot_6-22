import { rolePercentLabelSvg } from "./rolePercentLabelSvgContent";

export default function RolePercentLabelSvg({ className, style }) {
  return (
    <div
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: rolePercentLabelSvg }}
    />
  );
}
