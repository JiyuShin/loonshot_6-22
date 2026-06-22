import { useRef } from "react";
import { deckSlidesRestHtml } from "@/utils/deckContent";
import { useDeckPresentation } from "@/utils/useDeckPresentation";
import DeckNav from "@/components/DeckNav";
import DeckAudio from "@/components/DeckAudio";
import SlideCover from "@/components/slides/SlideCover";
import SlideOwnership from "@/components/slides/SlideOwnership";
import SlideNecessity from "@/components/slides/SlideNecessity";
import SlideFord from "@/components/slides/SlideFord";
import SlideChain from "@/components/slides/SlideChain";
import SlideInflection from "@/components/slides/SlideInflection";
import SlideNadella from "@/components/slides/SlideNadella";
import SlideCapital from "@/components/slides/SlideCapital";
import SlideRisk from "@/components/slides/SlideRisk";
import SlideJudgment from "@/components/slides/SlideJudgment";
import SlideLoop from "@/components/slides/SlideLoop";
import SlideClaim from "@/components/slides/SlideClaim";
import SlideRole from "@/components/slides/SlideRole";
import SlideEvidence from "@/components/slides/SlideEvidence";
import SlidePilot from "@/components/slides/SlidePilot";
import SlideAlphaGo from "@/components/slides/SlideAlphaGo";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideFrame255 from "@/components/slides/SlideFrame255";
import SlideAnnexIntro from "@/components/slides/SlideAnnexIntro";
import SlideAnnexHistory from "@/components/slides/SlideAnnexHistory";
import SlideAnnexValueChainShift from "@/components/slides/SlideAnnexValueChainShift";
import SlideAnnexConductor from "@/components/slides/SlideAnnexConductor";
import SlideAnnexDesignAIWorkflow from "@/components/slides/SlideAnnexDesignAIWorkflow";
import SlideAnnexCostCurve from "@/components/slides/SlideAnnexCostCurve";
import SlideAnnexMilestone from "@/components/slides/SlideAnnexMilestone";
import SlideAnnexRenderSmith from "@/components/slides/SlideAnnexRenderSmith";
import SlideAnnexPayoff from "@/components/slides/SlideAnnexPayoff";
import SlidePage28 from "@/components/slides/SlidePage28";

export default function LoonshotPresentation() {
  const deckRef = useRef(null);
  useDeckPresentation(deckRef);

  return (
    <>
      <DeckAudio />
      <div id="brand">
        <span className="mark" />
        PROJECT LOONSHOT
      </div>
      <div id="counter">
        <b>01</b> / <span id="total">00</span>
      </div>
      <DeckNav deckRef={deckRef} />
      <div id="progress">
        <span className="track" />
        <i />
      </div>
      <div id="hint">
        <div className="hint-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M7 12L3 8M7 12L11 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>슬라이드 이동</span>
      </div>

      <main id="deck" ref={deckRef}>
        <SlideCover />
        <SlideFord />
        <SlideAnnexHistory />
        <SlideChain />
        <SlideInflection />
        <SlideNecessity />
        <SlideOwnership />
        <SlideNadella />
        <SlideCapital />
        <SlideRisk />
        <SlideJudgment />
        <SlideLoop />
        <SlideClaim />
        <SlideRole />
        <SlideEvidence />
        <SlidePilot />
        <SlideFrame255 />
        <SlideClosing />
        <SlideAlphaGo />
        <SlideAnnexValueChainShift />
        <SlideAnnexConductor />
        <SlideAnnexDesignAIWorkflow />
        <SlideAnnexRenderSmith />
        <SlideAnnexCostCurve />
        <SlideAnnexMilestone />
        <SlideAnnexPayoff />
        <SlideAnnexIntro />
        <SlidePage28 />
        <div className="deck-rest" dangerouslySetInnerHTML={{ __html: deckSlidesRestHtml }} />
      </main>
    </>
  );
}
