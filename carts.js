// cart.js

// Inicializar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Guardar en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar producto
function addToCart(nombre, precio) {
    const productoExistente = carrito.find(item => item.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    guardarCarrito();
    updateCartCount();
}

// Actualiza el número de productos (ícono)
function updateCartCount() {
    const carritoLink = document.querySelector('.user-actions a[href="#"]');
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    if (carritoLink) {
        carritoLink.innerHTML = `<i class="fas fa-shopping-cart"></i> (${total})`;
    }
}

// Mostrar carrito (si hay un contenedor con ID #cart-display)
function mostrarCarrito() {
    const contenedor = document.getElementById('cart-display');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;

        const card = document.createElement('div');
        card.className = 'carrito-item';

        card.innerHTML = `
            <p><strong>${item.nombre}</strong></p>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Precio: $${item.precio}</p>
            <button class="btn-hero small" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
        `;

        contenedor.appendChild(card);
    });

    const totalDiv = document.createElement('div');
    totalDiv.className = 'carrito-total';
    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
    contenedor.appendChild(totalDiv);
}

// Eliminar producto
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}
