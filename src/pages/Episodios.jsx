import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Pagination from "@components/Pagination";

// Función para obtener el número de temporada y episodio
const getEpisode = (episodeString) => ({
  season: Number.parseInt(episodeString.substring(1, 3)),
  episode: Number.parseInt(episodeString.substring(4, 6)),
});

/**
 * Componente Episodios
 * @returns Componente de React que renderiza la página de episodios
 * @example
 * <Episodios />
 * @see https://reactrouter.com/en/main/hooks/use-params
*/
const Episodios = () => {
  // Obtenemos el parámetro de la URL
  const params = useParams();
  // Hook para navegar entre páginas
  const navigate = useNavigate();

  // Estado para guardar los episodios
  const [episodios, setEpisodios] = useState([]);
  // Estado para guardar la información de la paginación
  const [pag, setPag] = useState(1);
  const [totalPag, setTotalPag] = useState(1);

  // Obtenemos los episodios usando useEffect. El segundo parámetro es un array de dependencias. Si este array está vacío, el efecto se ejecutará una sola vez, cuando el componente se monte. Si el array contiene una variable, el efecto se ejecutará cada vez que esta variable cambie de valor. En este caso, el efecto se ejecutará cada vez que cambie el valor de la variable pag.
  // Este useEffect se ejecuta sólo 1 vez (cuando se renderiza)
  useEffect(() => {
    console.log(
      "-> Este useEffect se ejecuta sólo 1 vez (cuando se renderiza)"
    );
    if (!params.pagina) navigate("/episodios/p/1", { replace: true });
    setPag((params.pagina && Number.parseInt(params.pagina)) || 1);
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        setTotalPag(Number.parseInt(data.info.pages));
        setEpisodios(data.results);
      });
  }, []);

  // Este useEffect se ejecuta cada vez que cambia el valor de params, es decir, cambia la página
  useEffect(() => {
    console.log(
      "-> Este useEffect se ejecuta cada vez que cambia el valor de params, es decir, cambia la página"
    );
    fetch(`https://rickandmortyapi.com/api/episode?page=${params.pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setEpisodios(data.results);
        setPag((params.pagina && Number.parseInt(params.pagina)) || 1);
      });
  }, [params]);

  return (
    <div className="p-5">
      <h1 className="display-6">Episodios</h1>
      <hr />
      <Pagination pag={{ current: pag, total: totalPag }} path="episodios" />
      <ul className="list-group">
        {episodios.map((episodio) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={episodio.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                [{episodio.episode}] - {episodio.name}
              </div>
              <div className="text-muted">Estreno: {episodio.air_date}</div>
            </div>
            <span className="badge bg-warning rounded-pill">
              Season {getEpisode(episodio.episode).season}
            </span>
          </li>
        ))}
      </ul>
      <Pagination pag={{ current: pag, total: totalPag }} path="episodios" />
    </div>
  );
};

export default Episodios;
