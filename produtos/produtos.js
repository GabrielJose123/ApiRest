
tailwind.config = {
    theme: {
        extend: {
            colors: {
                greenly: {
                    50: '#f0f9f0',
                    100: '#daf1da',
                    200: '#b8e6b8',
                    300: '#89d489',
                    400: '#58ba58',
                    500: '#389e38',
                    600: '#2a7e2a',
                    700: '#236323',
                    800: '#1e4f1e',
                    900: '#183f18',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            }
        }
    }
}

       // Mobile menu toggle
       document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
