import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "@components/Card";
import Pagination from "@components/Pagination";

/**
 * Componente Personajes
 * @returns Componente de React que renderiza la página de personajes
 * @example
 * <Personajes />
 * @see https://reactrouter.com/web/api/Hooks/useparams
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
const Personajes = () => {
  // Obtenemos el parámetro de la URL
  const params = useParams();
  // Hook para navegar entre páginas
  const navigate = useNavigate();

  // Estado para guardar los personajes
  const [personajes, setPersonajes] = useState([]);
  // Estado para guardar la información de la paginación
  const [pag, setPag] = useState(1);
  const [totalPag, setTotalPag] = useState(1);

  // Este useEffect se ejecuta sólo 1 vez (cuando se renderiza)
  useEffect(() => {
    console.log(
      "-> Este useEffect se ejecuta sólo 1 vez (cuando se renderiza)"
    );
    if (!params.pagina) navigate("/personajes/p/1", { replace: true });
    setPag((params.pagina && Number.parseInt(params.pagina)) || 1);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setTotalPag(Number.parseInt(data.info.pages));
        setPersonajes(data.results);
      });
  }, []);

  // Este useEffect se ejecuta cada vez que cambia el valor de params, es decir, cambia la página
  useEffect(() => {
    console.log(
      "-> Este useEffect se ejecuta cada vez que cambia el valor de params, es decir, cambia la página"
    );
    fetch(`https://rickandmortyapi.com/api/character?page=${params.pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setPag((params.pagina && Number.parseInt(params.pagina)) || 1);
      });
  }, [params]);

  return (
    <main className="p-5 bg-light">
      <h1 className="display-6">Personajes</h1>
      <hr />
      <Pagination pag={{ current: pag, total: totalPag }} path="personajes" />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {personajes.map((personaje) => (
              <div className="col" key={personaje.id}>
                <Card personaje={personaje} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pagination pag={{ current: pag, total: totalPag }} path="personajes" />
    </main>
  );
};

export default Personajes;
