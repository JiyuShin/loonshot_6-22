import { useState, useEffect, useRef } from "react";
import Grainient from "../Grainient";
import Galaxy from "../Galaxy";

export default function SlideCover() {
  const [scrollStep, setScrollStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollStepRef = useRef(0);
  const lastStepChangeTime = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 1페이지가 활성 상태이고 첫 번째 스텝(scrollStep === 0)일 때만 body에 클래스 추가
    if (isActive && scrollStep === 0) {
      document.body.classList.add('is-initial-state');
    } else {
      document.body.classList.remove('is-initial-state');
    }
  }, [isActive, scrollStep]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const now = Date.now();
      const timeSinceLastStep = now - lastStepChangeTime.current;

      // 스크롤 방향 감지
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (scrollStepRef.current === 0) {
          scrollStepRef.current = 1;
          setScrollStep(1);
          lastStepChangeTime.current = now;
          e.preventDefault();
        } else if (timeSinceLastStep < 800) {
          // 전환 중에는 다음 페이지로 넘어가지 않도록 잠금 (800ms)
          e.preventDefault();
        }
        // scrollStep이 1이고 800ms가 지났으면 기본 스크롤 허용 (다음 페이지로 이동)
      } else if (e.deltaY < 0) {
        // 위로 스크롤
        if (scrollStepRef.current === 1) {
          scrollStepRef.current = 0;
          setScrollStep(0);
          lastStepChangeTime.current = now;
          e.preventDefault();
        }
      }
    };

    // Use non-passive listener to allow preventDefault
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [scrollStep]);

  return (
    <section
      ref={sectionRef}
      className={`slide figma-slide figma-cover ${scrollStep === 1 ? 'is-black' : ''} ${isActive ? 'on' : ''}`}
      id="cover"
      data-ch="1"
      data-title="표지"
    >
      <div className="figma-cover__bg" aria-hidden="true">
        <Grainient
          color1="#8bb4ff"
          color2="#cbdcff"
          color3="#ffffff"
          timeSpeed={0.5}
          colorBalance={0.0}
          warpStrength={2.8}
          warpFrequency={4.5}
          warpSpeed={1.9}
          warpAmplitude={95}
          blendAngle={45}
          blendSoftness={0.1}
          rotationAmount={200}
          noiseScale={1.0}
          grainAmount={0.03}
          grainScale={1.5}
          grainAnimated={false}
          contrast={1.0}
          gamma={1.2}
          saturation={1.2}
          centerX={0}
          centerY={0}
          zoom={1}
          resolutionScale={1.0}
        />
        <Galaxy 
          className="figma-cover__galaxy"
          style={{ mixBlendMode: 'screen', opacity: 0.65 }}
          mouseRepulsion
          mouseInteraction
          density={0.7}
          glowIntensity={0.15}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.2}
          rotationSpeed={0.05}
          repulsionStrength={1.5}
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.8}
          transparent={false}
        />
      </div>

      <div className="figma-slide__inner figma-cover__content">
        <p className="figma-cover__lede rv" style={{ "--rd": "400ms" }}>
          자산화 기반 디자인 개발 체계 전환
        </p>

        <div className="figma-cover__title rv head" style={{ "--rd": "900ms" }}>
          <span className="figma-cover__title-project">PROJECT</span>
          <span className="figma-cover__title-loonshot">LOONSHOT</span>
        </div>
      </div>
    </section>
  );
}
