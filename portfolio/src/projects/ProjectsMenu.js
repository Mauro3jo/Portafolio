
import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

const orderedProjectIds = Object.keys(projects)
  .map((id) => Number(id))
  .sort((a, b) => a - b);

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: orderedProjectIds[0] ?? null,
    };
  }

  handleProjectClick = (projectId) => {
    this.setState({
      activeProject: projectId,
    });
  };

  renderContent = (project) => {
    if (!project) {
      return <p className="project-empty">No hay proyectos cargados.</p>;
    }

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
            Ir al sitio web
          </a>
        </div>
      </div>
    );
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = orderedProjectIds.map((id) => ({
      id,
      title: projects[id].title,
    }));
    const selectedProject = activeProject ? projects[activeProject] : null;

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={classNames("project-item", {
                activeProject: activeProject === item.id,
              })}
              onClick={() => this.handleProjectClick(item.id)}
              aria-pressed={activeProject === item.id}
            >
              <h2 className="project-title">{item.title}</h2>
            </button>
          ))}
        </div>
        <div className="project-sub-container">{this.renderContent(selectedProject)}</div>
      </div>
    );
  }
}
