// === PRODUCTOS POR MARCA (para los 8 catálogos por logo) ===
const productosPorMarca = {
    moroccanoil: [
        { nombre: "Hydration Shampoo 250ml", precio: 0, imagen: "Hydration-Shampoo-250ml.webp" },
        { nombre: "Hydration Acondicionador 250ml", precio: 0, imagen: "Hydration-Conditioner-250ml-.webp" },
        { nombre: "Hydration Mascara Intensa 250ml", precio: 0, imagen: "Hydration-Máscara-Intensa-250m.webp" },
        { nombre: "Hydration Mascara Ultraligera 250ml", precio: 0, imagen: "Hydration-Máscara-Ultraligera-250m.webp" },
        { nombre: "Curly Shampoo 250ml", precio: 0, imagen: "SHAMPOO_CURLY.webp" },
        { nombre: "Curly Acondicionador 250ml", precio: 0, imagen: "CONDITIONER_CURLY.webp" },
        { nombre: "Crema intensa para rizos 300ml", precio: 0, imagen: "Crema-intensa-para-rizos-300ml.webp" },
        { nombre: "Repair Shampoo 250ml", precio: 0, imagen: "Repair-Shampoo-250ml.webp" },
        { nombre: "Repair Mascara 250ml", precio: 0, imagen: "Repair-Mascara-250ml.webp" },
        { nombre: "Frizz Control Shampoo 250ml", precio: 0, imagen: "SHAMPOO_FRIZZ-CONTROL_250mL_.webp" },
        { nombre: "Frizz Control Acondicionador 250ml", precio: 0, imagen: "CONDITIONER_FRIZZ-CONTROL_250ml.webp" },
        { nombre: "Frizz Control Mascara 250ml", precio: 0, imagen: "frizz-control-mascara-250ml.webp" },
        { nombre: "Frizz Control Loción suavizante 300ml", precio: 0, imagen: "Frizz-control-locion-suavizante-300ml.webp" },
        { nombre: "Frizz Control Spray 160ml", precio: 0, imagen: "Frizz-control-spray-160ml.webp" },
        { nombre: "Color Care Shampoo 250ml", precio: 0, imagen: "Color-Care-Shampoo.webp" },
        { nombre: "Color Care Acondicionador 250ml", precio: 0, imagen: "Color-Care-Conditioner.webp" },
        { nombre: "Tratamiento de Argán Clásico 25ml", precio: 0, imagen: "Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Clásico 50ml", precio: 0, imagen: "Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Clásico 100ml", precio: 0, imagen: "Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 25ml", precio: 0, imagen: "Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 50ml", precio: 0, imagen: "Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 100ml", precio: 0, imagen: "Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Bruma Perfumada", precio: 0, imagen: "Bruma-Parfum.webp" }
    ],
    tigi: [
        { nombre: "Recovery Shampoo 400ml", precio: 0, imagen: "recovery-shampoo-jpg.jpg" },
        { nombre: "Recovery Acondicionador 400ml", precio: 0, imagen: "recovery-acondicionador.webp" },
        { nombre: "Resurrection Shampoo 400ml", precio: 0, imagen: "resurrection-shampoo.webp" },
        { nombre: "Resurrection Acondicionador 400ml", precio: 0, imagen: "resurrection-acondicionador.webp" },
        { nombre: "Colour Goddess Shampoo 400ml", precio: 0, imagen: "goddess-shampoo.webp" },
        { nombre: "Colour Goddess Acondicionador 400ml", precio: 0, imagen: "goddess-acondicionador.webp" },
        { nombre: "After Party 100ml", precio: 0, imagen: "afterparty.webp" },
        { nombre: "Foxy Curls 200ml", precio: 0, imagen: "foxycurls.webp" },
        { nombre: "Amplifier 113ml", precio: 0, imagen: "amplifier.webp" },
        { nombre: "Small Talk 240ml", precio: 0, imagen: "smalltalk.webp" }



    ],
    revlon: [
        { nombre: "Equave Lisslook - Serum 85ml", precio: 0, imagen: "equave-bifase.png" },
        { nombre: "Equave Bifase Hidratante", precio: 0, imagen: "equave-lisslook.png" },
        { nombre: "Unique One - 10 Beneficios 150ml", precio: 0, imagen: "uniqone.png" }
    ],
    olaplex: [
        { nombre: "Nro 0 155ml", precio: 0, imagen: "olaplex-0.jpg" },
        { nombre: "Nro 3 100ml", precio: 0, imagen: "olaplex-3.png" },
        { nombre: "Nro 4 250ml", precio: 0, imagen: "olaplex-4.png" },
        { nombre: "Nro 5 250ml", precio: 0, imagen: "olaplex-5.jpg" },
        { nombre: "Nro 6 100ml", precio: 0, imagen: "olaplex-6.jpg" },
        { nombre: "Nro 7 30ml", precio: 0, imagen: "olaplex-7.webp" },
        { nombre: "Nro 8 100ml", precio: 0, imagen: "olaplex-8.jpg" },
        { nombre: "Nro 9 90ml", precio: 0, imagen: "olaplex-9.jpg" },
        { nombre: "Nro 10 200ml", precio: 0, imagen: "olaplex-10.png" }
    ],
    hairssime: [
        { nombre: "Nutrikeratina 225mg", precio: 0, imagen: "nutrikeratina.webp" },
        { nombre: "Nutri Advance Serum 63ml", precio: 0, imagen: "nutri-serum.webp" },
        { nombre: "Glow Brillo Spray 485ml", precio: 0, imagen: "glow-spray.webp" }
    ],
    avantibox: [
        { nombre: "Avanti Box Set (4 piezas)", precio: 0, imagen: "AVANTI-BOX.png" },
        { nombre: "Funda de Almohada", precio: 0, imagen: "fundas.png" },
        { nombre: "Scrunchies", precio: 0, imagen: "scrunchie.png" },
        { nombre: "Vincha", precio: 0, imagen: "vincha.png" },
        { nombre: "Cofia", precio: 0, imagen: "cofi.png" }
    ],
    karseell: [
        { nombre: "Máscara 500ml", precio: 0, imagen: "karseell-1024x1024.png" }
    ],
    cepillos: [
        { nombre: "Cepillo Eurostil", precio: 0, imagen: "karseell-1024x1024.png" },
        { nombre: "Masajeador", precio: 0, imagen: "karseell-1024x1024.png" }
    ]
};

