import React from "react";
import getProjectsData from "./projectsData";
import "../styles/projectsMenu.css";

const sectionTitles = {
  es: { label: "// TRABAJO", title: "Proyectos" },
  en: { label: "// WORK", title: "Projects" },
};

const Projects = ({ language = "es" }) => {
  const { label, title } = sectionTitles[language] || sectionTitles.es;
  const projects = getProjectsData(language);

  return (
    <div className="container">
      <p className="section-label reveal">{label}</p>
      <h2 className="section-title reveal" data-delay="1">{title}</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="project-card reveal" data-delay={index + 1}>
            {project.image && (
              <div className={`project-card__img-wrap ${project.imageType === "logo" ? "project-card__img-wrap--logo" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`project-card__img ${project.imageType === "logo" ? "project-card__img--logo" : ""}`}
                  loading="lazy"
                />
              </div>
            )}
            <div className="project-card__body">
              {project.eyebrow && <p className="project-card__eyebrow">{project.eyebrow}</p>}
              <h3 className="project-card__title">{project.title}</h3>
              <div className="project-card__desc">{project.description}</div>
              {project.stack && (
                <div className="project-card__stack">
                  {project.stack.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              )}
              {project.links?.length > 0 && (
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
