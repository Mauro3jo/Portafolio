import projectOne from "../assets/proyecto-1.png";
import projectTwo from "../assets/proyecto-2.png";

const projects = {
  1: {
    title: "Zoco Servicio de pago",
    image: projectOne,
    description: (
      <>
<p>
  ZocoWeb es una solución empresarial de gran escala, desarrollada con una arquitectura moderna, escalable y orientada a buenas prácticas.
  Utiliza <strong>.NET 6</strong> (ASP.NET Core, Entity Framework) en el backend y <strong>React.js</strong> en el frontend, ofreciendo una API REST robusta y segura con autenticación JWT y encriptación de contraseñas con BCrypt.
  Emplea principios <strong>SOLID</strong>, <strong>inyección de dependencias (IoC)</strong> y <strong>AutoMapper</strong> para lograr un código limpio, mantenible y testable.
  El acceso a datos se gestiona sobre <strong>SQL Server</strong> mediante el patrón Repository, LINQ avanzado y optimizaciones como <code>Include</code> y <code>AsNoTracking</code>.
  La arquitectura incluye mecanismos de <strong>caché en memoria</strong> (MemoryCache), ejecución de <strong>jobs programados</strong> y generación dinámica de reportes en Excel mediante ClosedXML.
  Además, se desarrollaron pruebas unitarias enfocadas en lógica de negocio y un pipeline de despliegue en <strong>Windows Cloud</strong> (DonWeb), con configuración avanzada de <strong>IIS</strong>.
</p>



      </>
    ),
    sitioWeb: "https://zocoweb.com.ar/",
  },
   2: {
     title: "Lubri Box",
     image: projectTwo,
     description: (
       <>
        <p>
          Lubri Box es una página que permite a los usuarios ingresar datos y
          generar presupuestos. Está hecha en React.js y permite descargar PDFs.
        </p>
       </>
     ),
    sitioWeb: "https://demo-prueba.online/",
   },
 
};

export default projects;
