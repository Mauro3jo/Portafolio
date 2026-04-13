import React from "react";
import experienceData from "./experienceData";
import "../styles/experience.css";

const sectionTitles = {
  es: { label: "// TRAYECTORIA", title: "Experiencia" },
  en: { label: "// TIMELINE", title: "Experience" },
};

const badgeLabels = {
  es: { current: "Actual", education: "Educación" },
  en: { current: "Current", education: "Education" },
};

const ExperienceCard = ({ item, language }) => {
  const labels = badgeLabels[language] || badgeLabels.es;

  return (
    <div className={`exp-card ${item.current ? "exp-card--current" : ""}`}>
      <div className="exp-card__header">
        <div className="exp-card__meta">
          <p className="exp-card__period">{item.period}</p>
          <h3 className="exp-card__role">{item.role}</h3>
          <p className="exp-card__company">
            {item.company}
            {item.client && (
              <span className="exp-card__client"> → {item.client}</span>
            )}
          </p>
        </div>
        {item.current && (
          <span className="exp-card__badge exp-card__badge--current">
            {labels.current}
          </span>
        )}
        {item.isEducation && !item.current && (
          <span className="exp-card__badge exp-card__badge--edu">
            {labels.education}
          </span>
        )}
      </div>
      <p className="exp-card__desc">{item.description}</p>
      <div className="exp-card__stack">
        {item.stack.map((tech) => (
          <span key={tech} className="tech-chip">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Experience = ({ language = "es" }) => {
  const { label, title } = sectionTitles[language] || sectionTitles.es;
  const items = experienceData[language] || experienceData.es;

  return (
    <div className="container">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="exp-timeline">
        {items.map((item) => (
          <div
            key={item.id}
            className={`exp-timeline__item ${item.current ? "exp-timeline__item--current" : ""}`}
          >
            <ExperienceCard item={item} language={language} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
