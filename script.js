// Fade in elements on scroll
const fadeElements = document.querySelectorAll('.part-card, .hero-text, .hero-image');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);

// Add fade-in class to CSS
document.styleSheets[0].insertRule(`
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`, 0);

// Set initial opacity and transform for fade-in elements
fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
});