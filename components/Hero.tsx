"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function Hero({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<number | null>(null);

  const count = slides.length;
  const goTo = useCallback((next: number) => setIndex((next + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, count]);

  return (
    <section
      className="relative isolate min-h-[620px] overflow-hidden border-b border-white/10 sm:min-h-[720px]"
      aria-roledescription="carousel"
      aria-label="Presentazione servizi"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        const nextTarget = e.relatedTarget;
        if (!(nextTarget instanceof Node) || !e.currentTarget.contains(nextTarget)) setPaused(false);
      }}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        const end = e.changedTouches[0]?.clientX;
        if (start != null && end != null) {
          const delta = start - end;
          if (Math.abs(delta) > 45) (delta > 0 ? next() : prev());
        }
        touchStart.current = null;
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      

      <div className="container-boch relative flex min-h-[620px] items-center py-20 sm:min-h-[720px]">
        <div className="max-w-4xl" aria-live="polite">
          <p className="mb-6 inline-flex border border-[#ffc400]/45 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ffc400]">
            {slides[index].eyebrow}
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {slides[index].title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-xl">
            {slides[index].subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={slides[index].ctaHref}
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 bg-[#ffc400] px-7 text-base font-black text-black transition hover:bg-white"
            >
              {slides[index].ctaLabel.toUpperCase()} <ArrowRight size={20} />
            </Link>
            <Link
              href="/contatti"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 border border-white/25 bg-black/35 px-7 text-base font-black text-white transition hover:border-[#ffc400] hover:text-[#ffc400]"
            >
              RICHIEDI UN PREVENTIVO
            </Link>
          </div>
        </div>
      </div>

      {count > 1 && (
        <div className="container-boch pointer-events-none absolute inset-x-0 bottom-8 flex items-end justify-between gap-4">
          <div className="pointer-events-auto flex gap-2" aria-label="Selezione slide">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => goTo(i)}
                className={`focus-ring h-2.5 transition-all motion-reduce:transition-none ${
                  i === index ? "w-10 bg-[#ffc400]" : "w-2.5 bg-white/35 hover:bg-white/70"
                }`}
                aria-label={`Vai alla slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <div className="pointer-events-auto flex gap-2">
            <button
              type="button"
              onClick={() => setPaused((v) => !v)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/45 text-white hover:border-[#ffc400] hover:text-[#ffc400]"
              aria-label={paused ? "Avvia scorrimento automatico" : "Metti in pausa scorrimento"}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button
              type="button"
              onClick={prev}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/45 text-white hover:border-[#ffc400] hover:text-[#ffc400]"
              aria-label="Slide precedente"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-black/45 text-white hover:border-[#ffc400] hover:text-[#ffc400]"
              aria-label="Slide successiva"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
