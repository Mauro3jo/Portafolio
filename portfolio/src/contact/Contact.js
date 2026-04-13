import React from "react";
import "../styles/contact.css";

const contactCopy = {
  es: {
    label: "// CONTACTO",
    title: "Hablemos",
    subtitle:
      "Estoy disponible para nuevas oportunidades. ¿Tenés un proyecto en mente o querés conocer más sobre mi trabajo?",
    linkedin: "Escribime en LinkedIn",
    github: "Ver mi GitHub",
    footer: "Mauro Trejo · Full Stack Developer · Argentina",
  },
  en: {
    label: "// CONTACT",
    title: "Let's talk",
    subtitle:
      "I'm open to new opportunities. Have a project in mind or want to learn more about my work?",
    linkedin: "Message me on LinkedIn",
    github: "View my GitHub",
    footer: "Mauro Trejo · Full Stack Developer · Argentina",
  },
};

const Contact = ({ language = "es" }) => {
  const copy = contactCopy[language] || contactCopy.es;

  return (
    <div className="container contact">
      <p className="section-label">{copy.label}</p>
      <h2 className="section-title">{copy.title}</h2>
      <p className="contact__subtitle">{copy.subtitle}</p>
      <div className="contact__actions">
        <a
          href="https://www.linkedin.com/in/mauro-trejo-98968b1ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          {copy.linkedin}
        </a>
        <a
          href="https://github.com/Mauro3jo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary"
        >
          {copy.github}
        </a>
      </div>
      <p className="contact__footer">{copy.footer}</p>
    </div>
  );
};

export default Contact;
