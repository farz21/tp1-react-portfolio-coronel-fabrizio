import { Link } from 'react-router-dom';
import fotoPerfil from '../assets/foto_perfil.png';
import '../styles/Header.css';

const Header = ({ nombre, profesion }) => {
  return (
    <header className="glass-panel elegant-header page-fade-in">
      <div className="header-text">
        <h1 className="gradient-text">{nombre}</h1>
        <h2 className="subtitle">{profesion}</h2>
        <div className="header-actions">
          <Link to="/contact" className="elegant-btn primary">Contáctame</Link>
          <Link to="/projects" className="elegant-btn">Ver Proyectos</Link>
        </div>
      </div>
      <div className="header-img-container">
        <div className="glow-circle"></div>
        <img src={fotoPerfil} alt={`Foto de ${nombre}`} className="header-img" />
      </div>
    </header>
  );
}
export default Header;
