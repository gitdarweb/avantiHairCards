// carts.js (versión con debug y uso de cuentas sandbox)

// ------------- CONFIG: pega aquí las credenciales SANDBOX del VENDEDOR -------------
const SELLER_PUBLIC_KEY = 'APP_USR-1a8e15e1-0fee-465e-8ce5-1d427d58e968';
const SELLER_ACCESS_TOKEN = 'APP_USR-4080838023543384-081122-462eff38e2541f9127a3cb139d8a5709-2617192212';
// -------------------------------------------------------------------------------

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
    const existe = carrito.find(item => item.nombre === nombre);
    if (existe) {
        existe.cantidad = (existe.cantidad || 0) + 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, imagen });
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
// 7. Obtener total del carrito (para Mercado Pago)
function getTotalCarrito() {
    return carrito.reduce((sum, item) => sum + (item.precio * (item.cantidad || 0)), 0);
}

// ——————————————————————————————
// 8. Finalizar compra (SANDBOX) — crea preferencia y abre checkout
async function finalizarCompra() {
    console.log('[MP] finalizarCompra iniciada');
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    // Inicializar SDK con Public Key del vendedor (sandbox)
    if (typeof MercadoPago === 'undefined') {
        alert('SDK de Mercado Pago no cargado. Asegurate de tener <script src="https://sdk.mercadopago.com/js/v2"></script> en carrito.html antes de carts.js');
        return;
    }

    const mp = new MercadoPago(SELLER_PUBLIC_KEY, { locale: 'es-AR' });

    const montoTotal = getTotalCarrito();
    console.log('[MP] Monto total calculado:', montoTotal);

    // Preparar payload
    const payload = {
        items: [
            {
                title: 'Compra en Avanti Hair Salon',
                quantity: 1,
                unit_price: Number(montoTotal) || 0
            }
        ],
        back_urls: {
            success: 'https://gitdarweb.github.io/AvantiHairSalon/pago-exitoso.html',
            failure: 'https://gitdarweb.github.io/AvantiHairSalon/pago-fallido.html',
            pending: 'https://gitdarweb.github.io/AvantiHairSalon/pago-pendiente.html'
        },
        auto_return: 'approved'
    };

    try {
        const resp = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // <-- aquí va el Access Token SANDBOX del VENDEDOR. Formato correcto: 'Bearer TEST-...'
                'Authorization': 'Bearer ' + SELLER_ACCESS_TOKEN
            },
            body: JSON.stringify(payload)
        });

        // DEBUG: ver status y json
        console.log('[MP] fetch status:', resp.status, resp.statusText);
        const data = await resp.json();
        console.log('[MP] respuesta crear preferencia:', data);

        // Si hay sandbox_init_point lo usamos (mejor para sandbox). Sino usamos mp.checkout con id.
        const sandboxUrl = data.sandbox_init_point || data.init_point || null;

        if (sandboxUrl) {
            console.log('[MP] Abriendo sandbox_init_point:', sandboxUrl);
            // Abrir en nueva pestaña para no perder la tienda
            window.open(sandboxUrl, '_blank');
            // Opcional: vaciar carrito aquí si ya querés resetear (comenta si no)
            // vaciarCarrito();
        } else if (data.id) {
            console.log('[MP] Iniciando mp.checkout con preference id:', data.id);
            mp.checkout({
                preference: { id: data.id },
                autoOpen: true
            });
            // vaciarCarrito();
        } else {
            alert('No se pudo crear la preferencia de pago. Revisá la consola.');
            console.error('Respuesta inesperada de MP:', data);
        }
    } catch (err) {
        console.error('Error creando preferencia MP:', err);
        if (err && err.message && /CORS|NetworkError/i.test(err.message)) {
            alert('Error de conexión (CORS/Network). Ver consola para detalles. Si ocurre, usá el backend de prueba (ver fallback).');
        } else {
            alert('Error en la conexión con Mercado Pago. Revisá la consola.');
        }
    }
}

// Exponer globalmente (por si HTML usa onclick="finalizarCompra()")
window.finalizarCompra = finalizarCompra;

// ——————————————————————————————
// 9. Auto-ejecución al cargar
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito();
    updateCartCount();
});
