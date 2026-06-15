import { useState } from 'react';
import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import MenuCard from '../components/MenuCard';
import { MENU_CATEGORIES, ALL_ITEMS } from '../lib/menuData';
import { images } from '../lib/images';

const TABS = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'pasta', label: 'Makarony' },
  { id: 'desery', label: 'Desery' },
];

export default function Menu() {
  const [tab, setTab] = useState('all');
  const featured = ALL_ITEMS.find((p) => p.id === 'etna');

  let visible;
  if (tab === 'all') visible = MENU_CATEGORIES;
  else visible = MENU_CATEGORIES.filter((c) => c.id === tab);

  return (
    <div>
      {/* Photo banner */}
      <section className="relative min-h-[40svh] sm:min-h-[50svh] flex items-end overflow-hidden section-dark">
        <FadeImage
          src={images.about.hero}
          alt="Pizza sycylijska prosto z pieca opalanego drewnem"
          className="photo-backdrop"
          fetchPriority="high"
          width="2000"
          height="1333"
        />
        <div className="photo-overlay" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-10 sm:pb-14 w-full">
          <h1 className="font-display text-4xl sm:text-5xl">Menu</h1>
          <p className="whisper text-lg mt-1">Pizza, przystawki i sycylijskie desery — prosto z naszego pieca.</p>
        </div>
      </section>

      <div className="section-pad pt-12 sm:pt-16">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Tabs */}
        <IrisWipe delay={60}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 sm:mb-14" role="tablist" aria-label="Kategorie menu">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`whisper text-lg pb-1 border-b-2 transition-colors duration-300 min-h-[44px] ${
                  tab === t.id ? 'text-fig border-fig' : 'text-ink/60 border-transparent hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </IrisWipe>

        {/* Featured Pizza Etna hero card */}
        {(tab === 'all' || tab === 'pizza') && featured && (
          <IrisWipe>
            <div id="etna" className="mb-10 sm:mb-14 scroll-mt-24">
              <span className="label text-fig block mb-3">Pizza sygnaturowa</span>
              <MenuCard item={featured} large />
            </div>
          </IrisWipe>
        )}

        {visible.map((cat) => (
          <div key={cat.id} className="mb-10 sm:mb-14">
            <IrisWipe>
              <h2 className="whisper text-xl text-fig mb-4">{cat.label}</h2>
            </IrisWipe>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {cat.items
                .filter((item) => item.id !== 'etna')
                .map((item, i) => (
                  <IrisWipe key={item.id} delay={i * 80}>
                    <MenuCard item={item} />
                  </IrisWipe>
                ))}
            </div>
          </div>
        ))}

        <IrisWipe>
          <p className="text-sm text-ink/75 mt-6 max-w-xl">
            Pełna karta — wraz z daniami dla dzieci, opcjami wegetariańskimi i wegańskimi oraz
            kartą napojów — dostępna na miejscu i u obsługi. Część dań sezonowych zmienia się
            w zależności od dostępności składników.
          </p>
        </IrisWipe>
      </div>

      {/* Sticky reservation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-linen/95 border-t border-sand sm:hidden">
        <a
          href="tel:+48146270000"
          className="flex items-center justify-center min-h-[56px] font-sans font-medium text-linen bg-fig"
        >
          Zarezerwuj stolik: 14 627 00 00
        </a>
      </div>
      <div className="hidden sm:block fixed bottom-8 right-8 z-40">
        <a
          href="tel:+48146270000"
          className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-sm bg-fig text-linen font-sans font-medium tracking-wide shadow-lg transition-transform duration-300 hover:scale-[1.04]"
        >
          Zarezerwuj
        </a>
      </div>
      <div className="h-16 sm:hidden" aria-hidden="true" />
      </div>
    </div>
  );
}
