// carts.js

// ——————————————————————————————
// 1. Inicialización
// ——————————————————————————————
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// ——————————————————————————————
// 2. Guardar y actualizar contador
// ——————————————————————————————
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function updateCartCount() {
    const spanCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    if (spanCount) spanCount.textContent = totalItems;
}

// ——————————————————————————————
// 3. Función para agregar al carrito
// ——————————————————————————————
function agregarAlCarrito(nombre, precio, imagen) {
    const existe = carrito.find(item => item.nombre === nombre);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, imagen });
    }
    guardarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 4. Mostrar contenido del carrito
// ——————————————————————————————
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-contenedor');
    const totalDiv = document.getElementById('carrito-total');
    if (!contenedor || !totalDiv) return;

    contenedor.innerHTML = '';
    totalDiv.textContent = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio * item.cantidad;

        const card = document.createElement('div');
        card.className = 'tarjeta-producto';

        card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" class="mini-img" />
      <div class="info-producto">
        <h3>${item.nombre}</h3>
        <p>Precio: $${item.precio}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <button onclick="eliminarDelCarrito(${index})" class="btn-hero small">Eliminar</button>
      </div>
    `;
        contenedor.appendChild(card);
    });

    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

// ——————————————————————————————
// 5. Eliminar item
// ——————————————————————————————
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 6. Vaciar carrito
// ——————————————————————————————
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 7. Finalizar compra (simulado)
// ——————————————————————————————
function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('¡Gracias por tu compra! Serás redirigido al pago.');
    vaciarCarrito();
}

// ——————————————————————————————
// 8. Auto-ejecución al cargar
// ——————————————————————————————
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
    updateCartCount();
});
