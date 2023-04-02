import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Personajes = () => {
  const params = useParams();

  const [personajes, setPersonajes] = useState([]);
  const [pag, setPag] = useState({
    current: params.pagina ?? 1,
    total: params.pagina ?? 1,
  });

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
