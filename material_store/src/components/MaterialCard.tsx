import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MaterialCard.css";

interface MaterialCardProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  consumption: string;
  count: string;
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
    <Link to={`/detailed_material/${id}`} className="card-link"> {}
      <Card className="material-card">
        <div className="card-image">
          <Card.Img variant="top" src={image} alt={title} />
        </div>
        <Card.Body className="card-info">
          <div className="card-title">
            {title} {description}
          </div>
          <div className="card-bottom">
            <div className="card-volume">{consumption}</div>
            <div className="card-count">{count}</div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
