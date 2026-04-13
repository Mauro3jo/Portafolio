import React, { useState } from "react";
import skills from "./skillsData";
import "../styles/skillsMenu.css";

const MAX_LEVEL = 10;

const sectionTitles = {
  es: { label: "// TECNOLOGÍAS", title: "Skills" },
  en: { label: "// TECHNOLOGIES", title: "Skills" },
};

const categoryLabels = {
  es: { 1: "Back-end", 2: "Front-end", 3: "Herramientas" },
  en: { 1: "Back-end", 2: "Front-end", 3: "Tools" },
};

const Skills = ({ language = "es" }) => {
  const [active, setActive] = useState(1);
  const { label, title } = sectionTitles[language] || sectionTitles.es;
  const categories = categoryLabels[language] || categoryLabels.es;

  return (
    <div className="container">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>

      <div className="skills-tabs" role="tablist">
        {Object.keys(categories).map((key) => {
          const id = Number(key);
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === id}
              className={`skills-tab ${active === id ? "skills-tab--active" : ""}`}
              onClick={() => setActive(id)}
            >
              {categories[key]}
            </button>
          );
        })}
      </div>

      <div className="skills-grid" role="tabpanel">
        {(skills[active] || []).map((skill) => (
          <div key={skill.title} className="skill-card">
            <div className="skill-card__info">
              <span className="skill-card__name">{skill.title}</span>
              <span className="skill-card__level">{skill.level}/{MAX_LEVEL}</span>
            </div>
            <div className="skill-card__bar">
              <div
                className="skill-card__fill"
                style={{ width: `${(skill.level / MAX_LEVEL) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
