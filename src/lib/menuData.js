import { images } from './images';

export const MENU_CATEGORIES = [
  {
    id: 'pizza',
    label: 'Pizza sycylijska',
    items: [
      {
        id: 'marinara',
        name: 'Marinara',
        description: 'Pomidory San Marzano, czosnek, oregano z Sycylii, oliwa extra vergine z Etny.',
        price: '28',
        image: images.menu.marinara,
        allergens: 'gluten',
      },
      {
        id: 'norma',
        name: 'Norma',
        description: 'Bakłażan smażony w oliwie, ricotta salata, sos pomidorowy, bazylia i mięta.',
        price: '38',
        image: images.menu.norma,
        allergens: 'gluten, mleko',
      },
      {
        id: 'sfincione',
        name: 'Sfincione',
        description: 'Gęste ciasto na oliwie, sos pomidorowy, anchois, cebula, caciocavallo, bułka tarta — klasyk z Palermo.',
        price: '36',
        image: images.menu.sfincione,
        allergens: 'gluten, mleko, ryby',
        featured: true,
      },
      {
        id: 'diavola',
        name: 'Diavola',
        description: 'Salami piccante, krem z ’nduja, mozzarella fior di latte, chili w oliwie.',
        price: '40',
        image: images.menu.diavola,
        allergens: 'gluten, mleko',
      },
      {
        id: 'etna',
        name: 'Etna',
        description: 'Czarne ciasto na węglu aktywowanym, ’nduja, wędzona scamorza, miód z chili — wybucha na talerzu.',
        price: '46',
        image: images.menu.etna,
        allergens: 'gluten, mleko',
        featured: true,
      },
      {
        id: 'pistacchio',
        name: 'Pistacchio di Bronte',
        description: 'Krem pistacjowy z Bronte, burrata, mortadella, prażone pistacje, cytrusowa skórka.',
        price: '48',
        image: images.menu.pistacchio,
        allergens: 'gluten, mleko, orzechy',
        featured: true,
      },
    ],
  },
  {
    id: 'przystawki',
    label: 'Przystawki i pasta',
    items: [
      {
        id: 'arancini',
        name: 'Arancini al Ragù',
        description: 'Chrupiące kulki ryżowe z ragù, groszkiem i mozzarellą, podane z aioli.',
        price: '26',
        image: images.menu.arancini,
        allergens: 'gluten, mleko, jaja',
      },
      {
        id: 'caponata',
        name: 'Caponata Siciliana',
        description: 'Bakłażan, seler, oliwki, kapary w słodko-kwaśnym sosie pomidorowym, chleb na zakwasie.',
        price: '24',
        image: images.menu.caponata,
        allergens: 'gluten',
      },
      {
        id: 'pastaNorma',
        name: 'Pasta alla Norma',
        description: 'Makaron z bakłażanem, sosem pomidorowym, ricottą salata i bazylią — sycylijska klasyka.',
        price: '34',
        image: images.menu.pastaNorma,
        allergens: 'gluten, mleko',
      },
    ],
  },
  {
    id: 'desery',
    label: 'Desery',
    items: [
      {
        id: 'cannoli',
        name: 'Cannoli Siciliani',
        description: 'Chrupiące rurki z ricottą, kawałkami czekolady i prażonymi pistacjami z Bronte.',
        price: '22',
        image: images.menu.cannoli,
        allergens: 'gluten, jaja, mleko, orzechy',
      },
      {
        id: 'cassata',
        name: 'Cassata Siciliana',
        description: 'Biszkopt przekładany ricottą, owoce kandyzowane, marcepan i lukier — odświętny klasyk.',
        price: '24',
        image: images.menu.cassata,
        allergens: 'gluten, jaja, mleko, orzechy',
      },
      {
        id: 'granita',
        name: 'Granita al Limone',
        description: 'Lodowa granita z cytryn z Etny, podana z ciepłą brioszką — śniadanie i deser w jednym.',
        price: '18',
        image: images.menu.granita,
        allergens: 'gluten',
      },
    ],
  },
];

export const ALL_ITEMS = MENU_CATEGORIES.flatMap((c) => c.items);
export const FEATURED_ITEMS = ALL_ITEMS.filter((i) => i.featured);
