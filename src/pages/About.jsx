import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import { Link } from 'react-router-dom';
import { images } from '../lib/images';

export default function About() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 flex flex-col gap-16 sm:gap-24">
        <IrisWipe>
          <header>
            <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">O nas</h1>
            <p className="whisper text-lg sm:text-xl">Sycylijski ogień, kamienny Rynek, ciasto, które nie ma się gdzie spieszyć.</p>
          </header>
        </IrisWipe>

        {/* Origin */}
        <IrisWipe>
          <figure className="edit-frame mb-6">
            <FadeImage
              src={images.about.kitchen}
              alt="Pizza sycylijska tuż po wyjęciu z pieca opalanego drewnem, z bąblującym brzegiem"
              loading="lazy"
              width="2000"
              height="1333"
              className="w-full h-auto object-cover aspect-[3/2]"
            />
          </figure>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3">Skąd ta nazwa</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Etna to nie tylko najsłynniejszy wulkan Sycylii — to też miejsce, skąd przyjechała
            nasza receptura. Założyciele spędzili lata w Katanii, ucząc się rzemiosła w piekarniach
            i pizzeriach w cieniu wulkanu, zanim wrócili do Tarnowa z piecem opalanym drewnem,
            workiem mąki na kamieniu i przepisem na ciasto, które odpoczywa 72 godziny.
          </p>
          <p className="text-ink/80 leading-relaxed mb-4">
            Na Rynku 8 połączyliśmy dwie rzeczy: surowość sycylijskiej kuchni — San Marzano DOP,
            oliwę z Nocellara, pistacje z Bronte, caciocavallo i ’nduja prosto z Kalabrii — z ciepłem
            kamiennej sali, w której wieczorem widać tylko blask z pieca i światła ratusza za oknem.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Z czasem dołączyła do tego prawdziwa sycylijska cukiernia — cannoli smażone na miejscu,
            cassata i granita cytrynowa — bo bez deseru, Sycylijczyk uznałby, że kolacja się nie
            skończyła.
          </p>
        </IrisWipe>
      </div>

      {/* Philosophy — full-width split, breaks the single-column rhythm */}
      <div className="section-pad bg-paper mt-16 sm:mt-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 gap-8 sm:gap-16 items-center">
          <IrisWipe>
            <span className="label text-fig block mb-3">Filozofia</span>
            <p className="whisper text-2xl sm:text-3xl max-w-sm">
              Ogień robi swoje. My tylko nie stajemy mu na drodze.
            </p>
          </IrisWipe>
          <IrisWipe delay={100}>
            <div className="flex flex-col gap-4">
              <p className="text-ink/80 leading-relaxed">
                Ciasto na pizzę fermentuje u nas 72 godziny na oliwie z oliwek Nocellara — dłużej
                niż w wielu miejscach, bo to właśnie ten czas robi różnicę między &bdquo;dobrą
                pizzą&rdquo; a tą, po którą wraca się specjalnie. Piec opalany drewnem rozgrzewa się
                do ponad 450°C, więc pizza wychodzi z niego w niecałą minutę.
              </p>
              <p className="text-ink/80 leading-relaxed">
                Karta nie jest gigantyczna — wolimy, żeby każde danie było dopracowane, niż żeby
                lista pozycji była długa. To samo dotyczy deserów: lada cukiernicza zmienia się
                sezonowo, ale cannoli zawsze tam są, bo nikt by nam nie wybaczył, gdyby zniknęły.
              </p>
              <p className="text-ink/80 leading-relaxed">
                Jesteśmy częścią Rynku — latem stoliki wychodzą na zewnątrz, w cień kamiennych
                fasad, a wieczorami, szczególnie w weekendy, sala zapełnia się do późnych godzin,
                a w oknie kuchni widać tylko płomienie.
              </p>
              <p className="text-ink/80 leading-relaxed">
                Niezależnie od tego, czy wpadasz na szybką pizzę w przerwie dnia, czy planujesz
                rodzinną kolację albo wieczór ze znajomymi — staramy się, żeby każde z tych
                doświadczeń było tej samej, wysokiej jakości.
              </p>
            </div>
          </IrisWipe>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 flex flex-col gap-16 sm:gap-24 mt-16 sm:mt-24">
        {/* Cannoli story */}
        <IrisWipe>
          <figure className="edit-frame ring-1 ring-gold/40 mb-6">
            <FadeImage
              src={images.dessertCase}
              alt="Cannoli siciliani i sycylijskie słodkości w witrynie cukierniczej Etny"
              loading="lazy"
              width="1600"
              height="2000"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </figure>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3">Cannoli Siciliani</h2>
          <p className="text-ink/80 leading-relaxed mb-4">
            Chrupiące rurki smażone na miejscu, ricotta nadziewana krótko przed podaniem, kawałki
            czekolady i prażone pistacje z Bronte — przepis, który powstał w Katanii i od lat nie
            wymaga zmian. To deser, który ludzie zamawiają telefonicznie z wyprzedzeniem na
            urodziny, komunie i niedzielne kolacje rodzinne.
          </p>
          <p className="text-ink/80 leading-relaxed mb-4">
            Nie jest to deser &bdquo;na pokaz&rdquo; — jest po prostu dobrze zrobiony, w odpowiednich
            proporcjach, świeży każdego dnia. To dokładnie ten typ rzeczy, o których goście mówią
            znajomym: &bdquo;Idźcie do Etny, ale zostawcie miejsce na cannoli.&rdquo;
          </p>
          <p className="text-ink/80 leading-relaxed">
            Dziś cannoli to nasza wizytówka — razem z pizzą Etna i Rynkiem za oknem, jeden z trzech
            powodów, dla których ludzie wracają regularnie, nie tylko przy specjalnych okazjach.
          </p>
        </IrisWipe>

        {/* Invitation */}
        <IrisWipe>
          <div className="text-center">
            <p className="whisper text-xl sm:text-2xl mb-6">Zostaw miejsce na cannoli. I na trochę dłużej.</p>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-sm bg-fig text-linen font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04]"
            >
              Odwiedź nas
            </Link>
          </div>
        </IrisWipe>
      </div>
    </div>
  );
}
