import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Slim top progress bar shown on route changes — gives SPA navigation a
 * sense of motion even though there's no real network wait.
 */
export default function RouteLoader() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    setVisible(true);
    setProgress(20);
    const t1 = setTimeout(() => setProgress(78), 90);
    const t2 = setTimeout(() => setProgress(100), 300);
    const t3 = setTimeout(() => setVisible(false), 520);
    const t4 = setTimeout(() => setProgress(0), 620);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gold"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transition: `width ${progress === 100 ? '220ms' : '350ms'} cubic-bezier(0.16,1,0.3,1), opacity 200ms ease`,
        }}
      />
    </div>
  );
}
