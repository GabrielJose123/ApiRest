
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        greenly: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            300: '#86efac',
                            400: '#4ade80',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            900: '#14532d',
                        }
                    }
                }
            }
        }
    
     
     // Simple script for smooth scrolling
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
     
     // Mobile menu toggle functionality would go here
     // This is just a placeholder for the real implementation
     const mobileMenuButton = document.querySelector('.md\\:hidden');
     mobileMenuButton.addEventListener('click', function() {
         alert('Menu mobile seria aberto aqui na implementação real');
     });

