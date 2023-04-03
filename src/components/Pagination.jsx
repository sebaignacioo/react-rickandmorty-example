import { Link } from "react-router-dom";

/**
 * Componente Paginación
 * @param pag Objeto con la información de la paginación __(object)__
 * @returns Componente de React que renderiza la paginación
 * @example
 * <Pagination
 * pag={pagObject}
 * />
 */
const Pagination = ({ path, pag }) => {
  return (
    <nav className="bg-light py-3">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${
            Number.parseInt(pag.current) === 1 ? "disabled" : ""
          }`}
        >
          <Link className="page-link" to={`/${path}/p/${pag.current - 1}`}>
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
          <Link className="page-link" to={`/${path}/p/${pag.current + 1}`}>
            Siguiente
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
