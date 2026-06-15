import { useEffect, useState } from 'react';

/**
 * Bottom-pinned mobile reservation bar — "Zarezerwuj stolik". The conversion
 * backbone for mobile diners deciding where to eat tonight. Appears after the
 * visitor scrolls past the hero (~70% of viewport height). Gentle pulse on the
 * icon only — never the whole bar.
 */
export default function StickyCallCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = () => window.innerHeight * 0.7;
    const onScroll = () => setVisible(window.scrollY > threshold());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-editorial ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="tel:+48146270000"
        className="flex items-center justify-center gap-3 w-full min-h-[56px] bg-fig text-linen font-sans font-semibold text-base tracking-wide"
      >
        <span className="status-pulse" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path
              d="M8.5 4.5h3l1.5 4-2 1.8a9 9 0 0 0 6.7 6.7l1.8-2 4 1.5v3a2 2 0 0 1-2 2C12.5 21.5 6.5 15.5 6.5 6.5a2 2 0 0 1 2-2z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </span>
        Zarezerwuj stolik · 14 627 00 00
      </a>
    </div>
  );
}
