import { ReactNode } from "react";
import { TechBackground } from "./TechBackground";

interface PageLayoutProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "secondary";
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Tech network background */}
      <TechBackground variant="page" opacity={0.3} />

      {/* Gradient overlay - changes based on scroll */}
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background pointer-events-none" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,.03)_1px,transparent_1px)] bg-size-[80px_80px] md:bg-size-[100px_100px] opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
