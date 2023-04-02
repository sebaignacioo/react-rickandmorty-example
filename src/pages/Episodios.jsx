import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const getEpisode = (episodeString) => ({
  season: Number.parseInt(episodeString.substring(1, 3)),
  episode: Number.parseInt(episodeString.substring(4, 6)),
});

const Episodios = () => {
  const params = useParams();
  const [episodios, setEpisodios] = useState([]);
  const [pag, setPag] = useState({
    current: params.pagina ?? 1,
    total: params.pagina ?? 1,
  });

  useEffect(() => {
    const getEpisodios = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${params.pagina ?? 1}`
      );
      const data = await response.json();
      setPag((a) => ({ current: params.pagina ?? 1, total: data.info.pages }));
      setEpisodios(data.results);
    };
    getEpisodios();
  }, [pag]);

  return (
    <div className="p-5">
      <h1 className="display-6">Episodios</h1>
      <hr />
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
      <nav className="bg-light py-3">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${
              Number.parseInt(pag.current) === 1 ? "disabled" : ""
            }`}
          >
            <Link
              className="page-link"
              to={`/episodios/p/${Number.parseInt(pag.current) - 1}`}
            >
              Anterior
            </Link>
          </li>
          <li className="page-item active">
            <a className="page-link">
              {pag.current}/{pag.total}
            </a>
          </li>
          <li
            className={`page-item ${
              Number.parseInt(pag.current) === Number.parseInt(pag.total)
                ? "disabled"
                : ""
            }`}
          >
            <Link
              className="page-link"
              to={`/episodios/p/${Number.parseInt(pag.current) + 1}`}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Episodios;
