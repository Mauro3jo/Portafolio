import projectOne from "../assets/proyecto-1.png";
import projectThree from "../assets/proyecto-trinidad.jpg";
import projectFour from "../assets/proyecto-directv.jpg";

const projects = {
  1: {
    title: "Zoco Servicios de Pago",
    image: projectOne,
    description: (
      <p>
        Plataforma empresarial de gran escala desarrollada con <strong>ASP.NET Core 6</strong>, <strong>Entity Framework</strong> y <strong>React.js</strong>. Implemente APIs RESTful seguras con JWT,
        arquitectura por capas, principios SOLID, AutoMapper, consultas LINQ avanzadas y optimizacion en SQL Server. Tambien trabaje en jobs programados, reportes Excel con ClosedXML y
        despliegue en AWS/Windows Server con IIS.
      </p>
    ),
    sitioWeb: "https://zocoweb.com.ar/",
  },
  2: {
    title: "Trinidad Salud",
    image: projectThree,
    description: (
      <p>
        Proyecto freelance full stack para una plataforma de gestion de salud. Desarrolle APIs RESTful en <strong>Laravel 8</strong> para sistema administrativo y app movil, con modulos de
        afiliados, consultas, recetas, facturacion y reintegros. En frontend trabaje con <strong>React.js</strong> y tambien desarrolle una <strong>app de celular</strong> para afiliados,
        conectada a las APIs del sistema. Ademas implemente autenticacion con Sanctum, roles/permisos con Spatie y despliegue en AWS.
      </p>
    ),
    sitioWeb: "https://trinidadsalud.com.ar/",
  },
  3: {
    title: "DIRECTV LATAM (ASAP)",
    image: projectFour,
    description: (
      <p>
        Rol backend en ASAP Consulting para cliente DIRECTV LATAM. Trabajo en mantenimiento evolutivo y correctivo de servicios internos en <strong>.NET</strong>, resolucion de incidentes via
        Jira, mejora de flujos de negocio, refactorizacion de componentes, validacion con QA y documentacion tecnica para asegurar estabilidad en produccion. En frontend tambien trabaje con <strong>React.js</strong>
        para pantallas internas y flujos de soporte operativo.
      </p>
    ),
    sitioWeb: "https://www.directv.com.ar/",
  },
};

export default projects;
