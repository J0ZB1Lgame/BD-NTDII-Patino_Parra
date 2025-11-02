// src/app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // ✅ importante para servir bien el index.html
const articuloRoutes = require("./routes/articuloRoutes.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Servir correctamente los archivos del frontend
app.use(express.static(path.join(__dirname, "public")));

// ✅ Rutas API
app.use("/api/articulos", articuloRoutes);

// ✅ Ruta raíz (para mostrar index.html al entrar al sitio)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(process.env.PORT || 4000, () =>
      console.log(`🚀 Servidor corriendo en el puerto ${process.env.PORT || 4000}`)
    );
  })
  .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));
