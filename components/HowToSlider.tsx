"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/Tap-Share-on-TikTok-1.webp", label: "I-tap ang Share", alt: "I-tap ang Share sa TikTok video para buksan ang mga opsyon sa pagbabahagi" },
  { src: "/images/TikTok-copy-link-tutorial-2.webp", label: "Kopyahin ang link", alt: "Piliin ang Copy Link para kopyahin ang link ng TikTok video" },
  { src: "/images/Step-3-Paste the link-3.webp", label: "I-paste ang link", alt: "I-paste ang kinopyang TikTok video link sa tiktokdownloader.ph" },
  { src: "/images/Step-4-Find-the-video-4.webp", label: "Hanapin ang video", alt: "Pindutin ang Hanapin ang Video matapos i-paste ang TikTok link" },
  { src: "/images/Step-5-Wait-for-loading-5.webp", label: "Sandaling hintayin", alt: "Hintaying matapos ang pag-load ng TikTok video at mga download option" },
  { src: "/images/Select-the-HD-MP4-download-6.webp", label: "Piliin ang HD MP4", alt: "Piliin ang HD MP4 download para i-save ang TikTok video" },
  { src: "/images/Phone-Download-Progress-Tutorial-7.webp", label: "Idina-download", alt: "Tingnan ang progreso habang dina-download ang TikTok video sa phone" },
];

export default function HowToSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % slides.length), 4000);
    return () => window.clearTimeout(timer);
  }, [active, paused, hovered, focused, reducedMotion]);

  function move(direction: number) {
    setActive((index) => (index + direction + slides.length) % slides.length);
  }

  return (
    <div className="home-howto-slider" role="region" aria-roledescription="carousel" aria-label="Mga larawan ng proseso ng pag-download"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
      <div className="home-howto-slider__screen"
        onPointerDown={(event) => {
          pointerStart.current = { x: event.clientX, y: event.clientY };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { pointerStart.current = null; }}
        onPointerUp={(event) => {
          const start = pointerStart.current;
          pointerStart.current = null;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1);
        }}>
        {slides.map((slide, index) => (
          <figure key={slide.src} className={`home-howto-slide${active === index ? " is-active" : ""}`} aria-hidden={active !== index} aria-label={`${index + 1} / ${slides.length}: ${slide.label}`}>
            <Image src={slide.src} alt={slide.alt} width={1024} height={1536} loading="lazy" quality={75} sizes="(max-width: 414px) 82vw, (max-width: 991px) 340px, 388px" draggable={false} />
          </figure>
        ))}
      </div>
      <div className="home-howto-slider__navigation">
        <button type="button" className="home-howto-slider__control" aria-label="Nakaraang larawan" title="Nakaraang larawan" onClick={() => move(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
        </button>
        <div className="home-howto-slider__dots" aria-label="Pumili ng hakbang">
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" aria-label={`Hakbang ${index + 1}: ${slide.label}`} title={slide.label} aria-current={index === active ? "step" : undefined} onClick={() => setActive(index)}><span /></button>
          ))}
        </div>
        <button type="button" className="home-howto-slider__control" aria-label="Susunod na larawan" title="Susunod na larawan" onClick={() => move(1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
        </button>
      </div>
      <div className="home-howto-slider__status">
        <span>{active + 1} / {slides.length}</span>
        <button type="button" className="home-howto-slider__control" aria-label={paused || reducedMotion ? "Ituloy ang slideshow" : "I-pause ang slideshow"} title={paused || reducedMotion ? "Ituloy ang slideshow" : "I-pause ang slideshow"} onClick={() => { setPaused(!paused && !reducedMotion); setReducedMotion(false); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paused || reducedMotion ? <path d="m8 5 11 7-11 7V5Z" /> : <path d="M8 5v14M16 5v14" />}</svg>
        </button>
      </div>
    </div>
  );
}
