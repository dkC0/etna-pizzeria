// Curated real photography (Unsplash), categorized for Etna — a Sicilian
// pizzeria on the Rynek in Tarnów. Imagery favors wood-fired ovens, charred
// crusts, volcanic stone textures, citrus and pistachio, and warm evening
// dining-room light — the "Stone, Fire & Citrus" creative direction.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u('photo-1574071318508-1cdbab80d002', 2000),

  dessertCase: u('photo-1488477181946-6428a0291777', 2000),

  craft: [
    { src: u('photo-1571997478779-2adcbbe9ab2f', 1000), alt: 'Ciasto na pizzę formowane ręcznie na blacie z mąki' },
    { src: u('photo-1574071318508-1cdbab80d002', 1000), alt: 'Pizza margherita prosto z pieca opalanego drewnem' },
    { src: u('photo-1571066811602-716837d681de', 1000), alt: 'Pizza z oliwkami na drewnianej desce' },
    { src: u('photo-1565958011703-44f9829ba187', 1000), alt: 'Sycylijska cassata z owocami i pistacjami' },
    { src: u('photo-1600891964599-f61ba0e24092', 1000), alt: 'Stolik na zewnątrz, w cieniu kamiennej fasady przy Rynku' },
    { src: u('photo-1521017432531-fbd92d768814', 1000), alt: 'Lada z cytrusami i deserami w ciepłym świetle lamp' },
  ],

  menu: {
    marinara: u('photo-1574071318508-1cdbab80d002', 1200),
    norma: u('photo-1571066811602-716837d681de', 1200),
    sfincione: u('photo-1574071318508-1cdbab80d002', 1200),
    diavola: u('photo-1571066811602-716837d681de', 1200),
    etna: u('photo-1574071318508-1cdbab80d002', 1200),
    pistacchio: u('photo-1565958011703-44f9829ba187', 1200),
    arancini: u('photo-1551183053-bf91a1d81141', 1200),
    caponata: u('photo-1476124369491-e7addf5db371', 1200),
    pastaNorma: u('photo-1476124369491-e7addf5db371', 1200),
    cannoli: u('photo-1571877227200-a0d98ea607e9', 1200),
    cassata: u('photo-1533134242443-d4fd215305ad', 1200),
    granita: u('photo-1495474472287-4d71bcdd2085', 1200),
  },

  piazza: u('photo-1466978913421-dad2ebd01d17', 2000),

  atmosphere: {
    table: u('photo-1414235077428-338989a2e8c0', 1600),
    guests: u('photo-1543007631-283050bb3e8c', 1600),
    counter: u('photo-1521017432531-fbd92d768814', 1600),
  },

  about: {
    hero: u('photo-1559925393-8be0ec4767c8', 2000),
    kitchen: u('photo-1574071318508-1cdbab80d002', 1600),
  },

  contact: {
    hero: u('photo-1495474472287-4d71bcdd2085', 2000),
  },

  gallery: [
    { src: u('photo-1466978913421-dad2ebd01d17', 1400), alt: 'Stoliki na Rynku w ciepłym świetle popołudnia' },
    { src: u('photo-1574071318508-1cdbab80d002', 1400), alt: 'Pizza margherita prosto z pieca opalanego drewnem' },
    { src: u('photo-1571997478779-2adcbbe9ab2f', 1400), alt: 'Ciasto na pizzę formowane ręcznie' },
    { src: u('photo-1574071318508-1cdbab80d002', 1400), alt: 'Pizza marinara z oliwą i świeżym oregano' },
    { src: u('photo-1571066811602-716837d681de', 1400), alt: 'Pizza Norma z bakłażanem i ricottą salata' },
    { src: u('photo-1565958011703-44f9829ba187', 1400), alt: 'Sycylijska cassata z owocami i pistacjami' },
    { src: u('photo-1488477181946-6428a0291777', 1400), alt: 'Witryna z cannoli i sycylijskimi słodkościami' },
    { src: u('photo-1571066811602-716837d681de', 1400), alt: 'Pizza Diavola z oliwkami i chili' },
    { src: u('photo-1543007631-283050bb3e8c', 1400), alt: 'Goście przy stole w sali Etny' },
    { src: u('photo-1521017432531-fbd92d768814', 1400), alt: 'Lada cukiernicza z cytrusami i deserami' },
    { src: u('photo-1574071318508-1cdbab80d002', 1400), alt: 'Pizza Etna prosto z pieca opalanego drewnem' },
    { src: u('photo-1414235077428-338989a2e8c0', 1400), alt: 'Stolik nakryty do wieczornej kolacji' },
  ],
};
