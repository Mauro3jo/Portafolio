import React from "react";
import "../styles/education.css";

const copy = {
  es: {
    label: "// FORMACIÓN",
    title: "Educación",
    degree: "Técnico Universitario en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    period: "2018 — 2021",
    description:
      "Carrera universitaria enfocada en desarrollo de software web y de escritorio, programación orientada a objetos, bases de datos y construcción de aplicaciones completas.",
  },
  en: {
    label: "// EDUCATION",
    title: "Education",
    degree: "University Programming Technician",
    institution: "Universidad Tecnológica Nacional (UTN)",
    period: "2018 — 2021",
    description:
      "University degree focused on web and desktop software development, object-oriented programming, databases and end-to-end application development.",
  },
};

const Education = ({ language = "es" }) => {
  const content = copy[language] || copy.es;

  return (
    <div className="container">
      <p className="section-label reveal">{content.label}</p>
      <h2 className="section-title reveal" data-delay="1">{content.title}</h2>
      <article className="education-card reveal" data-delay="2">
        <div>
          <p className="education-card__period">{content.period}</p>
          <h3 className="education-card__degree">{content.degree}</h3>
          <p className="education-card__institution">{content.institution}</p>
        </div>
        <p className="education-card__description">{content.description}</p>
        <div className="education-card__stack">
          {["ASP.NET Core", "React", "SQL Server", "PHP", "Windows Forms"].map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Education;
