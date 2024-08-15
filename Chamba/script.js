document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.service-button');
    const titles = [
        "Toma control de tu propia logística",
        "Soluciones únicas diseñadas a la medida",
        "Fulfillment flexible e integral",
        "Cobra en efectivo contra entrega",
        "La red de puntos de recolección y entrega más grande de México",
        "Logística tan única como tu negocio"
    ];
    
    const descriptions = [
        "Con diferentes opciones de envío, tarifas transparentes, rastreo satelital y una plataforma sencilla de usar, comenzar a auto-gestionar tu logística con envios99 es fácil y seguro.​",
        "Un servicio 100% personalizable que permite a nuestros clientes diseñar desde cero una solución logística que se adapte a sus necesidades sin importar de qué tan únicas sea tu industria.",
        "Nos conectamos a tu tienda, recolectamos, almacenamos, empacamos, entregamos y hasta cobramos contra entrega todas tus ventas de ecommerce.",
        "Crece tus ventas ofreciendo a tus clientes la posibilidad de pagar en efectivo sus compras al momento de entrega.",
        "Nos aliamos con más de 2mil negocios locales a lo largo de México para ofrecer la red más robusta de puntos de recolección y entrega del país.",
        "Paquetería, almacenaje y hasta cobro contra entrega. Explora nuestro universo 99minutos, tu logística en un solo lugar."
    ];
    let currentIndex = 0;

    function updateCarousel(index) {
        images.forEach((img, i) => img.classList.toggle('active', i === index));
        buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
        document.getElementById('hero-title').textContent = titles[index];
        document.getElementById('hero-description').textContent = descriptions[index];
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(index);
        });
    });

    setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos
});
