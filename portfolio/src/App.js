import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import SoundtrackToggle from "./soundtrack/SoundtrackToggle.js";
import { getInitialLanguage, LANGUAGE_STORAGE_KEY } from "./i18n/language.js";

const App = () => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return (
    <Router>
      <Nav language={language} onLanguageChange={setLanguage} />
      <Background />
      <Routes>
        <Route path="/" element={<About language={language} />} />
        <Route path="/skills" element={<Skills language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
      </Routes>
      <PlayerStats language={language} />
      <SoundtrackToggle language={language} />
    </Router>
  );
};

export default App;
