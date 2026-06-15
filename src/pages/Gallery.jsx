import FadeImage from '../components/FadeImage';
import IrisWipe from '../components/IrisWipe';
import { images } from '../lib/images';

const WIDE_INDEXES = [0, 5, 10];

export default function Gallery() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <IrisWipe>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-2">Galeria</h1>
          <p className="whisper text-lg mb-10 sm:mb-14">Okruchy światła z Rynku, kuchni i lady cukierniczej.</p>
        </IrisWipe>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.gallery.map((item, i) => (
            <IrisWipe
              key={item.src + i}
              delay={(i % 6) * 60}
              className={WIDE_INDEXES.includes(i) ? 'sm:col-span-2' : ''}
            >
              <figure className="edit-frame">
                <FadeImage
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="1400"
                  height="1050"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </figure>
            </IrisWipe>
          ))}
        </div>
      </div>
    </div>
  );
}
