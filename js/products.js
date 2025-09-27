// === PRODUCTOS POR MARCA (para los 8 catálogos por logo) ===
const productosPorMarca = {
    moroccanoil: [
        { nombre: "Hydration Shampoo 250ml", precio: 56000, imagen: "moroccanoil/Hydration-Shampoo-250ml.webp" },
        { nombre: "Hydration Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Hydration-Conditioner-250ml-.webp" },
        { nombre: "Hydration Mascara Intensa 250ml", precio: 88000, imagen: "moroccanoil/Hydration-Máscara-Intensa-250m.webp" },
        { nombre: "Hydration Mascara Ultraligera 250ml", precio: 88000, imagen: "moroccanoil/Hydration-Máscara-Ultraligera-250m.webp" },
        { nombre: "Curly Shampoo 250ml", precio: 56000, imagen: "moroccanoil/SHAMPOO_CURLY.webp" },
        { nombre: "Curly Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/CONDITIONER_CURLY.webp" },
        { nombre: "Crema intensa para rizos 300ml", precio: 75000, imagen: "moroccanoil/Crema-intensa-para-rizos-300ml.webp" },
        { nombre: "Repair Shampoo 250ml", precio: 56000, imagen: "moroccanoil/Repair-Shampoo-250ml.webp" },
        { nombre: "Repair Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Repair-Conditioner-250ml-.webp" },
        { nombre: "Repair Mascara 250ml", precio: 88000, imagen: "moroccanoil/Repair-Mascara-250ml.webp" },
        { nombre: "Frizz Control Shampoo 250ml", precio: 56000, imagen: "moroccanoil/SHAMPOO_FRIZZ-CONTROL_250mL_.webp" },
        { nombre: "Frizz Control Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/CONDITIONER_FRIZZ-CONTROL_250ml.webp" },
        { nombre: "Frizz Control Mascara 250ml", precio: 88000, imagen: "moroccanoil/frizz-control-mascara-250ml.webp" },
        { nombre: "Frizz Control Loción suavizante 300ml", precio: 75000, imagen: "moroccanoil/Frizz-control-locion-suavizante-300ml.webp" },
        { nombre: "Frizz Control Spray 160ml", precio: 65000, imagen: "moroccanoil/Frizz-control-spray-160ml.webp" },
        { nombre: "Color Care Shampoo 250ml", precio: 56000, imagen: "moroccanoil/Color-Care-Shampoo.webp" },
        { nombre: "Color Care Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Color-Care-Conditioner.webp" },
        { nombre: "Tratamiento de Argán Clásico 25ml", precio: 41000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Clásico 50ml", precio: 73000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Clásico 100ml", precio: 98000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 25ml", precio: 41000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 50ml", precio: 73000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Tratamiento de Argán Light 100ml", precio: 98000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
        { nombre: "Bruma Perfumada", precio: 37000, imagen: "moroccanoil/Bruma-Parfum.webp" }
    ],
    tigi: [
        { nombre: "Recovery Shampoo 400ml", precio: 47000, imagen: "tigi/recovery-shampoo-jpg.jpg" },
        { nombre: "Recovery Acondicionador 400ml", precio: 53200, imagen: "tigi/recovery-acondicionador.webp" },
        { nombre: "Resurrection Shampoo 400ml", precio: 47000, imagen: "tigi/resurrection-shampoo.webp" },
        { nombre: "Resurrection Acondicionador 400ml", precio: 53200, imagen: "tigi/resurrection-acondicionador.webp" },
        { nombre: "Colour Goddess Shampoo 400ml", precio: 47000, imagen: "tigi/goddess-shampoo.webp" },
        { nombre: "Colour Goddess Acondicionador 400ml", precio: 53200, imagen: "tigi/goddess-acondicionador.webp" },
        { nombre: "After Party 100ml", precio: 50400, imagen: "tigi/afterparty.webp" },
        { nombre: "Foxy Curls 200ml", precio: 42600, imagen: "tigi/foxycurls.webp" },
        { nombre: "Amplifier 113ml", precio: 41500, imagen: "tigi/amplifier.webp" },
        { nombre: "Small Talk 240ml", precio: 46000, imagen: "tigi/smalltalk.webp" }



    ],
    revlon: [
        { nombre: "Equave Lisslook - Serum 85ml", precio: 22000, imagen: "revlon/equave-bifase.png" },
        { nombre: "Equave Bifase Hidratante", precio: 18000, imagen: "revlon/equave-lisslook.png" },
        { nombre: "Unique One - 10 Beneficios 150ml", precio: 41000, imagen: "revlon/uniqone.png" }
    ],
    olaplex: [
        { nombre: "Nro 0 155ml", precio: 57000, imagen: "olaplex/olaplex-0.jpg" },
        { nombre: "Nro 3 100ml", precio: 57000, imagen: "olaplex/olaplex-3.png" },
        { nombre: "Nro 4 250ml", precio: 57000, imagen: "olaplex/olaplex-4.png" },
        { nombre: "Nro 5 250ml", precio: 57000, imagen: "olaplex/olaplex-5.jpg" },
        { nombre: "Nro 6 100ml", precio: 57000, imagen: "olaplex/olaplex-6.jpg" },
        { nombre: "Nro 7 30ml", precio: 57000, imagen: "olaplex/olaplex-7.webp" },
        { nombre: "Nro 8 100ml", precio: 57000, imagen: "olaplex/olaplex-8.jpg" },
        { nombre: "Nro 9 90ml", precio: 57000, imagen: "olaplex/olaplex-9.jpg" },
        { nombre: "Nro 10 200ml", precio: 57000, imagen: "olaplex/olaplex-10.png" }
    ],
    hairssime: [
        { nombre: "Nutrikeratina 225mg", precio: 29000, imagen: "hairssime/nutrikeratina.webp" },
        { nombre: "Nutri Advance Serum 63ml", precio: 26000, imagen: "hairssime/nutri-serum.webp" },
        { nombre: "Glow Brillo Spray 485ml", precio: 25000, imagen: "hairssime/glow-spray.webp" }
    ],
    avantibox: [
        { nombre: "Avanti Box Set (4 piezas)", precio: 52000, imagen: "avantibox/AVANTI-BOX.png" },
        { nombre: "Funda de Almohada", precio: 0, imagen: "avantibox/fundas.png" },
        { nombre: "Scrunchies", precio: 0, imagen: "avantibox/scrunchie.png" },
        { nombre: "Vincha", precio: 0, imagen: "avantibox/vincha.png" },
        { nombre: "Cofia", precio: 0, imagen: "avantibox/cofia.png" }
    ],
    karseell: [
        { nombre: "Máscara 500ml", precio: 50000, imagen: "karseell/karseell-1024x1024.png" },
        { nombre: "Serum maca power 50ml", precio: 36400, imagen: "karseell/maca.essence.oil.png" },
        { nombre: "Volumen shampoo 200ml ", precio: 36400, imagen: "karseell/shampoo.volume.png" },
        { nombre: "Repair Acondicionador 200ml ", precio: 36400, imagen: "karseell/conditioner.repair.celeste.png" },
        { nombre: "Moisture shampoo 500ml ", precio: 42000, imagen: "karseell/shampoo.moisture.png" },
        { nombre: "Repair Acondicionador 500ml", precio: 42000, imagen: "karseell/conditioner.repair.verde.png" }
    ],
    cepillos: [
        { nombre: "Cepillo Eurostil", precio: 10000, imagen: "cepillos/IMG_5230.webp" },
        { nombre: "Masajeador", precio: 6000, imagen: "cepillos/IMG_5235.webp" }
    ]
};

// === PRODUCTOS POR CATEGORÍA (para iconos: shampoos, etc.) ===
const products = {};

products["shampoos"] = [
    { nombre: "Hydration Shampoo 250ml", precio: 56000, imagen:  "moroccanoil/Hydration-Shampoo-250ml.webp" },
    { nombre: "Curly Shampoo 250ml", precio: 56000, imagen: "moroccanoil/SHAMPOO_CURLY.webp" },
    { nombre: "Repair Shampoo 250ml", precio: 56000, imagen: "moroccanoil/Repair-Shampoo-250ml.webp" },
    { nombre: "Frizz Control Shampoo 250ml", precio: 56000, imagen: "moroccanoil/SHAMPOO_FRIZZ-CONTROL_250mL_.webp"},
    { nombre: "Color Care Shampoo 250ml", precio: 56000, imagen: "moroccanoil/Color-Care-Shampoo.webp" },
    { nombre: "Recovery Shampoo 400ml", precio: 47000, imagen: "tigi/recovery-shampoo-jpg.jpg" },
    { nombre: "Resurrección Shampoo 400ml", precio: 47000, imagen: "tigi/resurrection-shampoo.webp" },
    { nombre: "Colour Goddess Shampoo 400ml", precio: 47000, imagen: "tigi/goddess-shampoo.webp" }
];

products["acondicionadores"] = [
    { nombre: "Hydration Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Hydration-Conditioner-250ml-.webp" },
    { nombre: "Curly Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/CONDITIONER_CURLY.webp" },
    { nombre: "Repair Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Repair-Conditioner-250ml-.webp" },
    { nombre: "Frizz Control Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/CONDITIONER_FRIZZ-CONTROL_250ml.webp" },
    { nombre: "Color Care Acondicionador 250ml", precio: 56000, imagen: "moroccanoil/Color-Care-Conditioner.webp" },
    { nombre: "Recovery Acondicionador 400ml", precio: 53200, imagen: "tigi/recovery-acondicionador.webp" },
    { nombre: "Resurrección Acondicionador 400ml", precio: 53200, imagen: "tigi/resurrection-acondicionador.webp" },
    { nombre: "Colour Goddess Acondicionador 400ml", precio: 53200, imagen: "tigi/goddess-acondicionador.webp" }
];

products["mascaras"] = [
    { nombre: "Hydration Máscara Intensa 250ml", precio: 88000, imagen: "moroccanoil/Hydration-Máscara-Intensa-250m.webp" },
    { nombre: "Hydration Máscara Ultraligera 250ml", precio: 88000, imagen: "moroccanoil/Hydration-Máscara-Ultraligera-250m.webp" },
    { nombre: "Repair Máscara 250ml", precio: 88000, imagen: "moroccanoil/Repair-Mascara-250ml.webp" },
    { nombre: "Frizz Control Máscara 250ml", precio: 88000, imagen: "moroccanoil/frizz-control-mascara-250ml.webp" }
];

products["serums"] = [
    { nombre: "Equave Liss Look Serum 85ml", precio: 22000, imagen: "revlon/equave-bifase.png" },
    { nombre: "Nutri Advance Serum 63ml", precio: 26000, imagen: "hairssime/nutri-serum.webp" },
    { nombre: "Tratamiento de Argán Clásico 25ml", precio: 41000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
    { nombre: "Tratamiento de Argán Clásico 50ml", precio: 73000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
    { nombre: "Tratamiento de Argán Clásico 100ml", precio: 98000, imagen: "moroccanoil/Tratamiento-Argan-Light-25-50-y-100ml.webp" },
    { nombre: "Tratamiento de Argán Light 25ml", precio: 41000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
    { nombre: "Tratamiento de Argán Light 50ml", precio: 73000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" },
    { nombre: "Tratamiento de Argán Light 100ml", precio: 98000, imagen: "moroccanoil/Tratamiento-Argan-Clásico-25-50-y-100ml.webp" }
];
  