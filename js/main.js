console.log("main.js cargado");

// ==== MENÚ HAMBURGUESA CON CIERRE AUTOMÁTICO ====
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".burger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    if (hamburger && sidebar && overlay) {
        const toggleMenu = () => {
            // Mostrar/ocultar menú lateral
            sidebar.classList.toggle("active");
            // Mostrar/ocultar overlay
            overlay.classList.toggle("active");
            // Activar/desactivar animación de la hamburguesa
            hamburger.classList.toggle("active");
        };

        // Abrir/cerrar con clic en el icono
        hamburger.addEventListener("click", toggleMenu);
        // Cerrar al hacer clic en el overlay
        overlay.addEventListener("click", toggleMenu);
        // Cerrar al hacer clic en cualquier link
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", toggleMenu);
        });
    }
});


// ==== FUNCIONES AL CARGAR DOM ====
document.addEventListener("DOMContentLoaded", () => {
    // === CARGA DE PRODUCTOS POR MARCA O CATEGORÍA ===
    const path = window.location.pathname;
    const match = path.match(/\/productos\/(\w+)\.html$/); // Ej: productos/shampoos.html

    // Detectar si está en GitHub Pages
    const isGitHubPages = location.hostname.includes("github.io");
    const basePath = isGitHubPages ? "/AvantiHairSalon" : "";

    if (match) {
        const marca = match[1];
        const productos = productosPorMarca?.[marca] || products?.[marca];

        if (productos) {
            const contenedor = document.getElementById("product-list");

            productos.forEach((prod) => {
                const card = document.createElement("div");
                card.className = "categoria-card";

                const img = document.createElement("img");
                img.src = `${basePath}/img/img-productos/${marca}/${prod.imagen}`;
                img.alt = prod.nombre;
                img.onerror = () => img.src = `${basePath}/img/productos/placeholder.jpg`;
                img.classList.add("product-image");

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
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
    ui