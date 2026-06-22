import { useEffect, useRef } from "react";

export default function SlideEvidence() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    const syncPlayback = () => {
      if (section.classList.contains("on")) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    const observer = new MutationObserver(syncPlayback);
    observer.observe(section, { attributes: true, attributeFilter: ["class"] });
    syncPlayback();

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="slide figma-slide figma-evidence" data-ch="4" data-title="THINKING MACHINE reasoning workspace">
      <div className="figma-evidence__bg" aria-hidden="true" />

      <div className="figma-slide__inner figma-evidence__content">
        <div className="figma-pill rv soft" style={{ "--rd": "250ms" }}>
          Early Evidence • Demo
        </div>

        <div className="figma-evidence__header">
          <h2 className="figma-evidence__headline rv head" style={{ "--rd": "600ms" }}>
            THINKING MACHINE reasoning workspace
          </h2>

          <p className="figma-evidence__subtitle rv soft" style={{ "--rd": "900ms" }}>
            Amore 2030 Brand Strategy in Korea
          </p>
        </div>

        <div className="figma-evidence__video-wrap rv" style={{ "--rd": "1200ms" }}>
          <video
            ref={videoRef}
            className="figma-evidence__video"
            src="/demo.mp4"
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
}
