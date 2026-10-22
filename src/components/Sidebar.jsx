import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
const Sidebar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <aside className="glass-sidebar">
      <div className="sidebar-header">
        <NavLink to="/" className="text-logo" onClick={cerrarMenu}>
          Fabrizio Coronel
        </NavLink>
        <button
          className="hamburger-btn"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      </div>

      <nav className={`sidebar-nav ${menuAbierto ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
              end
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
            >
              Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
            >
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
            >
              Certificados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={cerrarMenu}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
