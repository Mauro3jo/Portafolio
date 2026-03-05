import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
  render() {
    const { language } = this.props;

    return (
      <>
        <Avatar page="about" />
        <AboutMenu language={language} />
      </>
    );
  }
}
