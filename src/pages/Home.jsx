import { Link } from 'react-router-dom';
import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import LocationMap from '../components/LocationMap';
import HoursTable from '../components/HoursTable';
import Reviews from '../components/Reviews';
import { FEATURED_ITEMS, ALL_ITEMS } from '../lib/menuData';
import { images } from '../lib/images';

const PROVENANCE = [
  {
    n: '01',
    title: 'San Marzano DOP',
    body: 'Pomidory z wulkanicznych gleb pod Wezuwiuszem — słodkie, niskokwasowe, prosto z Kampanii.',
  },
  {
    n: '02',
    title: 'Oliwa Nocellara',
    body: 'Z oliwek Nocellara del Belice. To na niej nasze ciasto odpoczywa 72 godziny.',
  },
  {
    n: '03',
    title: 'Pistacje z Bronte',
    body: 'Ze zboczy Etny — najbardziej cenione pistacje na świecie, prażone na miejscu.',
  },
  {
    n: '04',
    title: 'Piec na drewno',
    body: '450°C, kamienna komora — pizza wychodzi z pieca w niecałą minutę.',
  },
];

const PROCESS = [
  {
    n: '01',
    title: 'Fermentacja',
    body: '72 godziny na oliwie z Nocellara, w chłodzie kamiennej spiżarni.',
    image: images.craft[0].src,
    alt: images.craft[0].alt,
  },
  {
    n: '02',
    title: 'Piec',
    body: '450°C, drewno bukowe — niecała minuta do gotowej pizzy.',
    image: images.about.kitchen,
    alt: 'Pizza prosto z pieca opalanego drewnem',
  },
  {
    n: '03',
    title: 'Stół',
    body: 'Podana od razu, najlepsza w pierwszych minutach — z widokiem na Rynek.',
    image: images.craft[2].src,
    alt: images.craft[2].alt,
  },
];

const STATS = [
  { value: '72h', label: 'Fermentacja ciasta' },
  { value: '450°C', label: 'Piec opalany drewnem' },
  { value: '4.8/5', label: '1240 opinii w Google' },
  { value: 'Rynek 8', label: 'W samym centrum Tarnowa' },
];

