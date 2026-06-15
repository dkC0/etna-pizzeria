import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Global smooth-scroll — adds gentle inertia/easing to wheel and touch
 * scrolling so the whole page glides instead of snapping. Skipped entirely
 * under prefers-reduced-motion. Exposes the instance on window.__lenis so
 * ScrollToHash can route hash/anchor jumps through it.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return null;
}
