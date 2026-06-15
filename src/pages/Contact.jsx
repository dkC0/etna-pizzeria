import { useState } from 'react';
import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import OrderPath from '../components/OrderPath';
import LocationMap from '../components/LocationMap';
import HoursTable from '../components/HoursTable';
import { images } from '../lib/images';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    // Static site: no backend wired — show confirmation, mailto fallback could be added.
    setStatus('sent');
  }

  return (
    <div className="pb-20">
      {/* Photo banner */}
      <section className="relative min-h-[40svh] sm:min-h-[50svh] flex items-end overflow-hidden section-dark">
        <FadeImage
          src={images.contact.hero}
          alt="Stolik nakryty do kolacji na Rynku przy Etnie"
          className="photo-backdrop"
          fetchPriority="high"
          width="2000"
          height="1333"
        />
        <div className="photo-overlay" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pb-10 sm:pb-14 w-full">
          <h1 className="font-display text-4xl sm:text-5xl">Kontakt</h1>
          <p className="whisper text-lg mt-1">Trzy sposoby, żeby trafić do Etny.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col gap-16 sm:gap-24 pt-12 sm:pt-16">

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          <IrisWipe delay={0}>
            <OrderPath
              icon="phone"
              title="Zadzwoń"
              description="Zarezerwuj stolik — szczególnie na weekendowe wieczory."
              href="tel:+48146270000"
              cta="14 627 00 00"
              primary
            />
          </IrisWipe>
          <IrisWipe delay={80}>
            <OrderPath
              icon="table"
              title="Zarezerwuj online"
              description="Wybierz datę i godzinę, a my potwierdzimy stolik."
              href="https://etna-tarnow.eatbu.com/"
              cta="Otwórz rezerwację"
            />
          </IrisWipe>
          <IrisWipe delay={160}>
            <OrderPath
              icon="walk"
              title="Przyjdź"
              description="Rynek 8 — tuż przy ratuszu, wejście od strony Rynku."
              href="https://www.google.com/maps/search/Etna+Pizzeria+Tarnów"
              cta="Otwórz w Mapach"
            />
          </IrisWipe>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-start">
          <IrisWipe>
            <LocationMap />
          </IrisWipe>
          <IrisWipe delay={100}>
            <div className="flex flex-col gap-4">
              <HoursTable />
              <p className="text-ink/80">Rynek 8, 33-100 Tarnów</p>
            </div>
          </IrisWipe>
        </div>

        {/* Press / collab / events inquiry form — minimal, 3 fields */}
        <IrisWipe>
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">Rezerwacje grupowe i wydarzenia</h2>
            <p className="text-ink/70 mb-4">
              Organizujesz imprezę rodzinną, komunię albo spotkanie firmowe? Napisz do nas —
              przygotujemy menu i zarezerwujemy stoliki na Twój termin.
            </p>
            {status === 'sent' ? (
              <p className="text-fig" role="status">Dziękujemy! Odezwiemy się wkrótce.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label htmlFor="name" className="label block mb-2 text-ink/70">Imię</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-paper border border-sand focus:border-fig rounded-sm px-4 py-3 text-ink text-base outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label block mb-2 text-ink/70">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-paper border border-sand focus:border-fig rounded-sm px-4 py-3 text-ink text-base outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label block mb-2 text-ink/70">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full bg-paper border border-sand focus:border-fig rounded-sm px-4 py-3 text-ink text-base outline-none transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-sm bg-fig text-linen font-sans font-medium tracking-wide transition-transform duration-300 ease-editorial hover:scale-[1.04]"
                >
                  Wyślij
                </button>
              </form>
            )}
          </div>
        </IrisWipe>
      </div>
    </div>
  );
}
