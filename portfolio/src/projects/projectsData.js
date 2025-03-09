import projectOne from "../assets/proyecto-1.png";
import projectTwo from "../assets/proyecto-2.png";

const projects = {
  1: {
    title: "Zoco Servicio de pago",
    image: projectOne,
    description: (
      <>
        <p>
          App Web: Un panel intuitivo que ofrece a clientes acceso a sus datos
          de facturación y permite a asesores comerciales gestionar y potenciar
          sus ventas.
        </p>
        <p>
          Billetera virtual ZOCO: Creación de una billetera virtual con
          funcionalidades básicas como la gestión de saldo, transferencias,
          perfil de usuario y flujos básicos de operaciones.
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
  // 3: {
  //   title: "Zoco Servicio de pago",
  //   image: projectOne,
  //   description: (
  //     <>
  //       <p>
  //         App Web: Un panel intuitivo que ofrece a clientes acceso a sus datos
  //         de facturación y permite a asesores comerciales gestionar y potenciar
  //         sus ventas.
  //       </p>
  //     </>
  //   ),
  //   sitioWeb: "https://zocoweb.com.ar/",
  // },
};

export default projects;
