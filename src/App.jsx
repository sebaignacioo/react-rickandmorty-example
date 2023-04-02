import { Routes, Route } from "react-router-dom";

import "@styles/main.scss";
import "bootstrap";

import Home from "@pages/Home";
import Personajes from "@pages/Personajes";
import Episodios from "@pages/Episodios";

import Layout from "@layouts/Layout";

/**
 * Componente App
 * @returns Componente de React que renderiza la aplicación
 * @example
 * <App />
 * @see https://reactrouter.com/web/api/Routes
 * @see https://reactrouter.com/web/api/Route
 */
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
