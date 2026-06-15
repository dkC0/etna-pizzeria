import { Link } from 'react-router-dom';
import HoursTable from './HoursTable';

export default function Footer() {
  return (
    <footer className="section-dark section-pad !py-12 sm:!py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center sm:text-left">
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <Link to="/" className="font-display text-xl tracking-wide text-linen">
              Etn<span className="whisper not-italic">a</span>
            </Link>
            <p className="text-sm text-linen/65 leading-relaxed max-w-xs">
              Rynek 8<br />33-100 Tarnów
            </p>
            <a href="tel:+48146270000" className="text-sm text-linen/85 hover:text-gold-deep transition-colors duration-300">
              14 627 00 00
            </a>
            <p className="text-sm text-linen/65">4.8&#9733; &middot; 1240 opinii w Google</p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="label">Godziny</span>
            <HoursTable compact dark />
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="label">Na mapie i w sieci</span>
            <nav aria-label="Linki w stopce" className="flex flex-col items-center sm:items-start gap-2 text-sm">
              <Link to="/menu" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">Menu</Link>
              <Link to="/o-nas" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">O nas</Link>
              <Link to="/galeria" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">Galeria</Link>
              <Link to="/kontakt" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">Kontakt</Link>
              <a href="https://www.instagram.com/etna.tarnow/" target="_blank" rel="noreferrer" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">Instagram</a>
              <a href="https://www.facebook.com/etna.tarnow/" target="_blank" rel="noreferrer" className="text-linen/85 hover:text-gold-deep transition-colors duration-300">Facebook</a>
            </nav>
          </div>
        </div>

        <div className="h-px mt-10 sm:mt-12" style={{ background: 'var(--dusk-line)' }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-center sm:text-left">
          <p className="whisper text-lg">Do zobaczenia na Rynku.</p>
          <p className="text-xs text-linen/55">&copy; {new Date().getFullYear()} Etna. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
