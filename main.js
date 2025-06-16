// main.js
console.log("main.js cargado");

// ==== MENÚ HAMBURGUESA ====
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// ==== CARGA DE PRODUCTOS POR MARCA O CATEGORÍA ====
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const match = path.match(/\/productos\/(\w+)\.html$/); // Ej: productos/shampoos.html

    if (match) {
        const clave = match[1]; // Ej: "tigi", "shampoos"
        const productos = productosPorMarca?.[clave] || products?.[clave]; // carga de marca o categoría

        if (productos && Array.isArray(productos)) {
            const contenedor = document.getElementById("product-list");

            productos.forEach((prod) => {
                const card = document.createElement("div");
                card.className = "categoria-card";

                const img = document.createElement("img");
                img.src = `../img/${clave}/${prod.imagen || 'placeholder.jpg'}`;
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

    // Contador del carrito
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // === FADE-IN SCROLL ANIMATION ===
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // animar solo una vez
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
