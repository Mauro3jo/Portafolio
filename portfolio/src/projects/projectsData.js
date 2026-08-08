import realPlazaLogo from "../assets/logos/real-plaza.png";
import zocoLogo from "../assets/logos/zoco.jpg";
import zocoTicketsLogo from "../assets/logos/zoco-tickets.jpg";
import zocoScannerLogo from "../assets/logos/zoco-scanner.jpg";
import miDirectvLogo from "../assets/logos/midirectv.png";
import optimusLogo from "../assets/logos/optimus.png";
import dgoLogo from "../assets/logos/dgo.png";
import trinidadLogo from "../assets/logos/trinidad-salud.png";

const urls = {
  realPlaza: "https://play.google.com/store/apps/details?id=com.realplazago.app",
  realPlazaWeb: "https://www.realplaza.com/",
  zocoWeb: "https://zocopagos.com/",
  zocoApp: "https://play.google.com/store/apps/details?id=com.mauro3jo.zocoweb",
  zocoTickets: "https://play.google.com/store/apps/details?id=com.men7ar31.zocotickets",
  zocoTicketsWeb: "https://www.zocotickets.com/event",
  zocoScanner: "https://play.google.com/store/apps/details?id=com.zoco.rnscanner",
  miDirectv: "https://play.google.com/store/apps/details?id=ar.com.directvla.ecare",
  optimus: "https://play.google.com/store/apps/details?id=com.snd.optimusar",
  dgo: "https://play.google.com/store/apps/details?id=com.directv.dtvlatam",
  trinidad: "https://trinidadsalud.com.ar/",
};

const logos = {
  realPlaza: realPlazaLogo,
  zoco: zocoLogo,
  tickets: zocoTicketsLogo,
  scanner: zocoScannerLogo,
  miDirectv: miDirectvLogo,
  optimus: optimusLogo,
  dgo: dgoLogo,
  trinidad: trinidadLogo,
};

