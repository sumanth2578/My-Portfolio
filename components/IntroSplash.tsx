"use client";

import { useEffect, useState } from "react";
import styles from "./IntroSplash.module.css";

export default function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"name" | "tagline" | "exit">("name");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 2600);
    const t3 = setTimeout(onComplete, 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.splash} ${phase === "exit" ? styles.exit : ""}`}>
      <div className={styles.content}>
        <h1 className={styles.name}>
          {"Sumanth Gandesiri".split("").map((char, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className={`${styles.tagline} ${phase === "tagline" || phase === "exit" ? styles.taglineVisible : ""}`}>
          <div className={styles.wipe}>
            <p>AI Engineer / Full-Stack Developer / Data Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
}
