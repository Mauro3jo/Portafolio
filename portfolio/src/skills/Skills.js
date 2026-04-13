import React, { useState, useEffect, useRef } from "react";
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
  const gridRef = useRef(null);
  const { label, title } = sectionTitles[language] || sectionTitles.es;
  const categories = categoryLabels[language] || categoryLabels.es;

  // Re-animate cards when tab changes
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".skill-card");
    cards.forEach((card) => card.classList.remove("reveal--visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [active]);

  return (
    <div className="container">
      <p className="section-label reveal">{label}</p>
      <h2 className="section-title reveal" data-delay="1">{title}</h2>

      <div className="skills-tabs reveal" data-delay="2" role="tablist">
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

      <div className="skills-grid" role="tabpanel" ref={gridRef}>
        {(skills[active] || []).map((skill, index) => (
          <div key={skill.title} className="skill-card reveal" data-delay={Math.min(index + 1, 5)}>
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
