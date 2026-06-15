import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/menu', label: 'Menu' },
  { to: '/o-nas', label: 'O nas' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/kontakt', label: 'Kontakt' },
];

// Pages that open directly on a light section (no dark photo banner behind
// the nav) — these always render the solid dark nav, even at scrollY 0, so
// the gradient-on-light combination never goes low-contrast.
const ALWAYS_SOLID = ['/o-nas', '/galeria'];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || open || ALWAYS_SOLID.includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial border-b ${
        solid ? 'bg-dusk/90 backdrop-blur-md border-dusk-line' : 'bg-gradient-to-b from-dusk/60 to-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between" aria-label="Główna nawigacja">
        <Link
          to="/"
          className="font-display text-lg sm:text-xl tracking-wide text-linen transition-colors duration-300"
          aria-label="Etna — strona główna"
        >
          Etn<span className="text-gold-deep">a</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `label relative py-1 transition-colors duration-300 hover:text-gold after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 after:ease-editorial ${
                    isActive
                      ? 'text-gold after:w-full'
                      : 'text-linen/85 after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="tel:+48146270000"
              className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-sm bg-gold text-ink font-sans font-medium text-sm transition-all duration-300 ease-editorial hover:scale-[1.04] active:scale-[0.97]"
            >
              Zarezerwuj stolik
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden relative inline-flex items-center justify-center w-11 h-11 text-linen transition-colors duration-300"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Zamknij menu' : 'Otwórz menu'}</span>
          <span className="relative w-6 h-4" aria-hidden="true">
            <span
              className="absolute left-0 top-0 w-6 h-[1.5px] bg-current transition-all duration-300 ease-editorial"
              style={{
                transform: open ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0)',
              }}
            />
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-current transition-all duration-300 ease-editorial"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 bottom-0 w-6 h-[1.5px] bg-current transition-all duration-300 ease-editorial"
              style={{
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0)',
              }}
            />
          </span>
        </button>
      </nav>

      <div
        className="md:hidden grid overflow-hidden transition-[grid-template-rows] duration-500 ease-editorial"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="bg-dusk border-t border-dusk-line px-5 py-6 flex flex-col gap-1 transition-all duration-400 ease-editorial"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
              transitionDelay: open ? '120ms' : '0ms',
            }}
          >
            {LINKS.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-lg font-display border-b border-dusk-line transition-all duration-400 ease-editorial ${isActive ? 'text-gold-deep' : 'text-linen'}`
                }
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(-6px)',
                  transitionDelay: open ? `${160 + i * 50}ms` : '0ms',
                }}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="tel:+48146270000"
              className="mt-4 inline-flex items-center justify-center min-h-[48px] rounded-sm bg-gold text-ink font-sans font-medium text-base transition-all duration-300 ease-editorial active:scale-[0.97]"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(-6px)',
                transitionDelay: open ? `${160 + LINKS.length * 50}ms` : '0ms',
              }}
            >
              Zadzwoń: 14 627 00 00
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
