# Proyecto de Portafolio - Mauro Trejo

Este es el repositorio del portafolio web de Mauro Trejo, disponible en [mauro-trejo.vercel.app](https://mauro-trejo.vercel.app/). El proyecto muestra los trabajos realizados y permite agregar nuevos proyectos de forma dinámica.

## Tecnologías Utilizadas
- React.js
- Vercel (para despliegue)
- JSX
- Archivos estáticos para imágenes

## Instalación y Configuración
Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/MartinGramajo/portfolio-mt.git
   ```
2. Acceder al directorio del proyecto:
   ```sh
   cd nombre-del-proyecto
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Ejecutar el servidor de desarrollo:
   ```sh
   npm start
   ```

El sitio estará disponible en `http://localhost:3000/`.

## Agregar o Actualizar un Proyecto
Los proyectos se gestionan en el archivo `projects.js`, ubicado en la carpeta correspondiente.

### Pasos para agregar un nuevo proyecto
1. **Importar la imagen del proyecto**
   ```js
   import projectNew from "../assets/proyecto-nuevo.png";
   ```

2. **Agregar un nuevo objeto en el listado de proyectos**
   ```js
   const projects = {
     1: {
       title: "Zoco Servicio de pago",
       image: projectOne,
       description: (
         <>
           <p>
             App Web: Un panel intuitivo que ofrece a clientes acceso a sus datos de facturación y permite a asesores comerciales gestionar y potenciar sus ventas.
           </p>
         </>
       ),
       sitioWeb: "https://zocoweb.com.ar/",
     },
     2: {
       title: "Nuevo Proyecto",
       image: projectNew,
       description: (
         <>
           <p>
             Descripción del nuevo proyecto aquí.
           </p>
         </>
       ),
       sitioWeb: "https://nuevoproyecto.com/",
     },
   };
   ```
3. **Guardar los cambios y ejecutar el proyecto**
   ```sh
   npm start
   ```

Ahora el nuevo proyecto aparecerá en el portafolio automáticamente.

## Despliegue en Vercel
Para actualizar la versión en producción:
1. **Hacer commit de los cambios**
   ```sh
   git add .
   git commit -m "Agregado nuevo proyecto"
   git push origin main
   ```
2. **Vercel se encargará del despliegue automático**.

---
¡Listo! Cualquier actualización en `projects.js` se reflejará en la web luego del despliegue.