const localizedProjects = {
  es: [
    {
      title: "Real Plaza",
      eyebrow: "PROYECTO ACTUAL · PARTICIPACIÓN EN EQUIPO",
      image: logos.realPlaza,
      imageType: "logo",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "Azure", "CI/CD"],
      description:
        "Desarrollo y evolución de una aplicación mobile con más de un millón de descargas. Desde PinApp participo en funcionalidades mobile, servicios backend, integraciones y decisiones técnicas para beneficios, tiendas, eventos y estacionamiento.",
      links: [
        { label: "Sitio oficial", url: urls.realPlazaWeb },
        { label: "Google Play", url: urls.realPlaza },
      ],
    },
    {
      title: "Zoco Pagos — Plataforma web",
      eyebrow: "DESARROLLO FULL STACK",
      image: logos.zoco,
      imageType: "logo",
      stack: ["ASP.NET Core", "React", "SQL Server", "JWT", "AWS"],
      description:
        "Plataforma empresarial donde desarrollé CRM con prospectos, reglas y seguimiento; altas, modificaciones y bajas de comercios; liquidaciones, AFIP e IIBB; órdenes de pago y anticipos; compliance transaccional; monitoreo operativo; legajos; reportes PDF/Excel; cupones, fidelización, notificaciones y paneles específicos para aliados, asesores, calidad y administración.",
      links: [{ label: "Ver Zoco Pagos", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — Meta Leads y asistente con IA",
      eyebrow: "INTEGRACIONES · CRM · INTELIGENCIA ARTIFICIAL",
      image: logos.zoco,
      imageType: "logo",
      stack: ["ASP.NET Core", "React", "Meta Graph API", "Webhooks", "Claude API", "SQL Server"],
      description:
        "Desarrollé la captura automática de leads de Facebook e Instagram mediante webhooks y Meta Graph API, con panel administrativo, estados y observaciones para seguimiento comercial. También implementé Don Zoco, un asistente contextual que combina IA, datos reales de facturación y comercios, historial de conversación y documentación PDF para responder consultas sobre cupones, tasas, terminales y operación del sistema.",
      links: [{ label: "Ver plataforma", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — App mobile",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      image: logos.zoco,
      imageType: "logo",
      stack: ["React Native", "Expo", "REST APIs", "Notificaciones", "Biometría"],
      description:
        "Aplicación oficial para aliados de Zoco. La desarrollé con inicio de sesión biométrico, dashboards y evolución mensual, análisis de ventas, contabilidad e impuestos, consulta y exportación de cupones, solicitudes operativas, simuladores de financiación, calificaciones, PDFs y notificaciones inteligentes en segundo plano.",
      links: [{ label: "Google Play", url: urls.zocoApp }],
    },
    {
      title: "Zoco Tickets",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      image: logos.tickets,
      imageType: "logo",
      stack: ["React Native", "Expo", "REST APIs", "Pagos", "QR"],
      description:
        "Producto web y mobile para descubrir eventos, comprar y administrar entradas. Incluye herramientas para organizadores, gestión de eventos y roles, control de asistencia, cupones, sponsors, ventas y finanzas, con una experiencia compartida entre el sitio y la aplicación.",
      links: [
        { label: "Ver sitio web", url: urls.zocoTicketsWeb },
        { label: "Google Play", url: urls.zocoTickets },
      ],
    },
    {
      title: "Zoco Scanner",
      eyebrow: "DESARROLLO Y PUBLICACIÓN",
      image: logos.scanner,
      imageType: "logo",
      stack: ["React Native", "Cámara", "QR / Barcode", "Validación en tiempo real"],
      description:
        "Aplicación de control de acceso para eventos. Permite escanear entradas digitales o físicas, validar su estado en tiempo real, detectar duplicados y registrar el ingreso de asistentes.",
      links: [{ label: "Google Play", url: urls.zocoScanner }],
    },
    {
      title: "Automatización financiera Zoco",
      eyebrow: "HERRAMIENTA INTERNA · DESARROLLO",
      image: logos.zoco,
      imageType: "logo",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description:
        "Sistema modular que automatiza conciliación y consolidación de archivos de Visa, Mastercard, Maestro, QR y CRM. Ejecuta macros, valida impuestos y tasas, detecta inconsistencias y reemplaza tareas manuales de backoffice.",
    },
    {
      title: "Carga y gestión operativa Zoco",
      eyebrow: "HERRAMIENTAS INTERNAS · DESARROLLO",
      image: logos.zoco,
      imageType: "logo",
      stack: ["C#", "WinForms", "Python", "SQL Server", "Excel"],
      description:
        "Conjunto de aplicaciones de escritorio y scripts para carga masiva, normalización y control de datos. Incluye validaciones, procesamiento de QR, generación de información operativa y automatización de tareas repetitivas.",
    },
    {
      title: "MiDIRECTV",
      eyebrow: "PARTICIPACIÓN EN EQUIPO",
      image: logos.miDirectv,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "REST APIs", "Microservicios", "SQL Server"],
      description:
        "Participé dentro del equipo de DIRECTV en backend, frontend y mobile, trabajando sobre servicios, integraciones e interfaces vinculadas con la autogestión de clientes, soporte técnico y seguimiento de operaciones. El producto permite administrar cuentas, pagos, planes y visitas técnicas.",
      links: [{ label: "Google Play", url: urls.miDirectv }],
    },
    {
      title: "Optimus Plus",
      eyebrow: "PARTICIPACIÓN EN EQUIPO · MULTIPAÍS",
      image: logos.optimus,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "Oracle Field Service", "REST APIs", "Procesos batch"],
      description:
        "Participé en backend, frontend y mobile para la gestión de órdenes de trabajo de técnicos de DIRECTV. Trabajé con creación, cancelación, agenda, despacho, reasignación, experiencia operativa y reglas específicas para distintos países.",
      links: [{ label: "Optimus Argentina", url: urls.optimus }],
    },
    {
      title: "DGO",
      eyebrow: "PARTICIPACIÓN EN EQUIPO",
      image: logos.dgo,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "APIs REST", "Integraciones", "Soporte productivo"],
      description:
        "Participé en el ecosistema tecnológico de DGO dentro de DIRECTV LATAM, colaborando en backend, frontend y mobile sobre servicios, integraciones y mantenimiento de funcionalidades productivas de la plataforma de streaming y televisión online.",
      links: [{ label: "Google Play", url: urls.dgo }],
    },
    {
      title: "DIRECTV — Field Service Management",
      eyebrow: "BACKEND Y HERRAMIENTAS INTERNAS · 6 PAÍSES",
      image: logos.miDirectv,
      imageType: "logo",
      stack: [".NET", "React", "TypeScript", "React Native", "Oracle", "Docker", "JWT/SSO"],
      description:
        "Desarrollo full stack de microservicios, paneles web y funcionalidades mobile para órdenes de servicio, disponibilidad, autenticación y configuración operativa en Argentina, Chile, Colombia, Ecuador, Perú y Uruguay. Incluye procesos batch y herramientas para reducir errores y tiempos de soporte.",
    },
    {
      title: "Trinidad Salud — Web y administración",
      eyebrow: "DESARROLLO END-TO-END",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["Laravel", "React", "TypeScript", "MySQL", "Sanctum", "AWS"],
      description:
        "Plataforma integral para afiliados y operación administrativa: altas, planes, cobertura, credenciales, consultas, recetas, facturación, reintegros y autorizaciones. Incluye APIs, roles, permisos, PDFs y panel administrativo.",
      links: [{ label: "Ver Trinidad Salud", url: urls.trinidad }],
    },
    {
      title: "Trinidad Salud — App mobile",
      eyebrow: "DESARROLLO · PRÓXIMAMENTE",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["React Native", "Expo", "Laravel API", "Autorizaciones", "Reintegros"],
      description:
        "Aplicación mobile para afiliados, actualmente previa a publicación. Permite acceder al perfil y la credencial, consultar cobertura, solicitar autorizaciones y reintegros, adjuntar documentación y descargar comprobantes PDF.",
    },
    {
      title: "Fundación Trinidad Salud",
      eyebrow: "SITIO INSTITUCIONAL · DESARROLLO",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["React", "Vite", "Responsive Design"],
      description:
        "Sitio institucional responsive desarrollado con React y Vite para comunicar la identidad, actividades e información de contacto de Fundación Trinidad Salud.",
    },
  ],
  en: [
    {
      title: "Real Plaza",
      eyebrow: "CURRENT PROJECT · TEAM CONTRIBUTION",
      image: logos.realPlaza,
      imageType: "logo",
      stack: ["React Native", ".NET", "C#", "SQL Server", "Firebase", "Azure", "CI/CD"],
      description:
        "Development and evolution of a mobile app with over one million downloads. At PinApp, I contribute to mobile features, backend services, integrations and technical decisions supporting benefits, stores, events and parking.",
      links: [
        { label: "Official website", url: urls.realPlazaWeb },
        { label: "Google Play", url: urls.realPlaza },
      ],
    },
    {
      title: "Zoco Payments — Web platform",
      eyebrow: "FULL STACK DEVELOPMENT",
      image: logos.zoco,
      imageType: "logo",
      stack: ["ASP.NET Core", "React", "SQL Server", "JWT", "AWS"],
      description:
        "Enterprise platform where I developed CRM with prospects, rules and tracking; merchant onboarding, changes and offboarding; settlements, AFIP and provincial taxes; payment orders and advances; transaction compliance; operational monitoring; employee records; PDF/Excel reports; coupons, loyalty, notifications and dedicated panels for merchants, sales, quality and administration.",
      links: [{ label: "Visit Zoco Payments", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — Meta Leads and AI assistant",
      eyebrow: "INTEGRATIONS · CRM · ARTIFICIAL INTELLIGENCE",
      image: logos.zoco,
      imageType: "logo",
      stack: ["ASP.NET Core", "React", "Meta Graph API", "Webhooks", "Claude API", "SQL Server"],
      description:
        "I developed automated Facebook and Instagram lead capture through webhooks and the Meta Graph API, with an admin panel, statuses and notes for sales follow-up. I also implemented Don Zoco, a contextual assistant combining AI, real billing and merchant data, conversation history and PDF documentation to answer questions about coupons, rates, terminals and platform operation.",
      links: [{ label: "Visit platform", url: urls.zocoWeb }],
    },
    {
      title: "Zoco — Mobile app",
      eyebrow: "DEVELOPMENT AND RELEASE",
      image: logos.zoco,
      imageType: "logo",
      stack: ["React Native", "Expo", "REST APIs", "Notifications", "Biometrics"],
      description:
        "Official app for Zoco merchants. I developed biometric login, dashboards and monthly trends, sales analytics, accounting and taxes, coupon lookup and export, operational requests, financing simulators, ratings, PDF documents and intelligent background notifications.",
      links: [{ label: "Google Play", url: urls.zocoApp }],
    },
    {
      title: "Zoco Tickets",
      eyebrow: "DEVELOPMENT AND RELEASE",
      image: logos.tickets,
      imageType: "logo",
      stack: ["React Native", "Expo", "REST APIs", "Payments", "QR"],
      description:
        "Web and mobile product for discovering events and purchasing and managing tickets. It includes organizer tools for events and roles, attendance control, coupons, sponsors, sales and finances, with a shared experience across the website and app.",
      links: [
        { label: "Visit website", url: urls.zocoTicketsWeb },
        { label: "Google Play", url: urls.zocoTickets },
      ],
    },
    {
      title: "Zoco Scanner",
      eyebrow: "DEVELOPMENT AND RELEASE",
      image: logos.scanner,
      imageType: "logo",
      stack: ["React Native", "Camera", "QR / Barcode", "Real-time validation"],
      description:
        "Event access-control app for scanning digital or physical tickets, validating status in real time, detecting duplicates and recording attendee entry.",
      links: [{ label: "Google Play", url: urls.zocoScanner }],
    },
    {
      title: "Zoco financial automation",
      eyebrow: "INTERNAL TOOL · DEVELOPMENT",
      image: logos.zoco,
      imageType: "logo",
      stack: [".NET 8", "WinForms", "Excel Interop", "MSTest", "SQL Server"],
      description:
        "Modular system automating reconciliation and consolidation for Visa, Mastercard, Maestro, QR and CRM files. It runs macros, validates taxes and fees, detects anomalies and replaces manual backoffice work.",
    },
    {
      title: "Zoco operational data tools",
      eyebrow: "INTERNAL TOOLS · DEVELOPMENT",
      image: logos.zoco,
      imageType: "logo",
      stack: ["C#", "WinForms", "Python", "SQL Server", "Excel"],
      description:
        "Desktop applications and scripts for bulk uploads, normalization and data control, including validations, QR processing, operational-data generation and repetitive-task automation.",
    },
    {
      title: "MiDIRECTV",
      eyebrow: "TEAM CONTRIBUTION",
      image: logos.miDirectv,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "REST APIs", "Microservices", "SQL Server"],
      description:
        "As part of the DIRECTV team, I contributed across backend, frontend and mobile, working on services, integrations and interfaces related to customer self-service, technical support and operation tracking. The product supports account, payment, plan and technical-visit management.",
      links: [{ label: "Google Play", url: urls.miDirectv }],
    },
    {
      title: "Optimus Plus",
      eyebrow: "TEAM CONTRIBUTION · MULTI-COUNTRY",
      image: logos.optimus,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "Oracle Field Service", "REST APIs", "Batch processing"],
      description:
        "I contributed across backend, frontend and mobile to DIRECTV technician work-order management, including creation, cancellation, scheduling, dispatch, reassignment, operational experience and country-specific rules.",
      links: [{ label: "Optimus Argentina", url: urls.optimus }],
    },
    {
      title: "DGO",
      eyebrow: "TEAM CONTRIBUTION",
      image: logos.dgo,
      imageType: "logo",
      stack: [".NET", "React", "React Native", "REST APIs", "Integrations", "Production support"],
      description:
        "I contributed to the DGO technology ecosystem within DIRECTV LATAM across backend, frontend and mobile, collaborating on services, integrations and maintenance of production functionality for its streaming and online-TV platform.",
      links: [{ label: "Google Play", url: urls.dgo }],
    },
    {
      title: "DIRECTV — Field Service Management",
      eyebrow: "BACKEND AND INTERNAL TOOLS · 6 COUNTRIES",
      image: logos.miDirectv,
      imageType: "logo",
      stack: [".NET", "React", "TypeScript", "React Native", "Oracle", "Docker", "JWT/SSO"],
      description:
        "Full stack development of microservices, web panels and mobile functionality for service orders, availability, authentication and operational configuration across Argentina, Chile, Colombia, Ecuador, Peru and Uruguay, including batch processes and support automation.",
    },
    {
      title: "Trinidad Salud — Web and administration",
      eyebrow: "END-TO-END DEVELOPMENT",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["Laravel", "React", "TypeScript", "MySQL", "Sanctum", "AWS"],
      description:
        "Integrated member and administration platform covering enrollment, plans, coverage, digital cards, appointments, prescriptions, billing, reimbursements and authorizations, with APIs, roles, permissions and PDFs.",
      links: [{ label: "Visit Trinidad Salud", url: urls.trinidad }],
    },
    {
      title: "Trinidad Salud — Mobile app",
      eyebrow: "DEVELOPMENT · COMING SOON",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["React Native", "Expo", "Laravel API", "Authorizations", "Reimbursements"],
      description:
        "Pre-release mobile app for members to access their profile and digital card, check coverage, request authorizations and reimbursements, attach documents and download PDF receipts.",
    },
    {
      title: "Fundación Trinidad Salud",
      eyebrow: "INSTITUTIONAL WEBSITE · DEVELOPMENT",
      image: logos.trinidad,
      imageType: "logo",
      stack: ["React", "Vite", "Responsive Design"],
      description:
        "Responsive institutional website built with React and Vite to communicate Fundación Trinidad Salud's identity, activities and contact information.",
    },
  ],
};

const getProjectsData = (language = "es") => localizedProjects[language] || localizedProjects.es;

export default getProjectsData;
