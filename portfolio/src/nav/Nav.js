

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import astronautHelmet from "../assets/astronaut-helmet.png";
// import deadEye from "../assets/dead-eye.png";
// import stack from "../assets/stack.png";
// import enveloped from "../assets/envelope.png";
// import "../styles/nav.css";

// export default function Nav() {
//   const location = useLocation();

//   const getNavPositionClass = () => {
//     switch (location.pathname) {
//       case "/":
//         return "nav-about";
//       case "/skills":
//         return "nav-skills";
//       case "/projects":
//         return "nav-projects";
//       case "/contact":
//         return "nav-contact";
//       default:
//         return "";
//     }
//   };

//   const getPageTitle = () => {
//     switch (location.pathname) {
//       case "/":
//         return "Sobre mí";
//       case "/skills":
//         return "Tecnologías";
//       case "/projects":
//         return "Proyectos";
//       default:
//         return "";
//     }
//   };

//   const navPositionClass = getNavPositionClass();
//   const pageTitle = getPageTitle();

//   const isCurrentPage = (navClass) => navClass === navPositionClass;

//   const renderNavLink = (to, imgSrc, altText, navClass) => {
//     const isCurrent = isCurrentPage(navClass);
//     const linkClass = isCurrent ? "nav-link current" : "nav-link";

//     return (
//       <Link to={to} className={linkClass}>
//         <img src={imgSrc} alt={altText} />
//         {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
//       </Link>
//     );
//   };

//   return (
//     <nav className={`nav ${navPositionClass}`}>
//       {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
//       {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
//       {renderNavLink("/projects", stack, "stack icon", "nav-projects")}

//       {/* Botón de descarga del CV */}
//       <a href="/CV_mauro_trejo.pdf" download className="text-white">
//       <img src={enveloped} alt="stack icon" className="cv-download-icon text-white" />
//         Descargar CV
//       </a>
//     </nav>
//   );
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import enveloped from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Sobre mí";
      case "/skills":
        return "Tecnologías";
      case "/projects":
        return "Proyectos";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => navClass === navPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}

      {/* Botón de descarga del CV como un elemento más del navbar */}
      <a href="/CV_mauro_trejo.pdf" download className="nav-link" style={{textDecoration:"none"}}>
        <img src={enveloped} alt="Download CV icon" className="cv-download-icon" />
       <span style={{color:"white"}}>CV</span> 
      </a>
    </nav>
  );
}
