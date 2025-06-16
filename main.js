console.log("main.js cargado");

// ==== MENÚ HAMBURGUESA ====
// Referencias
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// Toggle al hacer clic en la hamburguesa
if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Cerrar al hacer clic en **cualquier** enlace de la sidebar
    sidebar.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
    });
}

// ==== FUNCIONES AL CARGAR DOM ====
document.addEventListener("DOMContentLoaded", () => {
    // === CARGA DE PRODUCTOS POR MARCA O CATEGORÍA ===
    const path = window.location.pathname;
    const match = path.match(/\/productos\/(\w+)\.html$/); // Ej: productos/shampoos.html

    if (match) {
        const marca = match[1]; // Ej: "tigi", "shampoos"
        const productos = productosPorMarca?.[marca] || products?.[marca]; // compatible con ambos

        if (productos) {
            const contenedor = document.getElementById("product-list");

            productos.forEach((prod) => {
                const card = document.createElement("div");
                card.className = "categoria-card";

                const img = document.createElement("img");
                img.src = `../img/${marca}/${prod.imagen || 'placeholder.jpg'}`;
                img.alt = prod.nombre;

                const nombre = document.createElement("p");
                nombre.textContent = prod.nombre;

                const precio = document.createElement("p");
                precio.textContent = `$${prod.precio || 0}`;

                const boton = document.createElement("button");
                boton.textContent = "Agregar al carrito";
                boton.classList.add("btn-hero", "small");
                boton.onclick = () => {
                    addToCart(prod.nombre, prod.precio);
                    alert(`"${prod.nombre}" agregado al carrito`);
                };

                card.appendChild(img);
                card.appendChild(nombre);
                card.appendChild(precio);
                card.appendChild(boton);

                contenedor.appendChild(card);
            });
        }
    }

    // === Mostrar contador del carrito si existe
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // === FADE-IN SCROLL ANIMATION ===
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // se activa solo una vez
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});