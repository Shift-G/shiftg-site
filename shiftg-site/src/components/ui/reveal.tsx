"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface RevealProps extends BoxProps {
  /** Stagger delay in ms. */
  delay?: number;
  /** Initial downward offset in px. */
  y?: number;
}

/**
 * Scroll-reveal wrapper: fades + lifts its children into place the first
 * time it enters the viewport. Respects prefers-reduced-motion (renders
 * final state immediately). Animates the block, not headings per-letter,
 * to stay within the MOTION style-guide rules.
 */
export function Reveal({ children, delay = 0, y = 14, ...rest }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const active = inView || reduced;

  return (
    <Box
      ref={ref}
      opacity={active ? 1 : 0}
      transform={active ? "translateY(0)" : `translateY(${y}px)`}
      transition={
        reduced
          ? undefined
          : "opacity 0.6s ease, transform 0.6s cubic-bezier(.32,.72,0,1)"
      }
      transitionDelay={reduced ? undefined : `${delay}ms`}
      willChange="opacity, transform"
      {...rest}
    >
      {children}
    </Box>
  );
}
