import React from "react";

export default function SlideAnnexDesignAIWorkflow() {
  return (
    <section className="slide figma-slide figma-annex-design-ai" data-ch="a" data-title="Design AI Workflow">
      <div className="figma-annex-design-ai__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-annex-design-ai__content">
        
        {/* Frame 473 (Main Wrapper) */}
        <div className="figma-annex-design-ai__wrapper">
          
          {/* Frame 381 (Header Frame) */}
          <div className="figma-annex-design-ai__header rv head" style={{ "--rd": "200ms" }}>
            {/* Standardized capsule pill matching other pages */}
            <div className="figma-pill figma-annex-design-ai__pill">
              현장기록 2 · FIELD EVIDENCE
            </div>
            {/* Design AI workflow Title */}
            <h2 className="figma-annex-design-ai__title">
              Design AI workflow
            </h2>
          </div>

          {/* Frame 459 (Diagram Flow Container) */}
          <div className="figma-annex-design-ai__diagram rv" style={{ "--rd": "500ms" }}>
            
            {/* SVG Connection Lines and Arrowheads */}
            <svg className="figma-annex-design-ai__svg-lines" width="1547.86" height="529.08" viewBox="0 0 1547.86 529.08" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow-right" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2D68DF" />
                </marker>
                <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 1.5 0 L 5 10 L 8.5 0 z" fill="#2D68DF" />
                </marker>
                <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="0" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 1.5 10 L 5 0 L 8.5 10 z" fill="#2D68DF" />
                </marker>
              </defs>

              {/* 1. From Prompt to the 3 Image Sources left spine */}
              <path d="M 137.55 264.54 H 166.18" stroke="#2D68DF" strokeWidth="1.5" />

              {/* 2. The 3 Image Sources left branch vertical spine */}
              <path d="M 166.18 152.95 V 376.15" stroke="#487BE3" strokeWidth="1.5" />

              {/* 3. The 3 Image Sources left branch horizontal lines into boxes */}
              <path d="M 166.18 152.95 H 194.81" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 166.18 264.54 H 194.81" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 166.18 376.15 H 194.81" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 4. From the 3 Image Sources to the LoRA Column left spine */}
              <path d="M 358.54 152.95 H 372.99" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 358.54 264.55 H 372.99" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 358.54 376.15 H 372.99" stroke="#2D68DF" strokeWidth="1.5" />

              {/* Vertical spine on the left of LoRA Column */}
              <path d="M 372.99 152.95 V 376.15" stroke="#487BE3" strokeWidth="1.5" />

              {/* Horizontal arrows from vertical spine to LoRA Column */}
              <path d="M 372.99 152.95 H 387.44" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 372.99 264.55 H 387.44" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 5. LoRA Column vertical lines */}
              {/* LoRA 학습 사이트 <- 조형물 학습 LoRA (UP arrow) */}
              <path d="M 470.80 111.60 V 82.70" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-up)" />

              {/* 조형물 학습 LoRA <-> 차량 학습 LoRA (Bidirectional vertical arrow) */}
              <path d="M 470.80 208.75 V 194.30" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-up)" />
              <path d="M 470.80 208.75 V 223.20" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

              {/* 차량 학습 LoRA <-> 비율 조절 (Bidirectional vertical arrow) */}
              <path d="M 470.80 376.15 V 305.90" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-up)" />
              <path d="M 470.80 376.15 V 446.40" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

              {/* Horizontal line from vertical spine to right edge of LoRA Column */}
              <path d="M 470.80 376.15 H 554.16" stroke="#2D68DF" strokeWidth="1.5" />

              {/* Right branch lines of LoRA Column */}
              <path d="M 554.16 152.95 H 574.14" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 554.16 264.55 H 574.14" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 554.16 376.15 H 574.14" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 554.16 487.75 H 574.14" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 574.14 152.95 V 487.75" stroke="#487BE3" strokeWidth="1.5" />
              <path d="M 574.14 264.55 H 594.11" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 6. From 다수 이미지 생성 to 이미지 편집 */}
              <path d="M 708.12 259.87 H 742.12" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 7. Image Editing Column bidirectional vertical lines */}
              {/* 부분 이미지 생성 <-> 이미지 편집 */}
              <path d="M 796.38 169.22 V 119.92" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-up)" />
              <path d="M 796.38 169.22 V 218.52" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

              {/* 이미지 편집 <-> Drawing Tool 연계 */}
              <path d="M 796.38 355.20 V 301.22" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-up)" />
              <path d="M 796.38 355.20 V 409.17" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-down)" />

              {/* 8. From 이미지 편집 to 다시점 이미지 생성 */}
              <path d="M 859.13 264.54 H 884.63" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 9. From 다시점 이미지 생성 to the 4 Target Nodes */}
              <path d="M 1015.15 264.54 H 1039.60" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 1039.60 80.57 V 448.52" stroke="#4579E3" strokeWidth="1.5" />
              <path d="M 1039.60 80.57 H 1064.05" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 1039.60 203.22 H 1064.05" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 1039.60 325.87 H 1064.05" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
              <path d="M 1039.60 448.52 H 1064.05" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 10. From the 4 Target Nodes to 배경 생성 및 교체 */}
              <path d="M 1217.07 80.57 H 1241.52" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 1217.07 203.22 H 1241.52" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 1217.07 325.87 H 1241.52" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 1217.07 448.52 H 1241.52" stroke="#2D68DF" strokeWidth="1.5" />
              <path d="M 1241.52 80.57 V 448.52" stroke="#4579E3" strokeWidth="1.5" />
              <path d="M 1241.52 264.54 H 1265.97" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />

              {/* 11. From 배경 생성 및 교체 to Rendering */}
              <path d="M 1388.99 264.54 H 1417.35" stroke="#2D68DF" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
            </svg>

            {/* Node 1: Prompt 입력방법론 */}
            <div className="figma-annex-design-ai__node figma-annex-design-ai__node--prompt">
              <div className="figma-annex-design-ai__node-shadow" />
              <span className="figma-annex-design-ai__node-text">
                Prompt 입력방법론
              </span>
            </div>

            {/* Spacer for h33 vector */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--h33" />

            {/* Frame 460 (Split to 3 Image Sources) */}
            <div className="figma-annex-design-ai__frame-460">
              {/* Spacer for left branch lines */}
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w28" />

              {/* Frame 372 (The 3 Image Source Nodes) */}
              <div className="figma-annex-design-ai__frame-372">
                <div className="figma-annex-design-ai__node figma-annex-design-ai__node--image">
                  <div className="figma-annex-design-ai__node-shadow" />
                  <span className="figma-annex-design-ai__node-text">
                    Image<br />
                    <small>(스케치, 3D툴,사진)</small>
                  </span>
                </div>
                <div className="figma-annex-design-ai__node figma-annex-design-ai__node--edit-img">
                  <div className="figma-annex-design-ai__node-shadow" />
                  <span className="figma-annex-design-ai__node-text">
                    일부 수정 이미지
                  </span>
                </div>
                <div className="figma-annex-design-ai__node figma-annex-design-ai__node--franken">
                  <div className="figma-annex-design-ai__node-shadow" />
                  <span className="figma-annex-design-ai__node-text">
                    Franken Image<br />
                    <small>(이미지 짜깁기)</small>
                  </span>
                </div>
              </div>

              {/* Spacer for right branch lines */}
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w28" />
            </div>

            {/* Frame 111 (LoRA Column) */}
            <div className="figma-annex-design-ai__frame-111">
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--lora-site">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  LoRA 학습 사이트
                </span>
              </div>
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--v28" />
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--lora-sculpt">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  조형물 학습 LoRA<br />
                  <small>(학습 방법론 및 절차)</small>
                </span>
              </div>
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--v28" />
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--lora-car">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  차량 학습 LoRA<br />
                  <small>(학습 방법론 및 절차)</small>
                </span>
              </div>
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--v140" />
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--ratio">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  비율 조절<br />
                  <small>(학습 방법론 및 절차)</small>
                </span>
              </div>
            </div>

            {/* Spacer for flipped branch lines */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w17" />

            {/* Spacer for 비율 조절 connector */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w22" />

            {/* Node: 다수 이미지 생성 */}
            <div className="figma-annex-design-ai__node figma-annex-design-ai__node--multi-img">
              <div className="figma-annex-design-ai__node-shadow" />
              <span className="figma-annex-design-ai__node-text">
                다수 이미지 생성
              </span>
            </div>

            {/* Frame 461 (Image Editing Column) */}
            <div className="figma-annex-design-ai__frame-461">
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--part-img">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  부분 이미지 생성
                </span>
              </div>
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--v116" />
              <div className="figma-annex-design-ai__frame-461-sub">
                <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w34" />
                <div className="figma-annex-design-ai__node figma-annex-design-ai__node--img-edit">
                  <div className="figma-annex-design-ai__node-shadow" />
                  <span className="figma-annex-design-ai__node-text">
                    이미지 편집<br />
                    <small>(수기 → 재생성)</small>
                  </span>
                </div>
                <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w36" />
              </div>
              <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--v127" />
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--drawing">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  Drawing Tool 연계<br />
                  <small>(Krita)</small>
                </span>
              </div>
            </div>

            {/* Node: 다시점 이미지 생성 */}
            <div className="figma-annex-design-ai__node figma-annex-design-ai__node--multiview">
              <div className="figma-annex-design-ai__node-shadow" />
              <span className="figma-annex-design-ai__node-text">
                다시점 이미지 생성
              </span>
            </div>

            {/* Spacer for h23 vector */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w20" />

            {/* Spacer for left branch lines for 4 outputs */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w28" />

            {/* Frame 375 (The 4 Target Generation Nodes) */}
            <div className="figma-annex-design-ai__frame-375">
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--video">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  동영상 생성
                </span>
              </div>
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--3d-make">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  3D 제작<br />
                  <small>(Blender / Alias)</small>
                </span>
              </div>
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--2d-to-3d">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  2D to 3D 변환
                </span>
              </div>
              <div className="figma-annex-design-ai__node figma-annex-design-ai__node--3d-edit">
                <div className="figma-annex-design-ai__node-shadow" />
                <span className="figma-annex-design-ai__node-text">
                  3D Data 수정<br />
                  <small>(Blender 연계)</small>
                </span>
              </div>
            </div>

            {/* Spacer for right branch lines for 4 outputs */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w28" />

            {/* Spacer for h23 vector */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--w20" />

            {/* Node: 배경 생성 및 교체 */}
            <div className="figma-annex-design-ai__node figma-annex-design-ai__node--bg-change">
              <div className="figma-annex-design-ai__node-shadow" />
              <span className="figma-annex-design-ai__node-text">
                배경 생성 및 교체
              </span>
            </div>

            {/* Spacer for h33 vector */}
            <div className="figma-annex-design-ai__spacer figma-annex-design-ai__spacer--h33" />

            {/* Node: Rendering (렌더링 자동화) */}
            <div className="figma-annex-design-ai__node figma-annex-design-ai__node--rendering">
              <div className="figma-annex-design-ai__node-shadow" />
              <span className="figma-annex-design-ai__node-text">
                Rendering<br />
                <small>(렌더링 자동화)</small>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