// === PRODUCTOS POR CATEGORÍA (para iconos: shampoos, etc.) ===
const products = {};

products["shampoos"] = [
    { nombre: "Hydration Shampoo 250ml", precio: 0, imagen: "hydration.jpg" },
    { nombre: "Curly Shampoo 250ml", precio: 0, imagen: "curly.jpg" },
    { nombre: "Repair Shampoo 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Shampoo 250ml", precio: 0, imagen: "frizz.jpg" },
    { nombre: "Color Care Shampoo 250ml", precio: 0, imagen: "colorcare.jpg" },
    { nombre: "Recovery Shampoo 400ml", precio: 0, imagen: "recovery.jpg" },
    { nombre: "Resurrección Shampoo 400ml", precio: 0, imagen: "resurreccion.jpg" },
    { nombre: "Colour Goddess Shampoo 400ml", precio: 0, imagen: "goddess.jpg" }
];

products["acondicionadores"] = [
    { nombre: "Hydration Acondicionador 250ml", precio: 0, imagen: "hydration.jpg" },
    { nombre: "Curly Acondicionador 250ml", precio: 0, imagen: "curly.jpg" },
    { nombre: "Repair Acondicionador 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Acondicionador 250ml", precio: 0, imagen: "frizz.jpg" },
    { nombre: "Color Care Acondicionador 250ml", precio: 0, imagen: "colorcare.jpg" },
    { nombre: "Recovery Acondicionador 400ml", precio: 0, imagen: "recovery.jpg" },
    { nombre: "Resurrección Acondicionador 400ml", precio: 0, imagen: "resurreccion.jpg" },
    { nombre: "Colour Goddess Acondicionador 400ml", precio: 0, imagen: "goddess.jpg" }
];

products["mascaras"] = [
    { nombre: "Hydration Máscara Intensa 250ml", precio: 0, imagen: "hydration_intensa.jpg" },
    { nombre: "Hydration Máscara Ultraligera 250ml", precio: 0, imagen: "hydration_ultraligera.jpg" },
    { nombre: "Repair Máscara 250ml", precio: 0, imagen: "repair.jpg" },
    { nombre: "Frizz Control Máscara 250ml", precio: 0, imagen: "frizz.jpg" }
];

products["serums"] = [
    { nombre: "Equave Liss Look Serum 85ml", precio: 0, imagen: "equave.jpg" },
    { nombre: "Nutri Advance Serum 63ml", precio: 0, imagen: "nutri_advance.jpg" },
    { nombre: "Tratamiento de Argán Clásico 25ml", precio: 0, imagen: "argan_25.jpg" },
    { nombre: "Tratamiento de Argán Clásico 50ml", precio: 0, imagen: "argan_50.jpg" },
    { nombre: "Tratamiento de Argán Clásico 100ml", precio: 0, imagen: "argan_100.jpg" },
    { nombre: "Tratamiento de Argán Light 25ml", precio: 0, imagen: "argan_light_25.jpg" },
    { nombre: "Tratamiento de Argán Light 50ml", precio: 0, imagen: "argan_light_50.jpg" },
    { nombre: "Tratamiento de Argán Light 100ml", precio: 0, imagen: "argan_light_100.jpg" }
];
  