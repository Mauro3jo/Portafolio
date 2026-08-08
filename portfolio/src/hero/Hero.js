import React from "react";
import "../styles/hero.css";

const getAge = () => {
  const today = new Date();
  const birthday = new Date(2000, 1, 3); // 3 feb 2000
  let age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
};

const heroCopy = {
  es: {
    greeting: "Hola, soy",
    role: "Senior Full Stack Developer",
    bio: "Desarrollador full stack especializado en productos mobile, web y backend para entornos de alto impacto. Trabajo con React Native, React y .NET, construyendo APIs, microservicios e integraciones utilizadas en operaciones reales de Latinoamérica.",
    ctaPrimary: "Ver proyectos",
    ctaSecondary: "Descargar CV",
    available: "Abierto a nuevos desafíos y proyectos",
    stats: [
      { value: "6+", label: "años de experiencia" },
      { value: "75+", label: "módulos desarrollados" },
      { value: "6", label: "países LATAM" },
    ],
  },
  en: {
    greeting: "Hi, I'm",
    role: "Senior Full Stack Developer",
    bio: "Full stack developer specialized in high-impact mobile, web and backend products. I work with React Native, React and .NET, building APIs, microservices and integrations used in real operations across Latin America.",
    ctaPrimary: "View projects",
    ctaSecondary: "Download CV",
    available: "Open to new challenges and projects",
    stats: [
      { value: "6+", label: "years of experience" },
      { value: "75+", label: "modules built" },
      { value: "6", label: "LATAM countries" },
    ],
  },
};

const Hero = ({ language = "es" }) => {
  const copy = heroCopy[language] || heroCopy.es;
  const age = getAge();

  return (
    <div className="hero">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="container hero__content">
        <p className="hero__greeting">{copy.greeting}</p>
        <h1 className="hero__name">Mauro Trejo</h1>
        <h2 className="hero__role">{copy.role}</h2>
        <p className="hero__bio">{copy.bio}</p>

        <div className="hero__languages" aria-label="Languages">
          <span className="hero__lang-badge">🌐 Español — nativo</span>
          <span className="hero__lang-badge">🇺🇸 English — B1</span>
        </div>

        <div className="hero__stack" aria-label="Tech stack">
          {[".NET", "Laravel", "React.js", "React Native", "SQL Server", "AWS"].map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <div className="hero__stats" aria-label="Stats">
          <div className="hero__stat">
            <span className="hero__stat-value">{age}</span>
            <span className="hero__stat-label">{language === "en" ? "years old" : "años"}</span>
          </div>
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
          <a
            href={language === "en" ? "/CV_mauro_trejo_en.pdf" : "/CV_mauro_trejo.pdf"}
            download
            className="btn btn--secondary"
          >
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
