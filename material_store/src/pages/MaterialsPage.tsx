  import React, { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import { Breadcrumbs } from "../components/Breadcrumbs";
  import { MaterialCard } from "../components/MaterialCard";
  import { MaterialSearch } from "../components/MaterialSearch";
  import { getMaterials, type Material } from "../modules/materialsApi";
  import defaultImage from "../assets/DefaultImage.png";
  import cartIcon from "../assets/cart-icon.png";
  import "../components/MaterialSearch.css";
  import "./MaterialsPage.css";
  import { dest_api, dest_img } from "../target_config";


  export const MaterialsPage: React.FC = () => {
    const [materials, setMaterials] = useState<Material[]>([]);
    const [loading, setLoading] = useState(true);
    const [cartCount, setCartCount] = useState<number>(0);

    const handleSearch = (searchQuery: string) => {
      setLoading(true);
      getMaterials(searchQuery)
        .then((response) => {
          const materialsData = response.materials.map((mat) => ({
            id: mat.ID,
            title: mat.Title,
            description: mat.Description || "",
            image: mat.Image
              ? dest_img + mat.Image.replace(/^\//, "")
              : defaultImage,
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
        .catch((error) => console.error("Ошибка при загрузке материалов:", error))
        .finally(() => setLoading(false));
    };

    useEffect(() => {
      const fetchCart = async () => {
        try {
          const response = await fetch(`${dest_api}/material_orders/draft/cart`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setCartCount(data.count || 0);
        } catch (error) {
          console.error("Ошибка при загрузке корзины:", error);
          setCartCount(0);
        }
      };
      fetchCart();
    }, []);

    useEffect(() => {
      handleSearch("");
    }, []);

    return (
      <div className="materials-page">
        <Container className="py-4">
          <div className="d-flex justify-content-between align-items-center mb-3 breadcrumbs-wrapper">
            <Breadcrumbs items={[{ name: "Каталог", path: "/catalog" }]} />
            <div className="tools-row d-flex align-items-center">
              <MaterialSearch onSearch={handleSearch} />
              <div className="cart" style={{ cursor: "default" }}>
                <img src={cartIcon} alt="Cart" />
                <div className="cart-count-badge">{cartCount}</div>
              </div>
            </div>
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
