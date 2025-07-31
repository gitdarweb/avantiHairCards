/* renderProducts.js

  Módulo para renderizar productos dinámicamente en páginas de marca o categoría.
  ---------------------------------------------------------
*/

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

  // Limpiar contenido previo
  contenedor.innerHTML = '';

  let lista = [];

  if (tipo === 'categoria') {
    // 'products' debe existir en el scope global (products.js)
    if (typeof products === 'undefined') {
      console.error('renderProducts.js: "products" no está definido. Revisa products.js');
      contenedor.innerHTML = '<p>Error al cargar productos.</p>';
      return;
    }
    lista = products[valor] || [];
  } else if (tipo === 'marca') {
    // 'productosPorMarca' debe existir globalmente
    if (typeof productosPorMarca === 'undefined') {
      console.error('renderProducts.js: "productosPorMarca" no está definido. Revisa products.js');
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

  // Crear cada tarjeta de producto
  lista.forEach(producto => {
    const { nombre, precio, imagen } = producto;
    // Determinar ruta de imagen: si es URL, usarla; si no, intentar carpeta de marca o categoría
    const rutaImg = imagen.startsWith('http')
      ? imagen
      : `../img/img-productos/${valor}/${imagen}`;

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-producto');
    tarjeta.innerHTML = `
        <div class="img-container">
          <img src="${rutaImg}" alt="${nombre}" />
        </div>
        <div class="info-producto">
          <h3>${nombre}</h3>
          <p>$${precio.toLocaleString()}</p>
          <button onclick="agregarAlCarrito('${nombre}', ${precio}, '${rutaImg}')">
            Agregar al carrito
          </button>
        </div>
      `;
    contenedor.appendChild(tarjeta);
  });
}

// Exponer la función globalmente
window.renderizarProductosPor = renderizarProductosPor;
