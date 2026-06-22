import React, { useState, useEffect, useRef } from "react";

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
        {/* Top Tag */}
        <div className="figma-pill figma-frame255__tag rv" style={{ "--rd": "100ms" }}>
          <span className="figma-frame255__tag-text">실행 구조 · 작게 시작하다</span>
        </div>

        {/* Title Container with absolute overlapping titles for blur transition */}
        <div className="figma-frame255__title-container rv head" style={{ "--rd": "300ms" }}>
          <h2 className="figma-frame255__title figma-frame255__title--original">
            파일럿 실행 구조와 승인요청
          </h2>
          <h2 className="figma-frame255__title figma-frame255__title--new">
            워룸에서 검증하겠습니다.
          </h2>
        </div>

        {/* 3-Box Process Diagram */}
        <div className="figma-frame255__process">
          {/* Box 1 */}
          <div className="figma-frame255__process-box rv" style={{ "--rd": "600ms" }}>
            <div className="figma-frame255__process-title">Design AI</div>
            <div className="figma-frame255__process-subtitle">도구</div>
            <div className="figma-frame255__process-desc">새 프로세스를 가능하게 하는 수단</div>
          </div>

          {/* Arrow 1 */}
          <div className="figma-frame255__process-arrow rv" style={{ "--rd": "750ms" }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H23M23 8L16 1M23 8L16 15" stroke="#92ABE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Box 2 */}
          <div className="figma-frame255__process-box rv" style={{ "--rd": "900ms" }}>
            <div className="figma-frame255__process-title">Next-Gen Process</div>
            <div className="figma-frame255__process-subtitle">개발 프로세스 혁신</div>
            <div className="figma-frame255__process-desc">빠진 연결고리, 혁신의 진짜 대상</div>
          </div>

          {/* Arrow 2 */}
          <div className="figma-frame255__process-arrow rv" style={{ "--rd": "1050ms" }}>
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H23M23 8L16 1M23 8L16 15" stroke="#92ABE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Box 3 */}
          <div className="figma-frame255__process-box rv" style={{ "--rd": "1200ms" }}>
            <div className="figma-frame255__process-title">Manufacturing</div>
            <div className="figma-frame255__process-subtitle">제조 혁신</div>
            <div className="figma-frame255__process-desc">프로세스가 자리 잡을 때 현실이 되는 성과</div>
          </div>
        </div>

        {/* Two Columns for 역할 분담 & 워룸 */}
        <div className="figma-frame255__cards">
          {/* Left Card: 역할 분담 */}
          <div className="figma-frame255__card-wrapper rv" style={{ "--rd": "1450ms" }}>
            <div className="figma-pill figma-frame255__card-tag">역할 분담</div>
            <div className="figma-frame255__card-content">
              <p>
                <strong>AI 인프라</strong>(호스팅 · 학습 데이터 · 파이프라인 · 보안)는<br />
                <strong>DE센터와 ICT본부</strong>의 전사 공통 영역
              </p>
              <p className="figma-frame255__card-highlight">
                <strong>디자인</strong>은 워룸 안의 <strong>워크플로우 · 에이전트 조합 · 크로스티켓</strong><br />
                <strong>→ 실사용과 성과 담당</strong>
              </p>
            </div>
          </div>

          {/* Right Card: 워룸 */}
          <div className="figma-frame255__card-wrapper rv" style={{ "--rd": "1700ms" }}>
            <div className="figma-pill figma-frame255__card-tag">워룸</div>
            <div className="figma-frame255__card-content">
              <p>
                시험장에서 달리고 데이터를 모으고 안전을 확인한다.
              </p>
              <p className="figma-frame255__card-highlight">
                <strong>파일럿의 목적</strong><br />
                → <strong>반복 가능한 프로세스 템플릿 / Lessons Learned</strong><br />
                <strong>/ 조직의 신뢰 / 확산 권한</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Condition List Card */}
        <div className="figma-frame255__bottom-panel rv" style={{ "--rd": "1950ms" }}>
          <div className="figma-frame255__bottom-grid">
            {/* Column 1 */}
            <div className="figma-frame255__bottom-col">
              <div className="figma-frame255__bottom-item">
                <span className="figma-frame255__bottom-num">1. 앞단 프로젝트</span>
                <span className="figma-frame255__bottom-text">제품 개발 단계가 명확히 앞단에 있는 신규 / 리프레시</span>
              </div>
              <div className="figma-frame255__bottom-item">
                <span className="figma-frame255__bottom-num">2. 적정 복잡도</span>
                <span className="figma-frame255__bottom-text">크로스티켓이 실제로 필요한 수준</span>
              </div>
              <div className="figma-frame255__bottom-item">
                <span className="figma-frame255__bottom-num">3. 블라인드 평가</span>
                <span className="figma-frame255__bottom-text">결과를 객관 평가할 판단 라인</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="figma-frame255__bottom-col">
              <div className="figma-frame255__bottom-item">
                <span className="figma-frame255__bottom-num">4. Go / No-Go</span>
                <span className="figma-frame255__bottom-text">의사결정 프로세스 작동 여부 확인</span>
              </div>
              <div className="figma-frame255__bottom-item">
                <span className="figma-frame255__bottom-num">5. 제한된 리스크</span>
                <span className="figma-frame255__bottom-text">실패해도 전사 리스크가 제한적</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
