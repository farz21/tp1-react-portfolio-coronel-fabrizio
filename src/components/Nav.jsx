import { useState } from 'react';
import '../styles/Nav.css';

export default function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="glass-nav">
      <div className="nav-header">
        <span className="logo">Fabrizio Coronel</span>
        <button className="hamburger-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${menuAbierto ? 'open' : ''}`}>
        <li><a onClick={() => setMenuAbierto(false)} href="#inicio">Inicio</a></li>
        <li><a onClick={() => setMenuAbierto(false)} href="#sobre-mi">Sobre Mí</a></li>
        <li><a onClick={() => setMenuAbierto(false)} href="#habilidades">Habilidades</a></li>
        <li><a onClick={() => setMenuAbierto(false)} href="#proyectos">Proyectos</a></li>
        <li><a onClick={() => setMenuAbierto(false)} href="#certificaciones">Certificados</a></li>
        <li><a onClick={() => setMenuAbierto(false)} href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}