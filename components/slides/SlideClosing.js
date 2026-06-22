import React, { useEffect, useRef, useState } from "react";
import ClosingBottomTextSvg from "@/components/slides/ClosingBottomTextSvg";
import ClosingLoopSvg from "@/components/slides/ClosingLoopSvg";

export default function SlideClosing() {
  const [scrollStep, setScrollStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const isActiveRef = useRef(false);
  const scrollStepRef = useRef(0);
  const lastStepChangeTime = useRef(0);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    scrollStepRef.current = scrollStep;
  }, [scrollStep]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          setIsActive(true);
        } else if (entry.intersectionRatio <= 0.05) {
          setIsActive(false);
          setScrollStep(0);
          scrollStepRef.current = 0;
        }
      },
      { threshold: [0.05, 0.5] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      const timeSinceLastStep = now - lastStepChangeTime.current;

      if (e.deltaY > 0) {
        if (scrollStepRef.current === 0) {
          scrollStepRef.current = 1;
          setScrollStep(1);
          lastStepChangeTime.current = now;
          e.preventDefault();
        } else if (timeSinceLastStep < 1000) {
          e.preventDefault();
        }
      } else if (e.deltaY < 0 && scrollStepRef.current === 1) {
        scrollStepRef.current = 0;
        setScrollStep(0);
        lastStepChangeTime.current = now;
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      const timeSinceLastStep = now - lastStepChangeTime.current;

      if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(e.key)) {
        if (scrollStepRef.current === 0) {
          scrollStepRef.current = 1;
          setScrollStep(1);
          lastStepChangeTime.current = now;
          e.preventDefault();
          e.stopPropagation();
        } else if (timeSinceLastStep < 1000) {
          e.preventDefault();
          e.stopPropagation();
        }
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key) && scrollStepRef.current === 1) {
        scrollStepRef.current = 0;
        setScrollStep(0);
        lastStepChangeTime.current = now;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`slide figma-slide figma-closing ${scrollStep === 1 ? "is-step-1" : ""}`}
      data-ch="5"
      data-title="마치며"
    >
      {/* Frame 447 - Content Frame */}
      <div className="figma-closing__content-frame">
        {/* Frame 445 - Top Container */}
        <div className="figma-closing__top-frame">
          {/* PROJECT LOONSHOT */}
          <div className="figma-closing__project-title rv head" style={{ "--rd": "300ms" }}>
            <span className="project-title__sub">PROJECT</span>
            <span className="project-title__main">LOONSHOT</span>
          </div>

          {/* Frame 310 - Title Container */}
          <div className="figma-closing__title-group rv head" style={{ "--rd": "600ms" }}>
            <h2 className="figma-closing__subtitle">
              118년 전, 컨베이어 벨트가 산업의 구조를 바꿨다면
            </h2>
            <h1 className="figma-closing__main-title">
              <span className="figma-closing__main-title-accent">다음 혁신</span>은 <strong>Seed→Thread→Twin의 Closed Loop</strong>로<br />연결하는 것입니다.
            </h1>
          </div>
        </div>

        <div className="figma-closing__stage">
          <div className="figma-closing__loop-svg-wrap">
            <ClosingLoopSvg className="figma-closing__loop-svg" />
          </div>

          {/* Frame 446 - Bottom Container */}
          <div className="figma-closing__bottom-frame">
            <ClosingBottomTextSvg className="figma-closing__bottom-svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
