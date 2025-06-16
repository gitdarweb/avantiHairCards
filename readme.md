Avanti Hair Salon

Sitio estático de e-commerce (Front-end)

Repositorio de la primera entrega del proyecto Avanti Hair Salon: una tienda online minimalista para mostrar y vender productos de cuidado del cabello.

https://gitdarweb.github.io/AvantiHairSalon/

Importante: Esta primera entrega demuestra la maquetación, estilos, interactividad y flujo principal de navegación. La siguiente fase completará el proceso de compra y la autenticación de usuarios.


🚀 Estructura del Proyecto

AvantiHairSalon/
├── index.html           # Página principal
├── productos/           # Catálogos de marcas y categorías
│   ├── moroccanoil.html
│   ├── tigi.html
│   ├── revlon.html
│   ├── olaplex.html
│   ├── hairssime.html
│   ├── avantibox.html
│   ├── karseell.html
│   ├── cepillos.html
│   ├── shampoos.html     # Catálogo “Shampoos”
│   ├── acondicionadores.html
│   ├── mascaras.html
│   └── serums.html
├── styles.css           # Estilos globales y responsivos
├── products.js          # Listados de productos por marca y por categoría
├── main.js              # Lógica general (hamburguesa, carga dinámica, animaciones)
├── cart.js              # Manejo de carrito en localStorage y contador
├── slider.js            # Carrusel de imágenes manual
└── img/                 # Imágenes (logos, productos, iconos)

🎯 Funcionalidades implementadas

1. Diseño y estructura (HTML + CSS)

Barra superior: mensaje promocional.

Header minimalista: logo, buscador, acciones de usuario y menú hamburguesa responsive.

Sidebar: navegación lateral que se expande/colapsa sin frameworks.

Hero slider: carrusel manual de 3 imágenes con puntos de navegación.

Iconos de categorías: sección con 4 iconos (Shampoos, Acondicionadores, Máscaras, Serums).

Catálogos por marca: rejilla 4×2 de 8 logos que llevan a páginas de marca.

Beneficios destacados: sección “Cómo Comprar” con iconos y textos.

"Sección Nosotras": texto e imagen mitad y mitad con animación fade-in.

Info y carrito: tarjetas de contacto minimalistas y enlace a carrito.

WhatsApp flotante: icono fijo para chat.

Footer: enlaces a secciones y políticas.

2. Interactividad (JavaScript)

Hamburguesa & sidebar: toggle + cierre automático al navegar.

Carrusel manual: función goToSlide(index) mueve el slider.

Carga dinámica de productos: usa products.js y productosPorMarca para poblar cada HTML de marca o categoría.

Carrito básico: cart.js guarda en localStorage, muestra contador en header y lista en carrito.html.

Animaciones de scroll: fade-in de secciones cuando entran en viewport.

3. Responsividad

Grid y flex adaptables a móviles y tablets.

Media queries con breakpoints para rejillas, tipografías e imágenes.

Menú hamburguesa fijo en móviles.

📋 Qué falta implementar (Próxima entrega)

Finalizar carrito completo:

Página de resumen (carrito.html) con imágenes, edición de cantidades y total dinámico.

Integrar botones + y - dentro del carrito.

Checkout simulado (sin pasarelas reales por el momento).

Buscador funcional:

Filtrar productos en tiempo real según texto.

Registro / Login de usuarios:

Formularios básicos y validación.

Optimización de assets:

Subir imágenes reales de productos en img/.

Mejorar SEO: etiquetas alt, metadatos.

Integración futura:

Conexión a backend (usuarios, inventario, pasarela de pago).

Envío de órdenes vía API o email.



Autor

Desarrollado por GitDarWeb, para Avanti Hair Salon