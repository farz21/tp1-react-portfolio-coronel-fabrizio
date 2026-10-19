import Header from '../components/Header';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-page-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh', justifyContent: 'center' }}>
      <Header 
        nombre="Fabrizio Coronel" 
        profesion="Desarrollador Web FullStack" 
      />
    </div>
  );
}