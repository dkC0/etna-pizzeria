import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles scroll restoration for SPA navigation:
 * - hash present: scroll to element (after layout settles)
 * - no hash: scroll to top on route change
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
        return;
      }
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}
