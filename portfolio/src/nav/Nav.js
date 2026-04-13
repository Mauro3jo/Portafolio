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

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Nav({ language = "es", onLanguageChange, theme = "dark", onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navLinks[language] || navLinks.es;
  const isDark = theme === "dark";

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

          <button
            type="button"
            className="nav__theme-btn"
            onClick={onThemeToggle}
            aria-label={isDark
              ? (language === "en" ? "Switch to light mode" : "Cambiar a modo claro")
              : (language === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro")
            }
            title={isDark
              ? (language === "en" ? "Light mode" : "Modo claro")
              : (language === "en" ? "Dark mode" : "Modo oscuro")
            }
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={language === "en" ? "/CV_mauro_trejo_en.pdf" : "/CV_mauro_trejo.pdf"}
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
