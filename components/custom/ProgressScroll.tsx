"use client";

import { useScrollProgress } from "@/hooks/useScrollAnimation";

export const ProgressScroll = () => {
  const scrollProgress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-primary z-50 transition-all duration-300"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};
