"use client";

import { useState, useCallback } from "react";
import IntroSplash from "./IntroSplash";

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  const handleComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <IntroSplash onComplete={handleComplete} />}
      {children}
    </>
  );
}
