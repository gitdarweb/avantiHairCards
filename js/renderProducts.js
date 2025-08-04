/* renderProducts.js

  Módulo para renderizar productos dinámicamente en páginas de marca o categoría.
  ---------------------------------------------------------
*/

/**
 * Obtiene la ruta correcta de una imagen, local o en GitHub Pages.
 * @param {string} imagen - Nombre o URL de la imagen.
 * @returns {string}
 */
function obtenerRutaImagen(imagen) {
  const isGitHub = window.location.hostname.includes('github.io');
  const repo = isGitHub ? `/${window.location.pathname.split('/')[1]}` : '';
  if (imagen.startsWith('http')) return imagen;
  return `${repo}/img/img-productos/${imagen}`;
}

/**
 * Renderiza productos según tipo y valor (categoría o marca).
 * @param {'categoria'|'marca'} tipo
 * @param {string} valor  Nombre exacto (minúsculas) de la categoría o marca.
 */
function renderizarProductosPor(tipo, valor) {
  const contenedor = document.getElementById('contenedor-productos');
  if (!contenedor) {
    console.warn('renderProducts.js: No se encontró el contenedor de productos.');
    return;
  }
  contenedor.innerHTML = '';

  let lista = [];
  if (tipo === 'categoria') {
    if (typeof products === 'undefined') {
      console.error('renderProducts.js: "products" no está definido.');
      contenedor.innerHTML = '<p>Error al cargar productos.</p>';
      return;
    }
    lista = products[valor] || [];
  } else if (tipo === 'marca') {
    if (typeof productosPorMarca === 'undefined') {
      console.error('renderProducts.js: "productosPorMarca" no está definido.');
      contenedor.innerHTML = '<p>Error al cargar productos de marca.</p>';
      return;
    }
    lista = productosPorMarca[valor] || [];
  } else {
    console.error('renderProducts.js: Tipo inválido. Usa "categoria" o "marca"');
    return;
  }

  if (lista.length === 0) {
    contenedor.innerHTML = `<p>No hay productos para ${tipo} "${valor}".</p>`;
    return;
  }

  // Ruta del placeholder una sola vez
  const rutaPlaceholder = obtenerRutaImagen('placeholder.jpg');

  lista.forEach(producto => {
    const { nombre, precio, imagen } = producto;
    const rutaImg = obtenerRutaImagen(imagen);

    // Crear tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');

    // Contenedor de imagen
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const imgEl = document.createElement('img');
    imgEl.src = rutaImg;
    imgEl.alt = nombre;
    imgEl.onerror = () => {
      imgEl.onerror = null;
      imgEl.src = rutaPlaceholder;
    };
    imgContainer.appendChild(imgEl);

    // Info producto
    const info = document.createElement('div');
    info.classList.add('info-producto');
    info.innerHTML = `
      <h3>${nombre}</h3>
      <p>$${precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito('${nombre}', ${precio}, '${rutaImg}')">
        Agregar al carrito
      </button>
    `;

    tarjeta.appendChild(imgContainer);
    tarjeta.appendChild(info);
    contenedor.appendChild(tarjeta);
  });
}

// Exponer la función globalmente
window.renderizarProductosPor = renderizarProductosPor;
