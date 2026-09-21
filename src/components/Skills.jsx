import '../styles/Skills.css';

export default function Skills() {
  const habilidades = [
    { nombre: "JavaScript", icono: "devicon-javascript-plain" },
    { nombre: "React", icono: "devicon-react-original" },
    { nombre: "HTML5", icono: "devicon-html5-plain" },
    { nombre: "CSS3", icono: "devicon-css3-plain" },
    { nombre: "Node.js", icono: "devicon-nodejs-plain" },
    { nombre: "Express.js", icono: "devicon-express-original" },
    { nombre: "C#", icono: "devicon-csharp-plain" },
    { nombre: ".NET", icono: "devicon-dot-net-plain" },
    { nombre: "MySQL", icono: "devicon-mysql-plain" },
    { nombre: "MongoDB", icono: "devicon-mongodb-plain" },
    { nombre: "GitHub", icono: "devicon-github-original" }
  ];

  return (
    <section id="habilidades" className="glass-panel">
      <h3 className="section-title">Mis Habilidades</h3>
      <div className="skills-grid">
        {habilidades.map((hab) => (
          <div key={hab.nombre} className="skill-item">
            <i className={`${hab.icono} skill-icon`}></i>
            <span>{hab.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}