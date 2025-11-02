const express = require("express");
const router = express.Router();

// Importar las funciones del controlador
const {
  crearArticulo,
  obtenerArticulos,
  actualizarArticulo,
  eliminarArticulo
} = require("../controller/articuloController.js");

// ✅ Crear un nuevo artículo (POST)
router.post("/", crearArticulo);

// ✅ Obtener todos los artículos (GET)
router.get("/", obtenerArticulos);

// ✅ Actualizar un artículo por ID (PUT)
router.put("/:id", actualizarArticulo);

// ✅ Eliminar un artículo por ID (DELETE)
router.delete("/:id", eliminarArticulo);

module.exports = router;
