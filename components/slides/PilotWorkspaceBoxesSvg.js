import { pilotWorkspaceBoxesSvg } from "./pilotWorkspaceBoxesSvgContent";

export default function PilotWorkspaceBoxesSvg({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width="1500"
      height="402"
      viewBox="0 0 1500 402"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: pilotWorkspaceBoxesSvg }}
    />
  );
}
