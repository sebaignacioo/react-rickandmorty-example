import { BiHomeAlt2, BiTv, BiUser } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

import { Link, NavLink } from "react-router-dom";

import styles from "@styles/modules/Navbar.module.scss";

// Definimos un array de objetos con las rutas y los íconos
const links = [
  {
    to: "/",
    Icon: BiHomeAlt2,
    name: "Inicio",
  },
  {
    to: "/personajes",
    Icon: BiUser,
    name: "Personajes",
  },
  {
    to: "/episodios",
    Icon: BiTv,
    name: "Episodios",
  },
];

/**
 * Componente NavbarLink
 * @param to Ruta a la que redirigir al hacer click
 * @param Icon Ícono a mostrar
 * @param name Nombre del enlace
 * @param className Clase CSS a aplicar al enlace
 * @param disabled Deshabilitar el enlace
 * @returns Componente de React que renderiza un enlace de la barra de navegación
 * @example
 * <NavbarLink
 * to="/"
 * Icon={BiHomeAlt2}
 * name="Inicio"
 * />
 */
const NavbarLink = ({ to, Icon, name, className, disabled }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link ${isActive ? "active" : ""} ${className ?? ""}`}
      unselectable={disabled ? "on" : "off"}
      key={name}
    >
      <Icon /> {name}
    </NavLink>
  );
};

/**
 * Componente NavbarToggler
 * @returns Componente de React que renderiza el botón de despliegue de la barra de navegación
 * @example
 * <NavbarToggler />
 */
const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

/**
 * Componente Navbar
 * @returns Componente de React que renderiza la barra de navegación
 * @example
 * <Navbar />
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.svg" alt="" height="40" />
        </Link>
        <NavbarToggler />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {links.map((link) => (
              <li className="nav-item" key={link.name}>
                <NavbarLink {...link} />
              </li>
            ))}
          </ul>
          <div className={`${styles.rlinks}`}>
            <div className="container">
              <div className="row">
                <a
                  href="https://github.com/sebaignacioo/react-rickandmorty-example"
                  target="_blank"
                  rel="noreferrer"
                  className="col nav-item"
                >
                  <SiGithub /> Repositorio de Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
