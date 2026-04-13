import React from "react";
import "../styles/hero.css";

const heroCopy = {
  es: {
    greeting: "Hola, soy",
    role: "Full Stack Developer",
    bio: "Desarrollador full stack con experiencia en soluciones empresariales web, mobile y backend. Especializado en .NET y Laravel en backend, React.js y React Native en frontend, con despliegues en AWS y arquitecturas de microservicios.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Descargar CV",
    available: "Disponible para nuevas oportunidades",
    stats: [
      { value: "5+", label: "años de experiencia" },
      { value: "75+", label: "módulos desarrollados" },
      { value: "6", label: "países LATAM" },
    ],
  },
  en: {
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    bio: "Full stack developer with experience in enterprise web, mobile, and backend solutions. Specialized in .NET and Laravel on the backend, React.js and React Native on the frontend, with AWS deployments and microservices architectures.",
    ctaPrimary: "View projects",
    ctaSecondary: "Download CV",
    available: "Open to new opportunities",
    stats: [
      { value: "5+", label: "years of experience" },
      { value: "75+", label: "modules built" },
      { value: "6", label: "LATAM countries" },
    ],
  },
};

const Hero = ({ language = "es" }) => {
  const copy = heroCopy[language] || heroCopy.es;

  return (
    <div className="hero">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="container hero__content">
        <p className="hero__greeting">{copy.greeting}</p>
        <h1 className="hero__name">Mauro Trejo</h1>
        <h2 className="hero__role">{copy.role}</h2>
        <p className="hero__bio">{copy.bio}</p>

        <div className="hero__stack" aria-label="Tech stack">
          {[".NET", "Laravel", "React.js", "React Native", "SQL Server", "AWS"].map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <div className="hero__stats" aria-label="Stats">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {copy.ctaPrimary}
          </a>
          <a href="/CV_mauro_trejo.pdf" download className="btn btn--secondary">
            {copy.ctaSecondary}
          </a>
        </div>

        <p className="hero__available">
          <span className="hero__dot" aria-hidden="true"></span>
          {copy.available}
        </p>
      </div>
    </div>
  );
};

export default Hero;
