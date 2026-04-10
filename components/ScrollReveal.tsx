"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "blur-in"
  | "slide-up"
  | "stagger-children";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  threshold = 0.1,
  className = "",
  style,
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const cssVars = {
    "--sr-delay": `${delay}s`,
    "--sr-duration": `${duration}s`,
    ...style,
  } as CSSProperties;

  if (variant === "stagger-children") {
    const staggerStyle: CSSProperties = {
      ...cssVars,
      "--sr-stagger": `${staggerDelay}s`,
    } as CSSProperties;

    return (
      <div
        ref={ref}
        className={`sr-stagger-wrap ${visible ? "sr-visible" : ""} ${className}`.trim()}
        style={staggerStyle}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`sr-${variant} ${visible ? "sr-visible" : ""} ${className}`.trim()}
      style={cssVars}
    >
      {children}
    </div>
  );
}
