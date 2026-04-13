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
      title: "Zoco – Servicios de Pago",
      stack: ["ASP.NET Core 6", "Entity Framework", "React.js", "SQL Server", "AWS"],
      description: (
        <p>
          Plataforma empresarial de servicios de pago con más de <strong>75 módulos de negocio</strong> en{" "}
          <strong>ASP.NET Core 6</strong>, arquitectura por capas (BLL/DAL/Entity), Repository Pattern e inyección de
          dependencias. Incluye integración con <strong>AFIP</strong>, CRM con seguimiento y reglas de negocio,
          gestión de comercios, procesamiento de pagos, control de anticipos, generación de PDF, reportes Excel y
          módulo de compliance. Frontend con <strong>React.js</strong> para dashboard de agentes. Despliegue en{" "}
          <strong>AWS</strong> con IIS.
        </p>
      ),
    },
    2: {
      title: "Trinidad Salud",
      stack: ["Laravel 8", "React.js", "React Native", "MySQL", "AWS"],
      description: (
        <p>
          Plataforma integral de gestión de salud. Backend en <strong>Laravel 8</strong> con más de 20 controladores
          API para módulos de afiliados, consultas médicas, recetas, óptica, facturación y reintegros. Roles con{" "}
          <strong>Spatie</strong> y autenticación con Sanctum. App móvil en{" "}
          <strong>React Native (Expo)</strong> con pantallas de perfil, reintegros y autorizaciones, publicada en{" "}
          <strong>Google Play</strong> y <strong>App Store</strong>. Desplegado en AWS.
        </p>
      ),
    },
    3: {
      title: "DIRECTV LATAM – Field Service Management",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "SQL Server"],
      description: (
        <p>
          Sistema de gestión de campo para <strong>DIRECTV LATAM</strong> con cobertura en 6 países (AR, CL, CO, EC,
          PE, UY). Arquitectura de <strong>microservicios en .NET</strong> para el ciclo completo de órdenes de
          servicio: creación, cancelación, programación, despacho y reasignación de técnicos. Procesos batch con
          lógica por país, microservicio de autenticación <strong>JWT/SSO</strong> y frontend en{" "}
          <strong>React + TypeScript</strong> para soporte operativo.
        </p>
      ),
    },
  },
  en: {
    1: {
      title: "Zoco – Payment Services",
      stack: ["ASP.NET Core 6", "Entity Framework", "React.js", "SQL Server", "AWS"],
      description: (
        <p>
          Enterprise payment services platform with <strong>75+ business modules</strong> built on{" "}
          <strong>ASP.NET Core 6</strong> with layered architecture (BLL/DAL/Entity), Repository Pattern, and
          dependency injection. Includes <strong>AFIP</strong> tax authority integration, CRM with business rules and
          tracking, merchant management, payment processing, advance control, PDF generation, Excel reports, and a
          compliance module. <strong>React.js</strong> agent dashboard. Deployed on <strong>AWS</strong> with IIS.
        </p>
      ),
    },
    2: {
      title: "Trinidad Salud",
      stack: ["Laravel 8", "React.js", "React Native", "MySQL", "AWS"],
      description: (
        <p>
          Comprehensive health management platform. <strong>Laravel 8</strong> backend with 20+ API controllers
          covering member management, medical appointments, prescriptions, optical care, billing, and reimbursements.
          Roles with <strong>Spatie</strong> and Sanctum authentication. <strong>React Native (Expo)</strong> mobile
          app with profile, reimbursements, and authorizations screens, published on <strong>Google Play</strong> and{" "}
          <strong>App Store</strong>. Deployed on AWS.
        </p>
      ),
    },
    3: {
      title: "DIRECTV LATAM – Field Service Management",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "SQL Server"],
      description: (
        <p>
          Field service management system for <strong>DIRECTV LATAM</strong> covering 6 countries (AR, CL, CO, EC,
          PE, UY). <strong>.NET microservices</strong> architecture for full service order lifecycle: creation,
          cancellation, scheduling, dispatch, and technician reassignment. Country-specific batch processors, a{" "}
          <strong>JWT/SSO</strong> authentication microservice, and a <strong>React + TypeScript</strong> frontend for
          operational support.
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
