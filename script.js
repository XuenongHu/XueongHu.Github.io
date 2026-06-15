document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Dark/Light Mode Theme Toggle Logic
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Evaluate initial theme parameters safely
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggleBtn) themeToggleBtn.textContent = '🌙 Dark Mode';
    }

    // Toggle click handler sequence
    if (themeToggleBtn) {
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
    }

    // ==========================================================================
    // 2. Typing Automation Core Framework (Updated for Sustainable Energy Engine)
    // ==========================================================================
    const engineeringFields = [
        "Sustainable Energy Systems.", 
        "Smart Grid Infrastructure.", 
        "Transient Stability Modeling.", 
        "Renewable Integration Planning."
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000; 
    const typingTextSpan = document.querySelector(".typing-text");

    function type() {
        if (!typingTextSpan) return; // Escape sequence if execution happens on sub-pages
        
        const currentWord = engineeringFields[wordIndex];
        
        if (isDeleting) {
            typingTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = typingDelay;

        if (isDeleting) {
            typeSpeed /= 2; 
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay; 
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % engineeringFields.length;
            typeSpeed = 500; 
        }

        setTimeout(type, typeSpeed);
    }

    // Initialize animation execution track safely
    if (typingTextSpan) {
        setTimeout(type, 1000);
    }

    // ==========================================================================
    // 3. Responsive Mobile Menu Component Handler
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = '';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--bg-light)';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid var(--border)';
            }
        });
    }
});
