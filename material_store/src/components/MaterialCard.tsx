import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MaterialCard.css";

export interface MaterialCardProps {
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

export const MaterialCard: React.FC<MaterialCardProps> = ({
  id,
  title,
  description,
  image,
  consumption,
  count,
}) => {
  return (
    <Link to={`/detailed_material/${id}`} className="card-link">
      <Card className="material-card">
        <div className="card-image">
          <Card.Img variant="top" src={image} alt={title} />
        </div>
        <Card.Body className="card-info">
          <div className="card-title">
            {title} {description}
          </div>
          <div className="card-bottom">
            <div className="card-volume">{consumption} м³ на 1 м³ кладки</div>
            <div className="card-count">{count} шт./м³</div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
