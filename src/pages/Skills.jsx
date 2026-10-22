import '../styles/Skills.css';

 const Skills = () => {
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
    { nombre: "GitHub", icono: "devicon-github-original" },
    { 
      nombre: "Power BI", 
      // Código SVG del logo de Power BI que actúa como una fuente tipográfica
      svg: (
        <svg viewBox="0 0 24 24" className="skill-icon" style={{ width: '1em', height: '1em' }} fill="currentColor">
          <path d="M14 2h6v20h-6V2zM7.5 8h5.5v14H7.5V8zM1 14h5.5v8H1v-8z" />
        </svg>
      )
    } 
  ];

  return (
    <section className="glass-panel page-fade-in">
      <h3 className="section-title">Mis Habilidades</h3>
      <div className="skills-grid">
        {habilidades.map((hab) => (
          <div key={hab.nombre} className="skill-item">
            
            {/* Si tiene la propiedad 'svg', renderiza el código SVG. Si no, usa la clase de Devicon */}
            {hab.svg ? (
              hab.svg
            ) : (
              <i className={`${hab.icono} skill-icon`}></i>
            )}
            
            <span>{hab.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;