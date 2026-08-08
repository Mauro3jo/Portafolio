import projectOne from "../assets/proyecto-1.png";
import projectThree from "../assets/proyecto-trinidad.jpg";
import projectFour from "../assets/proyecto-directv.jpg";

const links = {
  realPlaza: "https://play.google.com/store/apps/details?id=com.realplazago.app",
  zoco: "https://play.google.com/store/apps/details?id=com.mauro3jo.zocoweb",
  tickets: "https://play.google.com/store/apps/details?id=com.men7ar31.zocotickets",
  scanner: "https://play.google.com/store/apps/details?id=com.zoco.rnscanner",
  miDirectv: "https://play.google.com/store/apps/details?id=ar.com.directvla.ecare",
  optimus: "https://play.google.com/store/apps/details?id=com.snd.optimusar",
  trinidad: "https://trinidadsalud.com.ar/",
};

const localizedProjects = {
  es: [
    {
      title: "Real Plaza — App mobile",
      eyebrow: "PROYECTO ACTUAL · PARTICIPACIÓN EN EQUIPO",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "CI/CD"],
      description: (
        <p>
          Desarrollo y evolución de una aplicación de shopping con más de un millón de descargas. Participo desde
          PinApp en funcionalidades mobile, servicios backend, integraciones y decisiones técnicas para experiencias
          como beneficios, tiendas, eventos y estacionamiento.
        </p>
      ),
      links: [{ label: "Ver en Google Play", url: links.realPlaza }],
    },
    {
      title: "Zoco — Ecosistema mobile y pagos",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      image: projectOne,
      stack: ["React Native", "ASP.NET Core", "React", "SQL Server", "AWS"],
      description: (
        <p>
          Desarrollé y publiqué tres apps productivas: <strong>Zoco</strong>, para transacciones, dashboards y
          estadísticas; <strong>Zoco Tickets</strong>, para venta y gestión integral de eventos; y <strong>Zoco
          Scanner</strong>, para validar entradas y controlar accesos en tiempo real. También trabajé en sus APIs,
          seguridad e integración con la plataforma web.
        </p>
      ),
      links: [
        { label: "Zoco", url: links.zoco },
        { label: "Zoco Tickets", url: links.tickets },
        { label: "Zoco Scanner", url: links.scanner },
      ],
    },
    {
      title: "DIRECTV LATAM — Field Service",
      eyebrow: "PARTICIPACIÓN EN EQUIPO · 6 PAÍSES",
      image: projectFour,
      stack: [".NET", "Microservicios", "React", "TypeScript", "Oracle", "Docker"],
      description: (
        <p>
          Participé en aplicaciones y servicios que soportan operaciones de campo en Argentina, Chile, Colombia,
          Ecuador, Perú y Uruguay: órdenes de trabajo, agenda, despacho, asignación de técnicos, autenticación e
          integraciones con Oracle Field Service. Mi trabajo impactó productos públicos como MiDIRECTV y Optimus,
          además de herramientas operativas internas.
        </p>
      ),
      links: [
        { label: "MiDIRECTV", url: links.miDirectv },
        { label: "Optimus Argentina", url: links.optimus },
      ],
    },
    {
      title: "Automatización de backoffice financiero",
      eyebrow: "HERRAMIENTA INTERNA · DESARROLLO",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description: (
        <p>
          Sistema modular para reemplazar tareas manuales sobre Excel. Automatiza limpieza, conciliación y
          consolidación de archivos de Visa, Mastercard, Maestro, QR y CRM; ejecuta macros, valida impuestos y tasas,
          detecta inconsistencias y genera controles diarios. Incluye separación entre UI, lógica y datos, además de
          pruebas unitarias y de integración.
        </p>
      ),
    },
    {
      title: "Trinidad Salud — Plataforma integral",
      eyebrow: "DESARROLLO END-TO-END",
      image: projectThree,
      stack: ["Laravel", "React", "TypeScript", "React Native", "MySQL", "AWS"],
      description: (
        <p>
          Ecosistema compuesto por API y backend Laravel, panel administrativo React, aplicación mobile para
          afiliados y sitios institucionales. Centraliza altas, planes, cobertura, credenciales, consultas, recetas,
          facturación, reintegros y autorizaciones con roles, permisos y generación de documentación PDF.
        </p>
      ),
      links: [{ label: "Ver sitio", url: links.trinidad }],
    },
    {
      title: "Herramientas operativas y de calidad",
      eyebrow: "AUTOMATIZACIÓN INTERNA",
      stack: [".NET", "C#", "Oracle", "REST APIs", "React", "TypeScript"],
      description: (
        <p>
          Construí herramientas para validar remediaciones sin ejecutar cambios, procesar lotes multipaís y
          administrar configuraciones de operación mediante APIs y paneles web. Estas soluciones convierten tareas
          sensibles y repetitivas en flujos auditables, reduciendo errores y tiempos de soporte.
        </p>
      ),
    },
  ],
  en: [
    {
      title: "Real Plaza — Mobile app",
      eyebrow: "CURRENT PROJECT · TEAM CONTRIBUTION",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "CI/CD"],
      description: (
        <p>
          Development and evolution of a shopping app with over one million downloads. At PinApp, I contribute to
          mobile features, backend services, integrations and technical decisions supporting benefits, stores,
          events and parking experiences.
        </p>
      ),
      links: [{ label: "View on Google Play", url: links.realPlaza }],
    },
    {
      title: "Zoco — Mobile and payments ecosystem",
      eyebrow: "DEVELOPMENT AND RELEASE",
      image: projectOne,
      stack: ["React Native", "ASP.NET Core", "React", "SQL Server", "AWS"],
      description: (
        <p>
          I developed and released three production apps: <strong>Zoco</strong> for transactions, dashboards and
          statistics; <strong>Zoco Tickets</strong> for end-to-end event sales and management; and <strong>Zoco
          Scanner</strong> for real-time ticket validation and access control. I also worked on their APIs, security
          and web-platform integration.
        </p>
      ),
      links: [
        { label: "Zoco", url: links.zoco },
        { label: "Zoco Tickets", url: links.tickets },
        { label: "Zoco Scanner", url: links.scanner },
      ],
    },
    {
      title: "DIRECTV LATAM — Field Service",
      eyebrow: "TEAM CONTRIBUTION · 6 COUNTRIES",
      image: projectFour,
      stack: [".NET", "Microservices", "React", "TypeScript", "Oracle", "Docker"],
      description: (
        <p>
          I contributed to applications and services supporting field operations in Argentina, Chile, Colombia,
          Ecuador, Peru and Uruguay: work orders, scheduling, dispatch, technician assignment, authentication and
          Oracle Field Service integrations. My work supported public products such as MiDIRECTV and Optimus, along
          with internal operational tools.
        </p>
      ),
      links: [
        { label: "MiDIRECTV", url: links.miDirectv },
        { label: "Optimus Argentina", url: links.optimus },
      ],
    },
    {
      title: "Financial backoffice automation",
      eyebrow: "INTERNAL TOOL · DEVELOPMENT",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description: (
        <p>
          Modular system replacing manual Excel workflows. It automates cleanup, reconciliation and consolidation
          for Visa, Mastercard, Maestro, QR and CRM files; runs macros, validates taxes and fees, detects anomalies
          and produces daily controls. It separates UI, business logic and data, with unit and integration tests.
        </p>
      ),
    },
    {
      title: "Trinidad Salud — Healthcare platform",
      eyebrow: "END-TO-END DEVELOPMENT",
      image: projectThree,
      stack: ["Laravel", "React", "TypeScript", "React Native", "MySQL", "AWS"],
      description: (
        <p>
          Ecosystem comprising a Laravel API and backend, React admin panel, member-facing mobile app and
          institutional websites. It centralizes enrollment, plans, coverage, digital cards, appointments,
          prescriptions, billing, reimbursements and authorizations with roles, permissions and PDF documents.
        </p>
      ),
      links: [{ label: "Visit site", url: links.trinidad }],
    },
    {
      title: "Operational and quality tools",
      eyebrow: "INTERNAL AUTOMATION",
      stack: [".NET", "C#", "Oracle", "REST APIs", "React", "TypeScript"],
      description: (
        <p>
          I built tools to validate remediation scripts without executing changes, process multi-country batches and
          manage operational configuration through APIs and web panels. These solutions turn sensitive, repetitive
          tasks into auditable workflows that reduce errors and support time.
        </p>
      ),
    },
  ],
};

const getProjectsData = (language = "es") => localizedProjects[language] || localizedProjects.es;

export default getProjectsData;
