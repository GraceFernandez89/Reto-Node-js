# Buenas practicas: Node js con MongoDB

Este repositorio es para subir codigo para nuestro servidor Nodejs con MongoDB.
Mediante este proyecto, podrás crear un servidor backend, ejecutándose en tiempo real y saber cómo utilizar las dependencias para facilitar este proceso, darte la capacidad para levantar un servidor e interactuar con la información de entrada y salida del mismo, con lo que posteriormente podrías usar la información que necesites en una página real, todo lo anterior utilizando buenas practicas en el desarrollo.
Node.js es uno de los frameworks de Javascript más utilizados en la actualidad, para ejecutar tu código Javascript en un entorno de ejecución por fuera del navegador y hacerlo sobre el Motor V8 propiedad de Google, que se encarga por nosotros de transformar lo que hicimos a código máquina en lugar de interpretarlo, teniendo mejor rendimiento de esta manera. Y el manejo de información lo podremos usar con un framework llamado “express”, que lo verás en todos los entornos de trabajo reales.

## Instalación Software

Vamos a comenzar con las instalaciones necesarias para configurar nuestro proyecto.

• https://nodejs.org/es/
• https://www.mongodb.com/download-center/community
• https://robomongo.org/
• https://code.visualstudio.com/

## Crear servidor

1. Crear una carpeta en alguna parte de tu computador
2. Arrastrar dicha carpeta a Visual Studio Code
3. Ejecutar un nuevo proyecto de Node.js

   ```sh
   npm init
   ```

4. Instalar Express.js
   ```sh
   npm i express
   ```
5. Crear archivo index.js
   ```sh
   const express = require('express');
   const app = express();
   app.get('/', function (req, res) {
   res.send('Hello World!');
   });
   app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
   });
   ```
   La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.
6. Ejecute la aplicación con el siguiente comando:
   ```sh
   node index.js
   ```
7. A continuación, cargue http://localhost:3000/ en un navegador para ver la salida.
8. Para que detecte los cambios nuestro servidor podemos instalar https://www.npmjs.com/package/nodemon
   ```sh
   npm i nodemon
   ```
9. Configurar nuevo script en package.json
   ```sh
   "dev": "nodemon index.js"
   ```
   Ahora ejecutar:
   ```sh
   nodemon
   ```
   # Instalación

- Morgan (middleware)
  Nos sirve para pintar las peticiones HTTP request que se solicitan a nuestro aplicación.
- CORS (middleware)
  Para realizar solicitudes de un servidor externo e impedir el bloqueo por CORS.
- bcryptjs
  Sirve para encriptar las contraseñas
- JSON Web Token (JWT)
  Es un estándar abierto basado en JSON para crear un token que sirva para enviar datos entre aplicaciones o servicios y garantizar que sean válidos y seguros
- Mongoose
  Biblioteca de JavaScript que le permite definir esquemas con datos fuertemente tipados. Una vez que se define un esquema, Mongoose le permite crear un Modelo basado en un esquema específico.

  ```sh
  npm i  mongoose cors morgan body-parser bcryptjs jsonwebtoken
  ```
