import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { MaterialCard } from "../components/MaterialCard";
import { MaterialSearch } from "../components/MaterialSearch";
import { MATERIALS_MOCK } from "../modules/mock";
import defaultImage from "../assets/DefaultImage.png";
import "../components/MaterialSearch.css";
import "./MaterialsPage.css";

export const MaterialsPage: React.FC = () => {
  const [filteredMaterials, setFilteredMaterials] = useState(MATERIALS_MOCK.results);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    const filtered = MATERIALS_MOCK.results.filter((mat) =>
      mat.title.toLowerCase().includes(lowerQuery)
    );
    setFilteredMaterials(filtered);
  };

  return (
    <div className="materials-page">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3 breadcrumbs-wrapper">
  <Breadcrumbs />
  <MaterialSearch onSearch={handleSearch} />
</div>


        <Row className="g-4">
  {filteredMaterials.map((mat) => (
    <Col key={mat.id} xs={12} sm={6} md={4} lg={3}>
      <MaterialCard {...mat} image={mat.image || defaultImage} />
    </Col>
  ))}
</Row>

      </Container>
    </div>
  );
};
