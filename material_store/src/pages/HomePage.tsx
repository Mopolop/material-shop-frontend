import React from "react";
import { Container, Card } from "react-bootstrap";
import "./HomePage.css";
import { dest_root } from "../target_config";

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      
      {/* GIF-фон */}
      <img src={`${dest_root}/background.gif`} className="background-gif" alt="background" />

      <div className="overlay">
        <Container className="d-flex justify-content-center align-items-center py-5">
          <Card className="p-4 shadow-sm text-center homepage-card">
            <Card.Title as="h1" className="mb-3">
              Расчёт строительных материалов для кладки стен
            </Card.Title>
            <Card.Text>
              Удобный инструмент для выбора кирпича, блоков и расчёта расхода раствора.
              Воспользуйтесь каталогом, чтобы подобрать оптимальный вариант под ваш проект.
            </Card.Text>
          </Card>
        </Container>
      </div>
    </div>
  );
};
