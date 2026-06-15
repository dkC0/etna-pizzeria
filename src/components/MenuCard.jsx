import FadeImage from './FadeImage';

export default function MenuCard({ item, large = false }) {
  return (
    <article
      className={`edit-frame flex flex-col sm:flex-row ${
        large ? 'sm:flex-row-reverse ring-1 ring-gold/50' : ''
      }`}
    >
      <div className="relative sm:w-1/2 aspect-square overflow-hidden">
        <FadeImage
          src={item.image}
          alt={`${item.name} — Etna`}
          loading="lazy"
          width="1200"
          height="1200"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6 sm:p-8 flex flex-col gap-3 relative justify-center">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display ${large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} text-ink`}>
            {item.name}
          </h3>
          <span className="font-mono text-base sm:text-lg text-fig whitespace-nowrap mt-1" aria-label={`Cena: ${item.price} złote`}>
            {item.price} zł
          </span>
        </div>
        <p className="text-sm sm:text-base text-ink/70 leading-relaxed">{item.description}</p>
        <p className="text-xs text-faint mt-auto pt-2">Alergeny: {item.allergens}</p>
        {item.featured && (
          <span className="label text-linen bg-fig px-2.5 py-1 rounded-sm absolute top-5 right-5 sm:static sm:mt-1 sm:self-start sm:inline-flex">Wybór gości</span>
        )}
      </div>
    </article>
  );
}
