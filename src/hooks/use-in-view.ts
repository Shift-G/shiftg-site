"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Visibility ratio that flips `inView`. Default 0.15. */
  threshold?: number;
  /** Margin around the root. */
  rootMargin?: string;
  /** Stay `true` after first intersection (default). Set false to toggle. */
  once?: boolean;
}

/**
 * IntersectionObserver hook. Attach `ref` to an element; `inView` flips
 * when it enters the viewport. Defaults to fire-once (for scroll reveals
 * and count-ups that should not replay on every pass).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.15, rootMargin, once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
