import ProjectCard from './ProjectCard';
import imgProyecto1 from '../assets/hotel-home.png'; 
import imgProyecto2 from '../assets/shop-home.png';
import imgProyecto3 from '../assets/bank-home.png';
import '../styles/Projects.css';

export default function Projects() {
  const misProyectos = [
    {
      id: 1,
      titulo: "Sistema de Gestion de Hoteles",
      descripcion: "Aplicación web para reserva y administración de hoteles.",
      imagen: imgProyecto1,
      repo: "https://github.com/tadeo14/Gestion-Hoteles-Front",
      demo: "https://pruebahotel.netlify.app/"
    },
    {
      id: 2,
      titulo: "Freak Shop - E-Commerce",
      descripcion: "Tienda virtual con estética Cyberpunk especializada en productos geek y coleccionables.",
      imagen: imgProyecto2,
      repo: "https://github.com/farz21/freak_shop",
      demo: "https://freak-shop.netlify.app/"
    },
    {
      id: 3,
      titulo: "Simulador de Banco Digital",
      descripcion: "Aplicación web que simula operaciones bancarias como depósitos y extracciones.",
      imagen: imgProyecto3,
      repo: "https://github.com/farz21/simulador-app-banco",
      demo: "https://afp-digital-bank.netlify.app/"
    }
  ];

  return (
    <section id="proyectos" className="glass-panel">
      <h3 className="section-title">Mis Proyectos</h3>
      <div className="projects-grid">
        {misProyectos.map((proyecto) => (
          <ProjectCard 
            key={proyecto.id} 
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            repo={proyecto.repo}
            demo={proyecto.demo}
          />
        ))}
      </div>
    </section>
  );
}