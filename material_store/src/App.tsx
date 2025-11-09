import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MaterialsPage } from "./pages/MaterialsPage";
import { MaterialDetailPage } from "./pages/MaterialDetailPage";
import { Header } from "./components/Header";

export const App: React.FC = () => {
  return (
    <BrowserRouter basename="/material-shop-frontend"> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} index />
        <Route path="/catalog" element={<MaterialsPage />} />
        <Route path="/detailed_material/:id" element={<MaterialDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
