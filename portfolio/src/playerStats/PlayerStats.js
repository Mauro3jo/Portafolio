import React from "react";
import "../styles/playerStats.css";

const BIRTH_DATE = {
  year: 2000,
  month: 2,
  day: 3,
};

const getCurrentLevel = () => {
  const today = new Date();
  let level = today.getFullYear() - BIRTH_DATE.year;

  const birthdayThisYear = new Date(
    today.getFullYear(),
    BIRTH_DATE.month - 1,
    BIRTH_DATE.day
  );

  if (today < birthdayThisYear) {
    level -= 1;
  }

  return level;
};

const PlayerStats = () => {
  const currentLevel = getCurrentLevel();

  return (
    <div id="playerStats">
      <h1>MAURO TREJO LEVEL {currentLevel}</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2 className="player-role">FULLSTACK DEVELOPER</h2>
    </div>
  );
};

export default PlayerStats;
