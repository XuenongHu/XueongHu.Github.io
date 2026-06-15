document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Dark/Light Mode Theme Toggle
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ==========================================================================
    // 2. Typing Effect for Research Interests
    // ==========================================================================
    const words = [
        "Machine Learning Systems.", 
        "Computer Vision & Robotics.", 
        "Deep Learning Optimization.", 
        "Distributed AI Infrastructure."
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000; // How long the word stays visible
    const typingTextSpan = document.querySelector(".typing-text");

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove character
            typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add character
            typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = typingDelay;

        if (isDeleting) {
            typeSpeed /= 2; // Erase faster than typing
        }

        // If word is completely typed out
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay; // Pause at end of word
            isDeleting = true;
        } 
        // If word is completely erased
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex++; // Move to next word
            if (wordIndex >= words.length) wordIndex = 0; // Loop back
            typeSpeed = 500; // Pause before starting next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start the typing animation if the element exists
    if (typingTextSpan) {
        setTimeout(type, newWordDelay);
    }
});