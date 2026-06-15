import { useEffect, useState } from 'react';

/**
 * "The Eruption" — a hairline fissure glows across the dark basalt screen,
 * widens, and erupts into a bloom of molten light that recedes to reveal
 * the wordmark.
 *
 * ~2200ms total. Skippable on any input (click/key/touch/wheel).
 * sessionStorage-gated (handled by parent). Fully replaced by an instant
 * fade under prefers-reduced-motion.
 */
export default function Loader({ onDone }) {
  const [stage, setStage] = useState(0); // 0: dark, 1: fissure glows, 2: lava bloom, 3: wordmark visible, 4: exit
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function finish(exitDelay = 650) {
      setStage(4);
      setHidden(true);
      setTimeout(onDone, exitDelay);
    }

    if (prefersReduced) {
      setStage(3);
      const t = setTimeout(() => finish(150), 150);
      return () => clearTimeout(t);
    }

    const total = 2200;
    const t1 = setTimeout(() => setStage(1), 100);
    const t2 = setTimeout(() => setStage(2), 650);
    const t3 = setTimeout(() => setStage(3), total * 0.55);
    const t4 = setTimeout(() => finish(650), total);

    const skip = () => finish(250);
    window.addEventListener('click', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('touchstart', skip, { once: true });
    window.addEventListener('wheel', skip, { once: true });

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
      window.removeEventListener('click', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('touchstart', skip);
      window.removeEventListener('wheel', skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-dusk flex items-center justify-center overflow-hidden transition-all duration-[650ms] ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)' }}
    >
      <div className="sr-only" role="status">Etna — wczytywanie</div>

      {/* Fissure — a hairline crack that glows across the screen before the eruption */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 transition-all"
        style={{
          top: '50%',
          height: stage >= 1 ? '3px' : '0px',
          background: 'linear-gradient(90deg, transparent 0%, var(--lava) 20%, var(--gold) 50%, var(--lava) 80%, transparent 100%)',
          boxShadow: stage >= 1 ? '0 0 40px 10px rgba(255,90,43,0.65)' : 'none',
          transform: 'translateY(-50%)',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
          opacity: stage >= 2 ? 0 : 1,
        }}
      />

      {/* Eruption — radial bloom of molten light, expanding from the fissure */}
      <div
        aria-hidden="true"
        className="absolute rounded-full transition-all duration-[1400ms]"
        style={{
          width: stage >= 2 ? 'min(150vw, 150vh)' : '0vw',
          height: stage >= 2 ? 'min(150vw, 150vh)' : '0vw',
          background: 'radial-gradient(circle, rgba(255,90,43,0.9) 0%, rgba(225,67,26,0.4) 35%, rgba(206,143,55,0.15) 60%, transparent 80%)',
          filter: 'blur(20px)',
          opacity: stage >= 2 ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        }}
      />

      {/* Wordmark, revealed as the eruption recedes */}
      <div className="relative flex flex-col items-center" aria-hidden="true">
        <div
          className="font-display font-medium tracking-wide text-linen transition-all duration-700"
          style={{
            fontSize: 'min(15vw, 6rem)',
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? 'scale(1)' : 'scale(1.08)',
            filter: stage >= 3 ? 'blur(0px)' : 'blur(8px)',
            transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
          }}
        >
          Etn<span className="text-lava">a</span>
        </div>

        <p
          className="font-display italic text-gold-deep text-sm sm:text-base mt-3 transition-opacity duration-700"
          style={{ opacity: stage >= 3 ? 0.85 : 0, transitionDelay: '220ms' }}
        >
          u stóp wulkanu, na Rynku w Tarnowie
        </p>
      </div>
    </div>
  );
}
