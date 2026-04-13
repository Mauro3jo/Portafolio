import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav.js";
import Hero from "./hero/Hero.js";
import Experience from "./experience/Experience.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import { getInitialLanguage, LANGUAGE_STORAGE_KEY } from "./i18n/language.js";

const App = () => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <>
      <Nav language={language} onLanguageChange={setLanguage} />
      <main>
        <section id="about">
          <Hero language={language} />
        </section>
        <section id="experience">
          <Experience language={language} />
        </section>
        <section id="skills">
          <Skills language={language} />
        </section>
        <section id="projects">
          <Projects language={language} />
        </section>
        <section id="contact">
          <Contact language={language} />
        </section>
      </main>
    </>
  );
};

export default App;
