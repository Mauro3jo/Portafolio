import React, { useState, useEffect, useRef } from "react";
import skills from "./skillsData";
import "../styles/skillsMenu.css";

const sectionTitles = {
  es: {
    label: "// TECNOLOGÍAS",
    title: "Stack técnico",
    description: "Tecnologías respaldadas por experiencia en productos reales, organizadas según su presencia en mi trabajo diario.",
  },
  en: {
    label: "// TECHNOLOGIES",
    title: "Technical stack",
    description: "Technologies backed by real product experience, grouped by how frequently I use them in my work.",
  },
};

const categoryLabels = {
  es: { principal: "Principal", solid: "Experiencia sólida", additional: "Experiencia adicional" },
  en: { principal: "Core", solid: "Strong experience", additional: "Additional experience" },
};

const Skills = ({ language = "es" }) => {
  const [active, setActive] = useState("principal");
  const gridRef = useRef(null);
  const { label, title, description } = sectionTitles[language] || sectionTitles.es;
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
      <p className="skills-description reveal" data-delay="2">{description}</p>

      <div className="skills-tabs reveal" data-delay="3" role="tablist">
        {Object.keys(categories).map((key) => {
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              className={`skills-tab ${active === key ? "skills-tab--active" : ""}`}
              onClick={() => setActive(key)}
            >
              {categories[key]}
            </button>
          );
        })}
      </div>

      <div className="skills-grid" role="tabpanel" ref={gridRef}>
        {(skills[active] || []).map((skill, index) => (
          <div key={skill} className="skill-card reveal" data-delay={Math.min(index + 1, 5)}>
            <span className="skill-card__marker" aria-hidden="true"></span>
            <span className="skill-card__name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
