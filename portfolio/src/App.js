import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav.js";
import Hero from "./hero/Hero.js";
import Experience from "./experience/Experience.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import { getInitialLanguage, LANGUAGE_STORAGE_KEY } from "./i18n/language.js";
import useScrollReveal from "./hooks/useScrollReveal.js";
import useTheme from "./hooks/useTheme.js";

const App = () => {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Nav language={language} onLanguageChange={setLanguage} theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <section id="about">
          <Hero language={language} />
        </section>

        <hr className="section-divider" />

        <section id="experience">
          <Experience language={language} />
        </section>

        <hr className="section-divider" />

        <section id="skills">
          <Skills language={language} />
        </section>

        <hr className="section-divider" />

        <section id="projects">
          <Projects language={language} />
        </section>

        <hr className="section-divider" />

        <section id="contact">
          <Contact language={language} />
        </section>
      </main>

      <button
        type="button"
        className={`scroll-top ${showScrollTop ? "scroll-top--visible" : ""}`}
        onClick={scrollToTop}
        aria-label={language === "en" ? "Back to top" : "Volver arriba"}
      >
        ↑
      </button>
    </>
  );
};

export default App;
