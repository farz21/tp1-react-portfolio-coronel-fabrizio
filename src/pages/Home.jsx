import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Nav />
      <main className="main-content">
        <Header 
          nombre="Fabrizio Gabriel Coronel Gordillo" 
          profesion="Desarrollador Web FullStack" 
        />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}