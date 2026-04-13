import React from "react";
import getProjectsData from "./projectsData";
import "../styles/projectsMenu.css";

const sectionTitles = {
  es: { label: "// TRABAJO", title: "Proyectos" },
  en: { label: "// WORK", title: "Projects" },
};

const visitLabel = {
  es: "Ver sitio",
  en: "Visit site",
};

const Projects = ({ language = "es" }) => {
  const { label, title } = sectionTitles[language] || sectionTitles.es;
  const projects = getProjectsData(language);
  const visit = visitLabel[language] || visitLabel.es;

  return (
    <div className="container">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>

      <div className="projects-grid">
        {Object.values(projects).map((project) => (
          <div key={project.title} className="project-card">
            {project.image && (
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                />
              </div>
            )}
            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <div className="project-card__desc">{project.description}</div>
              {project.stack && (
                <div className="project-card__stack">
                  {project.stack.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              )}
              {project.sitioWeb && (
                <a
                  href={project.sitioWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  {visit} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
