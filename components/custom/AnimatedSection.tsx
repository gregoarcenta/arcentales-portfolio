"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  animation = "fade",
  delay = 0
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClass = {
    fade: "scroll-fade-in",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    scale: "scroll-scale"
  }[animation];

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
