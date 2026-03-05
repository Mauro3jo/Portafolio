import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import enveloped from "../assets/envelope.png";
import "../styles/nav.css";

const navTitles = {
  es: {
    "/": "Sobre mi",
    "/skills": "Tecnologias",
    "/projects": "Proyectos",
  },
  en: {
    "/": "About me",
    "/skills": "Skills",
    "/projects": "Projects",
  },
};

export default function Nav({ language = "es", onLanguageChange }) {
  const location = useLocation();
  const isSpanish = language === "es";

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    const localizedTitles = navTitles[language] || navTitles.es;
    return localizedTitles[location.pathname] || "";
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => navClass === navPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/",
        astronautHelmet,
        isSpanish ? "icono sobre mi" : "about icon",
        "nav-about"
      )}
      {renderNavLink(
        "/skills",
        deadEye,
        isSpanish ? "icono tecnologias" : "skills icon",
        "nav-skills"
      )}
      {renderNavLink(
        "/projects",
        stack,
        isSpanish ? "icono proyectos" : "projects icon",
        "nav-projects"
      )}

      <a href="/CV_mauro_trejo.pdf" download className="nav-link nav-cv-link">
        <img src={enveloped} alt={isSpanish ? "icono CV" : "CV icon"} className="cv-download-icon" />
        <span className="nav-cv-label">CV</span>
      </a>

      <div
        className="nav-lang-toggle"
        role="group"
        aria-label={isSpanish ? "Seleccionar idioma" : "Select language"}
      >
        <button
          type="button"
          className={`nav-lang-button ${language === "es" ? "active" : ""}`}
          onClick={() => onLanguageChange?.("es")}
          aria-pressed={language === "es"}
        >
          ES
        </button>
        <button
          type="button"
          className={`nav-lang-button ${language === "en" ? "active" : ""}`}
          onClick={() => onLanguageChange?.("en")}
          aria-pressed={language === "en"}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
