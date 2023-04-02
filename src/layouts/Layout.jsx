import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar";

/**
 * Componente Layout
 * @returns Componente de React que renderiza el layout de la aplicación
 * @example
 * <Layout />
 * @see https://reactrouter.com/web/api/Outlet
 */
const Layout = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
