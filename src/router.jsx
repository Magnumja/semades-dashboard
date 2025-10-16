import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BIIndicadores from "./pages/BIIndicadores";
import BIProjetos from "./pages/BIProjetos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indicadores" element={<BIIndicadores />} />
        <Route path="/projetos" element={<BIProjetos />} />
      </Routes>
    </BrowserRouter>
  );
}
