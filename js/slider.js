// --- js/slider.js ---
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("slider-track");
    const dots = Array.from(document.querySelectorAll("#slider-dots .dot"));
    const totalSlides = dots.length;
    let currentIndex = 0;
    let intervalId;

    function goToSlide(index) {
        // Ajusta la posición del track
        track.style.transform = `translateX(-${index * 100}%)`;
        // Actualiza clases de los dots
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const next = (currentIndex + 1) % totalSlides;
        goToSlide(next);
    }

    // Configura evento click en cada punto
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(intervalId);
            goToSlide(i);
            intervalId = setInterval(nextSlide, 5000);
        });
    });

    // Arranca la auto-reproducción
    intervalId = setInterval(nextSlide, 5000);
});
// --- End of js/slider.js ---