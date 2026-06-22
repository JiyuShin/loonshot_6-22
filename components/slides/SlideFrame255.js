import React, { useState, useEffect, useRef } from "react";
import Frame255ContentSvg from "@/components/slides/Frame255ContentSvg";

export default function SlideFrame255() {
  const [scrollStep, setScrollStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const scrollStepRef = useRef(0);
  const lastStepChangeTime = useRef(0);
  const slideActiveTime = useRef(0);
  const sectionRef = useRef(null);
  
  const isActiveRef = useRef(false);

  // Sync refs to avoid stale closures in event listeners
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    scrollStepRef.current = scrollStep;
  }, [scrollStep]);

  // IntersectionObserver to detect if this slide is active and reset state when completely out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Slide is active when >= 50% visible, and deactivated when <= 5% visible (adds a buffer to block scroll transition triggers)
        if (entry.intersectionRatio >= 0.5) {
          setIsActive(true);
          slideActiveTime.current = Date.now();
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

  // Handle wheel events for custom multi-step scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      const timeSinceActive = now - slideActiveTime.current;

      // 1. Absorb scroll momentum from the previous slide transition (1000ms)
      if (timeSinceActive < 1000) {
        e.preventDefault();
        return;
      }

      const timeSinceLastStep = now - lastStepChangeTime.current;

      if (e.deltaY > 0) {
        // Scroll Down
        if (scrollStepRef.current === 0) {
          scrollStepRef.current = 1;
          setScrollStep(1);
          lastStepChangeTime.current = now;
          e.preventDefault();
        } else if (timeSinceLastStep < 1000) {
          // Prevent scrolling to the next slide too quickly (reduced to 1000ms to block trackpad momentum and respond naturally)
          e.preventDefault();
        }
      } else if (e.deltaY < 0) {
        // Scroll Up - Allow natural scroll up to the previous page without custom step transitions
        // This will let the browser naturally scroll up to SlidePilot (Slide 16)
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  // Handle keyboard arrow keys for custom multi-step scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      const timeSinceActive = now - slideActiveTime.current;

      // Absorb rapid key presses immediately after entering slide
      if (timeSinceActive < 1000) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

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
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        // Scroll Up - Allow natural keydown transition to previous slide
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`slide figma-slide figma-frame255 ${scrollStep === 1 ? "is-step-1" : ""} ${isActive ? "on" : ""}`} 
      data-ch="5" 
      data-title="실행 구조 상세"
    >
      {/* Background glow effects matching SlidePilot/SlideRisk */}
      <div className="figma-frame255__bg" aria-hidden="true" />

      <div className="figma-slide__inner figma-frame255__content">
        <Frame255ContentSvg className="figma-frame255__summary-svg" />
      </div>
    </section>
  );
}
