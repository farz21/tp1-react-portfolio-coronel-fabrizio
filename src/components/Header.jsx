import fotoPerfil from '../assets/foto_perfil.png';
import '../styles/Header.css';

export default function Header({ nombre, profesion }) {
  return (
    <header id="inicio" className="glass-panel elegant-header">
      <div className="header-text">
        <h1 className="gradient-text">{nombre}</h1>
        <h2 className="subtitle">{profesion}</h2>
        <div className="header-actions">
          <a href="#contacto" className="elegant-btn primary">Contáctame</a>
          <a href="#proyectos" className="elegant-btn">Ver Proyectos</a>
        </div>
      </div>
      <div className="header-img-container">
        <div className="glow-circle"></div>
        <img src={fotoPerfil} alt={`Foto de ${nombre}`} className="header-img" />
      </div>
    </header>
  );
}