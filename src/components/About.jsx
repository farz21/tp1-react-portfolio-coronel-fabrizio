import { useState } from "react";
import "../styles/About.css";

export default function About() {
  // Estado para manejar la pestaña activa
  const [tabActiva, setTabActiva] = useState("perfil");

  return (
    <section id="sobre-mi" className="glass-panel">
      <h3 className="section-title">Sobre Mí</h3>
      <div className="about-tabs">
        <button
          className={`tab-btn ${tabActiva === "perfil" ? "active" : ""}`}
          onClick={() => setTabActiva("perfil")}
        >
          Perfil Profesional
        </button>
        <button
          className={`tab-btn ${tabActiva === "educacion" ? "active" : ""}`}
          onClick={() => setTabActiva("educacion")}
        >
          Educación
        </button>
      </div>

      <div className="tab-content">
        {tabActiva === "perfil" && (
          <div className="fade-in">
            <p>
              Soy desarrollador Web FullStack. Estoy en el segundo año de la
              Tecnicatura Universitaria en Programación en la UTN–FRT. Cuento
              con experiencia en proyectos individuales y colaborativos. Trabajo
              con HTML, CSS, JavaScript y React, además de bases de datos como
              MySQL y MongoDB. Me interesa el desarrollo Fullstack y sigo
              aprendiendo nuevas tecnologías para mejorar mis habilidades.
            </p>
          </div>
        )}

        {tabActiva === "educacion" && (
          <div className="fade-in educacion-info">
            <h4>Tecnicatura Universitaria en Programación</h4>
            <p>
              Universidad Tecnológica Nacional (UTN) - Facultad Regional Tucumán
            </p>
            <span className="badge">Actualmente cursando el segundo año</span>
          </div>
        )}
      </div>
    </section>
  );
}
