import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import '../styles/Contact.css';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_mx8v9zp", "template_mj7e60v", formRef.current, "tyUE9c6MR2lWTfV3T")
    .then(() => {
      alert("¡Mensaje enviado con éxito!"); 
      formRef.current.reset();
    })
    .catch((error) => {
      alert("Error: " + error.text);
    });
  };

  return (
    <section id="contacto" className="glass-panel">
      <h3 className="section-title">Contacto</h3>
      <div className="contact-grid">
        <div className="contact-links">
          <p className="contact-subtitle">Conectemos</p>
          <a href="mailto:fabrigabrielcoronel@gmail.com" className="elegant-btn">✉️ Email</a>
          <a href="https://github.com/farz21" target="_blank" rel="noreferrer" className="elegant-btn">
            <i className="devicon-github-original"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/fabrizio-gabriel-coronel-gordillo-36379822b/" target="_blank" rel="noreferrer" className="elegant-btn">
            <i className="devicon-linkedin-plain"></i> LinkedIn
          </a>
        </div>
        <form ref={formRef} className="elegant-form" onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Tu Nombre" required />
          <input type="email" name="user_email" placeholder="Tu Email" required />
          <textarea name="message" placeholder="Tu Mensaje" rows="4" required></textarea>
          <button type="submit" className="elegant-btn primary">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}