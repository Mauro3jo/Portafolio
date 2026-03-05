import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import getSubheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";

const aboutMenuLabels = {
  es: ["Sobre mi", "Contacto", "Carrera"],
  en: ["About", "Contact", "Career"],
};

const aboutMenuIcons = [personalIcon, educationIcon, careerIcon];

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { language = "es" } = this.props;
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = aboutMenuLabels[language] || aboutMenuLabels.es;
    const activeMenuTitle = menuItems[activeMenuItem - 1] || menuItems[0];
    const activeMenuIcon = aboutMenuIcons[activeMenuItem - 1] || aboutMenuIcons[0];

    const localizedSubheadings = getSubheadingsData(language);
    const subheadings = localizedSubheadings[activeMenuItem] || [];

    return (
      <div className="about-menu-layout">
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading, index) => (
            <AboutSubheading
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handleSubheadingClick(index + 1)}
              menuItem={activeMenuItem}
            />
          ))}
        </div>
      </div>
    );
  }
}
