import React from "react";
import { annexConductorSvg } from "@/components/slides/annexConductorSvgContent";

export default function SlideAnnexConductor() {
  return (
    <section className="slide figma-slide figma-annex-conductor" data-ch="a" data-title="연주자에서 지휘자로">
      <div className="figma-annex-conductor__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-conductor__content">
        <div
          className="figma-annex-conductor__svg-group rv head"
          style={{ "--rd": "200ms" }}
          dangerouslySetInnerHTML={{ __html: annexConductorSvg }}
        />
      </div>
    </section>
  );
}
