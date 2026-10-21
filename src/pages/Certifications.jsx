import certImg1 from "../assets/certificado_fullstack.png"; // Reemplaza con tus nombres reales
import certImg2 from "../assets/certificado_powerBI.png";
import "../styles/Certifications.css";

export default function Certifications() {
  return (
    <section className="glass-panel page-fade-in">
      <h3 className="section-title">Certificaciones</h3>

      <div className="cert-grid">
        <img
          src={certImg1}
          alt="Certificado 1"
          className="cert-img elegant-shadow"
        />
        <img
          src={certImg2}
          alt="Certificado 2"
          className="cert-img elegant-shadow"
        />
      </div>
    </section>
  );
}
