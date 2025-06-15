// main.js
console.log("main.js cargado");

// ==== MENÚ HAMBURGUESA ====
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");
if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ==== CARGA DE PRODUCTOS POR MARCA ====
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const match = path.match(/\/productos\/(\w+)\.html$/); // detecta productos/tigi.html por ejemplo

    if (match) {
        const marca = match[1]; // Ej: "tigi"
        const productos = productosPorMarca[marca];

        if (productos) {
            const contenedor = document.getElementById("product-list");

            productos.forEach((prod) => {
                const card = document.createElement("div");
                card.className = "categoria-card";

                const img = document.createElement("img");
                img.src = `../img/productos/${prod.imagen || 'placeholder.jpg'}`;
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

                // Agrega los elementos a la tarjeta
                card.appendChild(img);
                card.appendChild(nombre);
                card.appendChild(precio);
                card.appendChild(boton);

                // Agrega la tarjeta al contenedor
                contenedor.appendChild(card);
            });
        }
    }

    // Mostrar contador del carrito (si existe la función)
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }
});
// === FADE-IN SCROLL ANIMATION ===
document.addEventListener("DOMContentLoaded", () => {
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
  
