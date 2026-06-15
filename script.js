// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const ctaBtn = document.getElementById('cta-btn');
    const message = document.getElementById('message');
    const themeToggle = document.getElementById('theme-toggle');

    // 1. CTA Button Click Event
    ctaBtn.addEventListener('click', () => {
        // Toggle the visibility of the success message
        message.classList.toggle('hidden');
    });

    // 2. Dark/Light Mode Toggle
    themeToggle.addEventListener('click', () => {
        // Check current theme attribute
        const currentTheme = document.body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
    });
});
