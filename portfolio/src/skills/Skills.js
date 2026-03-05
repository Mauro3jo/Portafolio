import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import SkillsMenu from "./SkillsMenu.js";

export default class About extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu language={language} />
      </>
    );
  }
}
