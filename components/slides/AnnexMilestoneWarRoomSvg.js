import React from "react";
import { closingWarRoomSvgContent } from "./closingWarRoomSvgContent";

export default function AnnexMilestoneWarRoomSvg({ className = "" }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: closingWarRoomSvgContent }}
    />
  );
}
