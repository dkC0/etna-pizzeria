import { Link } from 'react-router-dom';

const ICONS = {
  phone: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M8.5 4.5h3l1.5 4-2 1.8a9 9 0 0 0 6.7 6.7l1.8-2 4 1.5v3a2 2 0 0 1-2 2C12.5 21.5 6.5 15.5 6.5 6.5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  ),
  table: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M4 10h20M6 10v11M22 10v11M9 14h10M9 18h10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  walk: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="15.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M14 9.5l-3 3 1.5 5-2.5 5.5M14 9.5l4 2-1 4 3.5 2.5M11 12.5l5 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function OrderPath({ icon, title, description, href, cta, primary = false, dark = false }) {
  const isInternal = href.startsWith('/');
  const className = `mt-2 inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-6 py-3 rounded-sm font-sans font-medium text-sm tracking-wide transition-all duration-300 ease-editorial ${
    primary
      ? 'bg-fig text-linen hover:scale-[1.03]'
      : dark
        ? 'border border-linen/60 text-linen hover:bg-linen/10 hover:scale-[1.03]'
        : 'border border-fig text-fig hover:bg-fig/10 hover:scale-[1.03]'
  }`;

  const frameClassName = dark
    ? 'border border-[var(--dusk-line)] rounded-sm bg-linen/[0.04] p-6 sm:p-8 flex flex-col items-center text-center gap-3 transition-colors duration-300 ease-editorial hover:border-[var(--gold)]'
    : 'edit-frame p-6 sm:p-8 flex flex-col items-center text-center gap-3';

  return (
    <div className={frameClassName}>
      <span className={dark ? 'text-[var(--gold-deep)]' : 'text-fig'}>{ICONS[icon]}</span>
      <h3 className={`font-display text-xl ${dark ? 'text-linen' : 'text-ink'}`}>{title}</h3>
      <p className={`text-sm ${dark ? 'text-linen/70' : 'text-ink/70'}`}>{description}</p>
      {isInternal ? (
        <Link to={href} className={className}>{cta}</Link>
      ) : (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={className}>
          {cta}
        </a>
      )}
    </div>
  );
}
