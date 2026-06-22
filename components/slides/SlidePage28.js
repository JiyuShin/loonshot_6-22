import { page28ContentSvg } from "./page28ContentSvg";

export default function SlidePage28() {
  return (
    <section className="slide figma-slide figma-page28" data-ch="a" data-title="28페이지">
      <div className="figma-page28__bg" aria-hidden="true" />
      <div className="figma-slide__inner figma-page28__content">
        <div
          className="figma-page28__svg"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: page28ContentSvg }}
        />
      </div>
    </section>
  );
}
