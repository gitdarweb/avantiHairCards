const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const mercadopago = require('mercadopago');

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed origins (ajusta en .env o Render dashboard)
const FRONTEND_ORIGINS = (process.env.FRONTEND_ORIGINS || 'http://localhost:5500,https://avantihaircards.onrender.com').split(',');

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // allow tools like Postman
        if (FRONTEND_ORIGINS.indexOf('*') !== -1 || FRONTEND_ORIGINS.indexOf(origin) !== -1) {
            return callback(null, true);
        }
        return callback(new Error('CORS - origen no permitido: ' + origin));
    }
};

app.use(cors(corsOptions));
app.use(express.json());
// Servir archivos estáticos desde la raíz (pago-exitoso.html, pago-fallido.html, etc.)
app.use(express.static(path.join(__dirname, '../')));

// ---------------------------
// Endpoint de pago - acepta { carrito: [...] } o [...]
// ---------------------------
const mp = new mercadopago.MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

app.post('/create_preference', async (req, res) => {
    try {
        let carrito = [];
        if (Array.isArray(req.body)) {
            carrito = req.body;
        } else if (Array.isArray(req.body.carrito)) {
            carrito = req.body.carrito;
        } else if (Array.isArray(req.body.items)) {
            carrito = req.body.items;
        } else {
            carrito = [];
        }

        if (!carrito || carrito.length === 0) {
            return res.status(400).json({ error: 'El carrito está vacío o mal enviado' });
        }

        // Validar ítems
        const items = carrito.map(it => ({
            title: String(it.nombre || it.title || 'Producto'),
            quantity: Number(it.cantidad || it.quantity) > 0 ? Number(it.cantidad || it.quantity) : 1,
            unit_price: Number(it.precio || it.unit_price) >= 0 ? Number(it.precio || it.unit_price) : 0,
        }));

        const isValidItems = items.every(item => item.title && !isNaN(item.quantity) && item.quantity > 0 && !isNaN(item.unit_price) && item.unit_price >= 0);
        if (!isValidItems) {
            return res.status(400).json({ error: 'Ítems inválidos en el carrito' });
        }

        const total = items.reduce((s, i) => s + i.quantity * i.unit_price, 0);
        console.log('🛒 Carrito recibido (server):', carrito);
        console.log('💰 Total calculado (server):', total);

        const preference = {
            items,
            back_urls: {
                success: `${process.env.FRONTEND_URL}/pago-exitoso.html`,
                failure: `${process.env.FRONTEND_URL}/pago-fallido.html`,
                pending: `${process.env.FRONTEND_URL}/pago-pendiente.html`,
            },
            auto_return: 'approved',
        };

        const pref = new mercadopago.Preference(mp);
        const result = await pref.create({ body: preference });
        const prefData = result.body || result;

        res.json({
            id: prefData.id,
            init_point: prefData.init_point,
            total
        });
    } catch (err) {
        console.error('❌ Error en create_preference:', err);
        res.status(500).json({ error: 'Error al crear preferencia', detalle: err.message });
    }
});

// Health
app.get('/health', (_req, res) => res.send('✅ Backend Avanti funcionando'));

// Start
app.listen(PORT, () => {
    console.log(`🚀 Backend Avanti seguro en puerto ${PORT}`);
    console.log(`Allowed origins: ${FRONTEND_ORIGINS.join(',')}`);
});