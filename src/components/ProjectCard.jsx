import '../styles/ProjectCard.css';

export default function ProjectCard({ titulo, descripcion, imagen, repo, demo }) {
  return (
    <article className="elegant-card">
      <div className="card-img-wrapper">
        <img src={imagen} alt={`Vista de ${titulo}`} className="card-image" />
      </div>
      <div className="card-content">
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
        <div className="card-actions">
          <a href={repo} target="_blank" rel="noopener noreferrer" className="elegant-btn">GitHub</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="elegant-btn primary">Demo</a>
        </div>
      </div>
    </article>
  );
}