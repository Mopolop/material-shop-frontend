import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Container className="d-flex justify-content-center align-items-center py-5">
        <Card className="p-4 shadow-sm text-center homepage-card">
          <Card.Title as="h1" className="mb-3">
            Расчёт строительных материалов для кладки стен
          </Card.Title>
          <Card.Text className="mb-4">
            Удобный инструмент для выбора кирпича, блоков и расчёта расхода раствора.
            Воспользуйтесь каталогом, чтобы подобрать оптимальный вариант под ваш проект.
          </Card.Text>
          <Link to="/catalog">
            <Button variant="warning">Перейти в каталог материалов</Button>
          </Link>
        </Card>
      </Container>
    </div>
  );
};