export default function Home() {
  const cannoli = ALL_ITEMS.find((p) => p.id === 'cannoli');

  return (
    <>
      {/* 1 — HERO: split-screen — dark panel + full-height photo */}
      <section className="grid sm:grid-cols-[minmax(0,42%)_1fr] min-h-[100svh] bg-dusk">
        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-14 py-24 sm:py-0 order-2 sm:order-1">
          <span className="label block mb-4 text-linen/85">Pizzeria sycylijska — Rynek 8, Tarnów</span>
          <h1 className="font-display font-medium text-[20vw] sm:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-linen">
            Etn<span className="text-lava">a</span>
          </h1>
          <p className="text-linen/75 text-base sm:text-lg mt-5 max-w-md leading-relaxed">
            Ciasto fermentowane 72 godziny na oliwie z Sycylii, piec opalany drewnem i smaki, które
            przyjechały prosto z Etny na tarnowski Rynek.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-gold text-sm" aria-hidden="true">★★★★★</span>
            <span className="text-linen/70 text-sm">4.8 / 5 — 1240 opinii na Google</span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-9">
            <a
              href="tel:+48146270000"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-sm bg-gold text-ink font-sans font-medium text-base tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04]"
            >
              Zarezerwuj stolik
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-sm border border-linen/60 text-linen font-sans font-medium text-base tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] hover:bg-linen/10"
            >
              Zobacz menu
            </Link>
          </div>

          <p className="font-display italic text-gold-deep text-base sm:text-lg mt-10 sm:mt-14">
            Rynek 8 — szukaj ognia w oknie kuchni.
          </p>
        </div>

        <div className="relative min-h-[46svh] sm:min-h-full order-1 sm:order-2 overflow-hidden">
          <FadeImage
            src={images.hero}
            alt="Pizza prosto z pieca opalanego drewnem, ze świeżą bazylią"
            className="photo-backdrop ken-burns"
            fetchPriority="high"
            width="1400"
            height="1750"
          />
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-dusk/30 sm:from-dusk/25 sm:to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* 2 — PROVENANCE: typographic band, no photography */}
      <section className="section-pad bg-dusk-2" aria-label="Skąd to smakuje">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="label text-gold-deep">Skąd to smakuje</span>
              <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2 leading-tight">
                Cztery składniki, które nie znają kompromisów.
              </h2>
            </div>
          </IrisWipe>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:divide-x lg:divide-dusk-line">
            {PROVENANCE.map((p, i) => (
              <IrisWipe key={p.n} delay={i * 80}>
                <div className="lg:px-6 first:lg:pl-0">
                  <span className="font-display text-5xl sm:text-6xl text-gold-deep/40 leading-none">{p.n}</span>
                  <h3 className="font-display text-xl sm:text-2xl text-linen mt-3 mb-2">{p.title}</h3>
                  <p className="text-linen/60 text-sm leading-relaxed">{p.body}</p>
                </div>
              </IrisWipe>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — SIGNATURE: full-bleed photo, centered bottom composition */}
      <section className="relative min-h-[85svh] flex items-end justify-center overflow-hidden bg-dusk" aria-label="Pizza Etna">
        <FadeImage
          src={images.menu.etna}
          alt="Pizza Etna prosto z pieca opalanego drewnem, z 'nduja i wędzoną scamorzą"
          className="photo-backdrop ken-burns"
          loading="lazy"
          width="1400"
          height="1750"
        />
        <div className="photo-overlay" aria-hidden="true" />

        <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 text-center">
          <IrisWipe>
            <span className="label text-linen/90">Prosto z pieca</span>
            <div className="w-10 h-px bg-gold mx-auto mt-4 mb-4" aria-hidden="true" />
            <h2 className="font-display text-5xl sm:text-7xl text-linen leading-[1.05]">Pizza Etna</h2>
          </IrisWipe>
          <IrisWipe delay={80}>
            <p className="text-linen/75 leading-relaxed mt-5 text-base sm:text-lg">
              Czarne ciasto na węglu aktywowanym, ’nduja, wędzona scamorza i miód z chili — pizza,
              która wygląda i smakuje jak erupcja.
            </p>
          </IrisWipe>
          <IrisWipe delay={140}>
            <Link
              to="/menu#etna"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] mt-7"
            >
              Zobacz kartę pizz
            </Link>
          </IrisWipe>
        </div>
      </section>

      {/* 4 — PROCESS: three numbered steps, dough → oven → table */}
      <section className="section-pad bg-dusk" aria-label="Jak to robimy">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="mb-12 sm:mb-16 max-w-xl">
              <span className="label text-gold-deep">Jak to robimy</span>
              <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2 leading-tight">
                Od ciasta do stołu w trzech krokach.
              </h2>
            </div>
          </IrisWipe>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {PROCESS.map((step, i) => (
              <IrisWipe key={step.n} delay={i * 100}>
                <div className="flex flex-col gap-4">
                  <span className="font-display text-4xl sm:text-5xl text-gold-deep">{step.n}</span>
                  <div className="frame-offset overflow-hidden rounded-sm border border-dusk-line">
                    <FadeImage
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                      width="1000"
                      height="1000"
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-linen">{step.title}</h3>
                  <p className="text-linen/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </IrisWipe>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — MENU: editorial alternating rows with oversized index numerals */}
      <section className="section-pad bg-dusk-2" aria-label="Z czego nas znają">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12 sm:mb-16 sm:border-b sm:border-dusk-line sm:pb-6">
              <div>
                <span className="label text-gold-deep">Karta</span>
                <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2">Z czego nas znają</h2>
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] self-start sm:self-auto"
              >
                Cała karta
              </Link>
            </div>
          </IrisWipe>

          <div className="flex flex-col gap-10 sm:gap-14">
            {FEATURED_ITEMS.map((item, i) => (
              <IrisWipe key={item.id} delay={i * 80}>
                <Link
                  to={`/menu#${item.id}`}
                  className={`group grid sm:grid-cols-2 gap-6 sm:gap-10 items-center ${
                    i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative overflow-hidden rounded-sm border border-dusk-line">
                    <FadeImage
                      src={item.image}
                      alt={`${item.name} — Etna`}
                      loading="lazy"
                      width="1200"
                      height="1200"
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 ease-editorial group-hover:scale-105"
                    />
                  </div>
                  <div className="relative">
                    <span
                      className="absolute -top-6 sm:-top-10 -left-1 font-display text-6xl sm:text-8xl text-linen/5 leading-none pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative">
                      <span className="label text-gold-deep block mb-2">Wybór gości</span>
                      <h3 className="font-display text-3xl sm:text-4xl text-linen">{item.name}</h3>
                      <p className="text-linen/60 leading-relaxed mt-2 max-w-md">{item.description}</p>
                      <span className="font-mono text-lg text-gold-deep inline-block mt-4">{item.price} zł</span>
                    </div>
                  </div>
                </Link>
              </IrisWipe>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CANNOLI: circular portrait + price panel */}
      <section className="section-pad bg-dusk" aria-label="Cannoli Siciliani — deser sygnaturowy">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-14 items-center">
            <IrisWipe>
              <div className="frame-offset rounded-full overflow-hidden w-48 h-48 sm:w-72 sm:h-72 mx-auto border border-dusk-line">
                <FadeImage
                  src={images.menu.cannoli}
                  alt="Cannoli siciliani z ricottą i pistacjami"
                  loading="lazy"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover"
                />
              </div>
            </IrisWipe>
            <IrisWipe delay={100}>
              <div className="text-center sm:text-left">
                <span className="label text-gold-deep">Deser sygnaturowy</span>
                <h2 className="font-display text-4xl sm:text-6xl text-linen mt-2">Cannoli Siciliani</h2>
                <p className="text-linen/65 leading-relaxed mt-4 max-w-md mx-auto sm:mx-0">
                  Chrupiące rurki smażone na miejscu, ricotta krócej niż godzinę po napełnieniu,
                  kawałki czekolady i prażone pistacje z Bronte.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-5 mt-6">
                  <span className="font-mono text-2xl text-gold-deep">{cannoli?.price} zł</span>
                  <a
                    href="tel:+48146270000"
                    className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04]"
                  >
                    Zarezerwuj stolik
                  </a>
                </div>
              </div>
            </IrisWipe>
          </div>
        </div>
      </section>

      {/* 7 — STATS BAND */}
      <section className="bg-dusk-2 border-y border-dusk-line" aria-label="Etna w liczbach">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-center">
          {STATS.map((s, i) => (
            <IrisWipe key={s.label} delay={i * 60}>
              <div>
                <p className="font-display text-4xl sm:text-5xl text-lava">{s.value}</p>
                <p className="text-linen/55 text-sm mt-2">{s.label}</p>
              </div>
            </IrisWipe>
          ))}
        </div>
      </section>

      {/* 8 — REVIEWS */}
      <Reviews />

      {/* 9 — VISIT: phone-first split layout */}
      <section className="relative section-pad overflow-hidden bg-dusk" aria-label="Odwiedź nas">
        <FadeImage
          src={images.dessertCase}
          alt="Witryna z cannoli i sycylijskimi słodkościami w ciepłym świetle"
          className="photo-backdrop"
          loading="lazy"
          width="1600"
          height="1200"
        />
        <div className="photo-overlay" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 grid sm:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12">
          <IrisWipe>
            <div className="border border-dusk-line rounded-sm bg-dusk/70 backdrop-blur-sm p-8 sm:p-10 h-full flex flex-col justify-center">
              <span className="label text-linen/85">Odwiedź nas</span>
              <h2 className="font-display text-3xl sm:text-5xl text-linen mt-2 mb-4">
                Stolik na Rynku albo miejsce przy piecu?
              </h2>
              <p className="text-linen/65 mb-6 max-w-sm">
                Zawsze warto zadzwonić wcześniej — szczególnie na weekendowe wieczory.
              </p>
              <a
                href="tel:+48146270000"
                className="font-display text-3xl sm:text-4xl text-gold-deep hover:text-gold transition-colors"
              >
                14 627 00 00
              </a>
              <a
                href="tel:+48146270000"
                className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] mt-6 self-start"
              >
                Zadzwoń teraz
              </a>
            </div>
          </IrisWipe>
          <IrisWipe delay={100}>
            <div className="flex flex-col gap-4 h-full justify-center">
              <a
                href="https://etna-tarnow.eatbu.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-dusk-line rounded-sm p-6 transition-colors duration-300 ease-editorial hover:border-gold-deep group"
              >
                <span className="label text-gold-deep">Online</span>
                <h3 className="font-display text-xl text-linen mt-1 mb-1 group-hover:text-gold transition-colors">Zarezerwuj stolik</h3>
                <p className="text-linen/55 text-sm">Wybierz datę i godzinę — potwierdzimy mailem.</p>
              </a>
              <Link
                to="/kontakt"
                className="border border-dusk-line rounded-sm p-6 transition-colors duration-300 ease-editorial hover:border-gold-deep group"
              >
                <span className="label text-gold-deep">Na miejscu</span>
                <h3 className="font-display text-xl text-linen mt-1 mb-1 group-hover:text-gold transition-colors">Rynek 8, Tarnów</h3>
                <p className="text-linen/55 text-sm">Tuż przy ratuszu — wejście od strony Rynku.</p>
              </Link>
            </div>
          </IrisWipe>
        </div>
      </section>

      {/* 10 — FIND US: large map with overlapping info card */}
      <section className="section-pad bg-dusk-2" aria-label="Znajdź nas — lokalizacja i godziny otwarcia">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="mb-8 sm:mb-10">
              <span className="label text-gold-deep">Znajdź nas</span>
              <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2">Rynek 8, Tarnów</h2>
            </div>
          </IrisWipe>
          <IrisWipe delay={80}>
            <div className="relative">
              <LocationMap dark />
              <div className="relative sm:absolute sm:bottom-6 sm:right-6 sm:w-80 mt-4 sm:mt-0 frame-offset">
                <div className="bg-dusk/90 backdrop-blur-sm border border-dusk-line rounded-sm p-5 sm:p-6">
                  <HoursTable dark />
                  <p className="font-display italic text-gold-deep text-base mt-4">
                    Tuż przy ratuszu — wejście od strony Rynku.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Etna+Pizzeria+Tarnów"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-sm border border-linen/50 text-linen font-sans font-medium text-sm tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] hover:bg-linen/10 mt-4"
                  >
                    Otwórz w Mapach
                  </a>
                </div>
              </div>
            </div>
          </IrisWipe>
        </div>
      </section>
    </>
  );
}
