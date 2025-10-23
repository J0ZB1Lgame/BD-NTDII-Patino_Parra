# [NTD] Base de Datos II - Patiño_Parra
 
Repositorio del proyecto para la asignatura “Nuevas Tecnologías del Desarrollo II”  
Gestión de artículos científicos mediante una API construida con Express y MongoDB Atlas.

## 1. Descripción  
Este proyecto tiene como objetivo principal desarrollar una API RESTful que permita el **CRUD** (Crear, Leer, Actualizar, Eliminar) de artículos científicos relacionados con el tema de APIs y desarrollo web. La API está implementada con el framework Express (Node.js) y emplea MongoDB Atlas como base de datos en la nube.  
El repositorio forma parte del taller de la asignatura “Nuevas Tecnologías del Desarrollo II” y acompaña la parte teórica de búsqueda bibliográfica con la parte práctica del desarrollo de la API.

## 2. Tecnologías utilizadas  
- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose (ODM para MongoDB)  
- dotenv (para gestión de variables de entorno)  
- cors (habilitar CORS en la API)  
- Postman (para pruebas de los endpoints)  

## 3. Estructura del proyecto  
BD-NTDII-Patino_Parra/
│
├── src/
│ ├── controller/
│ │ └── articuloController.js
│ ├── model/
│ │ └── articuloModel.js
│ ├── routes/
│ │ └── articuloRoutes.js
│ ├── app.js
│
├── .env
├── package.json
└── README.md

## 4. Instalación y configuración  
I. Clona el repositorio:  
   " ```bash "
   git clone https://github.com/tu-usuario/BD-NTDII-Patino_Parra.git  
II. Accede a la carpeta del proyecto:
   cd BD-NTDII-Patino_Parra  

III. Instala las dependencias:
   npm install  

IV. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   PORT=4000  
   MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/articulosDB  

Asegúrate de reemplazar <usuario>, <contraseña> y articulosDB por los valores correspondientes de tu cuenta en MongoDB Atlas.

V. Inicia el servidor:
   npm start  

Verás en la consola un mensaje indicando que el servidor está corriendo y que se conectó correctamente a MongoDB.

5. Endpoints disponibles

La base URL para los endpoints es:
http://localhost:<PORT>/api/articulos

Donde <PORT> es el valor definido en tu archivo .env (por defecto 4000).

| Método | Ruta                 | Descripción                      |
| ------ | -------------------- | -------------------------------- |
| POST   | `/api/articulos`     | Crear un nuevo artículo          |
| GET    | `/api/articulos`     | Obtener todos los artículos      |
| PUT    | `/api/articulos/:id` | Actualizar un artículo por su ID |
| DELETE | `/api/articulos/:id` | Eliminar un artículo por su ID   |

Ejemplo de cuerpo para creación (POST):
{
  "titulo": "Título del artículo",
  "autores": "Nombre(s) del autor(es)",
  "año_publicacion": 2025,
  "resumen": "Resumen del artículo...",
  "cantidad_referencias": 32,
  "base_datos": "Springer Nature",
  "revista": "Scientific Reports",
  "enlace": "https://…",
  "pdf": "Open Access"
}

6. Pruebas con Postman

Se recomienda usar Postman para verificar el correcto funcionamiento de la API.
Puedes importar una colección (ArticulosAPI.postman_collection.json) que contenga peticiones predefinidas para cada endpoint.
Realiza pruebas de:

- Crear artículo
- Listar artículos
- Actualizar un artículo
- Eliminar un artículo
- Verificar que los cambios se reflejan en la base de datos

7. Repositorio y control de versiones

Este repositorio debe estar alojado en GitHub bajo el nombre BD-NTDII-Patino_Parra.
Se recomienda:

- Hacer commits claros con mensaje que describan los cambios
- Añadir un archivo .gitignore que excluya node_modules/, .env, entre otros
- Documentar cambios relevantes en un archivo CHANGELOG.md (opcional)

8. Futuras mejoras

- Añadir autenticación (por ejemplo, con JWT) para proteger los endpoints de creación/actualización/eliminación.
- Implementar paginación y filtros para el endpoint GET de artículos.
- Añadir pruebas automatizadas (unitarias e integración).
- Desplegar la API en un servicio de nube (por ejemplo, Heroku, AWS Elastic Beanstalk, Azure).

9. Créditos y contacto

Proyecto desarrollado para la asignatura “Nuevas Tecnologías del Desarrollo II”.
Autores: Patino & Parra
Para dudas o sugerencias, contactar: [josel.patinog@konradlorenz.edu.co, mariaa.parras@konradlorenz.edu.co]
