export interface IMaterial {
  id: number;
  title: string;
  description: string;
  image?: string;
  consumption: string;
    count: string;
    mainMaterial: string;
    countPerM2: string;
    countPerM3: string;
    netWeight: string;
    lengthMM: string;
    heightMM: string;
    widthMM: string;
    country: string;
    }

export const MATERIALS_MOCK: { results: IMaterial[] } = {
  results: [
    {
      id: 1,
      title: "Кирпич строительный рядовой полнотелый красный",
      description: "250×120×65 мм",
      image: "",
      consumption: "0,03 м³ на 1 м³ кладки",
      count: "512 шт./м³",
      mainMaterial: "Керамика",
      countPerM2: "62",
      countPerM3: "512",
      netWeight: "3.67",
      lengthMM: "250",
      heightMM: "65",
      widthMM: "120",
      country: "Россия",
    },
    {
      id: 2,
      title: "Блок газобетонный",
      description: "600×250×100 мм",
      image: "",
      consumption: "0,05 м³ на 1 м³ кладки",
      count: "67 шт./м³",
      mainMaterial: "Газобетон",
      countPerM2: "12",
      countPerM3: "67",
      netWeight: "2.5",
      lengthMM: "600",
      heightMM: "100",
      widthMM: "250",
      country: "Россия",
    },
    {
      id: 3,
      title: "Блок керамический",
      description: "250×219×510 мм",
      image: "",
      consumption: "0,04 м³ на 1 м³ кладки",
      count: "36 шт./м³",
      mainMaterial: "Керамика",
      countPerM2: "15",
      countPerM3: "36",
      netWeight: "4.2",
      lengthMM: "250",
      heightMM: "510",
      widthMM: "219",
      country: "Россия",
    },
    {
      id: 4,
      title: "Кирпич строительный силикатный полнотелый белый",
      description: "250×120×65 мм",
      image: "",
      consumption: "0,5 м³ на 1 м³ кладки",
      count: "512 шт./м³",
      mainMaterial: "Силикат",
      countPerM2: "60",
      countPerM3: "512",
      netWeight: "3.9",
      lengthMM: "250",
      heightMM: "65",
      widthMM: "120",
      country: "Россия",
    },
    {
      id: 5,
      title: "Кирпич шамотный огнеупорный",
      description: "230×114×65 мм",
      image: "",
      consumption: "0,035 м³ на 1 м³ кладки",
      count: "587 шт./м³",
      mainMaterial: "Шамот",
      countPerM2: "55",
      countPerM3: "587",
      netWeight: "3.5",
      lengthMM: "230",
      heightMM: "65",
      widthMM: "114",
      country: "Россия",
    },
    {
      id: 6,
      title: "Кирпич фасадный клинкерный пустотелый красный гладкий",
      description: "250×120×65 мм",
      image: "",
      consumption: "0,03 м³ на 1 м³ кладки",
      count: "513 шт./м³",
      mainMaterial: "Клинкер",
      countPerM2: "63",
      countPerM3: "513",
      netWeight: "3.8",
      lengthMM: "250",
      heightMM: "65",
      widthMM: "120",
      country: "Германия",
    },
    {
      id: 7,
      title: "Блок керамзитобетонный пустотелый Стандарт Керамзит",
      description: "390×190×188 мм",
      image: "",
      consumption: "0,02 м³ на 1 м³ кладки",
      count: "72 шт./м³",
      mainMaterial: "Керамзитобетон",
      countPerM2: "14",
      countPerM3: "72",
      netWeight: "5.1",
      lengthMM: "390",
      heightMM: "188",
      widthMM: "190",
      country: "Россия",
    },
  ],
};
