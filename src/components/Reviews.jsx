import FadeImage from './FadeImage';
import IrisWipe from './IrisWipe';
import { images } from '../lib/images';

const RATING = '4.8';
const REVIEW_COUNT = '1240';

const TESTIMONIALS = [
  {
    quote:
      'Pizza Etna to coś, czego nie widziałem w żadnej innej pizzerii w Polsce — czarne ciasto, ostry ’nduja i miód z chili. Wygląda i smakuje jak erupcja.',
    theme: 'Pizza Etna',
  },
  {
    quote:
      'Sfincione robione tak, jak powinno być — gęste, soczyste ciasto na oliwie, anchois w tle, nie na pierwszym planie. Czuć, że ktoś tu był na Sycylii.',
    theme: 'Sfincione',
  },
  {
    quote:
      'Cannoli lepsze niż te, które jadłam w Palermo — chrupiąca rurka, ricotta nie za słodka, pistacje prawdziwe. Zamawiamy na wynos co tydzień.',
    theme: 'Cannoli Siciliani',
  },
  {
    quote:
      'Stolik na Rynku, zachód słońca i pizza prosto z pieca opalanego drewnem — Tarnów nie miał wcześniej takiego miejsca.',
    theme: 'Atmosfera',
  },
];

export default function Reviews() {
  return (
    <section className="section-pad bg-paper" aria-label="Opinie gości">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-[1.1fr_1fr] gap-10 sm:gap-14 items-center">
        <div>
          <IrisWipe>
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-2 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 1.5l2.6 5.4 5.9.9-4.3 4.2 1 5.9L10 15l-5.2 2.9 1-5.9L1.5 7.8l5.9-.9L10 1.5z"
                      fill="var(--gold)"
                    />
                  </svg>
                ))}
              </div>
              <p className="font-display text-3xl sm:text-4xl text-ink">
                {RATING} <span className="text-muted text-xl sm:text-2xl">/ 5</span>
              </p>
              <p className="whisper text-lg mt-1">{REVIEW_COUNT} opinii w Google</p>
            </div>
          </IrisWipe>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <IrisWipe key={t.theme} delay={i * 80}>
                <figure className="edit-frame p-5 sm:p-6 h-full flex flex-col gap-3">
                  <span className="label text-fig">{t.theme}</span>
                  <blockquote className="text-ink/80 leading-relaxed text-sm sm:text-base">
                    &bdquo;{t.quote}&rdquo;
                  </blockquote>
                </figure>
              </IrisWipe>
            ))}
          </div>

          <IrisWipe>
            <p className="text-xs text-faint mt-6 max-w-xl">
              Powyższe opinie to stylizowane podsumowanie najczęstszych wątków pojawiających się
              w recenzjach Google, nie cytaty przypisane konkretnym osobom.
            </p>
          </IrisWipe>
        </div>

        <IrisWipe delay={100}>
          <div className="edit-frame overflow-hidden">
            <FadeImage
              src={images.atmosphere.guests}
              alt="Goście przy stole w sali Etny — atmosfera wieczoru"
              loading="lazy"
              width="1400"
              height="1750"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </IrisWipe>
      </div>
    </section>
  );
}
