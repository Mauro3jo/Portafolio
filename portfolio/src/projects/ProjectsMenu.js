import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }

  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h1 style={{ paddingBottom:"10px" }} > {project.title}   </h1>   
        <img style={{maxWidth:'100%', height:"auto"}}  src={project.image} alt={project.title}></img>
        <div style={{fontSize:"18px"}}>{project.description}</div>
        <div className="link-container">
          <a style={{backgroundColor:"ThreeDLightShadow"}} href={project.sitioWeb} target="_blank" rel="noopener noreferrer">
            Ir al sitio web
          </a>
 
        </div>
      </div>
    ));
  };

  render() {
    const { activeProject } = this.state;
    const projectItems = ["Zoco","Lubri Box"];

    // const projectItems = ["Zoco", "nombre del proyecto", "nombre del proyecto"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
