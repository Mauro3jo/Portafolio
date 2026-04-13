import React, { useState, useEffect } from "react";
import "../styles/nav.css";

const navLinks = {
  es: [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Nav({ language = "es", onLanguageChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navLinks[language] || navLinks.es;

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">
        <a href="#about" className="nav__logo">
          MT
        </a>

        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <div className="nav__lang" role="group" aria-label={language === "en" ? "Select language" : "Seleccionar idioma"}>
            <button
              type="button"
              className={`nav__lang-btn ${language === "es" ? "active" : ""}`}
              onClick={() => onLanguageChange?.("es")}
              aria-pressed={language === "es"}
            >
              ES
            </button>
            <span className="nav__lang-sep" aria-hidden="true">|</span>
            <button
              type="button"
              className={`nav__lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => onLanguageChange?.("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          <a
            href="/CV_mauro_trejo.pdf"
            download
            className="nav__cv-btn"
            aria-label={language === "en" ? "Download CV" : "Descargar CV"}
          >
            CV
          </a>

          <button
            type="button"
            className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={language === "en" ? "Toggle menu" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
