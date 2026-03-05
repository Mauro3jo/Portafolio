import React, { Component } from "react";
import ProjectsMenu from "./ProjectsMenu";

export default class Projects extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <ProjectsMenu language={language} />
      </>
    );
  }
}
