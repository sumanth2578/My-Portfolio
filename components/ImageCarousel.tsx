"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

interface Slide {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [active, setActive] = useState(0);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setActive((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, [slides.length]);

  return (
    <div className={styles.carousel}>
      {/* Viewport */}
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className={styles.slide}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={675}
                className={styles.image}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter */}
        <span className={styles.counter}>
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Caption */}
      <p className={styles.caption}>{slides[active].caption}</p>

      {/* Dot nav */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbs}>
        {slides.map((slide, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
            onClick={() => goTo(i)}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={160}
              height={90}
              className={styles.thumbImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
