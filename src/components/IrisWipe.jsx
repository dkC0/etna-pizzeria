import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal wrapper — calm editorial fade + translateY (12-16px).
 * One-time trigger at ~85% viewport. Respects prefers-reduced-motion via CSS
 * (animation disabled, opacity:1 fallback).
 */
export default function IrisWipe({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? 'opacity-100' : 'opacity-0'} motion-safe:transition-all motion-safe:duration-1000`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.98)',
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
