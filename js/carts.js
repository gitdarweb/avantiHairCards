// carts.js (versión final con validaciones y logs mejorados)

// ——————————————————————————————
// 1. Inicialización (más robusta)
let carrito;
try {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
} catch (e) {
    console.warn('carts.js: carrito en localStorage corrupto. Se reinicia.', e);
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// ——————————————————————————————
// Backend URL (nuevo dominio para producción)
const BACKEND_URL = "https://avantihairtienda.com.ar";

// ——————————————————————————————
// 2. Guardar y actualizar contador
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function updateCartCount() {
    const spanCount = document.getElementById('cart-count');
    const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 0), 0);
    if (spanCount) spanCount.textContent = totalItems;
}

// Alias retro
if (typeof window.actualizarContadorCarrito === 'undefined') {
    window.actualizarContadorCarrito = function () {
        updateCartCount();
    };
}

// ——————————————————————————————
// 3. Agregar al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    console.log('Agregando al carrito:', nombre, precio, imagen); // Debug
    if (!nombre || isNaN(precio) || precio <= 0 || !imagen) {
        console.error('Datos inválidos:', { nombre, precio, imagen });
        return;
    }
    const existe = carrito.find(item => item.nombre === nombre);
    if (existe) {
        existe.cantidad = (existe.cantidad || 0) + 1;
    } else {
        carrito.push({ nombre, precio: Number(precio), cantidad: 1, imagen });
    }
    guardarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 4. Mostrar contenido del carrito
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito-contenedor');
    const totalDiv = document.getElementById('carrito-total');
    if (!contenedor || !totalDiv) return;

    contenedor.innerHTML = '';
    totalDiv.textContent = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        totalDiv.innerHTML = `<h3>Total: $0</h3>`;
        return;
    }

    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio * (item.cantidad || 0);

        const card = document.createElement('div');
        card.className = 'tarjeta-producto';

        card.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" class="mini-img" />
      <div class="info-producto">
        <h3>${item.nombre}</h3>
        <p>Precio: $${item.precio.toLocaleString()}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <button onclick="eliminarDelCarrito(${index})" class="btn-hero small">Eliminar</button>
      </div>
    `;
        contenedor.appendChild(card);
    });

    totalDiv.innerHTML = `<h3>Total: $${total.toLocaleString()}</h3>`;
}

// ——————————————————————————————
// 5. Eliminar item
function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 6. Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
    updateCartCount();
}

// ——————————————————————————————
// 7. Obtener total del carrito (para debug)
function getTotalCarrito() {
    return carrito.reduce((sum, item) => sum + (item.precio * (item.cantidad || 0)), 0);
}

// ——————————————————————————————
// 8. Finalizar compra — conecta con el backend
async function finalizarCompra() {
    console.log('[MP] finalizarCompra iniciada');
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    // Validar carrito
    const isValidCarrito = carrito.every(item => item.nombre && !isNaN(item.precio) && item.precio > 0 && !isNaN(item.cantidad) && item.cantidad > 0 && item.imagen);
    if (!isValidCarrito) {
        alert('Carrito contiene datos inválidos. Revisa los productos.');
        console.error('Carrito inválido:', carrito);
        return;
    }

    const montoTotal = getTotalCarrito();
    console.log('[MP] Monto total calculado:', montoTotal);
    console.log('[MP] Enviando payload:', carrito);

    try {
        const response = await fetch(`${BACKEND_URL}/create_preference`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ carrito })
        });

        console.log('[MP] fetch status:', response.status, response.statusText);
        const data = await response.json();
        console.log('[MP] respuesta backend:', data);

        if (response.ok && data.id && data.init_point) {
            console.log('[MP] Abriendo init_point:', data.init_point);
            window.open(data.init_point, '_blank');
            vaciarCarrito();
        } else {
            alert('No se pudo crear la preferencia de pago. Revisá la consola.');
            console.error('Respuesta inesperada del backend:', data);
        }
    } catch (error) {
        console.error('Error en la conexión con el backend:', error);
        alert('Error en la conexión con el servidor. Revisá la consola.');
    }
}

// Exponer globalmente
window.finalizarCompra = finalizarCompra;

// ——————————————————————————————
// 9. Auto-ejecución al cargar
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
    updateCartCount();
});