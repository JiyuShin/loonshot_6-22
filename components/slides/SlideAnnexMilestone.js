import React from "react";
import AnnexMilestoneWarRoomSvg from "./AnnexMilestoneWarRoomSvg";
import { annexMilestoneReplacementSvg } from "./annexMilestoneReplacementSvgContent";

const animatedMilestoneSvg = annexMilestoneReplacementSvg
  .replace("<svg ", '<svg class="figma-annex-milestone__svg" ')
  .replace('<path d="M340.364 ', '<path class="figma-annex-milestone__svg-kicker" d="M340.364 ')
  .replace('<path d="M269.585 ', '<path class="figma-annex-milestone__svg-title" d="M269.585 ')
  .replace('<path d="M717.431 ', '<path class="figma-annex-milestone__svg-title" d="M717.431 ')
  .replace('<path d="M86.5748 ', '<path class="figma-annex-milestone__svg-subtitle" d="M86.5748 ')
  .replace('<path d="M82.7945 ', '<path class="figma-annex-milestone__svg-subtitle" d="M82.7945 ')
  .replace('<path d="M279.162 ', '<path class="figma-annex-milestone__svg-subtitle" d="M279.162 ')
  .replace('<path d="M595.659 ', '<path class="figma-annex-milestone__svg-subtitle" d="M595.659 ')
  .replace('<path d="M75.7686 ', '<path class="figma-annex-milestone__svg-subtitle" d="M75.7686 ')
  .replace('<path d="M2.27996 ', '<g class="figma-annex-milestone__svg-graph"><path d="M2.27996 ')
  .replace("</svg>", "</g></svg>");

export default function SlideAnnexMilestone() {
  return (
    <section className="slide figma-slide figma-annex-milestone" data-ch="a" data-title="선행개발 패러다임 전환">
      <div className="figma-annex-milestone__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-milestone__content">
        <div className="figma-annex-milestone__stage">
          <div
            className="figma-annex-milestone__replacement-svg"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: animatedMilestoneSvg }}
          />
          <AnnexMilestoneWarRoomSvg className="figma-annex-milestone__warroom-svg" />
        </div>
      </div>
    </section>
  );
}
