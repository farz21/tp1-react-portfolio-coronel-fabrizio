import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="elegant-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Fabrizio Gabriel Coronel Gordillo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}