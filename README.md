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

- dotenv
  Básicamente este paquete nos permite crear un archivo . env en nuestro proyecto que cargará en process. env como nuestras variables de entorno.
  ```sh
  npm i dotenv
  ```

## Estructuración del proyecto

Al hablar de buenas practicas con Node js, una buena estructuracion del proyecto es fundamental a la hora del desarrollo, de ahi que se debe empezar por saber como empezar a crearlo de la manera adecuada.
Primero nuestro archivo principal index.js o app.js debe tener adecuada estructura, como lo podemos ver a continuacion

```sh
require('dotenv').config();
const express = require('express');
const app = express();
const config = require('./config')
const db = require('./config')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');

const connectDb = require('./db/mongodb')
const errorHandlers = require('./middlewares/error-handler');
const indexRouter = require('./routes/index');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));
app.use(errorHandlers.errorHandler);
app.use('/',indexRouter);
connectDb(db)
app.listen(config.app.port,()=>console.log(`listen on ${config.app.port}`));
module.exports = app;

```

Vamos a requerir dotenv, Express y todos lo middleware que instalamos asi que los importamos y los usamos. Tambien necesitaremos del archivo de configuracion de conexion a nuestra base de datos algunos middlewares que nosotros podemos crear y no puede faltar las rutas.

Como podemos observar mediante module.exports = app, puedo separar el archivo y tenemos la facultad de importarlo de manera sencilla.

## .env

Debemos crear un archivo .env en donde estaran todas nuetras variables de entorno como son las siguientes:

```sh
PORT=3000
DB_NAME=softka
DB_PORT=27017
DB_HOST=localhost
```

En este ejemplo solo tenemos el ambiente de desarrollo pero estas variables pueden variar segun el ambiente en donde se este.

## config.js

Tenemos el archivo de configuracion en donde se pueden crear diferentes jerarquias de configuracion podemos dividir las variables de entorno que vamos utilizar en la aplicacion y base de datos:

```sh
const config = {
  app:{
      port: process.env.PORT
  },
  db: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dbName: process.env.DB_NAME
  }
}

module.exports = config
```

## Carpeta apiServices

Tenemos nuestras apiService o componentes y dentro de cada componente tenemos los controladores, los modelos y rutas perteneciente a ese componente, esto tiene varias ventajas, lo primero es que si se necesita separar un componente y se lo quiere trasladar a un microservicio por aparte es mucho mas sencillo ya que toda la logica se encuestra en cada componente y da la faultad de que nuestro proyecto este ordenado.

## Carpeta tests

En donde se pueden crear todos los test para probar nuestro proyecto.

## Carpeta microservicios

Cuando se esta creando una API monolitica es mejor no dejar todas las cosas dentro del nucleo del proyecto por que es una mala practica, entonces se crea aplicaciones que son microservicios que realizan cosas muy especificas y pueden ser escalables sin ninguna complicacion. Un ejemplo de microservicio es el de enviar emails, lo podemos crear como microservicio en nuestro proyecto.

## Carpeta middleware

En esta carpeta se separa todos los middleware que nosotros desarrollemos y necesitemos.

## Carpeta routes

Como se recomendo todas las rutas deben estar en cada componente pero al final, se debe traer todas las rutas de los componentes y se los coloca en un router general, donde se pueda modificar facilmente cualquier ruta.

## Carpeta scripts

Donde se guardaran los scripts necesarios en mi aplicacion y son utilizados de manera continua.

## Arquitectura de software en capas Capas y subcapas comunes

## Capa de presentación

- Web App.
- Traditional web page
- WebApp, React, Vue or Angular
- phoneApp
-

## Capa de aplicación

- Web Framework (Express)
- Controllers
- Validation Layer
- Authentication Layer
- Authorization Layer
- Routing Layer

## Capa negocio

- Services
- models
- Domain
- Data Access Layer

## DAO

- logging
- networking
- Other services
