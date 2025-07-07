// Carousel functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.carousel-indicator');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 25}%)`;
            
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            
            currentSlide = index;
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Auto rotate carousel every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Add click events to indicators
        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => showSlide(i));
        });
        
        // Countdown timer
        function updateCountdown() {
            const countdown = document.getElementById('countdown');
            let time = countdown.textContent.split(':');
            let hours = parseInt(time[0]);
            let minutes = parseInt(time[1]);
            let seconds = parseInt(time[2]);
            
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            
            if (hours < 0) {
                hours = 5;
                minutes = 59;
                seconds = 59;
            }
            
            countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        setInterval(updateCountdown, 1000);
        
        // Mobile sidebar toggle functionality
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.createElement('div');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.position = 'fixed';
        menuToggle.style.bottom = '20px';
        menuToggle.style.right = '20px';
        menuToggle.style.backgroundColor = 'var(--primary-blue)';
        menuToggle.style.color = 'white';
        menuToggle.style.width = '50px';
        menuToggle.style.height = '50px';
        menuToggle.style.borderRadius = '50%';
        menuToggle.style.display = 'flex';
        menuToggle.style.justifyContent = 'center';
        menuToggle.style.alignItems = 'center';
        menuToggle.style.fontSize = '20px';
        menuToggle.style.zIndex = '99';
        menuToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        menuToggle.style.cursor = 'pointer';
        
        menuToggle.addEventListener('click', () => {
            sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
        });
        
        if (window.innerWidth <= 768) {
            document.body.appendChild(menuToggle);
            sidebar.style.display = 'none';
        }
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar.style.display = 'block';
                if (document.body.contains(menuToggle)) {
                    document.body.removeChild(menuToggle);
                }
            } else {
                if (!document.body.contains(menuToggle)) {
                    document.body.appendChild(menuToggle);
                }
                sidebar.style.display = 'none';
            }
        });