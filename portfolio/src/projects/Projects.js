import React, { useState } from "react";
import getProjectsData from "./projectsData";
import "../styles/projectsMenu.css";

const sectionTitles = {
  es: {
    label: "// TRABAJO",
    title: "Proyectos destacados",
    showAll: "Ver todos los proyectos",
    showFeatured: "Ver solo destacados",
  },
  en: {
    label: "// WORK",
    title: "Featured projects",
    showAll: "View all projects",
    showFeatured: "View featured only",
  },
};

const getInitials = (title) =>
  title
    .replace(/—.*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ProjectImage = ({ project }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`project-card__img-wrap ${project.imageType === "logo" ? "project-card__img-wrap--logo" : ""}`}>
      {!failed && project.image ? (
        <img
          src={project.image}
          alt={`Logo de ${project.title}`}
          className={`project-card__img ${project.imageType === "logo" ? "project-card__img--logo" : ""}`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="project-card__logo-fallback" aria-label={project.title}>
          {getInitials(project.title)}
        </div>
      )}
    </div>
  );
};

const Projects = ({ language = "es" }) => {
  const [showAll, setShowAll] = useState(false);
  const { label, title, showAll: showAllLabel, showFeatured } = sectionTitles[language] || sectionTitles.es;
  const projects = getProjectsData(language);
  const visibleProjects = showAll ? projects : projects.filter((project) => project.featured);

  return (
    <div className="container">
      <p className="section-label reveal">{label}</p>
      <h2 className="section-title reveal" data-delay="1">{title}</h2>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <article
            key={project.title}
            className="project-card"
            style={{ "--project-order": Math.min(index, 8) }}
          >
            <ProjectImage project={project} />
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
          </article>
        ))}
      </div>

      <div className="projects-actions reveal">
        <button
          type="button"
          className="btn btn--secondary projects-toggle"
          onClick={() => setShowAll((current) => !current)}
          aria-expanded={showAll}
        >
          {showAll ? showFeatured : showAllLabel}
          <span aria-hidden="true">{showAll ? " ↑" : " ↓"}</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
