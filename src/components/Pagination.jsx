import { Link } from "react-router-dom";

const Pagination = ({ pag }) => {
  return (
    <nav className="bg-light py-3">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${
            Number.parseInt(pag.current) === 1 ? "disabled" : ""
          }`}
        >
          <Link
            className="page-link"
            to={`/personajes/p/${Number.parseInt(pag.current) - 1}`}
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
            to={`/personajes/p/${Number.parseInt(pag.current) + 1}`}
          >
            Siguiente
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
