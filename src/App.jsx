import { Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Home from "./pages/Home";
import Personajes from "./pages/Personajes";
import Episodios from "./pages/Episodios";

import Layout from "./layouts/Layout";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/personajes/p?/:pagina?" element={<Personajes />} />
      <Route path="/episodios/p?/:pagina?" element={<Episodios />} />
    </Route>
  </Routes>
);

export default App;
