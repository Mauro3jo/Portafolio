import zocoImage from "../assets/proyecto-1.png";
import trinidadImage from "../assets/proyecto-trinidad.jpg";
import directvImage from "../assets/proyecto-directv.jpg";

const urls = {
  realPlaza: "https://play.google.com/store/apps/details?id=com.realplazago.app",
  zocoWeb: "https://zocopagos.com/",
  zocoApp: "https://play.google.com/store/apps/details?id=com.mauro3jo.zocoweb",
  zocoTickets: "https://play.google.com/store/apps/details?id=com.men7ar31.zocotickets",
  zocoScanner: "https://play.google.com/store/apps/details?id=com.zoco.rnscanner",
  miDirectv: "https://play.google.com/store/apps/details?id=ar.com.directvla.ecare",
  optimus: "https://play.google.com/store/apps/details?id=com.snd.optimusar",
  dgo: "https://play.google.com/store/apps/details?id=com.directv.dtvlatam",
  trinidad: "https://trinidadsalud.com.ar/",
};

const localizedProjects = {
  es: [
    {
      title: "Real Plaza",
      eyebrow: "PROYECTO ACTUAL · PARTICIPACIÓN EN EQUIPO",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "CI/CD"],
      description:
        "Desarrollo y evolución de una aplicación mobile con más de un millón de descargas. Desde PinApp participo en funcionalidades mobile, servicios backend, integraciones y decisiones técnicas para beneficios, tiendas, eventos y estacionamiento.",
      links: [{ label: "Google Play", url: urls.realPlaza }],
    },
    {
      title: "Zoco Pagos — Plataforma web",
      eyebrow: "DESARROLLO FULL STACK",
      image: zocoImage,
      stack: ["ASP.NET Core", "React", "SQL Server", "JWT", "AWS"],
      description:
        "Plataforma empresarial de servicios de pago con más de 75 módulos: CRM, comercios, transacciones, anticipos, compliance, reportes, monitoreo e integraciones. Trabajé en backend, frontend, base de datos, seguridad y despliegue.",
      links: [{ label: "Ver Zoco Pagos", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — App mobile",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      stack: ["React Native", "Expo", "REST APIs", "Notificaciones", "Biometría"],
      description:
        "Aplicación oficial para usuarios de Zoco. La desarrollé para consultar transacciones, dashboards, estadísticas e información operativa desde el celular, con autenticación, notificaciones y consumo de APIs del ecosistema.",
      links: [{ label: "Google Play", url: urls.zocoApp }],
    },
    {
      title: "Zoco Tickets",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      stack: ["React Native", "Expo", "REST APIs", "Pagos", "QR"],
      description:
        "Aplicación para descubrir eventos, comprar y administrar entradas. Incluye herramientas para organizadores, gestión de eventos y roles, control de asistencia, cupones, sponsors, ventas y finanzas.",
      links: [{ label: "Google Play", url: urls.zocoTickets }],
    },
    {
      title: "Zoco Scanner",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      stack: ["React Native", "Cámara", "QR / Barcode", "Validación en tiempo real"],
      description:
        "Aplicación de control de acceso para eventos. Permite escanear entradas digitales o físicas, validar su estado en tiempo real, detectar duplicados y registrar el ingreso de asistentes.",
      links: [{ label: "Google Play", url: urls.zocoScanner }],
    },
    {
      title: "Automatización financiera Zoco",
      eyebrow: "HERRAMIENTA INTERNA · DESARROLLO",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description:
        "Sistema modular que automatiza conciliación y consolidación de archivos de Visa, Mastercard, Maestro, QR y CRM. Ejecuta macros, valida impuestos y tasas, detecta inconsistencias y reemplaza tareas manuales de backoffice.",
    },
    {
      title: "Carga y gestión operativa Zoco",
      eyebrow: "HERRAMIENTAS INTERNAS · DESARROLLO",
      stack: ["C#", "WinForms", "Python", "SQL Server", "Excel"],
      description:
        "Conjunto de aplicaciones de escritorio y scripts para carga masiva, normalización y control de datos. Incluye validaciones, procesamiento de QR, generación de información operativa y automatización de tareas repetitivas.",
    },
    {
      title: "MiDIRECTV",
      eyebrow: "PARTICIPACIÓN EN EQUIPO",
      image: directvImage,
      stack: [".NET", "REST APIs", "Microservicios", "SQL Server", "Integraciones"],
      description:
        "Participé dentro del equipo de DIRECTV en servicios e integraciones vinculados con la experiencia de autogestión de clientes, soporte técnico y seguimiento de operaciones. El producto permite administrar cuentas, pagos, planes y visitas técnicas.",
      links: [{ label: "Google Play", url: urls.miDirectv }],
    },
    {
      title: "Optimus Plus",
      eyebrow: "PARTICIPACIÓN EN EQUIPO · MULTIPAÍS",
      stack: [".NET", "Oracle Field Service", "REST APIs", "SQL Server", "Procesos batch"],
      description:
        "Participé en servicios que soportan la gestión de órdenes de trabajo de técnicos de DIRECTV. Trabajé con creación, cancelación, agenda, despacho, reasignación y reglas específicas para operaciones de distintos países.",
      links: [{ label: "Optimus Argentina", url: urls.optimus }],
    },
    {
      title: "DGO",
      eyebrow: "PARTICIPACIÓN EN EQUIPO",
      stack: [".NET", "APIs REST", "Integraciones", "Soporte productivo"],
      description:
        "Participé en el ecosistema tecnológico de DGO dentro de DIRECTV LATAM, colaborando sobre servicios, integraciones y mantenimiento de funcionalidades productivas de la plataforma de streaming y televisión online.",
      links: [{ label: "Google Play", url: urls.dgo }],
    },
    {
      title: "DIRECTV — Field Service Management",
      eyebrow: "BACKEND Y HERRAMIENTAS INTERNAS · 6 PAÍSES",
      stack: [".NET", "React", "TypeScript", "Oracle", "Docker", "JWT/SSO"],
      description:
        "Microservicios y paneles para órdenes de servicio, disponibilidad, autenticación y configuración operativa en Argentina, Chile, Colombia, Ecuador, Perú y Uruguay. Incluye procesos batch y herramientas para reducir errores y tiempos de soporte.",
    },
    {
      title: "Trinidad Salud — Web y administración",
      eyebrow: "DESARROLLO END-TO-END",
      image: trinidadImage,
      stack: ["Laravel", "React", "TypeScript", "MySQL", "Sanctum", "AWS"],
      description:
        "Plataforma integral para afiliados y operación administrativa: altas, planes, cobertura, credenciales, consultas, recetas, facturación, reintegros y autorizaciones. Incluye APIs, roles, permisos, PDFs y panel administrativo.",
      links: [{ label: "Ver Trinidad Salud", url: urls.trinidad }],
    },
    {
      title: "Trinidad Salud — App mobile",
      eyebrow: "DESARROLLO · PRÓXIMAMENTE",
      stack: ["React Native", "Expo", "Laravel API", "Autorizaciones", "Reintegros"],
      description:
        "Aplicación mobile para afiliados, actualmente previa a publicación. Permite acceder al perfil y la credencial, consultar cobertura, solicitar autorizaciones y reintegros, adjuntar documentación y descargar comprobantes PDF.",
    },
    {
      title: "Fundación Trinidad Salud",
      eyebrow: "SITIO INSTITUCIONAL · DESARROLLO",
      stack: ["React", "Vite", "Responsive Design"],
      description:
        "Sitio institucional responsive desarrollado con React y Vite para comunicar la identidad, actividades e información de contacto de Fundación Trinidad Salud.",
    },
  ],
  en: [
    {
      title: "Real Plaza",
      eyebrow: "CURRENT PROJECT · TEAM CONTRIBUTION",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "CI/CD"],
      description:
        "Development and evolution of a mobile app with over one million downloads. At PinApp, I contribute to mobile features, backend services, integrations and technical decisions supporting benefits, stores, events and parking.",
      links: [{ label: "Google Play", url: urls.realPlaza }],
    },
    {
      title: "Zoco Payments — Web platform",
      eyebrow: "FULL STACK DEVELOPMENT",
      image: zocoImage,
      stack: ["ASP.NET Core", "React", "SQL Server", "JWT", "AWS"],
      description:
        "Enterprise payment-services platform with 75+ modules spanning CRM, merchants, transactions, advances, compliance, reporting, monitoring and integrations. I worked across backend, frontend, database, security and deployment.",
      links: [{ label: "Visit Zoco Payments", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — Mobile app",
      eyebrow: "DEVELOPMENT AND RELEASE",
      stack: ["React Native", "Expo", "REST APIs", "Notifications", "Biometrics"],
      description:
        "Official app for Zoco users. I developed it to provide mobile access to transactions, dashboards, statistics and operational information, with authentication, notifications and ecosystem API integration.",
      links: [{ label: "Google Play", url: urls.zocoApp }],
    },
    {
      title: "Zoco Tickets",
      eyebrow: "DEVELOPMENT AND RELEASE",
      stack: ["React Native", "Expo", "REST APIs", "Payments", "QR"],
      description:
        "App for discovering events and purchasing and managing tickets. It includes organizer tools for events and roles, attendance control, coupons, sponsors, sales and finances.",
      links: [{ label: "Google Play", url: urls.zocoTickets }],
    },
    {
      title: "Zoco Scanner",
      eyebrow: "DEVELOPMENT AND RELEASE",
      stack: ["React Native", "Camera", "QR / Barcode", "Real-time validation"],
      description:
        "Event access-control app for scanning digital or physical tickets, validating status in real time, detecting duplicates and recording attendee entry.",
      links: [{ label: "Google Play", url: urls.zocoScanner }],
    },
    {
      title: "Zoco financial automation",
      eyebrow: "INTERNAL TOOL · DEVELOPMENT",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description:
        "Modular system automating reconciliation and consolidation for Visa, Mastercard, Maestro, QR and CRM files. It runs macros, validates taxes and fees, detects anomalies and replaces manual backoffice work.",
    },
    {
      title: "Zoco operational data tools",
      eyebrow: "INTERNAL TOOLS · DEVELOPMENT",
      stack: ["C#", "WinForms", "Python", "SQL Server", "Excel"],
      description:
        "Desktop applications and scripts for bulk uploads, normalization and data control, including validations, QR processing, operational-data generation and repetitive-task automation.",
    },
    {
      title: "MiDIRECTV",
      eyebrow: "TEAM CONTRIBUTION",
      image: directvImage,
      stack: [".NET", "REST APIs", "Microservices", "SQL Server", "Integrations"],
      description:
        "As part of the DIRECTV team, I contributed to services and integrations related to customer self-service, technical support and operation tracking. The product supports account, payment, plan and technical-visit management.",
      links: [{ label: "Google Play", url: urls.miDirectv }],
    },
    {
      title: "Optimus Plus",
      eyebrow: "TEAM CONTRIBUTION · MULTI-COUNTRY",
      stack: [".NET", "Oracle Field Service", "REST APIs", "SQL Server", "Batch processing"],
      description:
        "I contributed to services supporting DIRECTV technician work-order management, including creation, cancellation, scheduling, dispatch, reassignment and country-specific operational rules.",
      links: [{ label: "Optimus Argentina", url: urls.optimus }],
    },
    {
      title: "DGO",
      eyebrow: "TEAM CONTRIBUTION",
      stack: [".NET", "REST APIs", "Integrations", "Production support"],
      description:
        "I contributed to the DGO technology ecosystem within DIRECTV LATAM, collaborating on services, integrations and maintenance of production functionality for its streaming and online-TV platform.",
      links: [{ label: "Google Play", url: urls.dgo }],
    },
    {
      title: "DIRECTV — Field Service Management",
      eyebrow: "BACKEND AND INTERNAL TOOLS · 6 COUNTRIES",
      stack: [".NET", "React", "TypeScript", "Oracle", "Docker", "JWT/SSO"],
      description:
        "Microservices and panels for service orders, availability, authentication and operational configuration across Argentina, Chile, Colombia, Ecuador, Peru and Uruguay, including batch processes and support automation.",
    },
    {
      title: "Trinidad Salud — Web and administration",
      eyebrow: "END-TO-END DEVELOPMENT",
      image: trinidadImage,
      stack: ["Laravel", "React", "TypeScript", "MySQL", "Sanctum", "AWS"],
      description:
        "Integrated member and administration platform covering enrollment, plans, coverage, digital cards, appointments, prescriptions, billing, reimbursements and authorizations, with APIs, roles, permissions and PDFs.",
      links: [{ label: "Visit Trinidad Salud", url: urls.trinidad }],
    },
    {
      title: "Trinidad Salud — Mobile app",
      eyebrow: "DEVELOPMENT · COMING SOON",
      stack: ["React Native", "Expo", "Laravel API", "Authorizations", "Reimbursements"],
      description:
        "Pre-release mobile app for members to access their profile and digital card, check coverage, request authorizations and reimbursements, attach documents and download PDF receipts.",
    },
    {
      title: "Fundación Trinidad Salud",
      eyebrow: "INSTITUTIONAL WEBSITE · DEVELOPMENT",
      stack: ["React", "Vite", "Responsive Design"],
      description:
        "Responsive institutional website built with React and Vite to communicate Fundación Trinidad Salud's identity, activities and contact information.",
    },
  ],
};

const getProjectsData = (language = "es") => localizedProjects[language] || localizedProjects.es;

export default getProjectsData;
