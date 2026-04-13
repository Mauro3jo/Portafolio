const experienceData = {
  es: [
    {
      id: 1,
      role: "Backend Developer",
      company: "ASAP Consulting S.A.",
      client: "DIRECTV LATAM",
      period: "2025 — Actualidad",
      current: true,
      isEducation: false,
      description:
        "Desarrollo y mantenimiento de microservicios en .NET para el sistema de gestión de campo de DIRECTV LATAM, con cobertura en 6 países: Argentina, Chile, Colombia, Ecuador, Perú y Uruguay. Trabajo en operaciones de ciclo completo de órdenes de servicio: creación, cancelación, programación, despacho y reasignación de técnicos. Implementación de procesos batch con lógica por país, un microservicio de autenticación con JWT/SSO, y frontend con React + TypeScript para soporte operativo. Coordinación con QA en validaciones SIT/UAT.",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "SQL Server", "JWT", "Jira"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Zoco – Servicios de Pago",
      client: null,
      period: "2022 — 2025",
      current: false,
      isEducation: false,
      description:
        "Plataforma empresarial de servicios de pago con más de 75 módulos de negocio en ASP.NET Core 6, arquitectura por capas (BLL/DAL/Entity), Repository Pattern e inyección de dependencias. Integración con AFIP, CRM con seguimiento y reglas de negocio, gestión de comercios, procesamiento de pagos, control de anticipos, generación de PDF, reportes Excel mensuales, y sistema de compliance. Frontend con React.js para dashboard de agentes. Despliegue en AWS con IIS.",
      stack: ["ASP.NET Core 6", "Entity Framework", "React.js", "SQL Server", "JWT", "BCrypt", "AFIP", "ClosedXML", "AWS"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Trinidad Salud",
      client: null,
      period: "2021 — Actualidad",
      current: false,
      isEducation: false,
      description:
        "Plataforma integral de gestión de salud desarrollada de forma freelance. Backend en Laravel 8 con más de 20 controladores API para módulos de afiliados (tipos A y T), consultas médicas, recetas, óptica, facturación y reintegros. Roles y permisos con Spatie, autenticación con Sanctum. Aplicación móvil en React Native (Expo) con pantallas de perfil, reintegros y autorizaciones, publicada en Google Play y App Store. Despliegue en AWS.",
      stack: ["Laravel 8", "React.js", "React Native", "MySQL", "Sanctum", "Spatie", "AWS"],
    },
    {
      id: 4,
      role: "Técnico Universitario en Programación",
      company: "Universidad Tecnológica Nacional (UTN)",
      client: null,
      period: "2018 — 2021",
      current: false,
      isEducation: true,
      description:
        "Carrera universitaria con enfoque en desarrollo de software web y de escritorio. Trabajo con ASP.NET Core, React.js, Windows Forms, SQL Server y PHP.",
      stack: ["ASP.NET Core", "React.js", "SQL Server", "PHP", "Windows Forms"],
    },
  ],
  en: [
    {
      id: 1,
      role: "Backend Developer",
      company: "ASAP Consulting S.A.",
      client: "DIRECTV LATAM",
      period: "2025 — Present",
      current: true,
      isEducation: false,
      description:
        "Development and maintenance of .NET microservices for DIRECTV LATAM's field service management system, covering 6 countries: Argentina, Chile, Colombia, Ecuador, Peru, and Uruguay. Full service order lifecycle: creation, cancellation, scheduling, dispatch, and technician reassignment. Built country-specific batch processors, a JWT/SSO authentication microservice, and a React + TypeScript frontend for operational support. Coordinated with QA on SIT/UAT validations.",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "SQL Server", "JWT", "Jira"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Zoco – Payment Services",
      client: null,
      period: "2022 — 2025",
      current: false,
      isEducation: false,
      description:
        "Enterprise payment services platform with 75+ business modules built on ASP.NET Core 6 with layered architecture (BLL/DAL/Entity), Repository Pattern, and dependency injection. AFIP tax authority integration, CRM with tracking and business rules, merchant management, payment processing, advance control, PDF generation, monthly Excel reports, and a compliance module. React.js frontend dashboard for agents. Deployed on AWS with IIS.",
      stack: ["ASP.NET Core 6", "Entity Framework", "React.js", "SQL Server", "JWT", "BCrypt", "AFIP", "ClosedXML", "AWS"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Trinidad Salud",
      client: null,
      period: "2021 — Present",
      current: false,
      isEducation: false,
      description:
        "Comprehensive health management platform developed as a freelance project. Laravel 8 backend with 20+ API controllers covering member management (types A and T), medical appointments, prescriptions, optical care, billing, and reimbursements. Roles and permissions with Spatie, Sanctum authentication. React Native (Expo) mobile app with profile, reimbursements, and authorizations screens, published on Google Play and the App Store. Deployed on AWS.",
      stack: ["Laravel 8", "React.js", "React Native", "MySQL", "Sanctum", "Spatie", "AWS"],
    },
    {
      id: 4,
      role: "University Programming Technician",
      company: "Universidad Tecnológica Nacional (UTN)",
      client: null,
      period: "2018 — 2021",
      current: false,
      isEducation: true,
      description:
        "University program focused on web and desktop software development. Worked with ASP.NET Core, React.js, Windows Forms, SQL Server, and PHP.",
      stack: ["ASP.NET Core", "React.js", "SQL Server", "PHP", "Windows Forms"],
    },
  ],
};

export default experienceData;
