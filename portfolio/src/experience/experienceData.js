const experienceData = {
  es: [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "PinApp",
      client: "Real Plaza",
      period: "Jul 2026 — Actualidad",
      current: true,
      isEducation: false,
      description:
        "Desarrollo y evolución de la aplicación mobile de Real Plaza y sus servicios backend. Trabajo con React Native, .NET y C#, integrando APIs REST, SQL Server, Firebase y servicios en Microsoft Azure. Participo en decisiones técnicas, arquitectura, procesos de CI/CD y mejora continua de un producto utilizado a gran escala.",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "Azure", "REST APIs", "CI/CD"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "ASAP Consulting S.A.",
      client: "DIRECTV LATAM",
      period: "Ago 2025 — Jul 2026",
      current: false,
      isEducation: false,
      description:
        "Desarrollo full stack de aplicaciones web, mobile y backend para la operación regional de DIRECTV LATAM. Trabajé en microservicios .NET, APIs REST e integraciones para órdenes de servicio, asignación de técnicos, disponibilidad y configuración operativa en seis países; interfaces web con React + TypeScript; y funcionalidades mobile dentro de productos de DIRECTV. También desarrollé procesos batch multipaís y herramientas internas para automatizar validaciones, reducir errores y agilizar soporte. Participé en MiDIRECTV, Optimus y DGO dentro de equipos multidisciplinarios.",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "React Native", "SQL Server", "Oracle", "JWT/SSO", "Docker", "Jira"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Zoco — Servicios de Pago",
      client: null,
      period: "Dic 2021 — Jul 2025",
      current: false,
      isEducation: false,
      description:
        "Desarrollé soluciones web, mobile y desktop para pagos, operaciones y eventos. Construí y publiqué Zoco, Zoco Tickets y Zoco Scanner. En la plataforma ASP.NET Core + React implementé CRM y seguimiento comercial, integración de leads con Meta, un asistente contextual con IA, altas y bajas de comercios, liquidaciones e impuestos, órdenes de pago, compliance, monitoreo, reportes y paneles por rol. Además creé herramientas WinForms y .NET 8 para carga masiva y automatización financiera de Excel con reglas por tarjeta, QR, macros y controles de calidad.",
      stack: ["ASP.NET Core", "React", "React Native", ".NET 8", "WinForms", "SQL Server", "Excel Interop", "AWS"],
    },
    {
      id: 4,
      role: "Full Stack Developer",
      company: "Trinidad Salud",
      client: null,
      period: "Mar 2021 — Actualidad",
      current: false,
      isEducation: false,
      description:
        "Desarrollo de un ecosistema de salud compuesto por backend y APIs en Laravel, panel administrativo en React, aplicación móvil en React Native y sitios institucionales. Incluye gestión de afiliados, planes, consultas, recetas, facturación, credenciales, reintegros y autorizaciones; autenticación, roles y permisos; generación y descarga de PDF; y despliegue en AWS. La aplicación móvil se encuentra en desarrollo previo a su publicación.",
      stack: ["Laravel", "React", "TypeScript", "React Native", "MySQL", "Sanctum", "Tailwind", "AWS"],
    },
    {
      id: 5,
      role: "Full Stack Developer independiente",
      company: "Profesional independiente",
      client: null,
      period: "Feb 2020 — Actualidad",
      current: false,
      isEducation: false,
      description:
        "Diseño y desarrollo de soluciones web y mobile de punta a punta para empresas y profesionales: relevamiento, arquitectura, APIs, interfaces, bases de datos, despliegue y mantenimiento. Digitalización de procesos manuales y construcción de sistemas de gestión, landing pages y plataformas con React, Laravel, .NET y React Native.",
      stack: ["React", "React Native", ".NET", "Laravel", "SQL Server", "MySQL", "AWS"],
    },
  ],
  en: [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "PinApp",
      client: "Real Plaza",
      period: "Jul 2026 — Present",
      current: true,
      isEducation: false,
      description:
        "Development and evolution of the Real Plaza mobile app and its backend services. I work with React Native, .NET and C#, integrating REST APIs, SQL Server, Firebase and Microsoft Azure services. I contribute to technical decisions, architecture, CI/CD processes and the continuous improvement of a large-scale product.",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "Azure", "REST APIs", "CI/CD"],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "ASAP Consulting S.A.",
      client: "DIRECTV LATAM",
      period: "Aug 2025 — Jul 2026",
      current: false,
      isEducation: false,
      description:
        "Full stack development of web, mobile and backend applications supporting DIRECTV LATAM's regional operations. I worked on .NET microservices, REST APIs and integrations for service orders, technician assignment, availability and operational configuration across six countries; web interfaces with React + TypeScript; and mobile functionality within DIRECTV products. I also built multi-country batch processes and internal tools that automated validations, reduced errors and streamlined support. I contributed to MiDIRECTV, Optimus and DGO as part of multidisciplinary teams.",
      stack: [".NET", "ASP.NET Core", "React", "TypeScript", "React Native", "SQL Server", "Oracle", "JWT/SSO", "Docker", "Jira"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Zoco — Payment Services",
      client: null,
      period: "Dec 2021 — Jul 2025",
      current: false,
      isEducation: false,
      description:
        "Built web, mobile and desktop solutions for payments, operations and events, including the development and release of Zoco, Zoco Tickets and Zoco Scanner. On the ASP.NET Core + React platform I implemented CRM and sales tracking, Meta lead integration, a contextual AI assistant, merchant onboarding and offboarding, settlements and taxes, payment orders, compliance, monitoring, reporting and role-based panels. I also created WinForms and .NET 8 tools for bulk uploads and financial Excel automation with card-specific rules, QR workflows, macros and quality controls.",
      stack: ["ASP.NET Core", "React", "React Native", ".NET 8", "WinForms", "SQL Server", "Excel Interop", "AWS"],
    },
    {
      id: 4,
      role: "Full Stack Developer",
      company: "Trinidad Salud",
      client: null,
      period: "Mar 2021 — Present",
      current: false,
      isEducation: false,
      description:
        "Development of a healthcare ecosystem consisting of a Laravel backend and APIs, a React admin panel, a React Native mobile app and institutional websites. It covers member and plan management, appointments, prescriptions, billing, digital cards, reimbursements and authorizations; authentication, roles and permissions; PDF generation and downloads; and AWS deployment. The mobile app is currently in pre-release development.",
      stack: ["Laravel", "React", "TypeScript", "React Native", "MySQL", "Sanctum", "Tailwind", "AWS"],
    },
    {
      id: 5,
      role: "Independent Full Stack Developer",
      company: "Freelance",
      client: null,
      period: "Feb 2020 — Present",
      current: false,
      isEducation: false,
      description:
        "End-to-end design and development of web and mobile solutions for companies and professionals: discovery, architecture, APIs, interfaces, databases, deployment and maintenance. I digitize manual processes and build management systems, landing pages and platforms with React, Laravel, .NET and React Native.",
      stack: ["React", "React Native", ".NET", "Laravel", "SQL Server", "MySQL", "AWS"],
    },
  ],
};

export default experienceData;
