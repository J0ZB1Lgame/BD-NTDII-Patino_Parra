document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("articulos-container");

  try {
    const respuesta = await fetch("/api/articulos");
    const data = await respuesta.json();

    if (!data.data || data.data.length === 0) {
      contenedor.innerHTML = "<p>No hay artículos disponibles.</p>";
      return;
    }

    data.data.forEach((articulo) => {
      const card = document.createElement("div");
      card.classList.add("articulo-card");
      card.innerHTML = `
        <h2>${articulo.titulo}</h2>
        <p><strong>Autores:</strong> ${articulo.autores}</p>
        <p><strong>Año:</strong> ${articulo.año_publicacion}</p>
        <p><strong>Revista:</strong> ${articulo.revista}</p>
        <p><strong>Base de datos:</strong> ${articulo.base_datos}</p>
        <p><strong>Referencias:</strong> ${articulo.cantidad_referencias}</p>
        <p>${articulo.resumen}</p>
        <p><a href="${articulo.enlace}" target="_blank">🔗 Ver artículo</a></p>
      `;
      contenedor.appendChild(card);
    });
  } catch (error) {
    contenedor.innerHTML = `<p>Error al cargar los artículos 😢</p>`;
    console.error("Error:", error);
  }
});
