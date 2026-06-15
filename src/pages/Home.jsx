import { Link } from 'react-router-dom';
import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import OrderPath from '../components/OrderPath';
import LocationMap from '../components/LocationMap';
import HoursTable from '../components/HoursTable';
import Reviews from '../components/Reviews';
import { FEATURED_ITEMS, ALL_ITEMS } from '../lib/menuData';
import { images } from '../lib/images';

// Decorative flame silhouette — the recurring "fire" motif, used sparingly
// as a soft accent shape rather than photography.
function FlameAccent({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path
        d="M100 6C70 50 50 78 50 116C50 162 72 194 100 194C128 194 150 162 150 116C150 90 138 70 124 52C128 78 116 92 104 92C92 92 86 78 92 56C84 64 70 86 70 116C70 144 84 164 100 164C116 164 130 144 130 116C130 138 116 152 100 152C84 152 70 138 70 116C70 86 84 64 100 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const cannoli = ALL_ITEMS.find((p) => p.id === 'cannoli');

  return (
    <>
      {/* 1 — HERO: full-bleed wood-fired oven, ambient zoom, oversized wordmark */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-dusk">
        <FadeImage
          src={images.hero}
          alt="Pizza prosto z pieca opalanego drewnem, ze świeżą bazylią"
          className="photo-backdrop ken-burns"
          fetchPriority="high"
          width="1920"
          height="1280"
        />
        <div className="photo-overlay" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-24 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="label block mb-4 text-linen/90">Pizzeria sycylijska — Rynek 8, Tarnów</span>
              <h1 className="font-display font-medium text-[18vw] sm:text-8xl lg:text-[9rem] leading-[0.95] tracking-wide text-linen">
                Etn<span className="text-lava">a</span>
              </h1>
              <p className="text-linen/80 text-base sm:text-xl mt-5 sm:mt-6 max-w-lg leading-relaxed">
                Ciasto fermentowane 72 godziny na oliwie z Sycylii, piec opalany drewnem
                i smaki, które przyjechały prosto z Etny na tarnowski Rynek.
              </p>
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
            </div>

            <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:text-right">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-linen/30 bg-dusk/40 backdrop-blur-sm">
                <div className="text-center">
                  <p className="font-display text-lg sm:text-xl leading-none text-linen">4.8</p>
                  <p className="text-gold text-xs leading-none mt-0.5">★★★★★</p>
                </div>
              </div>
              <p className="text-linen/70 text-sm sm:text-right">1240 opinii<br className="hidden sm:block" /> na Google</p>
            </div>
          </div>

          <p className="font-display italic text-gold-deep text-base sm:text-lg mt-8 sm:mt-12">
            Rynek 8 — szukaj ognia w oknie kuchni.
          </p>
        </div>
      </section>

      {/* 2 — EDITORIAL INTRO: dark, asymmetric split, overlapping framed photo */}
      <section className="relative section-pad bg-dusk-2 overflow-hidden" aria-label="O Etnie">
        <FlameAccent className="hidden sm:block absolute -left-16 bottom-0 w-64 h-64 text-lava/10" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-[1.1fr,0.9fr] gap-12 sm:gap-20 items-center">
          <IrisWipe>
            <div className="flex flex-col gap-5 max-w-lg">
              <span className="label text-gold-deep">Sycylia w cieniu wulkanu</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-linen leading-tight">
                Miejsce, które przywiozło ogień prosto z Etny.
              </h2>
              <p className="text-linen/65 leading-relaxed">
                Receptura przyjechała z Katanii — piec opalany drewnem, ciasto, które odpoczywa
                72 godziny na oliwie z oliwek Nocellara, i mąka mielona na kamieniu. San Marzano
                DOP, pistacje z Bronte i caciocavallo trafiają na Rynek prosto z Sycylii, bez
                kompromisów.
              </p>
              <p className="text-linen/65 leading-relaxed">
                W środku — kamienne ściany, ciepło z pieca i zapach drewna. Z okna kuchni widać
                ratusz, a wieczorem płomienie odbijają się w oknach przy stolikach.
              </p>
              <p className="font-display italic text-gold-deep text-lg sm:text-xl">
                Przychodzi się na pizzę. Wraca się dla Etny i cannoli, które rozchodzą się, zanim
                wystygną.
              </p>
            </div>
          </IrisWipe>
          <IrisWipe delay={100}>
            <div className="frame-offset" style={{ transform: 'rotate(-1.5deg)' }}>
              <FadeImage
                src={images.craft[0].src}
                alt={images.craft[0].alt}
                loading="lazy"
                width="1200"
                height="1500"
                className="w-full h-auto object-cover aspect-[4/5] rounded-sm border border-dusk-line"
              />
            </div>
          </IrisWipe>
        </div>
      </section>

      {/* 3 — SIGNATURE: full-bleed dark oven photography, oversized type */}
      <section className="relative min-h-[90svh] flex items-center overflow-hidden bg-dusk" aria-label="Pizza Etna">
        <FadeImage
          src={images.menu.etna}
          alt="Pizza Etna prosto z pieca opalanego drewnem, z 'nduja i wędzoną scamorzą"
          className="photo-backdrop ken-burns"
          loading="lazy"
          width="1400"
          height="1750"
        />
        <div className="photo-overlay-side" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-xl">
            <IrisWipe>
              <span className="label text-linen/90">Prosto z pieca</span>
            </IrisWipe>
            <IrisWipe delay={60}>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-linen leading-[1.05] mt-3">
                Tak wybucha<br />smak.
              </h2>
            </IrisWipe>
            <IrisWipe delay={120}>
              <p className="text-linen/75 leading-relaxed mt-5 text-base sm:text-lg max-w-md">
                Czarne ciasto na węglu aktywowanym, ’nduja, wędzona scamorza i miód z chili —
                pizza Etna, która wygląda i smakuje jak erupcja. Bez niej trudno wyjść z Rynku 8.
              </p>
            </IrisWipe>
            <IrisWipe delay={180}>
              <Link
                to="/menu#etna"
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] mt-7 sm:mt-9"
              >
                Zobacz kartę pizz
              </Link>
            </IrisWipe>
          </div>
        </div>
      </section>

      {/* 4 — THE KITCHEN: dark, overlapping photo collage */}
      <section className="relative section-pad bg-dusk overflow-hidden" aria-label="Kuchnia Etny">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-16 sm:gap-20 items-center">
            <IrisWipe>
              <div className="relative max-w-md mx-auto sm:mx-0 sm:mr-8">
                <div className="frame-offset" style={{ transform: 'rotate(1deg)' }}>
                  <FadeImage
                    src={images.craft[1].src}
                    alt={images.craft[1].alt}
                    loading="lazy"
                    width="1200"
                    height="1500"
                    className="w-full h-auto object-cover aspect-[4/5] rounded-sm border border-dusk-line"
                  />
                </div>
                <div
                  className="hidden sm:block absolute -bottom-10 -right-12 w-44 frame-offset"
                  style={{ transform: 'rotate(-4deg)' }}
                >
                  <FadeImage
                    src={images.menu.cannoli}
                    alt="Cannoli siciliani z ricottą i pistacjami na talerzu"
                    loading="lazy"
                    width="800"
                    height="800"
                    className="w-full h-auto object-cover aspect-square rounded-sm border border-dusk-line shadow-2xl"
                  />
                </div>
              </div>
            </IrisWipe>
            <IrisWipe delay={120}>
              <div className="flex flex-col gap-5 max-w-md">
                <span className="label text-gold-deep">Wieczorem</span>
                <h2 className="font-display text-4xl sm:text-5xl text-linen leading-tight">
                  Piec, dym i zapach drewna — kuchnia, którą czuć z Rynku.
                </h2>
                <p className="text-linen/65 leading-relaxed">
                  Kamień, matowa czerń i blask ognia — wieczorem Etna zwalnia tempo. Pizza wychodzi
                  z pieca w niecałą minutę, a lada z cannoli i granitą cytrynową świeci ciepłym
                  światłem do późna.
                </p>
                <p className="font-display italic text-gold-deep text-lg sm:text-xl">
                  Najlepsze miejsca przy oknie na kuchnię — przyjdź wcześniej albo zarezerwuj.
                </p>
              </div>
            </IrisWipe>
          </div>
        </div>
      </section>

      {/* 5 — MENU HIGHLIGHTS: dark cards, photo-forward grid */}
      <section className="section-pad bg-dusk-2" aria-label="Nasze dania">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 sm:mb-14 sm:border-b sm:border-dusk-line sm:pb-6">
              <div>
                <span className="label text-gold-deep">Karta</span>
                <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2">Z czego nas znają</h2>
                <p className="text-linen/55 mt-2 max-w-md leading-relaxed">
                  Trzy dania, dla których ludzie wracają na Rynek — punkt wyjścia, jeśli jesteście
                  u nas po raz pierwszy.
                </p>
              </div>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] self-start sm:self-auto"
              >
                Cała karta
              </Link>
            </div>
          </IrisWipe>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_ITEMS.map((item, i) => (
              <IrisWipe key={item.id} delay={i * 60}>
                <Link
                  to={`/menu#${item.id}`}
                  className="group relative flex flex-col overflow-hidden h-full rounded-sm border border-dusk-line bg-dusk/50 transition-all duration-300 ease-editorial hover:border-gold-deep hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <FadeImage
                      src={item.image}
                      alt={`${item.name} — Etna`}
                      loading="lazy"
                      width="1200"
                      height="1200"
                      className="w-full h-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
                    />
                    <span className="label text-ink bg-gold px-3 py-1 rounded-sm absolute top-4 right-4">
                      Wybór gości
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-linen">{item.name}</h3>
                      <p className="text-sm text-linen/55 leading-relaxed mt-1">{item.description}</p>
                    </div>
                    <span className="font-mono text-base sm:text-lg text-gold-deep whitespace-nowrap mt-1">
                      {item.price} zł
                    </span>
                  </div>
                </Link>
              </IrisWipe>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CANNOLI SPOTLIGHT: full-viewport, floating price card */}
      <section className="relative min-h-[90svh] flex items-end overflow-hidden bg-dusk" aria-label="Cannoli Siciliani — deser sygnaturowy">
        <FadeImage
          src={images.menu.cannoli}
          alt="Cannoli siciliani z ricottą i pistacjami na ciemnym tle"
          className="photo-backdrop ken-burns"
          loading="lazy"
          width="1600"
          height="2000"
        />
        <div className="photo-overlay" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 w-full">
          <div className="max-w-lg">
            <IrisWipe>
              <span className="label text-linen/90">Deser sygnaturowy</span>
            </IrisWipe>
            <IrisWipe delay={60}>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-linen mt-3">Cannoli Siciliani</h2>
            </IrisWipe>
            <IrisWipe delay={120}>
              <p className="text-linen/80 leading-relaxed mt-5 text-base sm:text-lg">
                Chrupiące rurki smażone na miejscu, ricotta krócej niż godzinę po napełnieniu,
                kawałki czekolady i prażone pistacje z Bronte. To deser, po który wraca się nawet
                bez wcześniejszej pizzy.
              </p>
            </IrisWipe>
            <IrisWipe delay={180}>
              <p className="font-display italic text-gold-deep text-lg sm:text-xl mt-4">
                Cannoli i espresso — najlepszy powód, żeby zostać na Rynku dłużej.
              </p>
            </IrisWipe>
          </div>
        </div>

        <IrisWipe delay={240} className="relative z-10 self-end mb-14 sm:mb-20 mr-5 sm:mr-8 lg:mr-16">
          <div className="frame-offset bg-dusk/85 backdrop-blur-sm border border-dusk-line rounded-sm px-6 sm:px-8 py-5 sm:py-6 flex items-center gap-5 sm:gap-6">
            <span className="font-mono text-2xl sm:text-3xl text-gold-deep">{cannoli?.price} zł</span>
            <a
              href="tel:+48146270000"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-sm bg-gold text-ink font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] whitespace-nowrap"
            >
              Zarezerwuj stolik
            </a>
          </div>
        </IrisWipe>
      </section>

      {/* 7 — DAY / NIGHT DIPTYCH: split-screen contrast, overlapping center card */}
      <section className="relative grid sm:grid-cols-2 min-h-[90svh] sm:min-h-[80svh] overflow-hidden bg-dusk" aria-label="Rynek za dnia i sala wieczorem">
        <div className="relative min-h-[45svh] sm:min-h-full overflow-hidden">
          <FadeImage
            src={images.piazza}
            alt="Stoliki na Rynku w Tarnowie w słońcu, kamienne fasady wokół"
            className="photo-backdrop"
            loading="lazy"
            width="1600"
            height="1200"
          />
          <div className="absolute inset-0 bg-[var(--dusk)]/25" aria-hidden="true" />
          <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-8">
            <span className="label text-linen/90">Za dnia</span>
            <p className="font-display text-2xl sm:text-3xl text-linen mt-1">Stoliki na Rynku</p>
          </div>
        </div>
        <div className="relative min-h-[45svh] sm:min-h-full overflow-hidden">
          <FadeImage
            src={images.atmosphere.counter}
            alt="Lada z deserami i cytrusami w ciepłym świetle wieczoru"
            className="photo-backdrop ken-burns"
            loading="lazy"
            width="1600"
            height="1200"
          />
          <div className="photo-overlay" aria-hidden="true" />
          <div className="absolute bottom-6 sm:bottom-10 right-5 sm:right-8 text-right">
            <span className="label text-linen/90">Wieczorem</span>
            <p className="font-display text-2xl sm:text-3xl text-linen mt-1">Piec rozświetla salę</p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-5">
          <div className="pointer-events-auto bg-dusk/90 backdrop-blur-sm border border-dusk-line rounded-sm px-6 sm:px-10 py-6 sm:py-8 max-w-sm text-center shadow-2xl">
            <h2 className="font-display text-2xl sm:text-3xl text-linen leading-snug">
              Latem stoliki wychodzą na Rynek — wieczorem światło wraca do sali z piecem.
            </h2>
            <p className="text-linen/65 mt-3 text-sm sm:text-base leading-relaxed">
              W weekendowe wieczory robi się gęsto — stoliki warto rezerwować wcześniej.
            </p>
          </div>
        </div>
      </section>

      {/* 8 — REVIEWS: light editorial breather */}
      <Reviews />

      {/* 9 — VISIT / INVITATION: dark, full-bleed, three ways to visit */}
      <section className="relative section-pad overflow-hidden bg-dusk" aria-label="Odwiedź — trzy sposoby">
        <FadeImage
          src={images.dessertCase}
          alt="Witryna z cannoli i sycylijskimi słodkościami w ciepłym świetle"
          className="photo-backdrop"
          loading="lazy"
          width="1600"
          height="1200"
        />
        <div className="photo-overlay" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <IrisWipe>
            <div className="text-center mb-10 sm:mb-14 max-w-xl mx-auto">
              <span className="label text-linen/90">Odwiedź nas</span>
              <h2 className="font-display text-4xl sm:text-5xl text-linen mt-2">Trzy sposoby, żeby trafić do Etny</h2>
              <p className="font-display italic text-gold-deep text-lg sm:text-xl mt-3">
                Stolik na Rynku albo miejsce przy piecu — zawsze warto zadzwonić wcześniej.
              </p>
            </div>
          </IrisWipe>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            <IrisWipe delay={0}>
              <OrderPath
                icon="phone"
                title="Zadzwoń"
                description="Zarezerwuj stolik — szczególnie na weekendowe wieczory."
                href="tel:+48146270000"
                cta="14 627 00 00"
                primary
                dark
              />
            </IrisWipe>
            <IrisWipe delay={80}>
              <OrderPath
                icon="table"
                title="Zarezerwuj online"
                description="Wybierz datę i godzinę, a my potwierdzimy stolik."
                href="https://etna-tarnow.eatbu.com/"
                cta="Otwórz rezerwację"
                dark
              />
            </IrisWipe>
            <IrisWipe delay={160}>
              <OrderPath
                icon="walk"
                title="Przyjdź"
                description="Rynek 8 — tuż przy ratuszu, wejście od strony Rynku."
                href="/kontakt"
                cta="Zobacz godziny"
                dark
              />
            </IrisWipe>
          </div>
        </div>
      </section>

      {/* 10 — FIND US: dark, map + hours + address + photo */}
      <section className="section-pad bg-dusk-2" aria-label="Znajdź nas — lokalizacja i godziny otwarcia">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 gap-8 sm:gap-12 items-start">
          <IrisWipe>
            <div className="flex flex-col gap-4">
              <div className="frame-offset overflow-hidden rounded-sm border border-dusk-line">
                <FadeImage
                  src={images.atmosphere.table}
                  alt="Stolik nakryty do wieczornej kolacji w sali Etny"
                  loading="lazy"
                  width="1600"
                  height="1200"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <LocationMap dark />
              <h2 className="font-display text-3xl sm:text-4xl text-linen mt-2">Znajdź nas</h2>
              <p className="text-linen/70">Rynek 8, 33-100 Tarnów</p>
              <p className="font-display italic text-gold-deep text-lg">
                Tuż przy ratuszu — wejście od strony Rynku.
              </p>
              <a
                href="https://www.google.com/maps/search/Etna+Pizzeria+Tarnów"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-sm border border-linen/50 text-linen font-sans font-medium text-sm tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04] hover:bg-linen/10 self-start"
              >
                Otwórz w Mapach
              </a>
            </div>
          </IrisWipe>
          <IrisWipe delay={100}>
            <HoursTable dark />
          </IrisWipe>
        </div>
      </section>
    </>
  );
}
