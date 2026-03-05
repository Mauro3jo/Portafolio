import projectOne from "../assets/proyecto-1.png";
import projectThree from "../assets/proyecto-trinidad.jpg";
import projectFour from "../assets/proyecto-directv.jpg";

const projectAssets = {
  1: {
    image: projectOne,
    sitioWeb: "https://zocoweb.com.ar/",
  },
  2: {
    image: projectThree,
    sitioWeb: "https://trinidadsalud.com.ar/",
  },
  3: {
    image: projectFour,
    sitioWeb: "https://www.directv.com.ar/",
  },
};

const localizedProjects = {
  es: {
    1: {
      title: "Zoco Servicios de Pago",
      description: (
        <p>
          Plataforma empresarial de gran escala desarrollada con <strong>ASP.NET Core 6</strong>, <strong>Entity Framework</strong> y <strong>React.js</strong>. Implemente APIs RESTful seguras con
          JWT, arquitectura por capas, principios SOLID, AutoMapper, consultas LINQ avanzadas y optimizacion en SQL Server. Tambien trabaje en jobs programados, reportes Excel con ClosedXML y
          despliegue en AWS/Windows Server con IIS.
        </p>
      ),
    },
    2: {
      title: "Trinidad Salud",
      description: (
        <p>
          Proyecto freelance full stack para una plataforma de gestion de salud. Desarrolle APIs RESTful en <strong>Laravel 8</strong> para sistema administrativo y app movil, con modulos de
          afiliados, consultas, recetas, facturacion y reintegros. En frontend trabaje con <strong>React.js</strong> y tambien desarrolle una <strong>app de celular</strong> para afiliados,
          conectada a las APIs del sistema. Ademas implemente autenticacion con Sanctum, roles/permisos con Spatie y despliegue en AWS.
        </p>
      ),
    },
    3: {
      title: "DIRECTV LATAM (ASAP)",
      description: (
        <p>
          Rol backend en ASAP Consulting para cliente DIRECTV LATAM. Trabajo en mantenimiento evolutivo y correctivo de servicios internos en <strong>.NET</strong>, resolucion de incidentes via
          Jira, mejora de flujos de negocio, refactorizacion de componentes, validacion con QA y documentacion tecnica para asegurar estabilidad en produccion. En frontend tambien trabaje con <strong>React.js</strong>
          para pantallas internas y flujos de soporte operativo.
        </p>
      ),
    },
  },
  en: {
    1: {
      title: "Zoco Payment Services",
      description: (
        <p>
          Enterprise-scale platform built with <strong>ASP.NET Core 6</strong>, <strong>Entity Framework</strong>, and <strong>React.js</strong>. I implemented secure REST APIs with JWT,
          layered architecture, SOLID principles, AutoMapper, advanced LINQ queries, and SQL Server optimization. I also worked on scheduled jobs, Excel reporting with ClosedXML, and deployment to
          AWS/Windows Server with IIS.
        </p>
      ),
    },
    2: {
      title: "Trinidad Salud",
      description: (
        <p>
          Freelance full stack project for a healthcare management platform. I built REST APIs with <strong>Laravel 8</strong> for the admin system and mobile app, covering members, appointments,
          prescriptions, billing, and reimbursements. On the frontend I worked with <strong>React.js</strong> and also delivered a <strong>mobile app</strong> connected to the same APIs. I also
          implemented Sanctum authentication, Spatie roles/permissions, and AWS deployment.
        </p>
      ),
    },
    3: {
      title: "DIRECTV LATAM (ASAP)",
      description: (
        <p>
          Backend role at ASAP Consulting for DIRECTV LATAM. I worked on maintenance and incident resolution for internal production services in <strong>.NET</strong>, including Jira-based
          troubleshooting, business-flow improvements, refactoring, QA validation, and technical documentation. I also contributed to internal frontend support flows using <strong>React.js</strong>.
        </p>
      ),
    },
  },
};

const getProjectsData = (language = "es") => {
  const localizedData = localizedProjects[language] || localizedProjects.es;

  return Object.keys(localizedData).reduce((accumulator, projectId) => {
    accumulator[projectId] = {
      ...projectAssets[projectId],
      ...localizedData[projectId],
    };

    return accumulator;
  }, {});
};

export default getProjectsData;
