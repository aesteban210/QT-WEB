// Script para futuras funcionalidades, por ejemplo:
// - Menú de navegación móvil (hamburguesa)
// - Animaciones al hacer scroll
// - Validación de formularios (más avanzada)

// Ejemplo básico de scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
