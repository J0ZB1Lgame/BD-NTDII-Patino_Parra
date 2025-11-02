// src/controller/articuloController.js

const Articulo = require("../model/articuloModel.js"); // usa require en lugar de import

const crearArticulo = async (req, res) => {
  try {
    // Lógica para crear artículo
    res.status(201).json({ mensaje: "Artículo creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerArticulos = async (req, res) => {
  try {
    // Buscar todos los artículos en la colección
    const articulos = await Articulo.find();

    // Enviar la lista como respuesta
    res.status(200).json({
      mensaje: "Lista de artículos",
      data: articulos
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    // Lógica para actualizar el artículo
    res.status(200).json({ mensaje: `Artículo ${id} actualizado` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarArticulo = async (req, res) => {
  try {
    const { id } = req.params;
    // Lógica para eliminar el artículo
    res.status(200).json({ mensaje: `Artículo ${id} eliminado` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearArticulo,
  obtenerArticulos,
  actualizarArticulo,
  eliminarArticulo
};

