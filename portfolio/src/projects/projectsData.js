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
      stack: ["ASP.NET Core 6", "React.js", "React Native", "Python", "WinForms", "SQL Server", "AWS"],
      description: (
        <p>
          Ecosistema completo de servicios de pago: plataforma web en <strong>ASP.NET Core 6</strong> con más de 75
          módulos de negocio (CRM, compliance, gestión de comercios, procesamiento de pagos, integración con{" "}
          <strong>AFIP</strong>, reportes y monitoreo); dashboard en <strong>React.js</strong>; app móvil en{" "}
          <strong>React Native</strong> con notificaciones en background; herramienta de escritorio en{" "}
          <strong>WinForms</strong> para carga y gestión de datos; y sistema de automatización de backoffice
          financiero en <strong>Python</strong> y <strong>.NET 8</strong> para procesamiento de archivos Excel con
          lógica por tarjeta (Visa, Mastercard, Maestro) e integración de macros.
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
          Sistema de gestión de campo para <strong>DIRECTV LATAM</strong> con cobertura en 6 países. Arquitectura
          de <strong>microservicios en .NET</strong> para el ciclo completo de órdenes de servicio: creación,
          cancelación, programación, despacho y reasignación de técnicos. Procesos batch con lógica por país,
          microservicio de autenticación <strong>JWT/SSO</strong> y frontend en{" "}
          <strong>React + TypeScript</strong> para soporte operativo.
        </p>
      ),
    },
  },
  en: {
    1: {
      title: "Zoco – Payment Services",
      stack: ["ASP.NET Core 6", "React.js", "React Native", "Python", "WinForms", "SQL Server", "AWS"],
      description: (
        <p>
          Full payment services ecosystem: web platform on <strong>ASP.NET Core 6</strong> with 75+ business modules
          (CRM, compliance, merchant management, payment processing, <strong>AFIP</strong> integration, reports, and
          monitoring); <strong>React.js</strong> dashboard; <strong>React Native</strong> mobile app with background
          notifications; <strong>WinForms</strong> desktop tool for data upload and management; and a financial
          backoffice automation system in <strong>Python</strong> and <strong>.NET 8</strong> for Excel processing
          with per-card logic (Visa, Mastercard, Maestro) and macro integration.
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
          Field service management system for <strong>DIRECTV LATAM</strong> covering 6 countries. <strong>.NET
          microservices</strong> architecture for the full service order lifecycle: creation, cancellation,
          scheduling, dispatch, and technician reassignment. Country-specific batch processors, a{" "}
          <strong>JWT/SSO</strong> authentication microservice, and a <strong>React + TypeScript</strong> frontend
          for operational support.
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
