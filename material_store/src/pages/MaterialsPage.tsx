import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { MaterialCard } from "../components/MaterialCard";
import { MaterialSearch } from "../components/MaterialSearch";
import { getMaterials, type Material } from "../modules/materialsApi";
import defaultImage from "../assets/DefaultImage.png";
import "../components/MaterialSearch.css";
import "./MaterialsPage.css";

export const MaterialsPage: React.FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (query: string) => {
    setLoading(true);
    getMaterials(query)
      .then((response) => {
        const materialsData = response.materials.map((mat) => ({
          id: mat.ID,
          title: mat.Title,
          description: mat.Description || "",
          image: mat.Image || defaultImage,
          consumption: mat.Consumption,
          count: mat.Count,
          mainMaterial: mat.MainMaterial,
          countPerM2: mat.CountPerM2,
          countPerM3: mat.CountPerM3,
          netWeight: mat.NetWeight,
          lengthMM: mat.LengthMM,
          heightMM: mat.HeightMM,
          widthMM: mat.WidthMM,
          country: mat.Country,
        }));
        setMaterials(materialsData);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке материалов:", error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className="materials-page">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3 breadcrumbs-wrapper">
          <Breadcrumbs items={[{ name: "Каталог", path: "/catalog" }]} />
          <MaterialSearch onSearch={handleSearch} />
        </div>

        {loading ? (
          <div className="text-center mt-5">Загрузка...</div>
        ) : (
          <Row className="g-4">
            {materials.map((mat) => (
              <Col key={mat.id} xs={12} sm={6} md={4} lg={3}>
                <MaterialCard {...mat} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};
