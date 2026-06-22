import { useEffect } from "react";

/*
  DeckAudio — background music for the deck.

  Behaviour (per request):
  - Plays on the "music scenes" (currently the cover / main page, index 0).
  - Scrolling away ramps the volume down (fade out) and then pauses.
  - Returning to a music scene resumes and ramps the volume up (fade in).
  - The track itself (~2 min) fades out over its last 8s, loops back to the
    very start, and fades in again — an endless, seam-free loop.

  Effective volume = MASTER × sceneGain × loopGain
    sceneGain : 0..1, eased toward 1 on a music scene, toward 0 elsewhere.
    loopGain  : 0..1, derived from currentTime (fade-in head + fade-out tail).
*/

const SRC = "/audio/design-intelligence-loops.mp3";
const MASTER = 0.55;            // overall ceiling so it sits under narration
const MUSIC_SCENES = new Set([0]); // slide indices that play music (0 = cover)
const FADE_IN_HEAD = 3;         // sec: fade in at the start of each loop
const FADE_OUT_TAIL = 8;        // sec: fade out before the track ends
const SCENE_RAMP = 1.5;         // sec to ramp scene fade in/out on scroll

export default function DeckAudio() {
  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;          // wrap handled at ~0 volume → inaudible seam
    audio.preload = "auto";
    audio.volume = 0;
    if (typeof window !== "undefined") window.__deckAudio = audio;

    let target = MUSIC_SCENES.has(0) ? 1 : 0; // scene gain target
    let sceneGain = 0;
    let started = false;
    let lastT = performance.now();
    let raf = 0;

    const tryPlay = () => {
      if (audio.paused) {
        const p = audio.play();
        if (p && p.then) p.then(() => { started = true; }).catch(() => {});
      }
    };

    const deck = document.getElementById("deck");
    const onUpdate = (e) => {
      const idx = (e.detail && typeof e.detail.index === "number") ? e.detail.index : 0;
      target = MUSIC_SCENES.has(idx) ? 1 : 0;
      if (target === 1) tryPlay();
    };
    if (deck) deck.addEventListener("deck:update", onUpdate);

    // Autoplay is blocked until the user interacts — start on the first gesture.
    const gestureEvents = ["pointerdown", "keydown", "wheel", "touchstart"];
    const onGesture = () => { if (target === 1) tryPlay(); };
    gestureEvents.forEach((ev) =>
      window.addEventListener(ev, onGesture, { passive: true })
    );

    const loopGain = () => {
      const d = audio.duration;
      const t = audio.currentTime;
      if (!d || Number.isNaN(d)) return 1;
      if (t < FADE_IN_HEAD) return t / FADE_IN_HEAD;
      if (t > d - FADE_OUT_TAIL) return Math.max(0, (d - t) / FADE_OUT_TAIL);
      return 1;
    };

    const tick = (now) => {
      const dt = Math.min(0.1, (now - lastT) / 1000);
      lastT = now;

      const step = dt / SCENE_RAMP;
      if (sceneGain < target) sceneGain = Math.min(target, sceneGain + step);
      else if (sceneGain > target) sceneGain = Math.max(target, sceneGain - step);

      audio.volume = Math.max(0, Math.min(1, MASTER * sceneGain * loopGain()));

      // fully faded out of a scene → pause; came back → resume
      if (target === 0 && sceneGain <= 0.001 && !audio.paused) audio.pause();
      if (target === 1 && audio.paused && started) tryPlay();

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    tryPlay(); // attempt immediately (cover is a music scene)

    return () => {
      cancelAnimationFrame(raf);
      if (deck) deck.removeEventListener("deck:update", onUpdate);
      gestureEvents.forEach((ev) => window.removeEventListener(ev, onGesture));
      audio.pause();
      audio.src = "";
      if (typeof window !== "undefined" && window.__deckAudio === audio) {
        delete window.__deckAudio;
      }
    };
  }, []);

  return null;
}
