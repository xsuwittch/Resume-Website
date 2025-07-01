// Smooth scroll for nav links
document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('main section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'none';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    observer.observe(section);
}); 