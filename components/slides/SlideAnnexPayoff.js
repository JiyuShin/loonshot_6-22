import React from "react";
import { annexPayoffReplacementSvgContent } from "./annexPayoffReplacementSvgContent";

export default function SlideAnnexPayoff() {
  return (
    <section className="slide figma-slide figma-annex-payoff" data-ch="a" data-title="성과로 착지">
      <div className="figma-annex-payoff__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-payoff__content">
        <div className="figma-annex-payoff__wrapper">
          <div
            className="figma-annex-payoff__replacement-svg rv head"
            style={{ "--rd": "200ms" }}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: annexPayoffReplacementSvgContent }}
          />
        </div>
      </div>
    </section>
  );
}
