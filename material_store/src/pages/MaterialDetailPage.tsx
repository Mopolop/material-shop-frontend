import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { getMaterialById, type Material } from "../modules/materialsApi";
import defaultImage from "../assets/DefaultImage.png";
import "./MaterialDetailPage.css";

export const MaterialDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [material, setMaterial] = useState<Material | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMaterialById(Number(id))
      .then((data) => setMaterial(data)) 
      .catch((error) =>
        console.error("Ошибка при загрузке материала:", error)
      )
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Загрузка...</div>;
  }

  if (!material) {
    return <div>Материал не найден</div>;
  }

  return (
    <div className="material-detail-page">
      <div className="container">
        {/* Хлебные крошки */}
        <div className="d-flex justify-content-between align-items-center mb-3 breadcrumbs-wrapper">
          <Breadcrumbs
            items={[
              { name: "Каталог", path: "/catalog" },
              { name: material.title, path: `/detailed_material/${material.id}` },
            ]}
          />
        </div>

        {/* Контейнер материала */}
        <div className="material-container">
          {/* Изображение */}
          <div className="material-image">
            <img src={material.image || defaultImage} alt={material.title} />
          </div>

          {/* Информация в рамке */}
          <div className="material-info-wrapper">
            {/* Заголовок */}
            <div className="material-title">
              {material.title} {material.description}
            </div>

            {/* Характеристики */}
            <div className="material-details">
              <div>
                <span className="name">Основной материал</span>
                <span className="value">{material.mainMaterial}</span>
              </div>
              <div>
                <span className="name">Количество на м²</span>
                <span className="value">{material.countPerM2}</span>
              </div>
              <div>
                <span className="name">Количество на м³</span>
                <span className="value">{material.countPerM3}</span>
              </div>
              <div>
                <span className="name">Вес нетто</span>
                <span className="value">{material.netWeight}</span>
              </div>
              <div>
                <span className="name">Длина</span>
                <span className="value">{material.lengthMM} мм</span>
              </div>
              <div>
                <span className="name">Высота</span>
                <span className="value">{material.heightMM} мм</span>
              </div>
              <div>
                <span className="name">Ширина</span>
                <span className="value">{material.widthMM} мм</span>
              </div>
              <div>
                <span className="name">Страна производства</span>
                <span className="value">{material.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
