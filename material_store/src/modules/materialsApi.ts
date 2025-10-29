export interface Material {
  id: number;
  title: string;
  description?: string;
  image: string;
  consumption: number;
  count: number;
  mainMaterial: string;
  countPerM2: number;
  countPerM3: number;
  netWeight: number;
  lengthMM: number;
  heightMM: number;
  widthMM: number;
  country: string;
}

// Интерфейс данных, который возвращает бэкенд (поля с заглавной буквы)
export interface ServerMaterial {
  ID: number;
  Title: string;
  Description?: string;
  Image?: string;
  Consumption: number;
  Count: number;
  MainMaterial: string;
  CountPerM2: number;
  CountPerM3: number;
  NetWeight: number;
  LengthMM: number;
  HeightMM: number;
  WidthMM: number;
  Country: string;
  Visability?: boolean;
}

export interface ServerMaterialsResponse {
  materials: ServerMaterial[];
  status: string;
}

export interface MaterialResponse {
  material: ServerMaterial;
  status: string;
}

/**
 * Получение всех материалов или поиск по названию
 */
export const getMaterials = async (title = ""): Promise<ServerMaterialsResponse> => {
  try {
    const response = await fetch(`/api/materials?title=${encodeURIComponent(title)}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Ошибка загрузки материалов: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.warn('Сервер недоступен, используются мок-данные:', error);
    // Фильтруем мок-данные по заголовку, если указан поисковый запрос
    const mockData = await import('./mock').then(m => m.MATERIALS_MOCK);
    const filteredMaterials = mockData.materials.filter(m => 
      !title || m.title.toLowerCase().includes(title.toLowerCase())
    ).map(m => ({
      ID: m.id,
      Title: m.title,
      Description: m.description,
      Image: m.image,
      Consumption: m.consumption,
      Count: m.count,
      MainMaterial: m.mainMaterial,
      CountPerM2: m.countPerM2,
      CountPerM3: m.countPerM3,
      NetWeight: m.netWeight,
      LengthMM: m.lengthMM,
      HeightMM: m.heightMM,
      WidthMM: m.widthMM,
      Country: m.country,
      Visability: true
    }));
    
    return {
      materials: filteredMaterials,
      status: "success"
    };
  }
};


/**
 * Получение конкретного материала по ID
 */
const mapServerToMaterial = (s: ServerMaterial): Material => ({
  id: s.ID,
  title: s.Title,
  description: s.Description ?? "",
  image: s.Image ?? "",
  consumption: s.Consumption,
  count: s.Count,
  mainMaterial: s.MainMaterial,
  countPerM2: s.CountPerM2,
  countPerM3: s.CountPerM3,
  netWeight: s.NetWeight,
  lengthMM: s.LengthMM,
  heightMM: s.HeightMM,
  widthMM: s.WidthMM,
  country: s.Country,
});

/**
 * Получение конкретного материала по ID
 * Запрашиваем `/api/materials/{id}` и маппим ответ в frontend-формат Material
 */
export const getMaterialById = async (id: number): Promise<Material> => {
  try {
    const response = await fetch(`/api/materials/${id}`, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Ошибка загрузки материала: ${response.statusText}`);
    }

    const data: MaterialResponse = await response.json();
    if (!data.material) {
      throw new Error('Материал не найден');
    }
    
    return mapServerToMaterial(data.material);
  } catch (error) {
    console.warn('Сервер недоступен, используются мок-данные:', error);
    const mockData = await import('./mock').then(m => m.MATERIALS_MOCK);
    const material = mockData.materials.find(m => m.id === id);
    
    if (!material) {
      throw new Error('Материал не найден в мок-данных');
    }
    
    return material;
  }
};
