import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";
import { dest_root } from "./target_config";
import { HomePage } from "./pages/HomePage";
import { MaterialsPage } from "./pages/MaterialsPage";
import { MaterialDetailPage } from "./pages/MaterialDetailPage";
import { Header } from "./components/Header";

export const App: React.FC = () => {
  useEffect(() => {
    // Попытка подключиться к Tauri при запуске
    invoke("tauri", { cmd: "create" })
      .then(() => console.log("Tauri launched"))
      .catch(() => console.log("Tauri not launched"));

    // При закрытии React-приложения (или Tauri)
    return () => {
      invoke("tauri", { cmd: "close" })
        .then(() => console.log("Tauri closed"))
        .catch(() => console.log("Tauri not launched"));
    };
  }, []);

  return (
  <BrowserRouter basename={dest_root}>
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
