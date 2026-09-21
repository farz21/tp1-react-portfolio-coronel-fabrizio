import certImg from '../assets/Certificado-Fullstack.png';
import '../styles/Certifications.css';

export default function Certifications() {
  return (
    <section id="certificaciones" className="glass-panel">
      <h3 className="section-title">Certificaciones</h3>
      <div className="cert-container">
        <img src={certImg} alt="Certificado del curso" className="cert-img elegant-shadow" />
      </div>
    </section>
  );
}