import { useState, useEffect } from "react";

const THEME_KEY = "portfolio_theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";

  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;

  // Respetar preferencia del sistema
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
};

export default useTheme;
