AvantiHairCards
AvantiHairCards es una tienda online para la venta de productos de cuidado capilar, con un carrito de compras dinámico y pagos seguros integrados a través de Mercado Pago. El proyecto está alojado en Render (https://avantihaircards.onrender.com) y permite a los usuarios agregar productos al carrito, gestionar su contenido y realizar pagos en un entorno de producción.
Características

Catálogo de productos: Muestra productos (ej: shampoos) con nombre, precio e imagen.
Carrito dinámico: Agrega, elimina y actualiza productos en el carrito, con almacenamiento en localStorage.
Pagos reales: Integración con Mercado Pago para procesar pagos seguros.
Redirecciones: Páginas de éxito (pago-exitoso.html), fallo (pago-fallido.html) y pendiente (pago-pendiente.html) tras el pago.
Responsive: Diseño adaptable para dispositivos móviles y de escritorio.
Backend seguro: Servidor Node.js que sirve archivos estáticos y gestiona pagos.

Estructura del proyecto
avantiHairCards/
├── backend/
│   └── server.js          # Backend Node.js con Express y Mercado Pago
├── css/
│   └── styles.css         # Estilos CSS para el frontend
├── js/
│   ├── carts.js           # Lógica del carrito y conexión con Mercado Pago
│   └── renderProducts.js  # Renderiza productos dinámicamente
├── pago-exitoso.html      # Página tras pago exitoso
├── pago-fallido.html      # Página tras pago fallido
├── pago-pendiente.html    # Página tras pago pendiente
├── carrito.html           # Página del carrito
├── shampoos.html          # Página de productos (ejemplo)
├── index.html             # Página principal
└── README.md              # Este archivo

Requisitos previos

Node.js: v16 o superior (para el backend).
Git: Para clonar el repositorio.
Cuenta de Mercado Pago: Token de producción (PROD_ACCESS_TOKEN) para pagos reales.
Render: Para alojar el proyecto (frontend y backend).
Navegador: Chrome, Firefox, o cualquier navegador moderno.

Instalación

Clonar el repositorio:
git clone https://github.com/gitdarweb/avantiHairCards.git
cd avantiHairCards


Instalar dependencias del backend:
cd backend
npm install

Dependencias: express, cors, dotenv, mercadopago.

Configurar variables de entorno:Crea un archivo .env en backend/ con:
PORT=3000
FRONTEND_URL=https://avantihaircards.onrender.com
FRONTEND_ORIGINS=*
MERCADOPAGO_ACCESS_TOKEN=<tu-token-de-produccion>


Probar localmente:

Backend:cd backend
node server.js

Abre http://localhost:3000/health para verificar (✅ Backend Avanti funcionando).
Frontend:Usa un servidor local (ej: Live Server en VS Code) en la raíz del proyecto (http://localhost:5500).


Desplegar en Render:

Crea un servicio Web Service en dashboard.render.com.
Conecta el repositorio (gitdarweb/avantiHairCards).
Configura las variables de entorno en Settings > Environment:
PORT: 3000
FRONTEND_URL: https://avantihaircards.onrender.com
FRONTEND_ORIGINS: *
MERCADOPAGO_ACCESS_TOKEN: <tu-token-de-produccion>


Configura el comando de inicio: node backend/server.js.
Despliega: Manual Deploy > Clear build cache & deploy.



Uso

Abre https://avantihaircards.onrender.com (o http://localhost:5500 en local).
Navega a shampoos.html (u otras páginas de productos).
Clic en "Agregar al carrito" para añadir productos.
Ve a carrito.html para ver el carrito, eliminar productos o ajustar cantidades.
Clic en "Finalizar compra" para pagar con Mercado Pago.
Tras el pago:
Éxito: Redirige a pago-exitoso.html, carrito se vacía.
Fallo: Redirige a pago-fallido.html.
Pendiente: Redirige a pago-pendiente.html.



Detalles técnicos

Frontend:
HTML/CSS/JS: Páginas estáticas con carts.js para el carrito y renderProducts.js para mostrar productos.
localStorage: Almacena el carrito localmente.
Fetch: Conecta con el backend para crear preferencias de pago.


Backend:
Express: Sirve archivos estáticos y el endpoint /create_preference.
Mercado Pago: Procesa pagos reales con init_point.
CORS: Configurado para permitir https://avantihaircards.onrender.com y pruebas locales.


Despliegue:
Render aloja frontend (HTML, CSS, JS) y backend (server.js) en https://avantihaircards.onrender.com.



Pruebas

Carrito:
Agrega productos en shampoos.html → El contador en la navbar aumenta.
En carrito.html, elimina o ajusta productos → Total y contador se actualizan.


Pagos:
Clic en "Finalizar compra" → Abre Mercado Pago.
Usa una tarjeta de prueba (en producción, el dinero llega a la cuenta configurada).
Verifica redirecciones a pago-exitoso.html, pago-fallido.html, o pago-pendiente.html.


Consola:
Abre F12 > Console para logs de carts.js (ej: [MP] fetch status: 200 OK).
En Render, revisa Logs para el backend (ej: 🛒 Carrito recibido (server): [...]).



Notas

Asegúrate de usar el token de producción de Mercado Pago en MERCADOPAGO_ACCESS_TOKEN.
Los archivos HTML (pago-exitoso.html, etc.) deben estar en la raíz del proyecto.
Para pruebas locales, usa Live Server en VS Code (http://localhost:5500).
Si cambias la URL de Render, actualiza FRONTEND_URL y BACKEND_URL en carts.js.

Contacto
Para soporte o dudas, contacta a gitdarweb.
¡Gracias por usar AvantiHairCards! 😎