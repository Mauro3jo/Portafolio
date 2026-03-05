const contactLinkStyles = {
  color: "white",
  width: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
};

const cardContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const cardTextStyles = {
  marginLeft: "20px",
  fontSize: "14px",
  marginTop: "1rem",
};

const getSubheadingsData = (language = "es") => {
  const isSpanish = language === "es";

  return {
    1: [
      {
        title: isSpanish ? "Desarrollador de software" : "Software developer",
        content: (
          <p>
            {isSpanish
              ? "Soy desarrollador full stack con experiencia en diseno e implementacion de aplicaciones web escalables. Trabajo con ASP.NET Core 6, .NET Framework, Laravel y Node.js en backend, y con React.js en frontend para crear interfaces dinamicas y responsivas. Manejo SQL Server y MySQL, optimizando bases de datos y procesos de despliegue."
              : "I am a full stack developer with experience designing and building scalable web applications. I work with ASP.NET Core 6, .NET Framework, Laravel, and Node.js on the backend, and React.js on the frontend to deliver dynamic and responsive interfaces. I also work with SQL Server and MySQL, focusing on performance and deployment workflows."}
          </p>
        ),
      },
    ],
    2: [
      {
        title: "LinkedIn",
        content: (
          <a
            style={contactLinkStyles}
            href="https://www.linkedin.com/in/mauro-trejo-98968b1ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={cardContainerStyles}>
              <div>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/linkedin.png"
                  alt="LinkedIn"
                />
              </div>
              <div style={cardTextStyles}>
                {isSpanish ? "Visita mi LinkedIn" : "Explore my LinkedIn"}
              </div>
            </div>
          </a>
        ),
      },
      {
        title: "GitHub",
        content: (
          <a
            style={contactLinkStyles}
            href="https://github.com/Mauro3jo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={cardContainerStyles}>
              <div>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/stickers/50/github.png"
                  alt="GitHub"
                />
              </div>
              <div style={cardTextStyles}>
                {isSpanish ? "Visita mi GitHub" : "Explore my GitHub"}
              </div>
            </div>
          </a>
        ),
      },
    ],
    3: [
      {
        title: isSpanish
          ? "2018 - Tecnico Universitario en Programacion"
          : "2018 - University Programming Technician",
        content: (
          <p>
            {isSpanish
              ? "Curse la Tecnicatura Universitaria en Programacion entre 2018 y 2021. Durante ese periodo trabaje con ASP.NET Core, React.js, Windows Forms, SQL Server y PHP, consolidando una base solida para el desarrollo de aplicaciones web y de escritorio."
              : "I completed the University Programming Technician program between 2018 and 2021. During that period, I worked with ASP.NET Core, React.js, Windows Forms, SQL Server, and PHP, building a strong foundation for web and desktop development."}
          </p>
        ),
      },
    ],
  };
};

export default getSubheadingsData;
