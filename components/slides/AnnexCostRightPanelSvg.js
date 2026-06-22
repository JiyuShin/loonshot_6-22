import { annexCostRightPanelTextSvgContent } from "./annexCostRightPanelSvgContent";

export default function AnnexCostRightPanelSvg({ className }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<svg width="620" height="396" viewBox="0 0 620 396" fill="none" xmlns="http://www.w3.org/2000/svg">${annexCostRightPanelTextSvgContent}</svg>` }}
    />
  );
}
