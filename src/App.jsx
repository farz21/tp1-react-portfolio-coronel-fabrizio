import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Importamos TODAS tus páginas desde la carpeta pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications'; // Tu página extra
import Contact from './pages/Contact';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        
        {/* El menú lateral siempre visible a la izquierda */}
        <Sidebar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;