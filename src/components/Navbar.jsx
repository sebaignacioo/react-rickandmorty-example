import { BiHomeAlt2, BiTv, BiUser } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";

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

const NavbarLink = ({ to, Icon, name, className, disabled }) => {
  return (
    <NavLink
      to={to}
      className={`nav-link ${({ isActive }) => (isActive ? "active" : "")} ${
        className ?? ""
      }`}
      unselectable={disabled ? "on" : "off"}
      key={name}
    >
      <Icon /> {name}
    </NavLink>
  );
};

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
