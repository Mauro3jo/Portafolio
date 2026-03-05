
import React, { Component } from "react";
import classNames from "classnames";
import getProjectsData from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (projectId) => {
    this.setState({
      activeProject: projectId,
    });
  };

  renderContent = (project, language) => {
    if (!project) {
      return (
        <p className="project-empty">
          {language === "en" ? "No projects available." : "No hay proyectos cargados."}
        </p>
      );
    }

    const websiteButtonText =
      language === "en" ? "Visit website" : "Ir al sitio web";

    return (
      <div className="project-sub-content">
        <h1 className="project-heading">{project.title}</h1>
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <div className="scrollable-description">{project.description}</div>
        <div className="link-container">
          <a
            className="project-link"
            href={project.sitioWeb}
            target="_blank"
            rel="noopener noreferrer"
          >
            {websiteButtonText}
          </a>
        </div>
      </div>
    );
  };

  render() {
    const { activeProject } = this.state;
    const { language = "es" } = this.props;
    const projects = getProjectsData(language);
    const orderedProjectIds = Object.keys(projects)
      .map((id) => Number(id))
      .sort((a, b) => a - b);
    const currentProjectId = projects[activeProject]
      ? activeProject
      : orderedProjectIds[0] ?? null;
    const projectItems = orderedProjectIds.map((id) => ({
      id,
      title: projects[id].title,
    }));
    const selectedProject = currentProjectId ? projects[currentProjectId] : null;

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={classNames("project-item", {
                activeProject: currentProjectId === item.id,
              })}
              onClick={() => this.handleProjectClick(item.id)}
              aria-pressed={currentProjectId === item.id}
            >
              <h2 className="project-title">{item.title}</h2>
            </button>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent(selectedProject, language)}
        </div>
      </div>
    );
  }
}
