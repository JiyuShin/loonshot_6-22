import React from "react";

export default function ClosingLoopSvg({ className = "" }) {
  return (
    <img
      className={className}
      src="/images/figma/closing-loop-updated.svg"
      width="1150"
      height="210"
      alt="Seed Thread Twin closed loop diagram"
      draggable={false}
    />
  );
}
