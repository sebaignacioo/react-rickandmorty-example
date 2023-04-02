import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  // Estado para guardar los personajes
  const [personajes, setPersonajes] = useState([]);
  // Estado para guardar la información de la paginación
  const [pag, setPag] = useState({
    current: params.pagina ?? 1,
    total: params.pagina ?? 1,
  });

  // Obtenemos los personajes usando useEffect. El segundo parámetro es un array de dependencias. Si este array está vacío, el efecto se ejecutará una sola vez, cuando el componente se monte. Si el array contiene una variable, el efecto se ejecutará cada vez que esta variable cambie de valor. En este caso, el efecto se ejecutará cada vez que cambie el valor de la variable pag.
  useEffect(() => {
    const getPersonajes = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${params.pagina ?? 1}`
      );
      const data = await response.json();
      setPag((a) => ({ current: params.pagina ?? 1, total: data.info.pages }));
      setPersonajes(data.results);
    };
    getPersonajes();
  }, [pag]);

  return (
    <main className="p-5 bg-light">
      <h1 className="display-6">Personajes</h1>
      <hr />
      <Pagination pag={pag} />
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
      <Pagination pag={pag} />
    </main>
  );
};

export default Personajes;
